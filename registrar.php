 <?php //aquesta part es tracta pillar tots els ciutats de BD i guardem array. A més a més, passem a javascript per poder fer funcionar autocomplete (JqueryUI) per provar intenta escriure una ciutat i sortira la llista que tenim BD aixi evitem crear un altre amb poca diferencia
	include 'BD.php';
	$con=connectBD();
	$ciutats = actalitzarCiutatsNoms($con);
	$correus = actalitzarCorreusUsuaris($con);
	tancarBD($con);
?>
<script type="text/javascript">
	var ciutats = <?php echo json_encode($ciutats); ?>; //transformem tipus json que es array del javascript
	var correus = <?php echo json_encode($correus);?> //igual ciutats (anterior) amb correus
</script>
<html>
    <head>
        <title> The World Cycle Web </title>
        
        <!-- ESTILS DE LA PÀGINA -->
        <link href="css/jquery-ui.css" rel="stylesheet">
        <link href="css/pnotify.custom.min.css" rel="stylesheet">
        <link rel="stylesheet" href="css/bootstrap-theme.css">
		<link rel="stylesheet" href="css/bootstrap.min.css">
        <link href="css/estil.css" rel="stylesheet">
        
        <!-- LLIBRERIES DE LA PÀGINA -->
        <script src="lib/external/jquery/jquery.js"></script>
		<script src="lib/jquery-ui.js"></script>
        <script src="lib/pnotify.custom.min.js"></script>
        <script src="lib/bootstrap.min.js"></script>
        <script src="scripts/scripts.js"></script>
    </head>
    <body>
        <div class="cos">
            <div id="qd_titol">
                <img src="img\logo\theworldcycle.png"/>
                <div id="formulari-usuari"> 
                	<?php
						include 'session.php';
						if(isset($_SESSION['correu'])){
                    		header('Location: index.php');
							echo "<form action='' method='post'>Benvingut ". $_SESSION['nom']."\n<input type='submit' class='btn btn-danger btn-sm' value='Tancar sessi&oacute;' name='tancarsessio'></form>";
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
            	<div id="centre-form">
                    <p>Registrar</p>
                    <form  action="controlregistrar.php" method="post" id="formulariregistrar">
                      <div class="form-group">
                        <label>Usuari:</label>
                        <div id="correudiv">
                        	<input type="email" class="form-control" id="correu" name="correu" placeholder="Correu" onChange="comprCorreu()"></br>
                        </div>
                        <div class="row">
                         	<div class="col-xs-6" id="passworddiv">
                        		<input type="password" class="form-control" id="password" name="password" placeholder="Password" onChange="comprPass1()">
                         	</div>
                         	<div class="col-xs-6" id="password2div">
                        		<input type="password" class="form-control" id="password2"  name="password2" placeholder="Repetir password" onChange="comprPass2()">
                        	</div>
                       </div>
                      </div>
                      <div class="form-group">
                        <label>Dades personals:</label>
                        <div id="nomdiv">
                        <input type="text" class="form-control" id="nom" name="nom" placeholder="Nom" onChange="comprNom()"></br>
                        </div>
                        <div class="row">
                         	<div id="cognom1div" class="col-xs-6">
                        		<input type="text" class="form-control" id="cognom1" name="cognom1" placeholder="Primer cognom" onChange="comprCognom1()">
                         	</div>
                         	<div class="col-xs-6" id="cognom2div">
                        		<input type="text" class="form-control" id="cognom2" name="cognom2" placeholder="Segon cognom" onChange="comprCognom2()">
                        	</div>
                       </div></br>
                       <div class="row">
                         	<div class="col-xs-6" id="telefondiv">
                        		<input type="text" class="form-control" id="telefon" name="telefon" placeholder="Tel&eacute;fon" onChange="comprTel()">
                        	</div>
                         	<div class="col-xs-6" id="data_naixdiv">
                        		<input type="text" class="form-control" id="data_naix" name="data_naix" placeholder="Data de naixament" onChange="comprDataNaix()">
                            </div>
                       </div>
                      </div>
                      <div class="form-group">
                      	<label>Adre&ccedil;a:</label>
                        <div class="row">
                             <div class="col-xs-8" id="ciutatdiv">
                                <input type="text" class="form-control" id="ciutat" name="ciutat" placeholder="Ciutat" onChange="comprCiutat()">
                              </div>
                              <div class="col-xs-4" id="postaldiv">
                                <input type="text" class="form-control" id="postal" name="postal" placeholder="Postal" onChange="comprPostal()">
                              </div>
                        </div></br>
                        <div id="carrerdiv">
                        	<input type="text" class="form-control" id="carrer" name="carrer" placeholder="Carrer" onChange="comprCarrer()"></br>
                        </div>
                      	 <div class="row">
                             <div class="col-xs-4" id="numerodiv">
                                <input type="text" class="form-control" id="numero" name="numero" placeholder="N&uacute;mero" onChange="comprNum()">
                              </div>
                              <div class="col-xs-4" id="pisdiv">
                                <input type="text" class="form-control" id="pis" name="pis" placeholder="Pis" onChange="comprPis()">
                              </div>
                              <div class="col-xs-4" id="portadiv">
                                <input type="text" class="form-control" id="porta" name="porta" placeholder="Porta" onChange="comprPorta()">
                              </div>
                          </div>  
                      </div>
                      <center>
                          <button type="submit" class="btn btn-success">Registrar</button>
                          <button type="reset" class="btn btn-danger" id="netejarform">Netejar</button>
                      </center>
                    </form>
   				</div>
            </div>
        </div>
    </body>
</html>