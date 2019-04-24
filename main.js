"use strict"; 
//*********************************variables*****************************************************
/* pour acceder à mon formulaire : document.forms["calculatrice"] ou bien document.calculatrice*/
var HTT;
var TTC;
const TAUX_TVA =20;
var TVA;
var input1 = document.getElementById("price");
var input2 = document.getElementById("result");
var buttonCaclcul= document.getElementById("calcul");
var buttonClear= document.getElementById("clear");
var message = document.querySelector("p");

//********************************functions *****************************************************//

function calculTTC() {
	HTT =input1.value;
    HTT=parseFloat(HTT);
	if (isNaN(HTT)== false && HTT !== 0) {
	TVA=HTT*TAUX_TVA/100;
	TTC=TVA+HTT;
	input2.value = TTC;
	}else{
	
	message.textContent="ceci n'est pas un nombre, veuillez saisir un nombre SVP";
	}
}

function clear() {
	input1.value = "";
	input2.value = "";
	message.textContent="";
}

//**************************************Events***********************************************//


buttonCaclcul.addEventListener('click', calculTTC );
buttonClear.addEventListener('click', clear);