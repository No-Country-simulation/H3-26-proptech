import os
from .common import *
from dotenv import load_dotenv

load_dotenv()


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ['DJANGO_SECRET_KEY']

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False


ALLOWED_HOSTS = ['*']

CORS_ALLOWED_ORIGINS = [
    'http://localhost:8080',
    'http://127.0.0.1',
    'http://0.0.0.0',
    'https://junction.proxy.rlwy.net',
]

CORS_ALLOW_CREDENTIALS = True

CSRF_TRUSTED_ORIGINS = [
    'http://localhost:8080',
    'http://127.0.0.1',
    'http://0.0.0.0',
    'https://junction.proxy.rlwy.net',
]

# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        # 'NAME': os.environ.get("PGDATABASE"),
        # 'HOST': os.environ.get('PGHOST'),
        # 'USER': os.environ.get('PGUSER'),
        # 'PASSWORD': os.environ.get('PGPASSWORD'),
        # 'PORT': os.environ.get('PGPORT')
        'NAME': 'railway',
        'USER': 'postgres',
        'PASSWORD': 'eTEtIesbKyiFqTmjPuzXnOcZBlXXJZvF',
        'HOST': 'junction.proxy.rlwy.net',
        'PORT': '44625',
    }
}
