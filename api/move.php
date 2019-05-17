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

	$stmt = $pdo->prepare('SELECT * FROM game_'.$id.' ORDER BY id DESC LIMIT 1');
	$stmt->execute();
	$res = $stmt->fetch(PDO::FETCH_ASSOC);
	if ($res["player"] == $player) {
		$result = array(
            "status" => FALSE,
            "message" => "not your turn"
        );

        echo json_encode($result);
        die();
	}
	
	$stmt = $pdo->prepare('INSERT INTO game_'.$id.'(`player`, `type`, `data`) VALUES (:_player, :_type, :_data)');
	$stmt->bindValue(':_player', $player);
	$stmt->bindValue(':_type', "move");
	$stmt->bindValue(':_data', $_GET['data']);

	$stmt->execute();

	$result = array(
		"status" => TRUE,
		"message" => "wait"
	);

	echo json_encode($result);
	die();
