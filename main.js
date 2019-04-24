"use strict"; 
//*********************************variables*****************************************************//

/* pour acceder à mon formulaire : document.forms["calculatrice"] ou bien document.calculatrice*/

var HTT;
var TTC;
const TAUX_TVA =20;
var TVA;
var discount;
var TTCdiscount;
var price = document.getElementById("price");
var result = document.getElementById("result");
var choice= document.getElementById("choice");
var discount=document.getElementById("discount");
var buttonCaclcul= document.getElementById("calculation");
var buttonClear= document.getElementById("clear");
var message = document.querySelector("p");

//********************************functions *****************************************************//


function calculTTC(){
	HTT =price.value;
    HTT=parseFloat(HTT);
	if (isNaN(HTT)== false && HTT > 0){
	TVA=HTT*TAUX_TVA/100;
	TTC=TVA+HTT;
	}
}
	
function calculTTCsansdiscount() {
	calculTTC();
	if(isNaN(TTC) == false){
	result.value = TTC;
	}else{
		result.value="";
	}
	}
	
function calculTTCavecdiscount(){
	discount= discount.value;
	discount=parseFloat(discount);
	if (isNaN(discount) ==false && discount >0) {
		calculTTC();
		TTCdiscount= TTC-(TTC*discount/100);
		result.value= TTCdiscount;
	}else{
		message.textContent="vous n'avez pas defini de discount";
		result.value="";
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
	
	switch(choice.value){
		case"oui":
		if(isNaN(price.value)==false && price.value!==""){
		calculTTCavecdiscount();
	}else{
		message.textContent="vous n'avez pas saisi un nombre";
	
	}
		break;

		case "non":
		if(isNaN(price.value)==false&& price.value!==""){
		calculTTCsansdiscount();
	}else{
		message.textContent="vous n'avez pas saisi un nombre";
	}
		break;
		default:
		clear();
	}
});

buttonClear.addEventListener("click", clear);