//Declarar variavel
 // var i = 0;



function cliquedomouse(){
    document.getElementById("msg").innerHTML= " Você conseguiu!";

}

var m = 20;
function escadinha(){
  m+=41;
  if(m%2==0){
    document.getElementById("msg").innerHTML= " Opa!";
    document.getElementById("botao").style.marginLeft= m + "px";
  }else {
    document.getElementById("msg").innerHTML= " Errou!";
    document.getElementById("botao").style.marginTop= m + "px";
  }
}



var n=1;
function quadrado(){
  if(n==1){
    document.getElementById("botao").style.marginLeft= "300px";
  }
    if(n==2){
    document.getElementById("botao").style.marginTop= "300px";
  }
  if(n==3){
    document.getElementById("botao").style.marginLeft="100px";
  }
  if(n==4){
    document.getElementById("botao").style.marginTop= "100px";
  }
  n++;
  if(n==5){
    n=1;
  }

}
// ----------------------------------Jeito Certo----------------------------------
function abc(){
  alert("AHHH");
}

document.getElementById("ah").addEventListener("click", abc);
