<?php
require '../models/Player.php';
require '../models/Game.php';
require '../models/Contest.php';
require '../key.php';

$player = new Player($base, $key);
$game = new Game($base, $key);
$contest = new Contest($base, $key);


$players = $player->getAllPlayers();
$games = $game->getAllGames();
$contests = $contest->getAllContests();




if (
    !empty($_POST['title']) && !empty($_POST['min_players']) && !empty($_POST['max_players'])
) {
    $game->title = $_POST['title'];
    $game->min_players = (int) $_POST['min_players'];
    $game->max_players = (int) $_POST['max_players'];
    $res = $game->addGame();
    
}

if (
    !empty($_POST['email']) && !empty($_POST['nickname'])
) {
    $player->email = $_POST['email'];
    $player->nickname = $_POST['nickname'];
    $res = $player->addPlayer();
    
}

if (
    !empty($_POST['game_id']) && !empty($_POST['start_date'])
) {
    $contest->game_id = $_POST['game_id'];
    $contest->start_date = $_POST['start_date'];
    $res = $contest->addContest();
    
}
