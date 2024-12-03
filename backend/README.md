# Financial.al - Backend

Es una plataforma dedicada para la agilizar la financiación de terrenos principalmente en Latinoamérica, enfocada tanto para quien busca adquirir un bien como para quienes busquen una oportunidad de inversión de capitales.

## Equipo de Desarrollo

- [@Thoraker](https://www.github.com/Thoraker)

- [@Juan](https://www.github.com/)

## Emblemas

### Licencias

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/License-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

### Librerías

[![Django](https://img.shields.io/badge/Django-5.1.3-darkgreen.svg)](https://www.djangoproject.com/)
[![Django REST Framework](https://img.shields.io/badge/Django%20REST%20Framework-v3.15.2-red.svg)](https://www.django-rest-framework.org/)
[![Simple JWT](https://img.shields.io/badge/Simple%20JWT-5.3.1-blue.svg)](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/index.html)
[![DRF Spectacular](https://img.shields.io/badge/DRF%20Spectacular-0.27.2-blue.svg)](https://github.com/tfranzel/drf-spectacular)

## Instalación

Se recomienda implementar un entorno virtual para correr el servidor de desarrollo

- Windows:

```bash
  python -m venv .venv
  .venv/Scripts/activate
```

- Linux:

```bash
  python3 -m venv .venv
  source /.venv/bin/activate
```

Posteriormente acceder a la carpeta backend para instalar las librerías necesarias, migrar los modelos a la base de datos y finalmente correr el servidor de desarrollo

- Windows:

```bash
  cd ./backend/
  pip install -r .\requirements.txt
  python manage.py migrate
  python manage.py runserver
```

- Linux:

```bash
  cd ./backend/
  pip install -r .\requirements.txt
  python3 manage.py migrate
  python3 manage.py runserver
```

## Referencias de API

#### Documentación de la API (Swagger)

```http
  GET /api/v1/schema/swagger-ui/
```

Devuelve la documentación de la API en formato Swagger

#### Get item

```http
  GET /api/v1/schema/redoc/
```

Devuelve la documentación de la API en formato Redoc

## Variables de entorno

Para hacer el Deploy de este proyecto es necesario configurar algunas Variables de entorno como:

`DJANGO_SETTINGS_MODULE=backend.settings.production`

`DJANGO_SECRET_KEY`

`PGDATABASE`

`PGHOST`

`PGUSER`

`PGPASSWORD`

`PGPORT`
