// https://calculator.swiftutors.com/distance-between-two-points-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const distancebetween2PointsRadio = document.getElementById('distancebetween2PointsRadio');
const x1CoordinateRadio = document.getElementById('x1CoordinateRadio');
const y1CoordinateRadio = document.getElementById('y1CoordinateRadio');
const x2CoordinateRadio = document.getElementById('x2CoordinateRadio');
const y2CoordinateRadio = document.getElementById('y2CoordinateRadio');

let distancebetween2Points;
let x1Coordinate = v1;
let y1Coordinate = v2;
let x2Coordinate = v3;
let y2Coordinate = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

distancebetween2PointsRadio.addEventListener('click', function() {
  variable1.textContent = 'X1 Coordinate';
  variable2.textContent = 'Y1 Coordinate';
  variable3.textContent = 'X2 Coordinate';
  variable4.textContent = 'Y2 Coordinate';
  x1Coordinate = v1;
  y1Coordinate = v2;
  x2Coordinate = v3;
  y2Coordinate = v4;
  result.textContent = '';
});

x1CoordinateRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance between 2 Points';
  variable2.textContent = 'Y1 Coordinate';
  variable3.textContent = 'X2 Coordinate';
  variable4.textContent = 'Y2 Coordinate';
  distancebetween2Points = v1;
  y1Coordinate = v2;
  x2Coordinate = v3;
  y2Coordinate = v4;
  result.textContent = '';
});

y1CoordinateRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance between 2 Points';
  variable2.textContent = 'X1 Coordinate';
  variable3.textContent = 'X2 Coordinate';
  variable4.textContent = 'Y2 Coordinate';
  distancebetween2Points = v1;
  x1Coordinate = v2;
  x2Coordinate = v3;
  y2Coordinate = v4;
  result.textContent = '';
});

x2CoordinateRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance between 2 Points';
  variable2.textContent = 'X1 Coordinate';
  variable3.textContent = 'Y1 Coordinate';
  variable4.textContent = 'Y2 Coordinate';
  distancebetween2Points = v1;
  x1Coordinate = v2;
  y1Coordinate = v3;
  y2Coordinate = v4;
  result.textContent = '';
});

y2CoordinateRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance between 2 Points';
  variable2.textContent = 'X1 Coordinate';
  variable3.textContent = 'Y1 Coordinate';
  variable4.textContent = 'X2 Coordinate';
  distancebetween2Points = v1;
  x1Coordinate = v2;
  y1Coordinate = v3;
  x2Coordinate = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(distancebetween2PointsRadio.checked)
    result.textContent = `Distance between 2 Points = ${computeDistancebetween2Points().toFixed(2)}`;

  else if(x1CoordinateRadio.checked)
    result.textContent = `X1 Coordinate = ${computeX1Coordinate().toFixed(2)}`;

  else if(y1CoordinateRadio.checked)
    result.textContent = `Y1 Coordinate = ${computeY1Coordinate().toFixed(2)}`;

  else if(x2CoordinateRadio.checked)
    result.textContent = `X2 Coordinate = ${computeX2Coordinate().toFixed(2)}`;

  else if(y2CoordinateRadio.checked)
    result.textContent = `Y2 Coordinate = ${computeY2Coordinate().toFixed(2)}`;
})

// calculation

function computeDistancebetween2Points() {
  return Math.sqrt(Math.pow(Number(x2Coordinate.value) - Number(x1Coordinate.value), 2) + Math.pow(Number(y2Coordinate.value) - Number(y1Coordinate.value), 2));
}

function computeX1Coordinate() {
  return Number(x2Coordinate.value) - Math.sqrt(Math.pow(Number(distancebetween2Points.value), 2) - Math.pow(Number(y2Coordinate.value) - Number(y1Coordinate.value), 2));
}

function computeY1Coordinate() {
  return Number(y2Coordinate.value) - Math.sqrt(Math.pow(Number(distancebetween2Points.value), 2) - Math.pow(Number(x2Coordinate.value) - Number(x1Coordinate.value), 2));
}

function computeX2Coordinate() {
  return Math.sqrt(Math.pow(Number(distancebetween2Points.value), 2) - Math.pow(Number(y2Coordinate.value) - Number(y1Coordinate.value), 2)) + Number(x1Coordinate.value);
}

function computeY2Coordinate() {
  return Math.sqrt(Math.pow(Number(distancebetween2Points.value), 2) - Math.pow(Number(x2Coordinate.value) - Number(x1Coordinate.value), 2)) + Number(y1Coordinate.value);
}