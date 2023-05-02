let radius = 10;

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
const diameter = radius * 2;

canvas.width = diameter;
canvas.height = diameter;

context.beginPath();
context.arc(radius, radius, radius, 0, 2 * Math.PI);
context.fillStyle = "red";
context.fill();

export const redDot = canvas.toDataURL();