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
				<div>
                    <button onClick="mostrar_notificacio_pnotify('Benvingut!','Prova','')">Prova</button>
                </div>
				
            </div>
        </div>
    </body>
</html>