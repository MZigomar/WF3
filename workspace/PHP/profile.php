<?php
require './key.php';
$database = new PDO($dbUrl, $hostName);

if (!empty($_POST) && !empty($_POST['brand']) && !empty($_POST['model'])) {
    // on récupère le prénom et le nom dans $_POST
    $brand = $_POST['brand'];
    $model = $_POST['model'];
    $id_jgr_users = (int) $_GET['id'];


    // création de la requete
    $query = 'INSERT INTO `jgr_vehicle`(`brand`, `model`, `id_jgr_users`) VALUES (:brand, :model,' . $id_jgr_users . ')';


    // on écrit la requete dans la console MySQL (sans l'executer)
    $queryExecute = $database->prepare($query);

    // on remlace les correspondance de la requete avec la valeur voulu
    $queryExecute->bindValue(':brand', $brand, PDO::PARAM_STR);
    $queryExecute->bindValue(':model', $model, PDO::PARAM_STR);

    // on execute la requete
    $res = $queryExecute->execute();
}


if (!empty($_POST) && !empty($_POST['delete'])) {

    $id = (int) $_POST['delete'];

    $query = 'DELETE FROM `jgr_vehicle` WHERE `id`=:id';
    $queryExecute = $database->prepare($query);

    $queryExecute->bindValue(':id', $id, PDO::PARAM_STR);
    $res = $queryExecute->execute();
}


$query = 'SELECT `u`.`firstname`, `u`.`lastname`, `v`.`brand`, `v`.`model`, `v`.`id`
            FROM `jgr_users` AS `u` LEFT JOIN `jgr_vehicle` AS `v`
            ON `v`.`id_jgr_users` = `u`.`id` 
            WHERE `u`.`id`=' . (int) $_GET['id'];
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
    <a class="back" href="index">Back</a>
    <h2>
        <?= $data[0]->firstname; ?>
        <?= $data[0]->lastname; ?>
    </h2>

    <form method="POST" class="add flex">
        <div>
            <label for="">Marque</label>
            <input name="brand" type="text" />
        </div>
        <div>
            <label for="">Modèle</label>
            <input name="model" type="text" />
        </div>

        <button>Ajouter</button>
    </form>

    <?php if ($data[0]->brand != NULL) { ?>

        <ul class="flex">
            <?php for ($i = 0; $i < sizeof($data); $i++) { ?>
                <li class="flex">
                    <p>
                        <?= $data[$i]->brand; ?>
                    </p>
                    <p>
                        <?= $data[$i]->model; ?>
                    </p>
                    <div class="flex">

                        <a href="car?id=<?= $data[$i]->id  ?>">Assurance(s)</a>
                        <form class="delete flex" method="POST">
                            <button name="delete" value="<?= $data[$i]->id ?>">X</button>
                        </form>
                    </div>
                <?php } ?>
                </li>
        </ul>
    <?php } ?>


</body>

</html>