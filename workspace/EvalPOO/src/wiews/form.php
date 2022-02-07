<?php

require '../controllers/homepageCtrl.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire</title>
    <link rel="stylesheet" href="../../assets/css/stylesheet.css">
</head>

<?php include_once "./layout/nav.php" ?>

<header>
    <h1>Formulaires</h1>
</header>

<body>
    <hr>
    <h2>Ajouter un jeu</h2>

    <form method="POST" class="add flex">
        <div>
            <label for="">Titre</label>
            <input name="title" type="text" />
        </div>
        <div>
            <label for="">Min joueur</label>
            <input name="min_players" type="text" />
        </div>
        <div>
            <label for="">Max joueur</label>
            <input name="max_players" type="text" />
        </div>

        <button>Ajouter</button>
    </form>

    <hr>

    <h2>Ajouter un joueur</h2>

    <form method="POST" class="add flex">
        <div>
            <label for="">Email</label>
            <input name="email" type="text" />
        </div>
        <div>
            <label for="">Pseudo</label>
            <input name="nickname" type="text" />
        </div>

        <button>Ajouter</button>
    </form>
    <hr>

    <h2>Ajouter un match</h2>
    <form method="POST" class="add flex">
        <div>
            <label for="">Jeu (id)</label>
            <input name="game_id" type="text" />
        </div>
        <div>
            <label for="">Date</label>
            <input name="start_date" type="text" />
        </div>

        <button>Ajouter</button>
    </form>

    <hr>

</body>

</html>