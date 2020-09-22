//VARIABLES DEL PROYECTO
const btnlinea = document.querySelector('#btnlinea');
const btnMarcas = document.querySelector('#btnMarca');
const MostrarLineas = document.querySelector('.MostrarLineas');
const MostrarMarcas = document.querySelector('.MostrarMarcas');
const body = document.querySelector('.body');
const btnmenu = document.querySelector('.icon-menu');
const menu = document.querySelector('#btn-menu');
const btncerrar = document.querySelector('.icon-equis');
const btnenviarh = document.querySelector('#enviarh');
const btnenviarmodal = document.querySelector('#enviarmodal');
const btnenviarfooter = document.querySelector('#enviarfooter');
const selectormoto = document.querySelector('#productos');
const resultado = document.querySelector('#productos');
const loader = document.querySelector('#loader');

//BOTONES DE FILTRO
const btnfiltrar110 = document.querySelector('#linea110');
const btnfiltrar125 = document.querySelector('#linea125');
const btnfiltrar135 = document.querySelector('#linea135');
const btnfiltrar150 = document.querySelector('#linea150');
const btnfiltrar200 = document.querySelector('#linea200');

const btnbajaj = document.querySelector('#bajaj');
const btnzanella = document.querySelector('#zanella');
const btncorven = document.querySelector('#corven');
const btnkeller = document.querySelector('#keller');
const btnmondial = document.querySelector('#mondial');
const btnmotomel = document.querySelector('#motomel');

//FIN BOTONES DE FILTRO



const datosFiltro = {
    linea: '',
    marca: ''
}


//FORMULARIO MODAL
const Nombre = document.querySelector('#nombre');
const dni = document.querySelector('#dni');
const Localidad = document.querySelector('#localidad');
const telefono = document.querySelector('#telefono');
const metodopago = document.querySelector('#metodopago');
const motoid = document.querySelector('#motoid');
//



//FIN VARIABLES DEL PROYECTO

//EVENT LISTENERS//////////////////////////////////////////////////////////

//Evento Al Iniciar
document.addEventListener('DOMContentLoaded', () => {
    mostarMotos(motos);
})



//Event Listener General
btnlinea.addEventListener("click", linea);
btnMarcas.addEventListener("click", marca);
btnmenu.addEventListener('click', sacarScroll);
btncerrar.addEventListener('click', volverScroll);
btnenviarh.addEventListener('click', EnviarWasapHeader);
btnenviarmodal.addEventListener('click', EnviarWasapModal);
btnenviarfooter.addEventListener('click', EnviarWasapFooter);
selectormoto.addEventListener('click', motoseleccionada);





// FIN EVENT LISTENERS//////////////////////////////////////////////////////////

//eventMenu
btnfiltrar110.addEventListener('click', (e) => {
    e.preventDefault();    
    datosFiltro.linea = "110";
    filtrarMotos();
    menu.checked = false;
    volverScroll();


});

btnfiltrar125.addEventListener('click', (e) => {
    e.preventDefault();
    datosFiltro.linea = "125";
    filtrarMotos();
    menu.checked = false;
    volverScroll();
})

btnfiltrar135.addEventListener('click', (e) => {
    e.preventDefault();
    datosFiltro.linea = "135";
    filtrarMotos();
    menu.checked = false;
    volverScroll();
})

btnfiltrar150.addEventListener('click', (e) => {
    e.preventDefault();
    datosFiltro.linea = "150";
    filtrarMotos();
    menu.checked = false;
    volverScroll();
})

btnfiltrar200.addEventListener('click', (e) => {
    e.preventDefault();
    datosFiltro.linea = "200";
    filtrarMotos();
    menu.checked = false;
    volverScroll();
})

btnbajaj.addEventListener('click', (e) => {
    e.preventDefault();
    datosFiltro.marca = "Bajaj";
    filtrarMotos();
    menu.checked = false;
    volverScroll();
})

btnzanella.addEventListener('click', (e) => {
    e.preventDefault();
    datosFiltro.marca = "Zanella";
    filtrarMotos();
    menu.checked = false;
    volverScroll();
})

btncorven.addEventListener('click', (e) => {
    e.preventDefault();
    datosFiltro.marca = "Corven";
    filtrarMotos();
    menu.checked = false;
    volverScroll();
})

btnkeller.addEventListener('click', (e) => {
    e.preventDefault();
    datosFiltro.marca = "Keller";
    filtrarMotos();
    menu.checked = false;
    volverScroll();
})

btnmondial.addEventListener('click', (e) => {
    e.preventDefault();
    datosFiltro.marca = "Mondial";
    filtrarMotos();
    menu.checked = false;
    volverScroll();
}),

    btnmotomel.addEventListener('click', (e) => {
        e.preventDefault();
        datosFiltro.marca = "Motomel";
        filtrarMotos();
        menu.checked = false;
        volverScroll();
    })



//MODULOS//////////////////////////////////////////////////////////



//Eventos Boton mostrar opciones
function linea() {

    MostrarLineas.classList.toggle('mostrar');
    MostrarMarcas.classList.remove('mostrar')

}

//Eventos Boton mostrar marcas
function marca() {
    MostrarMarcas.classList.toggle('mostrar');
    MostrarLineas.classList.remove('mostrar');

}

function sacarScroll() {
    body.classList.add('noScroll');
}

function volverScroll() {
    body.classList.remove('noScroll');
}

function motoseleccionada(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn')) {

        seleccion = e.target.parentElement.parentElement;
        Definirmotoseleccionada(seleccion);

    }


}

function Definirmotoseleccionada(seleccion) {
    const info = {
        modelo: seleccion.querySelector('h2').textContent
    }

    console.log(info.modelo);

    motoid.value = info.modelo;




}


//Mostrar Motos

function mostarMotos(motos) {
    limpiarHTML();

    var row = document.createElement('div');
    row.setAttribute('class', 'row');
    resultado.appendChild(row);

    motos.forEach(moto => {

        const { id, modelo, descripcion, imagen, marcaimagen } = moto;
        var div = document.createElement('div');
        div.setAttribute('class', 'item col-xs12 col-sm-12 col-md-6 equal');
        div.innerHTML = `   
                <div class="header clearfix">
                    <h2 class="float-left motonombre" id="nombremoto">${modelo}</h2>
                </div>
                <div class="descripcion">
                    <marquee><b>${descripcion}</b></marquee>
                </div>
                <div class="imagemoto clearfix">
                    <img src="img/Logo.png" alt="" class="logolocal">
                    <img src="${imagen}" alt="Pucara Motos Formosa" width="" id="motofoto" class="img-responsive">
                    <img src="${marcaimagen}" alt="" class="logomarca">
                </div>
                
                <div class="">
                    <button type="button" id="vermasfotos" class="vermas btn btn-block btn-light" data-toggle="modal" data-target="#${id}">Más Fotos</button>
                </div>            
                <div class="cotizar">                
                    <button type="button" id="btnCotizar" class="cotizar btn btn-danger btn-block " data-toggle="modal"
                        data-target="#modalForm">Quiero Asesoramiento</button>
                </div>
                
                
                
                <div class="row">
                <div class="col-md-12">           
                <!-- MODALES FOTOS MOTOS -->
    <div class="modal fade modalmoto " tabindex="-1" id="${id}" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">

          <div id="carouselExampleControls" class="carousel slide d-block d-sm-block " data-ride="carousel">
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img class="d-block w-100" src="${imagen}" alt="First slide">
              </div>
              <div class="carousel-item">
                  <img class="d-block w-100" src="${imagen}" alt="Second slide">
              </div>
              <div class="carousel-item">
                  <img class="d-block w-100" src="${imagen}" alt="Third slide">
              </div>
              <div class="carousel-item">
                  <img class="d-block w-100" src="${imagen}" alt="Third slide">
              </div>
              <div class="carousel-item">
                  <img class="d-block w-100" src="${imagen}" alt="Third slide">
              </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </a>
      </div>
      </div> </div>
        </div>
      <!-- MODALES FOTOS MOTOS -->`;
        row.appendChild(div);
    });
}

//Limpiar HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}


//ENVIAR WASAP HEADER

function EnviarWasapHeader(e) {
    e.preventDefault();
    // FORMULARIO HEADER
    const Nombre = document.querySelector('#hnombre').value;
    const dni = document.querySelector('#hdni').value;
    const Localidad = document.querySelector('#hlocalidad').value;
    const telefono = document.querySelector('#htelefono').value;
    const metodopago = document.querySelector('#hmediopago').value;


    // FORMULARIO HEADER
    const url = `https://api.whatsapp.com/send?phone=543704644585&text=Hola!,%20Me%20Llamo%20*${Nombre}*%20con%20dni:%20*${dni}*%20de%20la%20Localidad%20de%20*${Localidad}*,%20Estoy%20buscando%20Asesoramiento,%20mi%20numero%20de%20contacto%20es%20*${telefono}*%20y%20me%20interesa%20el%20metodo%20de%20pago:%20*${metodopago}*`;

    location.href = url;
}

function EnviarWasapFooter(e) {
    e.preventDefault();
    // FORMULARIO HEADER
    const Nombre = document.querySelector('#nombref').value;
    const dni = document.querySelector('#dnif').value;
    const Localidad = document.querySelector('#localidadf').value;
    const telefono = document.querySelector('#telefonof').value;
    const metodopago = document.querySelector('#mediopagof').value;


    // FORMULARIO HEADER
    const url = `https://api.whatsapp.com/send?phone=543704276950&text=Hola!,%20Me%20Llamo%20*${Nombre}*%20con%20dni:%20*${dni}*%20de%20la%20Localidad%20de%20*${Localidad}*,%20Estoy%20buscando%20Asesoramiento,%20mi%20numero%20de%20contacto%20es%20*${telefono}*%20y%20me%20interesa%20el%20metodo%20de%20pago:%20*${metodopago}*`;

    location.href = url;
}

function EnviarWasapModal(e) {
    e.preventDefault();
    // FORMULARIO MODAL


    const Nombre = document.querySelector('#nombre').value;
    const dni = document.querySelector('#dni').value;
    const Localidad = document.querySelector('#localidad').value;
    const telefono = document.querySelector('#telefono').value;
    const metodopago = document.querySelector('#mediopago').value;
    const mmodelo = motoid.value;
    // FORMULARIO MODAL

    const url = `https://api.whatsapp.com/send?phone=543704644585&text=Hola!,%20Me%20Llamo%20*${Nombre}*%20con%20dni:%20*${dni}*%20de%20la%20Localidad%20de%20*${Localidad}*,%20Estoy%20buscando%20Asesoramiento%20sobre%20la%20moto%20modelo:%20*${mmodelo}*,%20mi%20numero%20de%20contacto%20es%20*${telefono}*%20y%20me%20interesa%20el%20metodo%20de%20pago:%20*${metodopago}*`;

    location.href = url;
}



function filtrarMotos() {

    location.hash = '#productos';
    loader.style.display = 'flex';

    
    
  

    const resultado = motos.filter(filtrarMarca).filter(filtrarLinea);

   
   

    setTimeout(() => {
        loader.style.display = 'none';        
    },2000 );


    if (resultado.length) {
        mostarMotos(resultado);
    } else {
        noResultado();
    }

}



function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alert', 'alert-info');
    noResultado.textContent = 'Disculpa!,No se encontraron Resultados';
    resultado.appendChild(noResultado);

}

function filtrarMarca(moto) {
    const { marca } = datosFiltro;
    if (marca) {
        return moto.marca === marca;
    }
    return moto;
}

function filtrarLinea(moto) {
    const { linea } = datosFiltro;
    if (linea) {
        return moto.linea === linea;
    }
    return moto;
}

//FIN MODULOS//////////////////////////////////////////////////////////