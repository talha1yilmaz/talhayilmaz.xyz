"""Portable build: shared web renderer, PDFs, then link validation."""
from pathlib import Path
import subprocess,sys,os
ROOT=Path(__file__).resolve().parent
if __name__=='__main__':
    subprocess.run(['npm.cmd' if os.name=='nt' else 'npm','run','build:html'],cwd=ROOT,check=True)
    subprocess.run([sys.executable,str(ROOT/'generate_pdfs.py')],cwd=ROOT,check=True)
    subprocess.run([sys.executable,str(ROOT/'scripts/check_site.py')],cwd=ROOT,check=True)
