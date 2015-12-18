<?php
	// General BD
	function connectBD(){
		$con = mysqli_connect("localhost","root","","theworldcycle");

		if (mysqli_connect_errno())
		  {
		  	//echo "Failed to connect to MySQL: " . mysqli_connect_error();
		  }	else {
		  	//echo "Connectat BD";
			return $con;
		  }
	}
	
	function tancarBD($con){
		mysqli_close($con);
	}
	
	function actalitzarProductesBD($con){
		$sql="SELECT * FROM producte";
		$qt=0;
		$producte = Array();
		if ($result=mysqli_query($con,$sql)){
		  // Fetch one and one row
		 	while ($row=mysqli_fetch_row($result)){
					//printf (" %s (%s)\n",$row[1],$row[2]);
					$producte[$qt]=$row;
					$qt++;//una posició mes array per guardar un altre producte per no susbsituir
			}
		}
		//echo count($producte); //saber quantitat dels productes
		return $producte;
	}
	
	function actalitzarUsuarisBD($con){
		$sql="SELECT * FROM usuari u, contrassenya c WHERE u.id_contrassenya=c.id";
		$qt=0;
		$usuari = Array();
		if ($result=mysqli_query($con,$sql)){
		  	while ($row=mysqli_fetch_row($result)){
					$usuari[$qt]=$row;
					$qt++;
			}
		}
		return $usuari;
	}
	
	function actualitzarPermisosBD($con){
		$sql="SELECT * FROM roles";
		$qt=0;
		$permisos = Array();
		if ($result=mysqli_query($con,$sql)){
		  	while ($row=mysqli_fetch_row($result)){
					$permisos[$qt]=$row;
					$qt++;
			}
		}
		return $permisos;
	}
	
	function actualitzarEstatsBD($con){
		$sql="SELECT * FROM estat";
		$qt=0;
		$estats = Array();
		if ($result=mysqli_query($con,$sql)){
		  	while ($row=mysqli_fetch_row($result)){
					$estats[$qt]=$row;
					$qt++;
			}
		}
		return $estats;
	}
	
	function actalitzarCiutats($con){
		$sql="SELECT * FROM ciutat";
		$qt=0;
		$ciutat = Array();
		if ($result=mysqli_query($con,$sql)){
		  	while ($row=mysqli_fetch_row($result)){
					$ciutat[$qt]=$row;
					$qt++;
			}
		}
		return $ciutat;
	}
	
	function actalitzarCiutatsNoms($con){ //Només pillem noms de ciutats i no ID per mostrar les ciutats quan omplim el camp de la ciutat de la hora de registrar
		$sql="SELECT * FROM ciutat";
		$qt=0;
		$ciutat = Array();
		if ($result=mysqli_query($con,$sql)){
		  	while ($row=mysqli_fetch_row($result)){
					$ciutat[$qt]=$row[1];
					$qt++;
			}
		}
		return $ciutat;
	}
	
	function actalitzarCorreusUsuaris($con){//Nomes pillem els correus dels usuaris per evitar que hagi un altre el mateix correu que només es pot tenir un igual no dos iguals.
		$sql="SELECT * FROM usuari";
		$qt=0;
		$correus = Array();
		if ($result=mysqli_query($con,$sql)){
		  	while ($row=mysqli_fetch_row($result)){
					$correus[$qt]=$row[1];
					$qt++;
			}
		}
		return $correus;
	}
	
	function actalitzarAdreca($con){
		$sql="SELECT * FROM adreca";
		$qt=0;
		$adreça = Array();
		if ($result=mysqli_query($con,$sql)){
		  	while ($row=mysqli_fetch_row($result)){
					$adreça[$qt]=$row;
					$qt++;
			}
		}
		return $adreça;
	}
	
	function actalitzarContrassenya($con){
		$sql="SELECT * FROM contrassenya";
		$qt=0;
		$cont = Array();
		if ($result=mysqli_query($con,$sql)){
		  	while ($row=mysqli_fetch_row($result)){
					$cont[$qt]=$row;
					$qt++;
			}
		}
		return $cont;
	}
	
	function buscarCiutat($con,$ciutat){
		$sql="SELECT * FROM ciutat WHERE nom LIKE '".$ciutat."'";
		$result=mysqli_query($con,$sql);
		$row=mysqli_fetch_row($result);
		$id_ciutat = $row[0];
		return $id_ciutat; //retorna IP de la ciutat trobat	
	}
	
	function buscarContrassenya($con,$cont){
		$sql="SELECT * FROM contrassenya WHERE password LIKE '".$cont."'";
		$result=mysqli_query($con,$sql);
		$row=mysqli_fetch_row($result);
		$id_cont = $row[0];
		return $id_cont;
	}
	
	function buscarAdreca($con,$carrer,$numero,$pis,$porta,$postal,$id_ciutat){
		$sql="SELECT * FROM adreca WHERE carrer LIKE '".$carrer."' AND numero LIKE ".$numero." AND pis LIKE ".$pis." AND porta LIKE ".$porta." AND postal LIKE ".$postal." AND id_ciutat LIKE ".$id_ciutat."";
		$result=mysqli_query($con,$sql);
		$row=mysqli_fetch_row($result);
		$id_adreca = $row[0];
		return $id_adreca;
	}
?>