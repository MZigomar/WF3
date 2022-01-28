<?php

class Database
{
	private $db;

	public function __construct($base, $key)
	{
		// CONNECTION A LA BASE DE DONNEES 
		$this->db = new PDO($base, $key);
	}

	public function __destruct()
	{
		$this->db = null;
	}

	public function getDb()
	{
		return $this->db;
	}
}
