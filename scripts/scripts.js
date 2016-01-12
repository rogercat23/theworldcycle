$(document).ready(function() {
	var compcor = true;
	PNotify.prototype.options.styling = "jqueryui"; //Ficar estil amb jquery ui 
	
	stack_context = { //lloc on volem ensenyar missatges 
		"dir1": "down",
		"dir2": "left",
		"context": $("#qd_cos") //div del cos
	};
	
	function netejar_avisats(){
		$("#correudiv").removeClass("has-warning has-error has-success");
		$("#passworddiv").removeClass("has-warning has-error has-success");
		$("#password2div").removeClass("has-warning has-error has-success");
		$("#nomdiv").removeClass("has-warning has-error has-success");
		$("#cognom1div").removeClass("has-warning has-error has-success");
		$("#cognom2div").removeClass("has-warning has-error has-success");
		$("#telefondiv").removeClass("has-warning has-error has-success");
		$("#data_naixdiv").removeClass("has-warning has-error has-success");
		$("#ciutatdiv").removeClass("has-warning has-error has-success");
		$("#postaldiv").removeClass("has-warning has-error has-success");
		$("#carrerdiv").removeClass("has-warning has-error has-success");
		$("#numerodiv").removeClass("has-warning has-error has-success");
		$("#pisdiv").removeClass("has-warning has-error has-success");
		$("#portadiv").removeClass("has-warning has-error has-success");	
		
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
	
	$("#formulariregistrar").submit(function(){//La hora de clicar per afegir, comprovarem que tots els camps estiguin bé i enviar, si es contrari no deixarem enviar i farem avis.
		/*var correcte = true;	
		var divs = ["correudiv", "passworddiv", "password2div", "nomdiv", "cognom1div", "cognom2div", "telefondiv", "data_naixdiv", "ciutatdiv", "postaldiv", "carrerdiv", "numerodiv", "pisdiv", "portadiv"];
		for(i=0;i<divs.length;i++){
			alert("#"+divs[i]);
			if($("#"+divs[i]).hasClass('has-error') || $("#"+divs[i]).hasClass('has-warning')){ //si te classe has-error avisem que s'ha de revisar que no té bé
				alert("ERROR:".divs[i]);
				correcte = false;
			}		
		}

		if($("#pis").val().length != 0 || $("#porta").val().length != 0) { //comprova que un dels dos es introduit per obligar introduir els dos o cap per evitar enviar un del dos introduit.
			if($("#pis").val().length != 0 && $("#porta").val().length != 0) {
			} else{
				mostrar_notificacio_pnotify('Info: ','S\' ha de tenir afegit pis i porta o sense que no es obligatori si es una casa sola.','error');
				correcte = false;	
			}
		}
		return false;
		//return correcte;*/
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
