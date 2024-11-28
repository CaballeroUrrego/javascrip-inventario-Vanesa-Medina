
//funcion declarada 
function estoEsUnaFuncion (){
    console.log("uno");
     console.log("Dos");
     console.log("tres");
 
 }
 
 
 //inovacion de funcion
 /*estoEsUnaFuncion();
 estoEsUnaFuncion();
 estoEsUnaFuncion();
 estoEsUnaFuncion();
 estoEsUnaFuncion();*/
 
 
 function unaFuncionQueDevuelveValor(){
     console.log("uno");
     return 19;
     console.log("Dos");
     console.log("Tres");
     return "La Funcion ha retornado una Cadena de texto";
 }
 let valorDeFuncion =unaFuncionQueDevuelveValor();
 console.log(valorDeFuncion);
 
 function saludar(nombre ="Anonimo",edad =0){
     console.log(`Hola ${nombre} tienes ${edad} años`);
 }
 //saludar("Caballero,24");
 //saludar();
 
 
 //
 function funcionDeclarada(){
     console.log("Esta es una funcion declarada,puede invocarse en cualquier parte de mi codigo incluso antes de que la funcion sea declarada");
 }
 funcionDeclarada();
 
 //funcion anonima
 const ffuncionExpresada = function (){
     console.log("Esto es una funcion expresada,es decir ,una funcion que se le ha asignado como valor a una variable ,si invocamos esta funcion antes de su definicion JS nos dira cannot access 'funcionExpresada' before inizializacion");
 }
 ffuncionExpresada();
 
 
 