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
            <li><a class="flex" href="./list.php">Acceuil</a></li>
            <li><a class="flex active" href="./add.php">Ajouter</a></li>
        </ul>
    </nav>
    <header>
        <h1>Ajouter une annonce</h1>
    </header>

    <form method="POST" class="add flex">
        <div>
            <label for="">Titre</label>
            <input name="title" type="text" />
        </div>
        <div>
            <label for="">Code Postal</label>
            <input name="postal_code" type="text" />
        </div>
        <div>
            <label for="">Ville</label>
            <input name="city" type="text" />
        </div>
        <div>
            <label for="">Type</label>
            <input name="type" type="text" />
        </div>
        <div>
            <label for="">Prix</label>
            <input name="price" type="text" />
        </div>
        <div>
            <label for="">Description</label>
            <input name="description" type="text" />
        </div>

        <button>Ajouter</button>
    </form>


</body>

</html>