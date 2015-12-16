$(document).ready(function() {
	var compcor = true;
	PNotify.prototype.options.styling = "jqueryui"; //Ficar estil amb jquery ui 
	
	stack_context = { //lloc on volem ensenyar missatges 
		"dir1": "down",
		"dir2": "left",
		"context": $("#qd_cos") //div del cos
	};
	
	function netejar_avisats(){
		$( "#correudiv" ).removeClass("has-warning has-error has-success");
		$( "#passworddiv" ).removeClass("has-warning has-error has-success");
		$( "#password2div" ).removeClass("has-warning has-error has-success");
		$( "#nomdiv" ).removeClass("has-warning has-error has-success");
		$( "#cognom1div" ).removeClass("has-warning has-error has-success");
		$( "#cognom2div" ).removeClass("has-warning has-error has-success");
		$( "#telefondiv" ).removeClass("has-warning has-error has-success");
		$( "#data_naixdiv" ).removeClass("has-warning has-error has-success");
		$( "#ciutatdiv" ).removeClass("has-warning has-error has-success");
		$( "#postaldiv" ).removeClass("has-warning has-error has-success");
		$( "#carrerdiv" ).removeClass("has-warning has-error has-success");
		$( "#numerodiv" ).removeClass("has-warning has-error has-success");
		$( "#pisdiv" ).removeClass("has-warning has-error has-success");
		$( "#portadiv" ).removeClass("has-warning has-error has-success");	
	}
	
	$.datepicker.regional['ca'] = { //Ficar format catala que no sortia les libreries de jquery UI
		closeText: 'Tancar',
		prevText: '&#x3c;Ant',
		nextText: 'Seg&#x3e;',
		currentText: 'Avui',
		monthNames: ['Gener','Febrer','Mar&ccedil;','Abril','Maig','Juny',
		'Juliol','Agost','Setembre','Octubre','Novembre','Desembre'],
		monthNamesShort: ['Gen','Feb','Mar','Abr','Mai','Jun',
		'Jul','Ago','Set','Oct','Nov','Des'],
		dayNames: ['Diumenge','Dilluns','Dimarts','Dimecres','Dijous','Divendres','Dissabte'],
		dayNamesShort: ['Dug','Dln','Dmt','Dmc','Djs','Dvn','Dsb'],
		dayNamesMin: ['Dg','Dl','Dt','Dc','Dj','Dv','Ds'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ca']);
	
	$( "#data_naix" ).datepicker({ dateFormat: 'dd/mm/yy' });//canvio format per evitar donar error d'insertar a basde de dades que ha de ser aquest format 1991-3-25 (aaaa-mm-dd) i format es yy-mm-dd
	if(typeof ciutats != "undefined"){//no totes les pagines crearan variable ciutats i evitem la consola que mostri error si no existeix que principi només pillem la hora de registrar quan introduim ciutats surt la llista automaticament.
		$( "#ciutat" ).autocomplete({
			source: ciutats
		});
	}
	
	$("#formulariregistrar").submit(function(){
		/*netejar_avisats();
		correcte = true;
		omplit = true;
		var miss ="";
		if($("#correu").val().length == 0) {
			$("#correudiv" ).addClass("has-error");
			correcte =false;	
			omplit = false;
			miss+="\n -Correu";
		} else {
			var correu = $("#correu").val();
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correu)){
		    	$("#correudiv" ).addClass("has-success"); //posem verd que es correcte
		    } else {
				correcte =false;
				miss+="\n -Correu no es correcte pel format.";
				$("#correudiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
		  	}
		}
		
		if($("#password").val().length == 0) {
			$("#passworddiv" ).addClass("has-error");
			correcte =false;
			omplit = false;
			miss+="\n -Password";	
		} else {
			$("#passworddiv" ).addClass("has-success");
		}
		
		if($("#password2").val().length == 0) {
			$("#password2div" ).addClass("has-error");
			correcte =false;	
			omplit = false;
			miss+="\n -Repetir password";
		} else {
			$("#password2div" ).addClass("has-success");
			//Aqui comparar les dues contrassenyes que siguin iguals
			var pas1 = $("#password").val();
			var pas2 = $("#password2").val();
			//alert(pas1 +" "+ pas2);
			if( pas1 != pas2 ){
				mostrar_notificacio_pnotify('Les contrassenyes!','No s&oacute;n les mateixes i torna introduir!','error' );
				$("#passworddiv" ).addClass("has-warning");
				$("#password2div" ).addClass("has-warning");
				correcte =false;
			} else {
				//mostrar_notificacio_pnotify('Les contrassenyes!','Tot correcte les contrassenyes!','success');
			}
			
		}
		
		if($("#nom").val().length == 0) {
			$("#nomdiv" ).addClass("has-error");
			correcte =false;
			omplit = false;
			miss+="\n -Nom";	
		} else {
			var nom = $("#nom").val();
			if (/^([A-Z a-z ñàèòáéíóú]{2,60})$/.test(nom)){
		    	$("#nomdiv" ).addClass("has-success"); //posem verd que es correcte
		    } else {
				correcte =false;
				miss+="\n -Nom no es correcte pel format.";
				$("#nomdiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
		  	}
		}
		
		if($("#cognom1").val().length == 0) {
			$("#cognom1div" ).addClass("has-error");
			correcte =false;
			omplit = false;
			miss+="\n -Primer cognom";	
		} else {
			var cognom1 = $("#cognom1").val();
			if (/^([A-Z a-z ñàèòáéíóú]{2,60})$/.test(cognom1)){
		    	$("#cognom1div" ).addClass("has-success"); //posem verd que es correcte
		    } else {
				correcte =false;
				miss+="\n -Cognom1 no es correcte pel format.";
				$("#cognom1div" ).addClass("has-error");//esta malament posem error color vermell i missatge
		  	}
		}
			
		if($("#cognom2").val().length == 0) {
			$("#cognom2div" ).addClass("has-error");
			correcte =false;
			omplit = false;
			miss+="\n -Segon cognom";	
		} else {
			var cognom2 = $("#cognom2").val();
			if (/^([A-Z a-z ñàèòáéíóú]{2,60})$/.test(cognom2)){
		    	$("#cognom2div" ).addClass("has-success"); //posem verd que es correcte
		    } else {
				correcte =false;
				miss+="\n -Cognom2 no es correcte pel format.";
				$("#cognom2div" ).addClass("has-error");//esta malament posem error color vermell i missatge
		  	}
		}
		
		if($("#telefon").val().length == 0) {
			$("#telefondiv" ).addClass("has-error");
			correcte =false;
			omplit = false;
			miss+="\n -Telefon";	
		} else {
			var telf = $("#telefon").val();
			if (/^\d{9}$/.test(telf)){
				$("#telefondiv" ).addClass("has-success"); //posem verd que es correcte
			} else {
				correcte =false;
				miss+="\n -Telefon no es correcte pel format.";
				$("#telefondiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
			}
		}
		
		if($("#data_naix").val().length == 0) {
			$("#data_naixdiv" ).addClass("has-error");
			correcte =false;
			omplit = false;
			miss+="\n -Data de naixament";	
		} else {
			var data = $("#data_naix").val();
			if (/^\d{2}\/\d{2}\/\d{4}$/.test(data)){
				$("#data_naixdiv" ).addClass("has-success"); //posem verd que es correcte
			} else {
				correcte =false;
				miss+="\n -Data de naix no es correcte pel format.";
				$("#data_naixdiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
			}
		}	
		
		if($("#ciutat").val().length == 0) {
			$("#ciutatdiv" ).addClass("has-error");
			correcte =false;
			omplit = false;
			miss+="\n -Ciutat";	
		} else {
			var ciutat = $("#ciutat").val();
			if (/^([A-Z a-z ñàèòáéíóú]{2,60})$/.test(ciutat)){
		    	$("#ciutatdiv" ).addClass("has-success"); //posem verd que es correcte
		    } else {
				correcte =false;
				miss+="\n -Ciutat no es correcte pel format.";
				$("#ciutatdiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
		  	}
		}
		
		if($("#postal").val().length == 0) {
			$("#postaldiv" ).addClass("has-error");
			correcte =false;
			omplit = false;
			miss+="\n -Postal";	
		} else {
			var post = $("#postal").val();
			if (/^\d{5}$/.test(post)){
				$("#postaldiv" ).addClass("has-success"); //posem verd que es correcte
			} else {
				correcte =false;
				miss+="\n -Postal no es correcte pel format.";
				$("#postaldiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
			}
		}
			
		if($("#carrer").val().length == 0) {
			$("#carrerdiv" ).addClass("has-error");
			correcte =false;	
			omplit = false;
			miss+="\n -Carrer";
		} else {
			$("#carrerdiv" ).addClass("has-success");
		}	
		
		if($("#numero").val().length == 0) {
			$("#numerodiv" ).addClass("has-error");
			correcte =false;
			omplit = false;
			miss+="\n -Numero";	
		} else {
			var numero = $("#numero").val();
			if (/^([0-9])*$/.test(numero)){
				$("#numerodiv" ).addClass("has-success"); //posem verd que es correcte
			} else {
				correcte =false;
				miss+="\n -Numero no es correcte pel format.";
				$("#numerodiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
			}
		}	
		
		if($("#pis").val().length != 0 || $("#porta").val().length != 0) { //Nómes farem obligar si ha introduit un dels dos aquests camps
			if($("#pis").val().length == 0){
				$("#pisdiv" ).addClass("has-error");
				correcte =false;
				omplit = false;
				miss+="\n -Pis";	
			} else {
				var pis = $("#pis").val();
				if (/^([0-9])*$/.test(pis)){
					$("#pisdiv" ).addClass("has-success"); //posem verd que es correcte
				} else {
					correcte =false;
					miss+="\n -Pis no es correcte pel format.";
					$("#pisdiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
				}
			}
			
			if($("#porta").val().length == 0){
				$("#portadiv" ).addClass("has-error");
				correcte =false;
				omplit = false;
				miss+="\n -Porta";
			} else {
				var porta = $("#porta").val();
				if (/^([0-9])*$/.test(porta)){
					$("#portadiv" ).addClass("has-success"); //posem verd que es correcte
				} else {
					correcte =false;
					miss+="\n -Pis no es correcte pel format.";
					$("#portadiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
				}
			}
		}
		
		if(!omplit || !correcte){
			mostrar_notificacio_pnotify('Falta omplir o errors els seg&uuml;ents camps: ',miss,'error' );
		}
		return correcte;*/
		var correcte = true;	
		if($("#correudiv").hasClass('has-error')){ //si te classe has-error avisem que s'ha de revisar que no té bé
			alert("ERROR: CORREU");
		}
		if($("#pis").val().length != 0 || $("#porta").val().length != 0) { //comprova que un dels dos es introduit per obligar introduir els dos o cap per evitar enviar un del dos introduit.
			if($("#pis").val().length != 0 && $("#porta").val().length != 0) {
			} else{
				mostrar_notificacio_pnotify('Info: ','S\' ha de tenir afegit pis i porta o sense que no es obligatori si es una casa sola.','error');
				correcte = false;	
			}
		}
		return false;
		//return correcte;
	});
	
	$("#netejarform").click(function(){
		netejar_avisats();//treure els divs que estan posats errors, success, warning
		mostrar_notificacio_pnotify('Info: ','Acaba de netejar tots els camps del formulari!','');
	});
});

function mostrar_notificacio_pnotify(titol, missatge, tipus){ //crear finestres amb parametres per evitar crear cada vegada que vull notificar i envio aqui i ho fa directe. Només hauré de posar tipus de notificació, titol i missatge.
	var notf = {
		title: titol,
		text: missatge,
		stack: stack_context
	};
	switch(tipus){
	 case 'error':
		notf.type = "error";
	 break;
	 case 'info':
		notf.type = "info";
	 break;
	 case 'success':
		notf.type = "success";
	 break;	
	}
	new PNotify(notf); //mostra notificació amb variable opcions fets
}

function comprCorreu(){
	var compcor = true;
	var omplitcor = true;
	var cor = $("#correu").val();
	$( "#correudiv" ).removeClass("has-warning has-error has-success");
	if($("#correu").val().length == 0) {
		$("#correudiv" ).addClass("has-error");	
		omplitcor = false;
		mostrar_notificacio_pnotify("Correu","No has introduit res!","error");
	} else {
		var correu = $("#correu").val();
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correu)){
			for(u=0;u<correus.length;u++){ //comprovar tots els correus que tenim BD i comprar que tenim posat actualment per evitar tenir un altre igual
				if(cor==correus[u]){
					$("#correudiv" ).addClass("has-error");
					compcor = false;
					mostrar_notificacio_pnotify("Correu","Ja tenim registrat aquest correu!","error");
				}
			}
			if(compcor){
				$("#correudiv" ).addClass("has-success");//per mostrar que es correcte i no tenim en BD
			}
		} else {
			$("#correudiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
			compcor = false;
			mostrar_notificacio_pnotify("Correu","El format del correu es xxx@xxx.xx","error");
		}
	}
}

function comprPass1(){
	var comppas1 = true;
	var omplitpas1 = true;
	var pas = $("#password").val();
	$( "#passworddiv" ).removeClass("has-warning has-error has-success");
	if($("#password").val().length == 0) {
		$("#passworddiv" ).addClass("has-error");
		omplitpas1 = false;	
		mostrar_notificacio_pnotify("Password","No has introduit res!","error");
	} else {
		$("#passworddiv" ).addClass("has-success");
	}	
}

function comprPass2(){
	var comppas2 = true;
	var omplitpas2 = true;
	var pas2 = $("#password2").val();
	$( "#password2div" ).removeClass("has-warning has-error has-success");
	if($("#password2").val().length == 0) {
		$("#password2div" ).addClass("has-error");	
		omplitpas2 = false;
		mostrar_notificacio_pnotify("Repetir Password","No has introduit res!","error");
	} else {
		//Aqui comparar les dues contrassenyes que siguin iguals
		var pas1 = $("#password").val();
		var pas2 = $("#password2").val();
		//alert(pas1 +" "+ pas2);
		if( pas1 != pas2 ){
			mostrar_notificacio_pnotify('Les contrassenyes!','No s&oacute;n les mateixes i torna introduir!','error' );
			$("#passworddiv" ).addClass("has-warning");
			$("#password2div" ).addClass("has-warning");
			comppas2 =false;
		} else {
			$("#passworddiv" ).removeClass("has-warning has-error has-success"); //per poder afegir que es correcte sino no canvia estat per no haver borrat estat warning
			$("#passworddiv" ).addClass("has-success");
			$("#password2div" ).addClass("has-success");
		}
	}
}

function comprNom(){
	var compnom = true;
	var omplitnom = true;
	var nom = $("#nom").val();
	$( "#nomdiv" ).removeClass("has-warning has-error has-success");
	if($("#nom").val().length == 0) {
		$("#nomdiv" ).addClass("has-error");
		omplitnom = false;
		mostrar_notificacio_pnotify("Nom","No has introduit res!","error");
	} else {
		var nom = $("#nom").val();
		if (/^([A-Z a-z ñàèòáéíóú]{2,60})$/.test(nom)){
			$("#nomdiv" ).addClass("has-success"); //posem verd que es correcte
		} else {
			compnom =false;
			$("#nomdiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
			mostrar_notificacio_pnotify("Nom","Han de ser caracters!","error");
		}
	}
}

function comprCognom1(){
	var compcog1 = true;
	var omplitcog1 = true;
	var cog1 = $("#cognom1").val();
	$( "#cognom1" ).removeClass("has-warning has-error has-success");
	if($("#cognom1").val().length == 0) {
		$("#cognom1div" ).addClass("has-error");
		omplitcog1 = false;
		mostrar_notificacio_pnotify("Primer cognom","No has introduit res!","error");	
	} else {
		var cognom1 = $("#cognom1").val();
		if (/^([A-Z a-z ñàèòáéíóú]{2,60})$/.test(cognom1)){
			$("#cognom1div" ).addClass("has-success"); //posem verd que es correcte
		} else {
			compcog1 =false;
			$("#cognom1div" ).addClass("has-error");//esta malament posem error color vermell i missatge
			mostrar_notificacio_pnotify("Nom","Han de ser caracters!","error");
		}
	}
}

function comprCognom2(){
	var compcog2 = true;
	var omplitcog2 = true;
	var cognom2 = $("#cognom2").val();
	$( "#cognom2div" ).removeClass("has-warning has-error has-success");
	if($("#cognom2").val().length == 0) {
		$("#cognom2div" ).addClass("has-error");
		omplitcog2 = false;
		mostrar_notificacio_pnotify("Segon cognom","No has introduit res!","error");	
	} else {
		var cognom2 = $("#cognom2").val();
		if (/^([A-Z a-z ñàèòáéíóú]{2,60})$/.test(cognom2)){
			$("#cognom2div" ).addClass("has-success"); //posem verd que es correcte
		} else {
			compcog2 =false;
			mostrar_notificacio_pnotify("Nom","Han de ser caracters!","error");
			$("#cognom2div" ).addClass("has-error");//esta malament posem error color vermell i missatge
		}
	}		
}

function comprTel(){
	var comptel = true;
	var omplittel = true;
	var telf = $("#telefon").val();
	$( "#telefondiv" ).removeClass("has-warning has-error has-success");
	if($("#telefon").val().length == 0) {
		$("#telefondiv" ).addClass("has-error");
		omplittel = false;
		mostrar_notificacio_pnotify("Tel&ecirc;fon","No has introduit res!","error");
	} else {
		if (/^\d{9}$/.test(telf)){
			$("#telefondiv" ).addClass("has-success"); //posem verd que es correcte
		} else {
			comptel =false;
			mostrar_notificacio_pnotify("Tel&ecirc;fon","Ha de tenir nou numeros!","error");
			$("#telefondiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
		}
	}
}

function comprDataNaix(){
	var compDataN = true;
	var omplitDataN = true;
	var data = $("#data_naix").val();
	$( "#data_naixdiv" ).removeClass("has-warning has-error has-success");
	if($("#data_naix").val().length == 0) {
		$("#data_naixdiv" ).addClass("has-error");
		omplitDataN = false;
		mostrar_notificacio_pnotify("Data de naixament","No has introduit res!","error");	
	} else {
		if (/^\d{2}\/\d{2}\/\d{4}$/.test(data)){
			$("#data_naixdiv" ).addClass("has-success"); //posem verd que es correcte
		} else {
			compDataN =false;
			mostrar_notificacio_pnotify("Data de naixament","El format ha de ser dd/mm/aaaa","error");
			$("#data_naixdiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
		}
	}	
}

function comprCiutat(){
	var compciutat = true;
	var omplitciutat = true;
	var ciutat = $("#ciutat").val();
	$( "#ciutatdiv" ).removeClass("has-warning has-error has-success");
	if($("#ciutat").val().length == 0) {
		$("#ciutatdiv" ).addClass("has-error");
		omplitciutat = false;
		mostrar_notificacio_pnotify("Ciutat","No has introduit res!","error");
	} else {
		if (/^([A-Z a-z ñàèòáéíóú]{2,60})$/.test(ciutat)){
			$("#ciutatdiv" ).addClass("has-success"); //posem verd que es correcte
		} else {
			compciutat =false;
			mostrar_notificacio_pnotify("Ciutat","Han de ser caracters!","error");
			$("#ciutatdiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
		}
	}	
}

function comprPostal(){
	var comppos = true;
	var omplitpos = true;
	var post = $("#postal").val();
	$( "#postaldiv" ).removeClass("has-warning has-error has-success");
	if($("#postal").val().length == 0) {
		$("#postaldiv" ).addClass("has-error");
		omplitpos = false;
		mostrar_notificacio_pnotify("Postal","No has introduit res!","error");
	} else {
		if (/^\d{5}$/.test(post)){
			$("#postaldiv" ).addClass("has-success"); //posem verd que es correcte
		} else {
			comppos =false;
			mostrar_notificacio_pnotify("Ciutat","Han de tenir cinc numeros","error");
			$("#postaldiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
		}
	}	
}

function comprCarrer(){
	var compcarr = true;
	var omplitcarr = true;
	var carrer = $("#carrer").val();
	$( "#carrerdiv" ).removeClass("has-warning has-error has-success");
	if($("#carrer").val().length == 0) {
		$("#carrerdiv" ).addClass("has-error");
		omplitcarr = false;
		mostrar_notificacio_pnotify("Carrer","No has introduit res!","error");
	} else {
		$("#carrerdiv" ).addClass("has-success");
	}
}

function comprNum(){
	var compnum = true;
	var omplitnum = true;
	var numero = $("#numero").val();
	$( "#numerodiv" ).removeClass("has-warning has-error has-success");
	if($("#numero").val().length == 0) {
		$("#numerodiv" ).addClass("has-error");
		omplitnum = false;
		mostrar_notificacio_pnotify("Numero","No has introduit res!","error");	
	} else {
		var numero = $("#numero").val();
		if (/^([0-9])*$/.test(numero)){
			$("#numerodiv" ).addClass("has-success"); //posem verd que es correcte
		} else {
			compnum =false;
			mostrar_notificacio_pnotify("Numero","Han de ser numeros","error");
			$("#numerodiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
		}
	}	
}

function comprPis(){
	var comppis = true;
	var omplitpis = true;
	var pis = $("#pis").val();
	$( "#pisdiv" ).removeClass("has-warning has-error has-success");
	if($("#pis").val().length == 0){
		//$("#pisdiv" ).addClass("has-error");
		omplitpis = false;
	} else {
		if (/^([0-9])*$/.test(pis)){
			$("#pisdiv" ).addClass("has-success"); //posem verd que es correcte
		} else {
			comppis =false;
			mostrar_notificacio_pnotify("Numero","Han de ser numeros","error");
			$("#pisdiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
		}
	}	
}

function comprPorta(){
	var comppor = true;
	var omplitpor = true;
	var porta = $("#porta").val();
	$( "#portadiv" ).removeClass("has-warning has-error has-success");
	if($("#porta").val().length == 0){
		//$("#portadiv" ).addClass("has-error");
		omplitpor = false;
	} else {
		if (/^([0-9])*$/.test(porta)){
			$("#portadiv" ).addClass("has-success"); //posem verd que es correcte
		} else {
			comppor =false;
			mostrar_notificacio_pnotify("Pis","Han de ser numeros","error")
			$("#portadiv" ).addClass("has-error");//esta malament posem error color vermell i missatge
		}
	}
}