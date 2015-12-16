<?php
	include 'BD.php';
	session_start();
	if(isset($_POST['correui']) && isset($_POST['passwordi'])){
		if($_POST['correui']=='' && $_POST['passwordi']==''){ //per evitar si estan buides per evitar buscar a BD
			$_SESSION['error']="No has introduit correu ni la contrassenya";
		} else if($_POST['correui']==''){
			$_SESSION['error']="El camp del correu esta buit";
		} else if($_POST['passwordi']==''){
			$_SESSION['error']="el camp del password esta buit";
		} else {
			$correu = $_POST['correui'];
			$password = md5($_POST['passwordi']);
			$con=connectBD();
			$usuaris=actalitzarUsuarisBD($con);
			tancarBD($con);
			for($i=0;$i<count($usuaris);$i++){
				echo $usuaris[$i][1]."\n"; //camp correu
				echo $usuaris[$i][13]."\n"; //camp contrassenya
				if($usuaris[$i][1]==$correu && $usuaris[$i][13]==$password){					
					$_SESSION['correu'] = $usuaris[$i][1];
					$_SESSION['nom'] = $usuaris[$i][2];
				}
			}
		}
	} else {
		$_SESSION['error']=" ERROR: els variables correui o passwordi no existeixen per tant no s'han creat bé";
	}
	//echo $_SESSION['error'];
	header('Location: ' . $_SERVER['HTTP_REFERER']); //tornar la pàgina anterior on hem clicat per anar aquesta (BACK)
?>