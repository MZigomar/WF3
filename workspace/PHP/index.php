<?php
require './key.php';
$database = new PDO($dbUrl, $hostName);

if (!empty($_POST) && !empty($_POST['firstname']) && !empty($_POST['lastname'])) {
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];

	$query = 'INSERT INTO `jgr_users`(`firstname`, `lastname`) VALUES (:firstname, :lastname)';

	$queryExecute = $database->prepare($query);

	$queryExecute->bindValue(':firstname', $firstname, PDO::PARAM_STR);
	$queryExecute->bindValue(':lastname', $lastname, PDO::PARAM_STR);

	$res = $queryExecute->execute();
}

$query = 'SELECT * FROM `jgr_users`';
$res = $database->query($query);
$data = $res->fetchAll(PDO::FETCH_OBJ);



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="./assets/stylesheet.css">
</head>

<body>

<form method="POST" class="add flex">
		<div>
			<label for="">Prénom</label>
			<input name="firstname" type="text" <?php $_POST = array(); ?> />
		</div>
		<div>
			<label for="">Nom</label>
			<input name="lastname" type="text" />
		</div>

		<button>Ajouter</button>
	</form>

    <ul class="flex">
        <?php for ($i = 0; $i < sizeof($data); $i++) { ?>
            <li class="flex">
                <p>
                    <?= $data[$i]->firstname; ?>
                </p>
                <p>
                    <?= $data[$i]->lastname; ?>
                </p>
                <a href="profile?id=<?= $data[$i]->id  ?>">Profil</a>
            </li>
        <?php } ?>
    </ul>

</body>

</html>