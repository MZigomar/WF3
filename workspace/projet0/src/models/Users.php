<?php
require 'Database.php';

class Users extends Database
{
    private $email;
    private $firstname;
    private $lastname;
    private $nickname;
    private $role;


    /**
     * Ajoute un utilisateur
     */
    public function addUser()
    {
        // création de la requete
        $query = 'INSERT INTO `users`(`email`, `prenom`, `nom`, `surnom`, `role`) 
        VALUES (:email, :prenom, :nom, :surnom, 3)';


        // on écrit la requete dans la console MySQL (sans l'executer)
        $queryExecute = $this->getDb()->prepare($query);

        // on remplace les correspondance de la requete avec la valeur voulu
        $queryExecute->bindValue(':email', $this->email, PDO::PARAM_STR);
        $queryExecute->bindValue(':prenom', $this->firstname, PDO::PARAM_STR);
        $queryExecute->bindValue(':nom', $this->lastname, PDO::PARAM_STR);
        $queryExecute->bindValue(':surnom', $this->nickname, PDO::PARAM_STR);

        // on execute la requete
        $res = $queryExecute->execute();

        return $res;
    }

    /**
     * Fonction pour récupèrer la liste de tous les utilisateurs
     */
    public function getAllUsers()
    {
        // CODE POUR LE RECUPERATION DES UTILISATEURS

        // création de la requete
        $query = 'SELECT `email`,`nom`,`prenom`,`surnom`,`role` FROM `users` INNER JOIN `role` ON `id_role`=`role`.`id`';
        // execution de la requete
        $res = $this->getDb()->query($query);

        // on récupère les données trouver par la requete
        $users = $res->fetchAll(PDO::FETCH_OBJ);

        return $users;
    }
}
