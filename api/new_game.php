<?php
    include('main.php');
    $pdo = connect();

    $token1 = random_bytes(16);
    $token1 = bin2hex($token1);

    $token2 = random_bytes(16);
    $token2 = bin2hex($token2);

    $stmt = $pdo->prepare('INSERT INTO `games`(`token1`, `token2`) VALUES (:_token1, :_token2)');
    $stmt->bindValue(':_token1', $token1);
    $stmt->bindValue(':_token2', $token2);
    $stmt->execute();

    $id = $pdo->lastInsertId();

    $row = 'CREATE TABLE chess.game_'.$id.'( `id` INT NOT NULL AUTO_INCREMENT , `player` INT NOT NULL , `type` VARCHAR(200) NOT NULL , `data` VARCHAR(200) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB';
    $stmt = $pdo->prepare($row);
    $stmt->execute();

    $res = array(
        "gameId" => $id,
        "token1" => $token1,
        "token2" => $token2
    );

    echo json_encode($res);