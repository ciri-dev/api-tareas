# API de Tareas - Laravel

API RESTful para gestionar tareas.

## Requisitos
- PHP 8.2+
- Composer
- MySQL

## Instalación
```bash
git clone https://github.com/TU_USUARIO/api-tareas.git
cd api-tareas
composer install
cp .env.example .env
php artisan key:generate
```
Configurar credenciales de BD en `.env`, crear la base `tareas_api` y ejecutar:
```bash
php artisan migrate --seed
php artisan serve
```

## Endpoints
| Método | Ruta | Descripción |
|---|---|---|
| GET | /api/tareas | Listar tareas |
| POST | /api/tareas | Crear tarea |
| GET | /api/tareas/{id} | Ver detalle |
| PUT | /api/tareas/{id} | Actualizar |
| DELETE | /api/tareas/{id} | Eliminar |


## Respuestas teóricas
[Ver Repuestas](RESPUESTAS.md)
