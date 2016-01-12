<?php
//Classe generalBD amb quatre variables privats no podran modificar de manera de dinamica: host, usuari, password i nom de base de dades.
class GeneralBD {
	private $host = "localhost";
	private $user = "root";
	private $password = "";
	private $database = "theworldcycle";
	private $con;
	
	//Constructor
	function __construct(){
		$this->con = $this->connectBD();
	}
	
	//Funcions
	//Conectar a BD
	function connectBD(){
		$con = mysqli_connect($this->host,$this->user,$this->password, $this->database);
		return $con;
	}
	//Tancar a BD
	function tancarBD(){
		mysqli_close($this->con);	
	}
	
	//Executar query amb noms columnes
	function runQuery($query){
		$result = mysqli_query($this->con, $query);
		while($row=mysqli_fetch_assoc($result)) {
			$resultset[] = $row;
		}		
		if(!empty($resultset))
		return $resultset;
	}
	//Executar query normal
	function runQuery1($query){
		$result=mysqli_query($this->con, $query);
		while ($row=mysqli_fetch_row($result)){
				$array[]=$row;
		}
		return $array;
	}
	//Retorna quantitat del resultat de query
	function numRows($query){
		$result  = mysqli_query($this->con, $query);
		$rowcount = mysqli_num_rows($result);
		return $rowcount;	
	}
	
	function InUpDe($query){//per fer query com Insertar, Update i Delete.
		mysqli_query($this->con, $query);
	}
	
	function InReturnId($query){// per fer query insertar pero retorna amb ID despres de haver insertat aquest query (recordant ID es crea executant query numero acumulant que query no fiquem nosaltres ID)
		mysqli_query($this->con, $query);
		return mysqli_insert_id($this->con);
	}
}
?>