const btnlinea = document.querySelector('#btnlinea');
const btnMarcas = document.querySelector('#btnMarca');
const MostrarLineas = document.querySelector('.MostrarLineas');
const MostrarMarcas = document.querySelector('.MostrarMarcas');
const body = document.querySelector('.body');
const btnmenu = document.querySelector('.icon-menu');
const btncerrar = document.querySelector('.icon-equis');





//Event Listener
 btnlinea.addEventListener("click", linea);
 btnMarcas.addEventListener("click",marca);
 btnmenu.addEventListener('click',sacarScroll);
 btncerrar.addEventListener('click',volverScroll);


//Eventos
function linea(){
   
    MostrarLineas.classList.toggle('mostrar');
    MostrarMarcas.classList.remove('mostrar')
 
}


function marca(){
     MostrarMarcas.classList.toggle('mostrar');
     MostrarLineas.classList.remove('mostrar');
    
}

function sacarScroll(){
    body.classList.add('noScroll');
}

function volverScroll(){
    body.classList.remove('noScroll');
}