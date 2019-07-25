
    var refran= ["a  b u e n  e n t e n d e d o r  p o c a s  p a l a b r a s  b a s t a n",
     "a  b u e n  h a m b r e  n o  h a y  p a n  d u r o",
     "a  b u e n a s  h o r a s  m a n g a s  v e r d e s",
     "a  c a b a l l o  r e g a l a d o  n o  l e  m i r e s  e l  d i e n t e",
     "a  c a d a  c e r d o  l e  l l e g a  s u  S a n  M a r t i n",
     "b u r r o  g r a n d e  a n d e  o  n o  a n d e",
     "c a d a  c u a l  e n  s u  c a s a  y  D i o s  e n  l a  d e  t o d o s",
     "c a d a  l o c o  c o n  su  t e m a",
     "c a d a  m o n e d a  t i e n e  d o s  c a r a s",
     "d a m e  p a n  y  d i m e  t o n t o",
     "d a t e  p r i s a  p e r o  n o  c o r r a s",
     "d e  a q u e l l o s  p o l v o s  v i e n e n  e s t o s  l o d o s ",
     "d e  d o n d e  n o  h a y  n o  s e  p u e d e  s a c a r",
     "d e  l a  c a l l e  v e n d r a  q u i e n  d e  t u  c a s a  t e  e c h a r a",
     "d e  l o  q u e  n o  c u e s t a  l l e n a  l a  c e s t a",
     "e l  b u e n  p a ñ o  e n  e l  a r c a  s e  v e n d e",
     "e l  b u e y  s u e l t o  b i e n  s e  l a m e",
     "e l  g a t o  e s c a l d a d o  d e l  a g u a  f r i a  h u y e",
     "e l  h a b i t o  n o  h a c e  a l  m o n j e",
     "e l  h a m b r e  a g u z a  e l  i n g e n i o",
     "h a b l a n d o  d e l  r e y  d e  R o m a  p o r  l a  p u e r t a  a s o m a",
     "h a c i e n d o  y  d e s h a c i e n d o  s e  v a  a p r e n d i e n d o",
     "h a z  b i e n  y  n o  m i r e s  a  q u i e n",
     "l a  l e y  d e l  e m b u d o  p a r a  m i  l o  a n c h o  y  p a r a  t i  l o  a g u d o",
     "l a  o c a s i o n  l a  p i n t a n  c a l v a",
     "m a l  d e  m u c h o s  c o n s u e l o  d e  t o n t o s",
     "m a s  d i s c u r r e  u n  h a m b r i e n t o  q u e  c i e n  l e t r a d o s",
     "m a s  s a b e  e l  d i a b l o  p o r  v i e j o  q u e  p o r  d i a b l o",
     "m a s  v a l e  l o  m a l o  c o n o c i d o  q u e  l o  b u e n o  p o r  c o n o c e r",
     "m a s  v a l e  l l e g a r  a  t i e m p o  q u e  r o n d a r  u n  a ñ o",
     "n a d i e  e s  p r o f e t a  e n  s u  t i e r r a",
     "n a d i e  e s c a r m i e n t a  e n  c a b e z a  a j e n a",
     "n a d i e  t i r a  p i e d r a s  a  s u  t e j a d o",
     "n i  p i d a s  a  q u i e n  p i d i o  n i  s i r v a s  a  q u i e n  s i r v i o",
     "n i  t a n t o  n i  t a n  c a l v o",
     "o b r a s  s o n  a m o r e s  q u e  n o  b u e n a s  r a z o n e s",
     "o j o s  q u e  n o  v e n  c o r a z o n  q u e  n o  s i e n t e",
     "p a l o s  c o n  g u s t o  n o  d u e l e n",
     "p a r a  e s e  v i a j e  n o  s e  n e c e s i t a n  a l f o r j a s",
     "p e l i l l o s  a  l a  m a r"
    ]; 
     

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
          if (counter/longRefran >= 0.4) {
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
var restart= "<input id='reinicio' type='button' value='Volver a Jugar' onclick='location.reload()'/>";
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






