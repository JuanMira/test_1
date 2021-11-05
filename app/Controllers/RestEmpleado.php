<?php

namespace App\Controllers;

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");

use CodeIgniter\RESTful\ResourceController;
use Empleado_model;

class RestEmpleado extends ResourceController
{
    protected $modelName = 'App\Models\Empleado_model';
    protected $format = 'json';

    public function index()
    {
        $model = new Empleado_model();
        $data = $model->findAll();
        return $this->genericResponse($data, "", 200);
    }

    private function genericResponse($data, $msj, $code)
    {
        if ($code < 400) {
            return $this->respond(array(
                "data" => $data,
                "code" => $code
            ));
        } else {
            return $this->respond(array(
                "error" => $msj,
                "code" => $code
            ));
        }
    }

    public function create()
    {
        $empleado = new Empleado_model();

        $data = [
            'nombre' => $this->request->getVar('nombre'),
            'salario' => $this->request->getVar('salario'),
            'fecha_ingreso' => $this->request->getVar('fechaIngreso')
        ];

        $result = $empleado->insert($data);

        if ($result) {
            return $this->genericResponse(array("msg" => "empleado creado correctamente"), "", 201);
        } else {
            return $this->genericResponse("", "No se a podido crear ", 404);
        }
    }

    public function show($id = null)
    {
        $model = new Empleado_model();
        $data = $model->where('id', $id)->first();
        if ($data) {
            return $this->genericResponse($data, "", 202);
        } else {
            return $this->genericResponse("", "No existe empleado con ese id", 404);
        }
    }
}
