<?php

use CodeIgniter\Model;

class Empleado_model extends Model
{
    protected $table = 'empleado';
    protected $primaryKey = 'id';
    protected $allowedFields = ['fecha_ingreso', 'nombre', 'salario'];

    public function createEmpleado()
    {
    }
}
