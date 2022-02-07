<?php
require '../controllers/matchCtrl.php';
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
    <h1>Detail du contest n°<?= $_GET['id'] ?> </h1>
</header>

<body>
    <div class=tableContainer id="detail">
        <table>
            <tr class="head">
                <th>Id du jeu</th>
                <th>Date</th>
                <th>Id du gagnant</th>
            </tr>

            <?php for ($i = 0; $i < sizeof($contests); $i++) { ?>

                <tr>
                    <th><?= $contests[0]->game_id; ?></th>
                    <th><?= $contests[0]->start_date; ?></th>
                    <th><?= $contests[0]->winner_id; ?></th>
                </tr>

            <?php } ?>

        </table>

</body>

</html>