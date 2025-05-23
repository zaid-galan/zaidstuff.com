
function calculateTriangleArea(){
    var base = document.getElementById("base_triangle").value;
 var height = document.getElementById("height_triangle").value;
   document.getElementById("area_triangle").value = 0.5 * base * height;
}
function calculateSquareArea(){
   var thing = document.getElementById("side_length_square").value;
   var butt = document.getElementById("area_square");
   butt.value = thing * thing;
}
function calculateRectangleArea(){
   var thing1 = document.getElementById("length_rectangle").value;
   var thing2 = document.getElementById("width_rectangle").value;
   var butt2 = document.getElementById("area_rectangle");
   butt2.value = thing1 * thing2;
}
function calculateCircleArea(){
 var radius = document.getElementById("radius_circle").value;
 document.getElementById("area_circle").value = Math.PI * (radius*radius);
}