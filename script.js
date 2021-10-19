// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

// Código para calcular el perimetro del cuadrado
function calcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

// Código para calcular el área del cuadrado
function calcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo (lado1, lado2, base) {
  return ((Number(lado1)) + (Number(lado2)) + (Number(base)));
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

// Código para calcular el perimetro del triángulo
function calcularPerimetroTriangulo (){
    const inputLado1 = document.getElementById("InputTrianguloL1");
    const valueLado1 = inputLado1.value;
    const inputLado2 = document.getElementById("InputTrianguloL2");
    const valueLado2 = inputLado2.value;
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;

    const perimetro= perimetroTriangulo (valueLado1, valueLado2, valueBase);
    alert(perimetro);
}

// Código para calcular el área del triángulo
function calcularAreaTriangulo (){
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;

    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = inputAltura.value;
    const area = areaTriangulo (valueBase, valueAltura);
    alert(area);
}

// Código del círculo
console.group("Círculos");

function diametroCirculo (radio) {
    return radio * 2;
}
const PI = Math.PI;
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio) {
  return (radio * radio * PI);
}
console.groupEnd();

// Código para calcular el perimetro del cuadrado
function calcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

// Código para calcular el área del cuadrado
function calcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
