<?php
    function connect() {
        $pdo = new PDO('mysql:host=10.203.65.112;dbname=chess', 'root', '');
        return $pdo;
    }

    