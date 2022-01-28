<?php
require 'Database.php';

class Adverts extends Database
{

    public $title;
    public $description;
    public $postal_code;
    public $city;
    public $type;
    public $price;
    public $reservation_message;

    /**
     * Ajoute une annonce
     */
    public function addAdvert()
    {
        // création de la requete
        $query = 'INSERT INTO `advert`( `title`, `description`, `postal_code`, `city`, `type`, `price`, `reservation_message`) VALUES 
        VALUES (:title, :desc, :postal, :city, :type, :price, :message)';


        // on écrit la requete dans la console MySQL (sans l'executer)
        $queryExecute = $this->getDb()->prepare($query);

        // on remplace les correspondance de la requete avec la valeur voulu
        $queryExecute->bindValue(':title', $this->title, PDO::PARAM_STR);
        $queryExecute->bindValue(':desc', $this->description, PDO::PARAM_STR);
        $queryExecute->bindValue(':postal', $this->postal_code, PDO::PARAM_STR);
        $queryExecute->bindValue(':city', $this->city, PDO::PARAM_STR);
        $queryExecute->bindValue(':type', $this->type, PDO::PARAM_STR);
        $queryExecute->bindValue(':price', $this->price, PDO::PARAM_STR);
        $queryExecute->bindValue(':message', $this->reservation_message, PDO::PARAM_STR);

        // on execute la requete
        $res = $queryExecute->execute();

        return $res;
    }

    /**
     * Fonction pour récupèrer la liste de toutes les annonces
     */
    public function getAllAdverts()
    {

        // CODE POUR LE RECUPERATION DES ANNONCES

        // création de la requete
        $query = 'SELECT * FROM `advert` ORDER BY `id` DESC';
        // execution de la requete
        $res = $this->getDb()->query($query);

        // on récupère les données trouver par la requete
        $adverts = $res->fetchAll(PDO::FETCH_OBJ);

        return $adverts;
    }

    public function getAdvert($id)
    {

        // CODE POUR LE RECUPERATION DES ANNONCES

        // création de la requete
        $query = 'SELECT * FROM `advert` WHERE `id`=' . $id;
        // execution de la requete
        $res = $this->getDb()->query($query);

        // on récupère les données trouver par la requete
        $adverts = $res->fetchAll(PDO::FETCH_OBJ);

        return $adverts;
    }

}
