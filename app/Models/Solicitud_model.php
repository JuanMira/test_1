<?php

use CodeIgniter\Model;

class Solicitud_model extends Model
{
   protected $table = 'solicitud';
   protected $primaryKey = 'id';
   protected $allowedFields = ['codigo', 'descripcion', 'resumen', 'empleado_id'];


   public function getAllByName()
   {
      $db = \Config\Database::connect();
      $builder = $db->table('solicitud');

      $builder->select("s.codigo,s.descripcion,s.resumen,e.nombre");
      $builder->from("solicitud s");
      $builder->join("empleado e", 's.empleado_id = e.id');

      return $builder->get()->getResultArray();
   }

   public function getOneRequest($id)
   {
      $db = \Config\Database::connect();
      $builder = $db->table('solicitud');

      $builder->select("s.id,s.codigo,s.descripcion,s.resumen,e.nombre");
      $builder->from("solicitud s");
      $builder->where("s.id", $id);
      $builder->join("empleado e", 's.empleado_id = e.id');


      return $builder->get()->getFirstRow();
   }
}
