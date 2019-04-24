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
var discountInput=document.getElementById("discount");
var buttonCaclcul= document.getElementById("calculation");
var buttonClear= document.getElementById("clear");
var message = document.querySelector("p");

//********************************functions *****************************************************//
function message1(){
	message.textContent=" vous n'avez pas saisi de nombre";
}

function message2() {
	message.textContent="vous n'avez pas saisi le taux de remise";
}

function calculTTC(){
	HTT= parseFloat(price.value);
	if(isNaN(price.value)==false && price.value >0){
		TVA= HTT*TAUX_TVA/100;
		TTC= HTT+TVA;
	}else{
		message1();
		TTC="";
		result.value="";
	}
}

function calculTTCWithOutDiscount(){
	calculTTC();
	if(isNaN(TTC)==false){
	result.value=TTC;
}
}
	
function calculTTCWithDiscount(){
	calculTTC();
	discount=parseFloat(discountInput.value);
	if (isNaN(discount)==false && discount>0) {	
	TTCdiscount= TTC-(TTC*discount/100);
	result.value= TTCdiscount;
	}else{
		message2();
	}
	
}

function clear(){
	message.textContent ="";
	price.value="";
	choice.value="";
	result.value="";
	discountInput.value="";
	
}



//**************************************Events***********************************************//

buttonCaclcul.addEventListener('click', function(){
	if(isNaN(price.value)==false){
	if(choice.value =="oui"){
		calculTTCWithDiscount();
	}else{
		calculTTCWithOutDiscount();
	}
}else{
	message1();
}});

buttonClear.addEventListener('click', clear);
