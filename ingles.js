
    var refran= ["k n o w l e d g e  i s  n o  b u r d e n",
    "a  w o r d  i s  e n o u g h  t o  t h e  w i s e",
    "e a s i e r  s a i d  t h a n  d o n e  a  s t r e t c h",
    "a  s t i t c h  i n  t i m e  s a v e s  n i n e",
    "e v e r y  l a w  h a s  i t s  l o o p h o l e",
    "a n  e y e  f o r  a n  e y e   a  t o o t h  f o r  a  t o o t h",
    "a  b i r d  i n  t h e  h a n d  i s  w o r t h  t w o  i n  t h e  b u s h",
    "l e a r n  s o m e t h i n g  n e w  e v e r y  d a y",
    "b i r d s  o f  a  f e a t h e r  f l o c k  t o g e t h e r",
    "i  g a v e  y o u  a  s t i c k  t o  b r e a k  m y  o w n  h e a d  w i t h",
    "w h a t  c a n t  b e  c u r e d  m u s t  b e  e n d u r e d"
   ]; 
    //https://www.idiomasumh.es/es/blog/refranes-y-dichos-populares-en-ingles

     // para sacar un refrán al azar:
    var random1= Math.floor(Math.random() * refran.length);
    var randomRefran=refran[random1];
  
     //sustituir numero aleatorio de caracteres por "_"
     var refran_NoSpace= randomRefran.replace(/\s+/g, '');
     var refran_Final=randomRefran;
     var barraBaja="_";
     var longRefran = refran.length;

      while(true){
         var letra_Random=Math.floor(Math.random() * refran_NoSpace.length);
         var letra_Random1 = refran_NoSpace[letra_Random];
         var regex = new RegExp(letra_Random1,"g")
         refran_Final= refran_Final.replace(regex ,'_');
         
         
         counter = 0
         for (i=0;i<=refran_Final.length;i++) {
             if (refran_Final[i] == barraBaja) {
                 counter++
             }
         }
         if (counter/longRefran >= 0.9) {
             break
         }
      }
      refran_Final=refran_Final.toUpperCase();
    

// Pintar la frase con _ en pantalla y tener un prompt/input o lo que sea donde introducir letras para completar la frase...
function myFunction() {
document.getElementById("refran_rellenar").innerHTML = String(refran_Final);

}


// Hay que definir un numero maximo de intentos fallidos :si se superan se pierde,si se completa la frase antes has ganado.
var get_letra="";
var letter_position=[];
var vidas=3;
var hearts="";
var restart= "<input id='reinicio' type='button' value='Play Again' onclick='location.reload()'/>";
var win= "<img id='win' src='imagenes/win.jpg' alt='win'>";
var lose="<img id='lose' src='imagenes/lose.png' alt='loose'>";

function myFunction1(){
   letter_position.length = 0;
   get_letra=document.getElementById("get_Letter").value;
  for(var i=0; i<randomRefran.length;i++){  
      if(get_letra==randomRefran[i]){
         letter_position.push(i);
      }
  }
  if(letter_position.length === 0){
      vidas--;
  } 
 
  

      var aux = refran_Final.split("");
  for(var i=0; i<letter_position.length;i++){
      aux[letter_position[i]]=get_letra;
  }
  
  
  
  refran_Final = aux.join("").toUpperCase(); 
  document.getElementById("get_Letter").value="";
  document.getElementById("refran_rellenar").innerHTML = refran_Final

  if(vidas==3){
      
   hearts="<img id='heart' src='imagenes/heart.png' alt='heart'>"+"<img id='heart' src='imagenes/heart.png' alt='heart'>"+"<img id='heart' src='imagenes/heart.png' alt='heart'>";
     }else if(vidas==2){
   hearts="<img id='heart' src='imagenes/heart.png' alt='heart'>"+"<img id='heart' src='imagenes/heart.png' alt='heart'>";
     }else if(vidas==1){
       hearts="<img id='heart' src='imagenes/heart.png' alt='heart'>"; 
     }else{
         hearts="";
     }
  document.getElementById("vidas").innerHTML=hearts;
  console.log(vidas);

  if(vidas==0){
      document.getElementById("reiniciar").innerHTML=restart;
      document.getElementById("ganas").innerHTML=lose;
  }
  if(!refran_Final.includes("_")){
      document.getElementById("reiniciar").innerHTML=restart;
      document.getElementById("ganas").innerHTML=win;
  }
}  






