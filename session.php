<?php
	session_start();
	if(isset($_POST['tancarsessio'])){
			//session_unset();
			session_destroy();
			header("Refresh:0"); //Actualitzar la pàgina per fer efecte desaparició de sessió guardats
	}
?>