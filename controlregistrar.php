<html>
    <head>
        <title> The World Cycle Web </title>
        <?php
			include 'llibreries.php';
		?>
    </head>
    <body>
        <div class="cos">
            <div id="qd_titol">
                <img src="img\logo\theworldcycle.png"/>
                <div id="formulari-usuari"> 
                	<?php
						include 'session.php';
						if(isset($_SESSION['correu'])){
							echo "Benvingut ". $_SESSION['nom']."\n";
                    		echo "<button type='button' class='btn btn-danger btn-sm' onClick='".borrarsession()."'>Tancar sessi&oacute;</button>";
						} else {
					?>
                	<div class="row">
                    	<form action="iniciarusuari.php" method="post">
                         	<div class="col-xs-4">
                        		<input type="text" class="form-control input-sm" id="correui" name="correui" placeholder="Correu">
                         	</div>
                         	<div class="col-xs-4">
                     			<input type="password" class="form-control input-sm" id="passwordi" name="passwordi" placeholder="Password">   		 
                        	</div>
                            <div class="col-xs-4">
                             <button type="submit" class="button btn-success btn-sm"> Entrar </button>
                    		 <a href="registrar.php"><button type="button" class="button btn-primary btn-sm"> Registrar </button></a>
                        	</div>
                       	  </form>
                       </div>
                       <?php
						}
					   ?>
                </div>
                <ul id="botons_menu_hor">
                    <li><a href="index.php">Benvingut The World Cycle!</a></li>
                    <li><a href="productes.php">Productes</a></li>
                    <?php
						if(isset($_SESSION['correu'])){
                    		echo "<li><a href='usuaris.php'>Usuaris</a></li>";
						}
					?>
                    <li><a href="contacte.php">Contacte</a></li>
                </ul>
            </div>
            <div id="qd_cos">
            	<?php 
					require_once("GeneralBD.php");
					
					$correu = $_POST["correu"]; 
					$pass = md5($_POST["password"]); 
					$nom = $_POST["nom"]; 
					$cognom1 = $_POST["cognom1"]; 
					$cognom2 = $_POST["cognom2"]; 
					$telefon = $_POST['telefon']; 
					$carrer = $_POST["carrer"]; 
					$data = $_POST["data_naix"];//pillem
					$data_naix = str_replace('/','-',$data);//tranformem / per -
					$data_naix = date('Y-m-d', strtotime($data_naix));//canviem format de data per poder guardar a BD
					//echo $data_naix;
					$num = $_POST["numero"]; 
					$pis = $_POST['pis']; 
					$por = $_POST['porta']; 
					$pos = $_POST['postal'];
					$ciutat = $_POST['ciutat'];  
					$data_inici = date("Y-n-j");//Pilla data actual per guardar data_inici
					//echo "correu: ". $correu ." password: ". $pass ." nom: ". $nom ." cognom1: ". $cognom1 ." cognom2: ". $cognom2 ." telefon: ". $telefon ." carrer: ". $carrer ." data de naixament: ". $data_naix ." data d'inici ". $data_inici ." numero: ". $num  ." pis: ". $pis ." porta: ". $por  ." postal: ". $pos ." ciutat: ". $ciutat;
					//echo $data_inici;
					
					$GeneralBD = new GeneralBD();
					
					$ciutats = $GeneralBD->runQuery1("SELECT * FROM ciutat");
					for($i=0;$i<count($ciutats);$i++){
						if($ciutats[$i][1]==$ciutat){
							echo "Ip de la ciutat es:". $ciutats[$i][0];
							$id_ciutat = $ciutats[$i][0];
						}
					}
					
					if(!isset($id_ciutat)){//Després de haver buscat en BD, tenint compte si ha creat ip_ciutat significa ha trobat i si es contrari vol dir no ha trobat i haurem de crear.
						echo "No tenim aquesta ciutat en BD"; 
						$id_ciutat = $GeneralBD->InReturnId("INSERT INTO `ciutat` (`nom`) VALUES ('".$ciutat."');");
						echo "Ip de la ciutat es ". $id_ciutat;
					}
					/*
					$ciutats = $GeneralBD->runQuery1("SELECT nom FROM ciutat");
					$correus = $GeneralBD->runQuery1("SELECT correu FROM usuari");
					$GeneralBD->tancarBD();
					
					include 'BD.php';
					//Guardar tots els camps del formulari dels camps introduits per poder guardar a BD
					$correu = $_POST["correu"]; 
					$pass = md5($_POST["password"]); 
					$nom = $_POST["nom"]; 
					$cognom1 = $_POST["cognom1"]; 
					$cognom2 = $_POST["cognom2"]; 
					$telefon = $_POST['telefon']; 
					$carrer = $_POST["carrer"]; 
					$data = $_POST["data_naix"];//pillem
					$data_naix = str_replace('/','-',$data);//tranformem / per -
					$data_naix = date('Y-m-d', strtotime($data_naix));//canviem format de data per poder guardar a BD
					//echo $data_naix;
					$num = $_POST["numero"]; 
					$pis = $_POST['pis']; 
					$por = $_POST['porta']; 
					$pos = $_POST['postal'];
					$ciutat = $_POST['ciutat'];  
					$data_inici = date("Y-n-j");//Pilla data actual per guardar data_inici
					//echo "correu: ". $correu ." password: ". $pass ." nom: ". $nom ." cognom1: ". $cognom1 ." cognom2: ". $cognom2 ." telefon: ". $telefon ." carrer: ". $carrer ." data de naixament: ". $data_naix ." data d'inici ". $data_inici ." numero: ". $num  ." pis: ". $pis ." porta: ". $por  ." postal: ". $pos ." ciutat: ". $ciutat;
					//echo $data_inici;
					
					$con=connectBD();//Connectar BD
					
					//Comprovar si tenim BD sino creem i pillem IP (Ciutats)
					$ciutats = actalitzarCiutats($con);
					for($i=0;$i<count($ciutats);$i++){
						if($ciutats[$i][1]==$ciutat){
							//echo "Ip de la ciutat es:". $ciutats[$i][0];
							$id_ciutat = $ciutats[$i][0];
						}
					}
					
					if(!isset($id_ciutat)){//Després de haver buscat en BD, tenint compte si ha creat ip_ciutat significa ha trobat i si es contrari vol dir no ha trobat i haurem de crear.
						//echo "No tenim aquesta ciutat en BD"; 
						mysqli_query($con,"INSERT INTO `ciutat` (`nom`) VALUES ('".$ciutat."');");
						$id_ciutat = buscarCiutat($con,$ciutat);
						//echo "Ip de la ciutat es ". $id_ciutat;
					}
					
					//Comprovar si tenim BD sino creem i pillem IP (Contrassenya)
					$conts = actalitzarContrassenya($con);
					for($i=0;$i<count($conts);$i++){
						if($conts[$i][1]==$pass){
							//echo "Ip de la contrassenya es:". $conts[$i][0];
							$id_pass = $conts[$i][0];
						}
					}
					
					if(!isset($id_pass)){
						//echo "No tenim aquesta contrassenya en BD"; 
						mysqli_query($con,"INSERT INTO `contrassenya` (`password`) VALUES ('".$pass."');");
						$id_pass = buscarContrassenya($con,$pass);
						//echo "Ip de la contrassenya es ". $id_pass;
					}
					
					//Després de haver afegit o pillar IP de la contrassenya i ciutat, s'ha de fer igual amb adreça
					//Recordatori: Controlar si ha introduit o no porta i pis per poder comparar si no fos també però sense comparar aquests dos.
					$adreces = actalitzarAdreca($con);
					for($i=0;$i<count($adreces);$i++){
						if($adreces[$i][1]==$carrer && $adreces[$i][2]==$num && $adreces[$i][3]==$pis && $adreces[$i][4]==$por && $adreces[$i][5]==$pos && $adreces[$i][6]==$id_ciutat){//comparar per si tenen les mateixes dades
							//echo "Carrer : ". $adreces[$i][1] ." numero: ". $adreces[$i][2] ." postal: ". $adreces[$i][5];
							$id_adreca = $adreces[$i][0];
						}
					}

					if(!isset($id_adreca)){
						//echo "No tenim aquesta andre&ccedil;a en BD";
						if($pis =="" && $por==""){
							mysqli_query($con,"INSERT INTO `adreca` (`carrer`, `numero`, `postal`, `id_ciutat`) VALUES ('". $carrer ."', '". $num ."', '". $pos ."', '". $id_ciutat ."');");
						} else {
							mysqli_query($con,"INSERT INTO `adreca` (`carrer`, `numero`, `pis`, `porta`, `postal`, `id_ciutat`) VALUES ('". $carrer ."', '". $num ."', '". $pis ."', '". $por ."', '". $pos ."', '". $id_ciutat ."');");		
						}
						$id_adreca = buscarAdreca($con,$carrer,$num,$pis,$por,$pos,$id_ciutat);
						//echo "Ip de la andre&ccedil;a es ". $id_adreca; 
					}
					
					mysqli_query($con,"INSERT INTO `usuari` (`correu`, `nom`, `cognom1`, `cognom2`, `telefon`, `data_naix`, `data_inici`, `id_roles`, `id_adreca`, `id_contrassenya`, `id_estat`) VALUES ('".$correu."', '".$nom."', '".$cognom1."', '".$cognom2."', '".$telefon."', '".$data_naix."', '".$data_inici."', '1', '".$id_adreca."', '".$id_pass."', '1');");
					tancarBD($con);*/
				?>
            </div>
        </div>
    </body>
</html>