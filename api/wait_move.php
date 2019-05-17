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

	$k = 0;
	while ($k < 300) {
		$stmt = $pdo->prepare('SELECT * FROM game_'.$id.' ORDER BY id DESC LIMIT 1');
		$stmt->execute();
		$res = $stmt->fetch(PDO::FETCH_ASSOC);
		if ($res["player"] == $player) {
			sleep(1);
			$k += 1;
		} else {
			$result = array(
				"status" => TRUE,
				"data" => $res["data"]
			);
	
			echo json_encode($result);
			die();
		}
	}

	$result = array(
		"status" => FALSE,
		"message" => "timeout"
	);

	echo json_encode($result);
	die();