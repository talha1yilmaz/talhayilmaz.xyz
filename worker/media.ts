/** Private, chunked D1 storage avoids requiring an R2 billing activation. */
export function mediaStore(db:D1Database){return {
 async put(key:string,bytes:Uint8Array,options:{httpMetadata:{contentType:string}}){
  const size=512*1024;
  for(let at=0,part=0;at<bytes.length;at+=size,part++)await db.prepare('INSERT INTO media_chunks(file_id,part,bytes) VALUES(?,?,?)').bind(key,part,bytes.slice(at,at+size).buffer).run();
  await db.prepare('INSERT INTO media_objects(id,type,parts) VALUES(?,?,?)').bind(key,options.httpMetadata.contentType,Math.ceil(bytes.length/size)).run();
 },
 async get(key:string){
  const file=await db.prepare('SELECT type,parts FROM media_objects WHERE id=?').bind(key).first<{type:string;parts:number}>();if(!file)return null;
  let part=0;const stream=new ReadableStream<Uint8Array>({async pull(controller){if(part>=file.parts){controller.close();return}const row=await db.prepare('SELECT bytes FROM media_chunks WHERE file_id=? AND part=?').bind(key,part++).first<{bytes:number[]}>();if(!row){controller.error(new Error('Dosya parçası eksik.'));return}controller.enqueue(new Uint8Array(row.bytes))}});
  return {body:stream,httpMetadata:{contentType:file.type},arrayBuffer:()=>new Response(stream).arrayBuffer()};
 }
};}
