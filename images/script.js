const images = [

{
FacingDirection:"North",
Length:"20",
Width:"30",
Type:"Single",
Steps:"Not Required",
file:"images/N_30x20.jpg"
},

];

function showImage(){

let type=document.getElementById("FacingDirection").value;
let cap=document.getElementById("Length").value;
let mat=document.getElementById("Width").value;
let mat=document.getElementById("Type").value;
let mat=document.getElementById("Steps").value;

let found=images.find(x=>

x.FacingDirection==fd &&
x.Length==Ln &&
x.Width==wt &&
x.type==typ &&
x.Steps==ste

);

if(found){
document.getElementById("result").src=found.file;
}
else{
alert("No matching image found");
document.getElementById("result").src="";
}

}
