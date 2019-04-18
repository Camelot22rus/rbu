
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var colors2 = new Array(
  [32,107,254],
  [193,37,254],
  [193,37,254],
  [193,37,254],
  [32,107,254],
  [193,37,254],);

var colors3 = new Array(
  [230,32,18],
  [233,53,41],
  [233,53,41],
  [233,53,41],
  [230,32,18],
  [233,53,41],);
var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;

var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];


var c0_02 = colors2[colorIndices[0]];
var c0_12 = colors2[colorIndices[1]];
var c1_02 = colors2[colorIndices[2]];
var c1_12 = colors2[colorIndices[3]];

var c0_023 = colors3[colorIndices[0]];
var c0_123 = colors3[colorIndices[1]];
var c1_023 = colors3[colorIndices[2]];
var c1_123 = colors3[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var r12 = Math.round(istep * c0_02[0] + step * c0_12[0]);
var g12 = Math.round(istep * c0_02[1] + step * c0_12[1]);
var b12 = Math.round(istep * c0_02[2] + step * c0_12[2]);
var r123 = Math.round(istep * c0_023[0] + step * c0_123[0]);
var g123 = Math.round(istep * c0_023[1] + step * c0_123[1]);
var b123 = Math.round(istep * c0_023[2] + step * c0_123[2]);
var color1 = "rgba("+r12+","+g12+","+b12+", 0.42)";
var color3 = "rgba("+r12+","+g12+","+b12+", 1)";
var color5 = "rgba("+r123+","+g123+","+b123+", 1)";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var r22 = Math.round(istep * c1_02[0] + step * c1_12[0]);
var g22 = Math.round(istep * c1_02[1] + step * c1_12[1]);
var b22 = Math.round(istep * c1_02[2] + step * c1_12[2]);
var r223 = Math.round(istep * c1_023[0] + step * c1_123[0]);
var g223 = Math.round(istep * c1_023[1] + step * c1_123[1]);
var b223 = Math.round(istep * c1_023[2] + step * c1_123[2]);
var color2 = "rgba("+r22+","+g22+","+b22+", 0.42)";
var color4 = "rgba("+r22+","+g22+","+b22+", 1)";
var color6 = "rgba("+r223+","+g223+","+b223+", 1)";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
 $('.gradient').css({
   background: "-webkit-gradient(linear, left top, right bottom, from("+color3+"), to("+color4+"))"}).css({
    background: "-moz-linear-gradient(left, "+color3+" 0%, "+color4+" 100%)"});
 $('.gradient2').css({
   background: "-webkit-gradient(linear, left top, right bottom, from("+color5+"), to("+color6+"))"}).css({
    background: "-moz-linear-gradient(left, "+color5+" 0%, "+color6+" 100%)"});
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,1);







