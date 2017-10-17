var monto;
var descuento = 0;

if (monto >= 500 && monto < 1000) {
		descuento = (monto * 5) / 100;
		}else if (monto >= 1000 && monto < 2000) {
				descuento = (monto * 10) / 100;
			} else if (monto > 2000) {
				descuento = (monto * 20) / 100;
		}
}		
