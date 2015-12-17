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
		
		$("#correuicon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
		$("#passwordicon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
		$("#password2icon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
		$("#nomicon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
		$("#cognom1icon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
		$("#cognom2icon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
		$("#telefonicon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
		$("#data_naixicon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
		$("#ciutaticon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
		$("#postalicon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
		$("#carrericon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
		$("#numeroicon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
		$("#pisicon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
		$("#portaicon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
	}
	
	$.datepicker.regional['ca'] = { //Ficar format catala que no sortia les libreries de jquery UI i que deixi triar opció per canviar mes i any
		changeMonth: true,
		changeYear: true,
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

//Funció per comprovar tots els expressions regulars: variable introduida, expressio regular i id div i id input per mostrar error o correcte. Si es incorrecte retorna false sinó true
function expressioRegular(vari, regtext, iddiv, id){
	if (regtext.test(vari)){
		$("#"+iddiv).addClass("has-success"); //posem verd que es correcte
		$("#"+id+"icon").addClass("glyphicon-ok");
		return true;
	} else {
		$("#"+iddiv).addClass("has-error");//esta malament posem error color vermell i missatge
		$("#"+id+"icon").addClass("glyphicon-remove");
		return false;
	}
}

//Funció per comprovar tots els camps que siguin correcte abans d'enviar a BD o fer una consulta
function comprovarCamps(iddiv,id){
	var vari = $("#"+id).val();
	$("#"+iddiv).removeClass("has-warning has-error has-success");
	$("#"+id+"icon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
	if($("#"+id).val().length == 0) {
		$("#"+iddiv).addClass("has-error");
		$("#"+id+"icon").addClass("glyphicon-remove");
		switch(id){
			case 'correu':
				mostrar_notificacio_pnotify("Correu","No has introduit res!","error");
			break;
			case 'password':
				mostrar_notificacio_pnotify("Password","No has introduit res!","error");
			break;
			case 'password2':
				mostrar_notificacio_pnotify("Repetir Password","No has introduit res!","error");
			break;
			case 'nom':
				mostrar_notificacio_pnotify("Nom","No has introduit res!","error");
			break;
			case 'cognom1':
				mostrar_notificacio_pnotify("Primer cognom","No has introduit res!","error");
			break;
			case 'cognom2':
				mostrar_notificacio_pnotify("Segon cognom","No has introduit res!","error");
			break;
			case 'telefon':
				mostrar_notificacio_pnotify("Tel&ecirc;fon","No has introduit res!","error");
			break;
			case 'data_naix':
				mostrar_notificacio_pnotify("Data de naixament","No has introduit res!","error");
			break;
			case 'ciutat':
				mostrar_notificacio_pnotify("Ciutat","No has introduit res!","error");
			break;
			case 'postal':
				mostrar_notificacio_pnotify("Postal","No has introduit res!","error");
			break;
			case 'carrer':
				mostrar_notificacio_pnotify("Carrer","No has introduit res!","error");
			break;
			case 'numero':
				mostrar_notificacio_pnotify("Numero","No has introduit res!","error");
			break;
			case 'pis':
				mostrar_notificacio_pnotify("Pis","No has introduit res!","error");
			break;
			case 'porta':
				mostrar_notificacio_pnotify("Porta","No has introduit res!","error");
			break;
		}
	} else {
		switch(id){
			case 'correu':
				var regtext = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
			break;
			case 'password2':
				var pas1 = $("#password").val();
				var pas2 = $("#password2").val();
				//alert(pas1 +" "+ pas2);
				if( pas1 != pas2 ){
					mostrar_notificacio_pnotify('Les contrassenyes!','No s&oacute;n les mateixes i torna introduir!','error' );
					$("#passworddiv" ).addClass("has-warning");
					$("#password2div" ).addClass("has-warning");
					$("#passwordicon" ).addClass("glyphicon-alert");
					$("#password2icon" ).addClass("glyphicon-alert");
					comppas2 =false;
				} else {
					$("#passworddiv" ).removeClass("has-warning has-error has-success"); //per poder afegir que es correcte sino no canvia estat per no haver borrat estat warning
					$("#passwordicon").removeClass("glyphicon-remove glyphicon-ok glyphicon-alert");
					$("#passworddiv" ).addClass("has-success");
					$("#password2div" ).addClass("has-success");
					$("#passwordicon" ).addClass("glyphicon-ok");
					$("#password2icon" ).addClass("glyphicon-ok");
				}
			break;
			case 'nom':
			case 'cognom1':
			case 'cognom2':
			case 'ciutat':
				var regtext = /^([A-Z a-z ñàèòáéíóú]{2,60})$/;
			break;
			case 'telefon':
				var regtext = /^\d{9}$/;
			break;
			case 'data_naix':
				var regtext = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
			break;
			case 'postal':
				var regtext = /^\d{5}$/;
			break;
			case 'numero':
			case 'pis':
			case 'porta':
				var regtext = /^([0-9])*$/;
			break;
			default:// de moment entra són password i carrer
				$("#"+iddiv ).addClass("has-success");
				$("#"+id+"icon").addClass("glyphicon-ok");
			break;
		}
		if(typeof regtext != "undefined"){
			var comp = expressioRegular(vari, regtext, iddiv, id);
			if(!comp){
				switch(id){
					case 'correu':
						mostrar_notificacio_pnotify("Correu","El format del correu es xxx@xxx.xx","error");
					break;
					case 'nom':
						mostrar_notificacio_pnotify("Nom","Han de ser caracters!","error");
					break;
					case 'cognom1':
						mostrar_notificacio_pnotify("Primer Cognom","Han de ser caracters!","error");
					break;
					case 'cognom2':
						mostrar_notificacio_pnotify("Segon cognom","Han de ser caracters!","error");
					break;
					case 'telefon':
						mostrar_notificacio_pnotify("Tel&ecirc;fon","Ha de tenir nou numeros!","error");
					break;
					case 'data_naix':
						mostrar_notificacio_pnotify("Data de naixament","El format ha de ser dd/mm/aaaa","error");
					break;
					case 'ciutat':
						mostrar_notificacio_pnotify("Ciutat","Han de ser caracters!","error");
					break;
					case 'postal':
						mostrar_notificacio_pnotify("Postal","Han de ser 5 numeros!","error");
					break;
					case 'numero':
						mostrar_notificacio_pnotify("Numero","Han de ser numeros!","error");
					break;
					case 'pis':
						mostrar_notificacio_pnotify("Pis","Han de ser numeros!","error");
					break;
					case 'porta':
						mostrar_notificacio_pnotify("Porta","Han de ser numeros!","error");
					break;
				}
			} else {
				switch(id){
					case 'correu':
						for(u=0;u<correus.length;u++){ //comprovar tots els correus que tenim BD i comprar que tenim posat actualment per evitar tenir un altre igual
							if(vari==correus[u]){
								$("#"+iddiv).removeClass("has-warning has-error has-success");
								$("#"+iddiv ).addClass("has-warning");
								$("#"+id+"icon").addClass("glyphicon-alert");
								mostrar_notificacio_pnotify("Correu","Ja tenim registrat aquest correu!","error");
							}
						}
					break;
				}	
			}
		}
	}	
}
