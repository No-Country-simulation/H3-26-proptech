# Financial.al

Es una plataforma dedicada para la agilizar la financiación de terrenos principalmente en Latinoamérica, enfocada tanto para quien busca adquirir un bien como para quienes busquen una oportunidad de inversión de capitales.

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

[![Django](https://img.shields.io/badge/Django-5.0.3-blue.svg)](https://www.djangoproject.com/)
[![Django REST Framework](https://img.shields.io/badge/Django%20REST%20Framework-v3.15.1-orange.svg)](https://www.django-rest-framework.org/)
[![Javascript](https://img.shields.io/badge/Node-20.11.0-blue.svg)](https://nodejs.org/en/)

## API Reference

#### Llama a todos los productos

```http
  GET /api/product
```

#### Llama a un producto según el id

```http
  GET /api/items/${id}
```

| Parámetro | Tipo     | Descripción                             |
| :-------- | :------- | :-------------------------------------- |
| `id`      | `string` | **Requerida**. Id del producto a llamar |

#### Llama todas las categorias

```http
  GET /api/category
```

#### Llama a una categoria según el id

```http
  GET /api/category/${id}
```

| Parámetro | Tipo     | Descripción                                |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `string` | **Requerida**. Id de la categoria a llamar |

## Authors

- Felix Pacheco
  [Linkedin](https://www.linkedin.com/in/felix-pacheco-lobos/)

[Github](https://github.com/Thoraker)

- Max Cereceda Carbajal

[Linkedin](https://www.linkedin.com/in/maxcereceda/)

[Github](https://github.com/cereceda1991)

- German Nicolas Gatica

[Linkedin](https://www.linkedin.com/in/gergati/)

[Github](https://github.com/gergati)

- Noé Hernández Cabrera
  [Linkedin](https://www.linkedin.com/in/noe-hdz-dev/)

[Github](https://github.com/Noehernandez24)
