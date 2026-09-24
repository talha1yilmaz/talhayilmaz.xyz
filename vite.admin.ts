import { defineConfig } from 'vite';
export default defineConfig({root:'admin',build:{outDir:'../dist-admin',emptyOutDir:true},server:{host:'127.0.0.1',port:5173,proxy:{'/api':'http://127.0.0.1:8787','/auth':'http://127.0.0.1:8787','/assets/uploads':'http://127.0.0.1:8787'}}});
