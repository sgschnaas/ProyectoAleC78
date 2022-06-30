var images=[
    src="portada.jpg",
    src="Ma.jpg",
    src="Pa.jpg",
    src="Yop.jpg",
    src="Bro.jpg",

];


var updateName =["Yazmín ","Jorge", "Alexandra","Jorge"];

console.log(updateName);



var i = 0;
function update() { 
 
   if(i == 3)
     {
       i=0;
     }
   
    document.getElementById("album").src = images[i];
    document.getElementById("nombre").src = updateName[i];
  i++;
 
}