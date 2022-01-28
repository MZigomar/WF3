<?php
require '../models/Adverts.php';
require '../key.php';

$advert = new Adverts($base, $key);

if (
    !empty($_POST['title']) && !empty($_POST['description']) && !empty($_POST['postal_code'])
    && !empty($_POST['city']) && !empty($_POST['type']) && !empty($_POST['price'])
) {

    $advert->title = $_POST['title'];
    $advert->description = $_POST['description'];
    $advert->postal_code = $_POST['postal_code'];
    $advert->city = $_POST['city'];
    $advert->type = $_POST['type'];
    $advert->price = $_POST['price'];

    $res = $advert->addAdvert();
}

$adverts = $advert->getAllAdverts();
