
    var refran= ["c o m e  i l  c a c i o  s u i  m a c c h e r o n i",
    "c o m e  i  c a v o l i  a  m e r e n d a",
    "f a t t i  m a s c h i  p a r o l e  f e m m i n e",
    "o  m a n g i a r  q u e l l a  m i n e s t r a  o  s a l t a r  q u e l l a  f i n e s t r a",
    "c h i  t a c e  a c c o n s e n t e",
    "o g n i  p a z z o  v u o l  d a r  c o n s i g l i o",
    "i l  t r o p p o  s t r o p p i a",
    "u n o  p e r  u n o  n o n  f a  m a l e  a  n e s s u n o",
    "i n  b o c c a  a l  l u p o",
    "a n n o  n u o v o  v i t a  n u o v a",
    "c h i  t r o v a  u n  a m i c o  t r o v a  u n  t e s o r o",
    "t u t t e  l e  s t r a d e  c o n d u c o n o  a  R o m a",
    "c h i  v a  p i a n o  v a  s a n o  e  v a  l o n t a n o"
   ]; 
    //https://www.infoidiomas.com/blog/9807/refranes-del-italiano/

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
var restart= "<input id='reinicio' type='button' value='Gioca di Nuovo' onclick='location.reload()'/>";
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





