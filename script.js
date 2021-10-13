// Código del cuadrado
console.group("Cuadrados")
const lCuadrado = 5;

console.log(`Los lados del cuadrado miden ${lCuadrado} cm`);
// Perímetro del cuadrado
const pCuadrado = lCuadrado * 4;
console.log(`El perímetero del cuadrado es ${pCuadrado} cm`);

// Área del cuadrado
const aCuadrado = lCuadrado * lCuadrado;
console.log(`El área del cuadrado es ${aCuadrado} cm^2`);
console.groupEnd();



// Código del triángulo
console.group("Triángulos")
const l1Triángulo = 6;
const l2Triángulo = 6;
const bTriángulo = 4;
const alTriángulo = 5.5;

console.log(`Los lados del triángulo miden ${l1Triángulo} cm 
${l2Triángulo} cm y su base mide ${bTriángulo} cm`);

// Perímetro del triángulo
const pTriángulo = l1Triángulo + l2Triángulo + bTriángulo;
console.log(`El perímetero del triángulo es ${pTriángulo} cm`);

// Área del triángulo
const aTriángulo = (bTriángulo * alTriángulo) / 2;
console.log(`El área del triángulo es ${aTriángulo} cm^2`);
console.groupEnd();



// Código del Círculo
console.group("Círculos")
const rCírculo = 4;
const dCirculo = rCírculo * 2;
const PI = Math.PI;

console.log(`El radio del círculo mide ${rCírculo} cm 
y su diametro mide ${dCirculo} cm`);

// Circunferencia del Círculo
const cCírculo = dCirculo * PI;
console.log(`El diametro del círculo es ${cCírculo} cm`);

// Área del Círculo
const aCírculo = (rCírculo * rCírculo) * PI;
console.log(`El área del círculo es ${aTriángulo} cm^2`);
console.groupEnd();

