<?php

require '../controllers/detailCtrl.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php Intermediaire</title>
    <link rel="stylesheet" href="../../assets/css/stylesheet.css">
</head>

<body>

    <nav>
        <ul class="flex">
            <li><a class="flex" href="./list.php">Acceuil</a></li>
            <li><a class="flex" href="./add.php">Ajouter</a></li>
        </ul>
    </nav>

    <header>
        <h1>
            <?= $adverts[0]->title . ' - '; ?>
            <?= $adverts[0]->city; ?>
        </h1>
    </header>
 

    <ul class="listAdverts flex">
        <li class="advert">
            <div class="flex title">
                <p><?= $adverts[0]->city; ?></p>
                <p><?= $adverts[0]->postal_code; ?></p>
                <p><?= $adverts[0]->type; ?></p>
                <p><?= $adverts[0]->price; ?> &euro;</p>
            </div>
            <div>
                <p><?= $adverts[0]->description; ?></p>
                <p><?= "Message de réservation : " . $adverts[0]->reservation_message; ?></p>
            </div>
        </li>
    </ul>


</body>

</html>