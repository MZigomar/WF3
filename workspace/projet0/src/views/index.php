<?php
require '../controllers/indexCtrl.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../../assets/css/stylsheet.css">
</head>

<body>

    <ul class="listUsers flex">
        <!-- On boucle sur la liste des utilisateurs (trouvé en base de données) -->
        <?php for ($i = 0; $i < sizeof($users); $i++) { ?>
            <!-- Pour chaque utilisateur, on affiche une div qui contient son nom et prénom -->
            <li class="user flex">
                <p class="surnom"><?= $users[$i]->surnom ?></p>
                <p><?= $users[$i]->prenom ?></p>
                <p><?= $users[$i]->nom ?></p>
                <p><?= $users[$i]->email ?></p>
                <p><?= $users[$i]->role ?></p>
            </li>
        <?php } ?>
    </ul>

</body>

</html>