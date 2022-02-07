<?php

require '../controllers/homepageCtrl.php';

$current = date('Y-m-d');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acceuil</title>
    <link rel="stylesheet" href="../../assets/css/stylesheet.css">
</head>

<?php include_once "./layout/nav.php" ?>

<header>
    <h1>Acceuil</h1>
</header>

<body>

    <div class=tableContainer id="player">
        <table>
            <tr class="head">
                <th>Email</th>
                <th>Pseudo</th>
            </tr>

            <?php for ($i = 0; $i < sizeof($players); $i++) { ?>

                <tr>
                    <th><?= $players[$i]->email ?></th>
                    <th><?= $players[$i]->nickname ?></th>
                </tr>

            <?php } ?>

        </table>
    </div>

    <div class=tableContainer id="game">
        <table>
            <tr class="head">
                <th>Nom</th>
                <th>Joueur min</th>
                <th>Joueur max</th>
            </tr>

            <?php for ($i = 0; $i < sizeof($games); $i++) { ?>

                <tr>
                    <th><?= $games[$i]->title ?></th>
                    <th><?= $games[$i]->min_players ?></th>
                    <th><?= $games[$i]->max_players ?></th>
                </tr>

            <?php } ?>

        </table>
    </div>

    <div class=tableContainer id="contest">
        <table>
            <tr class="head">
                <th>Jeu</th>
                <th>Participants</th>
                <th>Début</th>
                <th>Gagnant</th>
            </tr>

            <?php for ($i = 0; $i < sizeof($contests); $i++) {

                if ($contests[$i]->start_date > $current) {
            ?>
                    <tr class=none>
                    <?php
                } else {
                    ?>
                    <tr>
                    <?php
                }
                    ?>
                    <th><?= $contests[$i]->title ?></th>
                    <th><?= $contests[$i]->count ?></th>
                    <th><?= $contests[$i]->start_date ?></th>
                    <th><?= $contests[$i]->nickname ?></th>
                    <th><a href="match?id=<?= $contests[$i]->id  ?>">Détail</a></th>
                    </tr>

                <?php } ?>

        </table>
    </div>

</body>

</html>