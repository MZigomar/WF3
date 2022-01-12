<?php
require './key.php';
$database = new PDO($dbUrl, $hostName);

if (!empty($_POST) && !empty($_POST['price'])) {
    // on récupère le prénom et le nom dans $_POST
    $price = $_POST['price'];
    $id_jgr_vehicle = (int) $_GET['id'];


    // création de la requete
    $query = 'INSERT INTO `jgr_assurance`(`price`, `id_jgr_vehicle`) VALUES (:price, ' . $id_jgr_vehicle . ')';


    // on écrit la requete dans la console MySQL (sans l'executer)
    $queryExecute = $database->prepare($query);

    // on remlace les correspondance de la requete avec la valeur voulu
    $queryExecute->bindValue(':price', $price, PDO::PARAM_STR);

    // on execute la requete
    $res = $queryExecute->execute();
}

if (!empty($_POST) && !empty($_POST['delete'])) {

    $id = (int) $_POST['delete'];

    $query = 'DELETE FROM `jgr_assurance` WHERE `id`=:id';
    $queryExecute = $database->prepare($query);

    $queryExecute->bindValue(':id', $id, PDO::PARAM_STR);
    $res = $queryExecute->execute();
}


$query = 'SELECT `v`.`brand`, `v`.`model`, `a`.`price`, `a`.`id`, `v`.`id_jgr_users`
            FROM `jgr_vehicle` AS `v` LEFT JOIN `jgr_assurance` AS `a` 
            ON `v`.`id` = `a`.`id_jgr_vehicle`
            WHERE `v`.`id`=' . (int) $_GET['id'];
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
    <a class="back" href="profile?id=<?= $data[0]->id_jgr_users  ?>">Back</a>
    <h2>
        <?= $data[0]->brand; ?>
        <?= $data[0]->model; ?>
    </h2>
    
    <form method="POST" class="add flex">
        <div>
            <label for="">Prix</label>
            <input name="price" type="text" />
        </div>
        <button>Ajouter</button>
    </form>

    <?php if ($data[0]->price != NULL) { ?>

        <ul class="flex">
            <?php for ($i = 0; $i < sizeof($data); $i++) { ?>
                <li class="flex">
                    <p>
                        <?= $data[$i]->price . ' euros'; ?>
                    </p>
                    <form class="delete flex" method="POST">
                        <button name="delete" value="<?= $data[$i]->id ?>">X</button>
                    </form>
                <?php } ?>
                </li>
        </ul>
    <?php } ?>

</body>

</html>