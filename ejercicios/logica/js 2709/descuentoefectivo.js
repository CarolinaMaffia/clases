var monto;
var descuento = 0;
var medioPago
var recargo;

if (monto >= 500 && monto < 1000 && medioPago == "efectivo") {
	descuento = (monto * 5) / 100;
}else if  (monto >= 500 && monto < 1000 && medioPago == "tarjeta"){
	recargo = (monto * 5) / 100;
}else if (monto >= 1000 && monto < 2000 && medioPago == "efectivo") {
	descuento = (monto * 10) / 100;
}else if (monto >= 1000 && monto <2000 && medioPago == "tarjeta") {
	recargo = (monto * 10) / 100;
	descuento = (monto * 2.5) / 100;
}else if (monto >= 2000 && medioPago == "efectivo"){
	descuento = (monto * 20) / 100;
}else if (monto >= 2000 && medioPago == "tarjeta") {
	descuento = (monto * 10) / 100;
}
