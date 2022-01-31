var getData = function() {
    var control = document.getElementById("control").value; 
    var entidad = document.getElementById("entidad").value;
    var sucursal = document.getElementById("sucursal").value;
    var dc = document.getElementById("dc").value;
    var cuenta = document.getElementById("cuenta").value;
alert("Su numero de cuenta es:  ES" + control + entidad + sucursal + dc + cuenta);
}

 
var days = function() {
var d = document.getElementById("newDate"); 
var day = new Array(7);
   day[0] = "DOMINGO";
   day[1] = "LUNES";
   day[2] = "MARTES";
   day[3] = "MIERCÓLES";
   day[4] = "JUEVES";
   day[5] = "VIERNES";
   day[6] = "SÁBADO"; 
 var daynumber=new Date(d.value).getDay();
alert("el día de la semana correspondiente a tu selección es:  "+day[daynumber]);
}

 
var valoracion = function() {
   var valor = document.getElementById("rating").value;
alert("Tu valoración es de:"+ valor);
}