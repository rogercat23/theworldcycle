<?php
	require_once("GeneralBD.php");
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
			$password = md5($_POST['passwordi']); //guardem password introduit però transformat per md5 per poder comparar que tenim BD
			$GeneralBD = new GeneralBD();
			$usuaris = $GeneralBD->runQuery("SELECT * FROM usuari u, contrassenya c WHERE u.id_contrassenya=c.id");
			$GeneralBD->tancarBD();
		
			for($i=0;$i<count($usuaris);$i++){
				echo $usuaris[$i]['correu']."\n"; //camp correu
				echo $usuaris[$i]['password']."\n"; //camp contrassenya
				if($usuaris[$i]['correu']==$correu && $usuaris[$i]['password']==$password){					
					$_SESSION['correu'] = $usuaris[$i]['correu'];
					$_SESSION['nom'] = $usuaris[$i]['nom'];
				}
			}
			if(!isset($_SESSION['correu'])){
				$_SESSION['error']="No has introduit b&eacute; correu o password!";		
			}
		}
	} else {
		$_SESSION['error']="Els variables correui o passwordi no existeixen per tant no s'han creat bé";
	}
	//echo $_SESSION['error'];
	header('Location: ' . $_SERVER['HTTP_REFERER']); //tornar la pàgina anterior on hem clicat per anar aquesta (BACK)
?>