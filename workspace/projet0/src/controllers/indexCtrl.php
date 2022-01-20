<?php 
require '../models/Users.php';
require '../key.php';

$user = new Users($base, $key);

if (!empty($_POST['firstname']) && !empty($_POST['lastname'])) {
	$user->firstname = $_POST['firstname'];
	$user->lastname = $_POST['lastname'];

	$res = $user->addUser();
}

$users = $user->getAllUsers();
