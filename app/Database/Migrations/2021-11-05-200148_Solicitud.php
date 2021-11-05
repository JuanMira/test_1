<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Solicitud extends Migration
{
    public function up()
    {
        //
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'unsigned' => TRUE,
                'auto_increment' => TRUE
            ],
            'codigo' => [
                'type' => 'VARCHAR',
                'constraint' => '50'
            ],
            'descripcion' => [
                'type' => 'VARCHAR',
                'constraint' => '50'
            ],
            'resumen' => [
                'type' => 'VARCHAR',
                'constraint' => '50'
            ],
            'empleado_id' => [
                'type' => 'INT',
            ]
        ]);

        $this->forge->addKey('id', TRUE);
        $this->forge->addForeignKey('empleado_id', 'empleado', 'id', 'CASCADE', 'CASCADE');
        $this->forge->createTable('solicitud');
    }

    public function down()
    {
        //

        $this->forge->dropTable('solicitud');
    }
}
