"use strict"; 
//*********************************variables*****************************************************//
/* pour acceder à mon formulaire : document.forms["calculatrice"] ou bien document.calculatrice*/
var HTT;
var TTC;
const TAUX_TVA =20;
var TVA;
var remise;
var TTCremise;
var price = document.getElementById("price");
var result = document.getElementById("result");
var choice= document.getElementById("choice");
var discount=document.getElementById("remise");
var buttonCaclcul= document.getElementById("calcul");
var buttonClear= document.getElementById("clear");
var message = document.querySelector("p");

//********************************functions *****************************************************//


function calculTTC(){
	HTT =price.value;
    HTT=parseFloat(HTT);
	if (isNaN(HTT)== false && HTT !== 0){
	TVA=HTT*TAUX_TVA/100;
	TTC=TVA+HTT;
	}
}
	
function calculTTCsansRemise() {
	calculTTC();
	if(isNaN(TTC) == false){
	result.value = TTC;
	}else{
		message.textContent="vous n'avez pas saisi un nombre";
	}
	}
	
function calculTTCavecRemise(){
	remise= discount.value;
	remise=parseFloat(remise);
	if (isNaN(remise) ==false && remise >0) {
		calculTTC();
		TTCremise= TTC-(TTC*remise/100);
		result.value= TTCremise;
	}else{
		message.textContent="vous n'avez pas defini de remise";
}
}


function clear() {
	price.value = "";
	result.value = "";
	discount.value="";
	message.textContent="";
}

//**************************************Events***********************************************//


buttonCaclcul.addEventListener('click', function(){
	if(choice.value == "oui" && (isNaN(price.value)== false && price.value!=="")){
		calculTTCavecRemise();
	}else{
		calculTTCsansRemise();
	}
});

buttonClear.addEventListener("click", clear);