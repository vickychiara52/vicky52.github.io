/* ES EL MISMO CODIGO, SOLO QUE MAS MEJORADO*/

/*creamos un arreglo de imagenes */
var imagenes= ["c1.jpeg","c2.jpeg","c3.jpeg","c4.jpeg","c5.jpeg","c6.jpeg","c7.jpeg"];

/*mostramos la primera imagen para el slider */
document.Imagen.src=imagenes[0];

/* hacemos referencia a los botones derecho e izquierdo con queryselector*/
var sliderderecha= document.querySelector(".slider-derecho");
var sliderizquierda=document.querySelector(".slider-izquierdo");

/*declaramos un contador para las transiciones */
var contador=0;

/*implementamos la funcion mover derecha*/
function moverderecha()
{
    contador++; /*el contador se incrementa */
    if(contador>imagenes.length-1)/*con la condicion reiniciamo el slider */
        {
            contador=0; /*el contador se pone en cero otra vez*/
        }
    document.Imagen.src=imagenes[contador];/*mostrando de acuerdo al indice*/
}
/*transicion automatica del slider*/
var intervalo=setInterval(moverderecha,2000);

/* el evento esta mejorado porque limpiamos o cancelamos la funcion "setInterval"*/
sliderderecha.addEventListener("click",function()
{
    clearInterval(intervalo);/*limpiamo el intervalo*/
    moverderecha();/*llamamos a la funcion moverderecha */
    intervalo=setInterval(moverderecha,2000);
})

/*implementamos la funcion mover izquierda*/
function moverizquierda()
{
    contador--; /*el contador desminuye */
    if(contador<0)/*salvamos el indexado no existe posicion -1 */
        {
            contador=imagenes.length-1;/*el contador vuelve a 3 */
        }
        document.Imagen.src=imagenes[contador];/*mostrando de acuerdo al indice*/
}
/* el evento esta mejorado porque limpiamos o cancelamos la funcion "setInterval"*/
sliderizquierda.addEventListener("click",function(){
    clearInterval(intervalo);/*limpiamo el intervalo*/
    moverizquierda();/*llamamos a la funcion moverderecha */
    intervalo=setInterval(moverderecha,2000);
});



