const btnlinea=document.querySelector("#btnlinea"),btnMarcas=document.querySelector("#btnMarca"),MostrarLineas=document.querySelector(".MostrarLineas"),MostrarMarcas=document.querySelector(".MostrarMarcas"),body=document.querySelector(".body"),btnmenu=document.querySelector(".icon-menu"),menu=document.querySelector("#btn-menu"),btncerrar=document.querySelector(".icon-equis"),btnenviarh=document.querySelector("#enviarh"),btnenviarmodal=document.querySelector("#enviarmodal"),btnenviarfooter=document.querySelector("#enviarfooter"),selectormoto=document.querySelector("#productos"),resultado=document.querySelector("#productos"),loader=document.querySelector("#loader"),btnfiltrar110=document.querySelector("#linea110"),btnfiltrar125=document.querySelector("#linea125"),btnfiltrar135=document.querySelector("#linea135"),btnfiltrar150=document.querySelector("#linea150"),btnfiltrar200=document.querySelector("#linea200"),btnbajaj=document.querySelector("#bajaj"),btnzanella=document.querySelector("#zanella"),btncorven=document.querySelector("#corven"),btnkeller=document.querySelector("#keller"),btnmondial=document.querySelector("#mondial"),btnmotomel=document.querySelector("#motomel"),datosFiltro={linea:"",marca:""},Nombre=document.querySelector("#nombre"),dni=document.querySelector("#dni"),Localidad=document.querySelector("#localidad"),telefono=document.querySelector("#telefono"),metodopago=document.querySelector("#metodopago"),motoid=document.querySelector("#motoid");function linea(){MostrarLineas.classList.toggle("mostrar"),MostrarMarcas.classList.remove("mostrar")}function marca(){MostrarMarcas.classList.toggle("mostrar"),MostrarLineas.classList.remove("mostrar")}function sacarScroll(){body.classList.add("noScroll")}function volverScroll(){body.classList.remove("noScroll")}function motoseleccionada(e){e.preventDefault(),e.target.classList.contains("btn")&&(seleccion=e.target.parentElement.parentElement,Definirmotoseleccionada(seleccion))}function Definirmotoseleccionada(e){const o={modelo:e.querySelector("h2").textContent};console.log(o.modelo),motoid.value=o.modelo}function mostarMotos(e){limpiarHTML();var o=document.createElement("div");o.setAttribute("class","row"),resultado.appendChild(o),e.forEach(e=>{const{id:t,modelo:a,descripcion:r,imagen:n,foto1:l,foto2:c,foto3:i,foto4:d,foto5:s,marcaimagen:u}=e;var m=document.createElement("div");m.setAttribute("class","item col-xs12 col-sm-12 col-md-6 equal"),m.innerHTML=`   \n                <div class="header clearfix">\n                    <h2 class="float-left motonombre" id="nombremoto">${a}</h2>\n                </div>\n                <div class="descripcion">\n                    <marquee><b>${r}</b></marquee>\n                </div>\n                <div class="imagemoto clearfix">\n                    <img src="img/Logo.png" alt="" class="logolocal">\n                    <img src="${n}" alt="Pucara Motos Formosa" width="" id="motofoto" class="img-responsive lazyload">\n                    <img src="${u}" alt="" class="logomarca">\n                </div>\n                \n                <div class="">\n                    <button type="button" id="vermasfotos" class="vermas btn btn-light" data-toggle="modal" data-target="#${t}">Más Fotos</button>\n                </div>            \n                <div class="cotizar">                \n                    <button type="button" id="btnCotizar" class="cotizar btn btn-danger btn-block " data-toggle="modal"\n                        data-target="#modalForm">Quiero Asesoramiento</button>\n                </div>\n                \n                \n                \n                <div class="row">\n                <div class="col-md-12">           \n                \x3c!-- MODALES FOTOS MOTOS --\x3e\n    <div class="modal fade modalmoto " tabindex="-1" id="${t}" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">\n        <div class="modal-dialog">\n          <div class="modal-content">\n\n          <div id="carouselExampleControls${t}" class="carousel slide d-block d-sm-block " data-ride="carousel">\n          <div class="carousel-inner">\n              <div class="carousel-item active">\n                  <img class="d-block w-100" src="${l}" alt="First slide">\n              </div>\n              <div class="carousel-item">\n                  <img class="d-block w-100" src="${c}" alt="Second slide">\n              </div>\n              <div class="carousel-item">\n                  <img class="d-block w-100" src="${i}" alt="Third slide">\n              </div>\n              <div class="carousel-item">\n                  <img class="d-block w-100" src="${d}" alt="Third slide">\n              </div>\n              <div class="carousel-item">\n                  <img class="d-block w-100" src="${s}" alt="Third slide">\n              </div>\n          </div>\n          <a class="carousel-control-prev" href="#carouselExampleControls${t}" role="button" data-slide="prev">\n              <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n              <span class="sr-only">Previous</span>\n          </a>\n          <a class="carousel-control-next" href="#carouselExampleControls${t}" role="button" data-slide="next">\n              <span class="carousel-control-next-icon" aria-hidden="true"></span>\n              <span class="sr-only">Next</span>\n          </a>\n      </div>\n      </div> </div>\n        </div>\n      \x3c!-- MODALES FOTOS MOTOS --\x3e`,o.appendChild(m)})}function limpiarHTML(){for(;resultado.firstChild;)resultado.removeChild(resultado.firstChild)}function EnviarWasapHeader(e){e.preventDefault();const o=`https://api.whatsapp.com/send?phone=543704644585&text=Hola!,%20Me%20Llamo%20*${document.querySelector("#hnombre").value}*%20con%20dni:%20*${document.querySelector("#hdni").value}*%20de%20la%20Localidad%20de%20*${document.querySelector("#hlocalidad").value}*,%20Estoy%20buscando%20Asesoramiento,%20mi%20numero%20de%20contacto%20es%20*${document.querySelector("#htelefono").value}*%20y%20me%20interesa%20el%20metodo%20de%20pago:%20*${document.querySelector("#hmediopago").value}*`;location.href=o}function EnviarWasapFooter(e){e.preventDefault();const o=`https://api.whatsapp.com/send?phone=543704276950&text=Hola!,%20Me%20Llamo%20*${document.querySelector("#nombref").value}*%20con%20dni:%20*${document.querySelector("#dnif").value}*%20de%20la%20Localidad%20de%20*${document.querySelector("#localidadf").value}*,%20Estoy%20buscando%20Asesoramiento,%20mi%20numero%20de%20contacto%20es%20*${document.querySelector("#telefonof").value}*%20y%20me%20interesa%20el%20metodo%20de%20pago:%20*${document.querySelector("#mediopagof").value}*`;location.href=o}function EnviarWasapModal(e){e.preventDefault();const o=document.querySelector("#nombre").value,t=document.querySelector("#dni").value,a=document.querySelector("#localidad").value,r=document.querySelector("#telefono").value,n=document.querySelector("#mediopago").value,l=`https://api.whatsapp.com/send?phone=543704644585&text=Hola!,%20Me%20Llamo%20*${o}*%20con%20dni:%20*${t}*%20de%20la%20Localidad%20de%20*${a}*,%20Estoy%20buscando%20Asesoramiento%20sobre%20la%20moto%20modelo:%20*${motoid.value}*,%20mi%20numero%20de%20contacto%20es%20*${r}*%20y%20me%20interesa%20el%20metodo%20de%20pago:%20*${n}*`;location.href=l}function filtrarMotos(){location.hash="#productos",loader.style.display="flex";const e=motos.filter(filtrarMarca).filter(filtrarLinea);setTimeout(()=>{loader.style.display="none"},2e3),e.length?mostarMotos(e):noResultado()}function noResultado(){limpiarHTML();const e=document.createElement("div");e.classList.add("alert","alert-info"),e.textContent="Disculpa!,No se encontraron Resultados",resultado.appendChild(e)}function filtrarMarca(e){const{marca:o}=datosFiltro;return o?e.marca===o:e}function filtrarLinea(e){const{linea:o}=datosFiltro;return o?e.linea===o:e}document.addEventListener("DOMContentLoaded",()=>{mostarMotos(motos)}),btnlinea.addEventListener("click",linea),btnMarcas.addEventListener("click",marca),btnmenu.addEventListener("click",sacarScroll),btncerrar.addEventListener("click",volverScroll),btnenviarh.addEventListener("click",EnviarWasapHeader),btnenviarmodal.addEventListener("click",EnviarWasapModal),btnenviarfooter.addEventListener("click",EnviarWasapFooter),selectormoto.addEventListener("click",motoseleccionada),btnfiltrar110.addEventListener("click",e=>{e.preventDefault(),datosFiltro.linea="110",filtrarMotos(),menu.checked=!1,volverScroll()}),btnfiltrar125.addEventListener("click",e=>{e.preventDefault(),datosFiltro.linea="125",filtrarMotos(),menu.checked=!1,volverScroll()}),btnfiltrar135.addEventListener("click",e=>{e.preventDefault(),datosFiltro.linea="135",filtrarMotos(),menu.checked=!1,volverScroll()}),btnfiltrar150.addEventListener("click",e=>{e.preventDefault(),datosFiltro.linea="150",filtrarMotos(),menu.checked=!1,volverScroll()}),btnfiltrar200.addEventListener("click",e=>{e.preventDefault(),datosFiltro.linea="200",filtrarMotos(),menu.checked=!1,volverScroll()}),btnbajaj.addEventListener("click",e=>{e.preventDefault(),datosFiltro.marca="Bajaj",filtrarMotos(),menu.checked=!1,volverScroll()}),btnzanella.addEventListener("click",e=>{e.preventDefault(),datosFiltro.marca="Zanella",filtrarMotos(),menu.checked=!1,volverScroll()}),btncorven.addEventListener("click",e=>{e.preventDefault(),datosFiltro.marca="Corven",filtrarMotos(),menu.checked=!1,volverScroll()}),btnkeller.addEventListener("click",e=>{e.preventDefault(),datosFiltro.marca="Keller",filtrarMotos(),menu.checked=!1,volverScroll()}),btnmondial.addEventListener("click",e=>{e.preventDefault(),datosFiltro.marca="Mondial",filtrarMotos(),menu.checked=!1,volverScroll()}),btnmotomel.addEventListener("click",e=>{e.preventDefault(),datosFiltro.marca="Motomel",filtrarMotos(),menu.checked=!1,volverScroll()});