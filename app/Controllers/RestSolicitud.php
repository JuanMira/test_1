<?php

namespace App\Controllers;

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");

use CodeIgniter\RESTful\ResourceController;
use Solicitud_model;

class RestSolicitud extends ResourceController
{
    protected $modelName = 'App\Models\Solicitud_model';
    protected $format = 'json';

    public function index()
    {
        $model = new Solicitud_model();
        $data = $model->getAllByName();
        return $this->genericResponse($data, "", 202);
    }


    public function create()
    {
        $model = new Solicitud_model();

        $data = [
            'codigo' => $this->request->getVar('codigo'),
            'descripcion' => $this->request->getVar('descripcion'),
            'resumen' => $this->request->getVar('descripcion'),
            'empleado_id' => $this->request->getVar('empleado_id')
        ];

        $result = $model->insert($data);

        if ($result) {
            return $this->genericResponse(array("msg" => "solicitud creada correctamente"), "", 201);
        } else {
            return $this->genericResponse("", "No se a podido crear ", 404);
        }
    }

    public function show($id = null)
    {
        $model = new Solicitud_model();
        $data = $model->getOneRequest($id);
        if ($data) {
            return $this->genericResponse($data, "", 202);
        } else {
            return $this->genericResponse("", "No existe solicitud con ese id", 404);
        }
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
}
