"use strict"
let stringCorreo4Dinamico = "";

//Mensaje
var nombre = localStorage.getItem('nombre')
var tipoPelo = localStorage.getItem('tipoPelo')
var hebras = localStorage.getItem('hebras')
var cuantoPelo = localStorage.getItem('cuantoPelo')
var porosidad = localStorage.getItem('porosidad')
var cueroc = localStorage.getItem('cueroc')
var ultima = localStorage.getItem('ultima')
document.getElementById('titulo1').innerHTML = "Hola " + nombre + "🥰🥰!!!"
document.getElementById('subtitulo1').innerHTML = "El resultado de tu test arrojó que tu pelo es " + tipoPelo + ", " + hebras + ", " + cuantoPelo + ", " + "<strong>" + porosidad + "</strong>" + ", cuero cabelludo " + cueroc + " " + ultima + ".\n¡Esta información es muy útil para cuando quieras probar nuevos productos puedas elegir los correctos para ti! 🤗\nA continuación te dejamos lo que te recomendamos nosotras de acuerdo a tus caracteristicas. Esperamos que el quiz te haya sido de mucha ayuda. ¡¡Un abrazo!! 🧡🧡🧡"
//Cartas
var stringFinal = ""
//tipo pelo3 check
if (localStorage.getItem('tipoPelo') == "ondulado") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/CremaDePeinarOndulados.PNG",
        "Crema de peinar lola ondulado",
        "14.990 CLP",
        "https://esderulos.cl/products/lola-cosmetics-crema-de-peinar-ondulados")

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/GelAmarillo.PNG",
        "Gel amarillo salon line",
        "14.990 CLP",
        "https://esderulos.cl/products/salon-line-gel-fijacion-alta-con-proteina")
}
else if (localStorage.getItem('tipoPelo') == "ruliento") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/amido.PNG",
        "Amido secreto griffus",
        "12.990 CLP",
        "https://esderulos.cl/products/griffus-amido-secreto")

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/GelAmarillo.PNG",
        "Gel amarillo salon line",
        "14.990 CLP",
        "https://esderulos.cl/products/salon-line-gel-fijacion-alta-con-proteina")
}
else if (localStorage.getItem('tipoPelo') == "afro") {
    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/Cantu.PNG",
        "Cantu Leave In",
        "12.990 CLP",
        "https://esderulos.cl/products/cantu-activador-de-rizos")

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/GelAmarillo.PNG",
        "Salon line gel amarillo",
        "14.990 CLP",
        "https://esderulos.cl/products/salon-line-gel-fijacion-alta-con-proteina")

}
//Hebras4 Check
if (localStorage.getItem('hebras') == "fino") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/GelSkala.PNG",
        "Gel skala",
        "9.990 CLP",
        "https://esderulos.cl/products/skala-gel-liquido")
}
//cuanto pelo5 check
if (localStorage.getItem('cuantoPelo') == "baja densidad") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/Cepillo_Denman_d3.PNG",
        "Cepillo denman d3",
        "18.990 CLP",
        "https://esderulos.cl/products/cepillo-denman-d3")
}
else if (localStorage.getItem('cuantoPelo') == "densidad media") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/Cepillo_Denman_d3.PNG",
        "Cepillo denman d3",
        "18.990 CLP",
        "https://esderulos.cl/products/cepillo-denman-d3")
}
else if (localStorage.getItem('cuantoPelo') == "alta densidad") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/Cepillo_Denman_d31.PNG",
        "Cepillo denman d31",
        "18.990 CLP",
        "https://esderulos.cl/products/cepillo-denman-d31")
}
//porosidad6 check
if (localStorage.getItem('porosidad') == "porosidad baja") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/ruliboxBaja.PNG",
        "Ruli box baja",
        "79.990 CLP",
        "https://esderulos.cl/products/ruli-box?variant=40817448222903")
}
else if (localStorage.getItem('porosidad') == "porosidad media") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/ruliboxAltaMedia.PNG",
        "Ruli box alta/media",
        "79.990 CLP",
        "https://esderulos.cl/products/ruli-box-porosidad-media-alta")
}
else if (localStorage.getItem('porosidad') == "porosidad alta") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/ruliboxAltaMedia.PNG",
        "Ruli box alta/media",
        "79.990 CLP",
        "https://esderulos.cl/products/ruli-box-porosidad-media-alta")
}
//cueroc7 check
if (localStorage.getItem('cueroc') == "graso") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/citrico.PNG",
        "Biotherapy citrico",
        "6.990 CLP",
        "https://esderulos.cl/products/bioherapy-shampoo-citrico-organico")
}
else if (localStorage.getItem('cueroc') == "medio") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/granada.PNG",
        "Biotherapy granada",
        "6.990 CLP",
        "https://esderulos.cl/products/bioherapy-shampoo-granada-organico")
}
else if (localStorage.getItem('cueroc') == "seco") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/AloeVera.PNG",
        "Biotherapy aloe vera",
        "6.990 CLP",
        "https://esderulos.cl/products/bioherapy-shampoo-aloe-vera?_pos=3&_sid=feac31523&_ss=r")
}
//ultima8
if (localStorage.getItem('ultima') == "y con caspa") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/AntiCaspa.PNG",
        "Natural detox shampoo anticaspa",
        "9.990 CLP",
        "https://esderulos.cl/products/natural-detox-shampoo-anticaspa-en-barra")
}
else if (localStorage.getItem('ultima') == "y tinturado y/o decolorado") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/seloquehiciste.PNG",
        "Lola cosmetic se lo que hiciste la quimica pasada",
        "13.990 CLP",
        "https://esderulos.cl/products/lola-cosmetics-mascarilla-se-lo-que-hiciste-la-quimica-pasada?_pos=1&_sid=44dc8c08a&_ss=r")
}
else if (localStorage.getItem('ultima') == "y canas") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/canas.png",
        "Shampoo canas lola cosmetics y acondicionador para canas",
        "10.990 CLP",
        "https://esderulos.cl/products/lola-cosmetics-shampoo-para-canas")
}
else if (localStorage.getItem('ultima') == "y con exposición al sol, playa y piscina") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/aceite.PNG",
        "Lola cosmetic aceite de zanahoria y lola crema bendita playa",
        "8.990 CLP",
        "https://esderulos.cl/products/lola-cosmetics-aceite-de-zanahoria-y-oliva?variant=40012761137335&utm_source=revenuehunt&utm_medium=quiz&utm_campaign=PMHMm6")
}
else if (localStorage.getItem('ultima') == "y expuesto a planchas y secadores de alta temperatura") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/patagua.PNG",
        "Lola cosmetics aceite de patagua",
        "8.990 CLP",
        "https://esderulos.cl/products/lola-cosmetics-aceite-de-pataua-y-moringa?_pos=1&_sid=a050f64a2&_ss=r")
}
else if (localStorage.getItem('ultima') == "y con caida de cabello") {

    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/aminoxine.PNG",
        "Aminoxine plus",
        "13.990 CLP",
        "https://esderulos.cl/products/aminoxine-plus-suplementos-para-el-pelo?_pos=1&_sid=c613e130b&_ss=r")
    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/anticaidaSheetTonico.PNG",
        "Sheet - Tonico Anticaída",
        "15.192 CLP",
        "https://esderulos.cl/products/sheet-tonico-anticaida?_pos=1&_sid=9c089e541&_ss=r")
    stringFinal = stringFinal + obtener_string_carta(
        "imagenes/anticaidaSheetShampoo.PNG",
        "Sheet - Shampoo Anticaída",
        "14.392 CLP",
        "https://esderulos.cl/products/sheet-shampoo-anticaida?pr_prod_strat=copurchase&pr_rec_id=8c0e8fa22&pr_rec_pid=7113455108279&pr_ref_pid=7113443180727&pr_seq=uniform")
}


//String cartas
function obtener_string_carta(rutaImagen, titulo, precio, urlProducto) {

    stringCorreo4Dinamico += "<li><a href=" + urlProducto + ">"+titulo+ " - " + precio +"</a></li>"
    return "<div class='col m-1'> <div class='card' style='width: 18rem;'><img src=" + rutaImagen + " class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title text-center'>" + titulo + "</h5><h6 class='card-text text-center'>" + precio + "</h6><div class='d-flex justify-content-center'><a href=" + urlProducto + " style='background-color: #63b3b3; border:none; border-radius: 3px; padding: 7px 20px; color: black ; font-family: arial; margin-top: 10px' class='btn btn-primary' target='_blank'>VER PRODUCTO</a></div></div></div></div>"
}

//String correo
let stringCorreo1 = 'Hola ';
let stringCorreo2Dinamico = localStorage.getItem('nombre');
let stringCorreo3 = "<br><br>Estos son los productos que hemos seleccionado para ti de acuerdo a tu tipo de pelo, esperamos que te gusten <br><br> <lu>";

let stringCorreo5 = "</lu><br><br>Tambien puedes revisar las respuestas de tu quiz <br><a href='http://localhost/esderulos/11resumen.html'>AQUI</a>!<br><br>Esperamos que esta informacion te sea de ayuda a la hora de elegir tus productos!!<br><br>Un abrazo y libera tus rulos!!<br><br>Esderulos shop";
function concatenarStringCorreo(titulo, urlProducto, precio){
    ""
}

document.getElementById('cartas').innerHTML = stringFinal

document.cookie = 'email=' + localStorage.getItem('email');
document.cookie = 'nombre=' + localStorage.getItem('nombre');
document.cookie = 'body=' +stringCorreo1+stringCorreo2Dinamico+stringCorreo3+stringCorreo4Dinamico+stringCorreo5;
//$.get("correo.php?nombre=hola")
$.ajax({
    url: "correo.php",
    success: function(data){
        console.log(data);
    }
});