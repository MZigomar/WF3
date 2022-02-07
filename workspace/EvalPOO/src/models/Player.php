<?php
require_once('Database.php');

class Player extends Database
{

    public $email;
    public $nickname;

    public function addPlayer()
    {
        $query = 'INSERT INTO `player`(`email`, `nickname`) VALUES (:email, :nickname)';

        $queryExecute = $this->getDb()->prepare($query);

        $queryExecute->bindValue(':email', $this->email, PDO::PARAM_STR);
        $queryExecute->bindValue(':nickname', $this->nickname, PDO::PARAM_STR);

        $res = $queryExecute->execute();
        return $res;
    }


    public function getAllPlayers()
    {
        $query = 'SELECT * FROM `player`';
        $res = $this->getDb()->query($query);
        $players = $res->fetchAll(PDO::FETCH_OBJ);
        return $players;
    }

}
