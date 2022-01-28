<?php
require '../models/Adverts.php';
require '../key.php';

$advert = new Adverts($base, $key);
$adverts = $advert->getAdvert((int) $_GET['id']);
