<?php
require_once('Database.php');

class Game extends Database
{

    public $title;
    public $min_players;
    public $max_players;

    public function addGame()
    {
        $query = 'INSERT INTO `game`(`title`, `min_players`, `max_players`) VALUES (:title, :min_players, :max_players)';

        $queryExecute = $this->getDb()->prepare($query);

        $queryExecute->bindValue(':title', $this->title, PDO::PARAM_STR);
        $queryExecute->bindValue(':min_players', $this->min_players, PDO::PARAM_STR);
        $queryExecute->bindValue(':max_players', $this->max_players, PDO::PARAM_STR);

        $res = $queryExecute->execute();
        return $res;
    }

    public function getAllGames()
    {
        $query = 'SELECT * FROM `game`';
        $res = $this->getDb()->query($query);
        $games = $res->fetchAll(PDO::FETCH_OBJ);
        return $games;
    }
}
