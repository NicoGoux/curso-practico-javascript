var arrayCupones = [
	{
		codigo: "cupon1",
		descuento: 10,
	},
	{
		codigo: "cupon2",
		descuento: 20,
	},
	{
		codigo: "cupon3",
		descuento: 30,
	},
	{
		codigo: "cupon4",
		descuento: 40,
	},
	{
		codigo: "cupon5",
		descuento: 50,
	},
];

var arrayCuponesUtilizados = [];

function calcularDescuento(precio, descuentoPorcentual) {
	var descuento = precio * (descuentoPorcentual / 100);
	return descuento;
}

function calcularPrecioFinal(precio, descuento) {
	var precioFinal = precio - descuento;
	return precioFinal;
}

function actualizarMensaje(mensaje) {
	var outputP = document.getElementById("resultP");
	outputP.innerText = mensaje;
}

function calcularDescuentoProducto() {
	var inputPrecio = document.getElementById("input-precio");
	var valuePrecio = Number(inputPrecio.value);

	var inputCupon = document.getElementById("input-cupon");
	var valueCupon = inputCupon.value;

	var descuento;
	var precioFinal;

	if (valueCupon === "") {
		precioFinal = calcularPrecioFinal(valuePrecio, 0);
		actualizarMensaje("El precio final es " + precioFinal + " dolares");
	} else if (
		!arrayCupones.some(function (cupon) {
			return cupon.codigo === valueCupon;
		})
	) {
		actualizarMensaje("Cupon invalido");
	} else {
		var cuponIngresado = arrayCupones.find(function (cupon) {
			return cupon.codigo === valueCupon;
		});

		if (arrayCuponesUtilizados.includes(cuponIngresado)) {
			actualizarMensaje("Cupon ya utilizado");
		} else {
			descuentoEnDolar = calcularDescuento(
				valuePrecio,
				cuponIngresado.descuento
			);
			console.log(
				"Se aplica un descuento de " + descuentoEnDolar + " dolares"
			);

			precioFinal = calcularPrecioFinal(valuePrecio, descuentoEnDolar);
			actualizarMensaje("El precio final es " + precioFinal + " dolares");
			arrayCuponesUtilizados.push(cuponIngresado);
		}
	}
}
