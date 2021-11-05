<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Empleado extends Migration
{
    public function up()
    {
        //
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'auto_increment' => TRUE
            ],
            'fecha_ingreso' => [
                'type' => 'DATE',
            ],
            'nombre' => [
                'type' => 'VARCHAR',
                'constraint' => '50'
            ],
            'salario' => [
                'type' => 'INT',
            ]
        ]);

        $this->forge->addKey('id', TRUE);
        $this->forge->createTable('empleado');
    }

    public function down()
    {
        //
        $this->forge->dropTable('solicitud');
    }
}
