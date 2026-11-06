/* VScode ext:
PHP Intelephense (@builtin php - PHP Language Features)
Laravel Extension Pack -13
Error Lens
Path Intellisense
Material Icon
Postman

commands:
composer create-project laravel/laravel api-tareas
config bd
php artisan install:api
php artisan make:model Tarea -mfc --api
php artisan make:request StoreTareaRequest
php artisan make:request UpdateTareaRequest
php artisan make:resource TareaResource
mig mod fac seed
php artisan migrate --seed
req res
controller - crud
routes
php artisan route:list --path=api
php artisan make:test TareaApiTest
php artisan test
php artisan make:controller AuthController

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TareaController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('tareas', TareaController::class)
        ->parameters(['tareas' => 'tarea']);
});
*/
