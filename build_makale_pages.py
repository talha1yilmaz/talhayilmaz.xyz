"""Compatibility entry point. All pages use the common renderer."""
from pathlib import Path
import subprocess,sys
if __name__=='__main__':
    subprocess.run([sys.executable,str(Path(__file__).with_name('build_full_site.py'))],check=True)
