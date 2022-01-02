//Calculo triangulo
function perimetroTriangulo(lado1, lado2, base) {
	return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
	return (base * altura) / 2;
}

function alturaTriangulo(lado, base) {
	var newBase = base / 2;
	var altura = Math.sqrt(lado ** 2 - newBase ** 2);
	return altura;
}

function esIsosceles(lado1, lado2) {
	if (lado1 == lado2) {
		return true;
	} else {
		return false;
	}
}

function calcularPerimetroTriangulo() {
	var inputLado1 = document.getElementById("input-lado1");
	var valueLado1 = Number(inputLado1.value);

	var inputLado2 = document.getElementById("input-lado2");
	var valueLado2 = Number(inputLado2.value);

	var inputBase = document.getElementById("input-base");
	var valueBase = Number(inputBase.value);

	if (valueLado1 == 0 || valueLado2 == 0 || valueBase == 0) {
		alert("Ingrese todos los lados");
	} else if (esIsosceles(valueLado1, valueLado2)) {
		var perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
		alert(perimetro);
	} else {
		alert("El triangulo no es isosceles");
	}
}

function calcularAreaTriangulo() {
	var inputLado1 = document.getElementById("input-lado1");
	var valueLado1 = Number(inputLado1.value);

	var inputLado2 = document.getElementById("input-lado2");
	var valueLado2 = Number(inputLado2.value);

	var inputBase = document.getElementById("input-base");
	var valueBase = Number(inputBase.value);

	if (valueLado1 == 0 || valueLado2 == 0 || valueBase == 0) {
		alert("Ingrese todos los lados");
	} else if (esIsosceles(valueLado1, valueLado2)) {
		var altura = alturaTriangulo(valueLado1, valueBase);
		var area = areaTriangulo(valueBase, altura);
		alert(area);
	} else {
		alert("El triangulo no es isosceles");
	}
}
