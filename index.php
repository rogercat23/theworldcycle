<html>
    <head>
        <title> The World Cycle Web </title>
        <?php
			include	 'llibreries.php';
		?>
    </head>
    <body>
        <div class="cos">
            <div id="qd_titol">
                <img src="img\logo\theworldcycle.png"/>
                <div id="formulari-usuari"> 
                	<?php
						include 'session.php';
						if(isset($_SESSION['error'])){
							echo $_SESSION['error'];
					?>
                    	<script>
							compcorr();
							mostrar_notificacio_pnotify("Benvingut!","Prova","");	
						</script>
                    <?php
							unset($_SESSION['error']);
						}
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
				<div id="myshow1" class="protoshow">
                    <ul class="show">
                        <li class="slide" data-slide-interval=""><img src="img/slide01.jpg" alt="Hiking up Mt. Villarica, Pucon, Chile - &copy; David Smith" /></li>
                        <li class="slide" data-slide-interval=""><img src="img/slide02.jpg" alt="Mountains, Parque Nacional Lauca, Chile - &copy; David Smith" /></li>
                        <li class="slide" data-slide-interval=""><img src="img/slide03.jpg" alt="Mountain reflections - &copy; David Smith" /></li>
                        <li class="slide" data-slide-interval=""><img src="img/slide04.jpg" alt="Leaves in Singapore - &copy; David Smith" /></li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>