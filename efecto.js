/*creamos un arreglo de imagenes */
var imagenes= ["f1.jpeg","f2.jpeg","f3.jpeg"]
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
            contador=0;  /*el contador se pone en cero otra vez*/
        }
    document.Imagen.src=imagenes[contador];/*mostrando de acuerdo al indice*/
}
/*este es el evento cuando hacemos clic las imagenes se mueven a la derecha */
sliderderecha.addEventListener("click",moverderecha)

/*transicion automatica del slider*/
setInterval(moverderecha,2000);

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
/*este es el evento cuando hacemos clic las imagenes se mueven a la derecha */
sliderizquierda.addEventListener("click",moverizquierda);