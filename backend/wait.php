<?php
    include('main.php');
    $pdo = connect();

    $id = $_GET['id'];
    $token = $_GET['token'];

    $stmt = $pdo->prepare('SELECT `token1` FROM `games` WHERE `id`=:_id');
    $stmt->bindValue(':_id', $id);
    $stmt->execute();

    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if (count($res) == 1) {
        $res = $res[0];
        if ($res['token1'] == $token) {
            $player = 1;
        } elseif ($res['token2'] == $token) {
            $player = 2;
        } else {
            $result = array(
                "status" => FALSE,
                "message" => "invalid token"
            );
            echo json_encode($result);
            die();
        }
    } else {
        $result = array(
            "status" => FALSE,
            "message" => "invalid token"
        );

        echo json_encode($result);
        die();
    }

    while (TRUE) {
        $stmt = $pdo->prepare('SELECT MAX( id ) FROM game_'.$id);
        $stmt->execute();
        $res = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($res["MAX( id )"] == 1) {
            sleep(1);
        } elseif ($res["MAX( id )"] == 2) {
            $result = array(
                "status" => TRUE,
                "message" => "start",
                "side" => 1
            );

            echo json_encode($result);
            die();
        } else {
            $result = array(
                "status" => TRUE,
                "message" => "start"
            );

            echo json_encode($result);
            die();
        }
    }
    