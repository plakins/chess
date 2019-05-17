<?php
    include('main.php');
    $pdo = connect();

    $id = $_GET['id'];
    $token = $_GET['token'];

    $stmt = $pdo->prepare('SELECT `token1`, `token2` FROM `games` WHERE `id`=:_id');
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
                "message" => "Invalid token"
            );
            echo json_encode($result);
            die();
        }

        if ($player == 1) {
            $stmt = $pdo->prepare('INSERT INTO game_'.$id.'(`player`, `type`) VALUES (1, "commit")');
            $stmt->execute();

            $result = array(
                "status" => TRUE,
                "message" => "wait"
            );

            echo json_encode($result);
        } elseif ($player == 2) {
            $stmt = $pdo->prepare('SELECT MAX( id ) FROM game_'.$id);
            $stmt->execute();
            $res = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($res["MAX( id )"] == 1) {
                $stmt = $pdo->prepare('INSERT INTO game_'.$id.'(`player`, `type`) VALUES (2, "commit")');
                $stmt->execute();

                $result = array(
                    "status" => TRUE,
                    "message" => "start",
                    "side" => 2
                );
                echo json_encode($result);
            } else {
                $result = array(
                    "status" => FALSE,
                    "message" => "GAME IS ALREADY BEGIN"
                );
                echo json_encode($result);
            }
        }

    } else {
        $result = array(
            "status" => FALSE,
            "message" => "Invalid gameId"
        );

        echo json_encode($result);
        die();
    }