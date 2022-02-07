<?php
require_once('Database.php');

class Contest extends Database
{

    public $game_title;
    public $nb_player;
    public $date;
    public $winner;

    public function addContest()
    {
        $query = 'INSERT INTO `contest`(`game_id`, `start_date`) VALUES (:game_id, :start_date)';

        $queryExecute = $this->getDb()->prepare($query);

        $queryExecute->bindValue(':game_id', $this->game_id, PDO::PARAM_STR);
        $queryExecute->bindValue(':start_date', $this->start_date, PDO::PARAM_STR);

        $res = $queryExecute->execute();
        return $res;
    }

    public function getAllContests()
    {
        $query = 'SELECT `contest`.`id`, `title`, COUNT(`player_id`) AS `count`, `start_date`, `nickname`  FROM ((`contest` LEFT JOIN `player` ON `winner_id`=`player`.`id`) 
        LEFT JOIN `game` ON `game_id`=`game`.`id`) LEFT JOIN `player_contest` ON `contest`.`id`=`contest_id` GROUP BY `contest`.`id`';
        $res = $this->getDb()->query($query);
        $contests = $res->fetchAll(PDO::FETCH_OBJ);
        return $contests;
    }


    public function getContest($id)
    {

        $query = 'SELECT * FROM `contest` WHERE `id`=' . $id;
        $res = $this->getDb()->query($query);
        $contests = $res->fetchAll(PDO::FETCH_OBJ);
        return $contests;
    }

}
