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
                    		echo "<form action='' method='post'>Benvingut ". $_SESSION['nom']."\n<input type='submit' class='btn btn-danger btn-sm' value='Tancar sessi&oacute;' name='tancarsessio'></form>";
						} else {
							header('Location: index.php'); //Farem tornar index.php si hem sortit de sessió
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
				<div>
                    <p> Usuaris </p>
                    
                    <table class="table table-striped">
                        <thead><tr><th>Correu</th><th>Nom</th><th>Cognoms</th><th>Estat</th><th>Permisos</th><th></th></tr></thead>
                        <?php
                            include 'BD.php';
                            $con=connectBD();
                            $usuaris=actalitzarUsuarisBD($con);
							$estats=actualitzarEstatsBD($con);
							$permisos=actualitzarPermisosBD($con);
                            //echo "\n".count($usuaris);
                            for($i=0;$i<count($usuaris);$i++){
                                echo "<tr><td>". $usuaris[$i][1] ."</td><td> ". $usuaris[$i][2] ."</td><td> ". $usuaris[$i][3]." ". $usuaris[$i][4] ."</td><td><select name='selectestats' class='form-control'>";
								for($y=0;$y<count($estats);$y++){ 
									if($estats[$y][0] == $usuaris[$i][10]){
										echo "<option value='".$estats[$y][0]."' selected>".$estats[$y][1]."</option>";
									} else {
								  		echo "<option value='".$estats[$y][0]."'>".$estats[$y][1]."</option>";
									}
								  }
								echo "</select></td><td><select name='selectpermis' class='form-control'>";
								for($x=0;$x<count($permisos);$x++){ 
									if($permisos[$x][0] == $usuaris[$i][8]){
										echo "<option value='".$permisos[$x][0]."' selected>".$permisos[$x][1]."</option>";
									} else {
								  		echo "<option value='".$permisos[$x][0]."'>".$permisos[$x][1]."</option>";
									}
								} 
								echo "</select></td><td><button class='form-control btn-danger'>". Eliminar/*$usuaris[$i][0]*/ ."</button></td></tr>";
                            }
                            tancarBD($con);
                        ?>
                    </table>
                </div>
            </div>
        </div>
    </body>
</html>