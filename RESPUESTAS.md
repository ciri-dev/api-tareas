## ¿Cuál es la diferencia entre `hasMany` y `belongsToMany` en Eloquent?
hasMany es una relación uno a muchos. belongsToMany es muchos a muchos y requiere una tabla.

## ¿Qué es una migration y cómo se utiliza?
Es un archivo PHP que describe cambios en el esquema de la base de datos, con control de versiones. Se crea con make:migration, se aplica con php artisan migrate y se revierte con migrate:rollback.

## ¿Cómo funciona el Service Container en Laravel?
Es el contenedor de inyección de dependencias de Laravel. Resuelve automáticamente las dependencias que pide en constructores o métodos, y permite registrar enlaces en los Service Providers.

## ¿Qué es un middleware y para qué se usa?
Capa que intercepta la petición HTTP antes de llegar al controlador. Sirve para autenticación y limitar peticiones, logging, etc.

## ¿Qué ventajas ofrece usar Laravel Sanctum o Passport?
Manejo de tokens, permisos, autenticacion.
