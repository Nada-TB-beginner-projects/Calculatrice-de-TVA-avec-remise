var HTT;
const TAUX_TVA = 20.0;
var TVA;
var TTC;
var remise;


/* pour acceder à mon formulaire : document.forms["calculatrice"] ou bien document.calculatrice*/

/*function getHTT(){
 ;
 return HTT;
}*/

function calculTTC() {
HTT= document.calculatrice.price;
TVA= HTT*TAUX_TVA/100;
TTC=HTT+TVA;
return TTC;
document.getElementById("result").value= TTC;
}

/*function calculTTCRemise(){

}*/

