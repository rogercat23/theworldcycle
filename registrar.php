<html>
    <head>
        <title> The World Cycle Web </title>
        <?php
			include 'llibreries.php';
			//aquesta part es tracta pillar tots els ciutats de BD i guardem array. A més a més, passem a javascript per poder fer funcionar autocomplete (JqueryUI) per 						provar intenta escriure una ciutat i sortira la llista que tenim BD aixi evitem crear un altre amb poca diferencia
			/*include 'BD.php';
			$con=connectBD();
			$ciutats = actalitzarCiutatsNoms($con);
			tancarBD($con);
			*/
			require_once("GeneralBD.php");
			$GeneralBD = new GeneralBD();
			$ciutats = $GeneralBD->runQuery1("SELECT nom FROM ciutat");
			$correus = $GeneralBD->runQuery1("SELECT correu FROM usuari");
			$GeneralBD->tancarBD();
			echo gettype($ciutats);
		?>
        <script type="text/javascript">
			var ciutats = <?php echo json_encode($ciutats);?>; //transformem tipus json que es array del javascript
			var correus = <?php echo json_encode($correus);?> //igual ciutats (anterior) amb correus
		</script>
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
                        <div id="correudiv" class="has-feedback">
                        	<input type="email" class="form-control" id="correu" name="correu" placeholder="Correu" onChange="comprovarCamps(this.parentNode.id, this.id)"><span id="correuicon" class="form-control-feedback glyphicon"></span></br>
                        </div>
                        <div class="row">
                         	<div class="col-xs-6 has-feedback" id="passworddiv">
                        		<input type="password" class="form-control" id="password" name="password" placeholder="Password" onChange="comprovarCamps(this.parentNode.id, this.id)"><span id="passwordicon" class="form-control-feedback glyphicon"></span>
                         	</div>
                         	<div class="col-xs-6 has-feedback" id="password2div">
                        		<input type="password" class="form-control" id="password2"  name="password2" placeholder="Repetir password" onChange="comprovarCamps(this.parentNode.id, this.id)"><span id="password2icon" class="form-control-feedback glyphicon"></span>
                        	</div>
                       </div>
                      </div>
                      <div class="form-group">
                        <label>Dades personals:</label>
                        <div id="nomdiv" class="has-feedback">
                        <input type="text" class="form-control" id="nom" name="nom" placeholder="Nom" onChange="comprovarCamps(this.parentNode.id, this.id)"><span id="nomicon" class="form-control-feedback glyphicon"></span></br>
                        </div>
                        <div class="row">
                         	<div id="cognom1div" class="col-xs-6 has-feedback">
                        		<input type="text" class="form-control" id="cognom1" name="cognom1" placeholder="Primer cognom" onChange="comprovarCamps(this.parentNode.id, this.id)"><span id="cognom1icon" class="form-control-feedback glyphicon"></span>
                         	</div>
                         	<div class="col-xs-6 has-feedback" id="cognom2div">
                        		<input type="text" class="form-control" id="cognom2" name="cognom2" placeholder="Segon cognom" onChange="comprovarCamps(this.parentNode.id, this.id)"><span id="cognom2icon" class="form-control-feedback glyphicon"></span>
                        	</div>
                       </div></br>
                       <div class="row">
                         	<div class="col-xs-6 has-feedback" id="telefondiv">
                        		<input type="text" class="form-control" id="telefon" name="telefon" placeholder="Tel&eacute;fon" onChange="comprovarCamps(this.parentNode.id, this.id)"><span id="telefonicon" class="form-control-feedback glyphicon"></span>
                        	</div>
                         	<div class="col-xs-6 has-feedback" id="data_naixdiv">
                        		<input type="text" class="form-control" id="data_naix" name="data_naix" placeholder="Data de naixament" onChange="comprovarCamps(this.parentNode.id, this.id)"><span id="data_naixicon" class="form-control-feedback glyphicon"></span>
                            </div>
                       </div>
                      </div>
                      <div class="form-group">
                      	<label>Adre&ccedil;a:</label>
                        <div class="row">
                             <div class="col-xs-8 has-feedback" id="ciutatdiv">
                                <input type="text" class="form-control" id="ciutat" name="ciutat" placeholder="Ciutat" onChange="comprovarCamps(this.parentNode.id, this.id)"><span id="ciutaticon" class="form-control-feedback glyphicon"></span>
                              </div>
                              <div class="col-xs-4 has-feedback" id="postaldiv">
                                <input type="text" class="form-control" id="postal" name="postal" placeholder="Postal" onChange="comprovarCamps(this.parentNode.id, this.id)"><span id="postalicon" class="form-control-feedback glyphicon"></span>
                              </div>
                        </div></br>
                        <div id="carrerdiv" class="has-feedback">
                        	<input type="text" class="form-control" id="carrer" name="carrer" placeholder="Carrer" onChange="comprovarCamps(this.parentNode.id, this.id)"><span id="carrericon" class="form-control-feedback glyphicon"></span></br>
                        </div>
                      	 <div class="row">
                             <div class="col-xs-4 has-feedback" id="numerodiv">
                                <input type="text" class="form-control" id="numero" name="numero" placeholder="N&uacute;mero" onChange="comprovarCamps(this.parentNode.id, this.id)"><span id="numeroicon" class="form-control-feedback glyphicon"></span>
                              </div>
                              <div class="col-xs-4 has-feedback" id="pisdiv">
                                <input type="text" class="form-control" id="pis" name="pis" placeholder="Pis" onChange="comprovarCamps(this.parentNode.id, this.id)"><span id="pisicon" class="form-control-feedback glyphicon"></span>
                              </div>
                              <div class="col-xs-4 has-feedback" id="portadiv">
                                <input type="text" class="form-control" id="porta" name="porta" placeholder="Porta" onChange="comprovarCamps(this.parentNode.id, this.id)"><span id="portaicon" class="form-control-feedback glyphicon"></span>
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