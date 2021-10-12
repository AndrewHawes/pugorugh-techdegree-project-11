import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent


# If .env file exists, Django is running locally and will load development settings.
# Otherwise, load production settings.
env_file_path = BASE_DIR / ".env"

if env_file_path.exists() or (len(sys.argv) > 1 and sys.argv[1]) == "runserver":
    from backend.settings.local import *
else:
    from backend.settings.production import *


