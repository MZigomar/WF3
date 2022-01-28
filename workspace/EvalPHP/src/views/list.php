<?php

require '../controllers/listCtrl.php';

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
            <li><a class="flex active" href="./list.php">Acceuil</a></li>
            <li><a class="flex" href="./add.php">Ajouter</a></li>
        </ul>
    </nav>

    <header>
        <h1>Acceuil</h1>
    </header>

    <ul class="listAdverts flex">
        <li class="listHead">
            <div class="flex title">
                <p>TITRE</p>
                <p>CODE POSTAL</p>
                <p>VILLE</p>
                <p>TYPE</p>
                <p>PRIX</p>
            </div>
        </li>
        <?php for ($i = 0; ($i < sizeof($adverts) && $i < 15); $i++) { ?>
            <li class="advert">
                <div class="flex title">
                    <p><?= strtoupper('#' . ($i + 1) . ' : ' . $adverts[$i]->title) ?></p>
                    <p><?= $adverts[$i]->postal_code ?></p>
                    <p><?= $adverts[$i]->city ?></p>
                    <p><?= $adverts[$i]->type ?></p>
                    <p><?= $adverts[$i]->price ?> &euro;</p>
                </div>
                <div>
                   <a class="detail" href="detail?id=<?= $adverts[$i]->id  ?>">Consulter l'annonce</a>
                </div>
            </li>
        <?php } ?>
        <li class="listFoot">
        </li>
    </ul>


</body>

</html>