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
				<p>Productes</p>
                <table class="table table-striped">
                	<thead><tr><th>Nom</th><th>Preu</th><th>Unitat/s</th><th>Nou/Segon</th>
                    <?php
						if(isset($_SESSION['correu'])){
							echo "<th></th>";
						}
					?>
                    </tr></thead>
					<?php
                        include 'BD.php';
                        $con=connectBD();
                        $productes=actalitzarProductesBD($con);
                        //echo "\n".count($productes);
						for($i=0;$i<count($productes);$i++){
                            echo "<tr><td>". $productes[$i][1]."</td><td> ". $productes[$i][2]."&euro;</td><td> ". $productes[$i][3]."</td><td> ". $productes[$i][4]."</td>";
							if(isset($_SESSION['correu'])){
								echo "<td><a href=''><button type='button' class='btn btn-default btn-sm'>Mostrar</button></a> </td>";
							}
							echo "</tr>";	
                        }
                        /*foreach($productes as $producte)
                            {
                            echo "Producte ";
                            foreach($producte as $informacio)
                                {
                                echo $informacio ." ";
                                }
                            echo "<br>";
                            }*/
                        
                        tancarBD($con);
                    ?>
                </table>
                
            </div>
        </div>
    </body>
</html>