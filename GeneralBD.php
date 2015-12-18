<?php
//Classe generalBD amb quatre variables: host, usuari, password i nom de base de dades.
class GeneralBD {
	private $host = "localhost";
	private $user = "root";
	private $password = "";
	private $database = "theworldcycle";
	private $con;
	
	//Constructor
	function __construct() {
		$this->con = $this->connectBD();
	}
	
	//Funcions
	//Conectar a BD
	function connectBD() {
		$con = mysqli_connect($this->host,$this->user,$this->password, $this->database);
		return $con;
	}
	//Tancar a BD
	function tancarBD(){
		mysqli_close($this->con);	
	}
	
	//Executar query amb noms columnes
	function runQuery($query) {
		$result = mysqli_query($this->con, $query);
		while($row=mysqli_fetch_assoc($result)) {
			$resultset[] = $row;
		}		
		if(!empty($resultset))
		return $resultset;
	}
	//Executar query normal
	function runQuery1($query) {
		$result=mysqli_query($this->con, $query);
		while ($row=mysqli_fetch_row($result)){
				$array[]=$row;
		}
		return $array;
	}
	//Retorna quantitat del resultat de query
	function numRows($query) {
		$result  = mysqli_query($this->con, $query);
		$rowcount = mysqli_num_rows($result);
		return $rowcount;	
	}
}
?>