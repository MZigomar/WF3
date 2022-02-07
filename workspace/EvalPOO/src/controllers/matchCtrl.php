<?php
require '../models/Contest.php';
require '../key.php';

$contest = new Contest($base, $key);
$contests = $contest->getContest((int) $_GET['id']);
