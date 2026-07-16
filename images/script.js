const housePlans = [
{
    FacingDirection: "North",
    Length: "30",
    Width: "20",
    Type: "Single",
    Steps: "Not Required",
    image: "images/N_30x20.jpg"
}
];

function showImage() {

    let direction = document.getElementById("FacingDirection").value;
    let length = document.getElementById("Length").value;
    let width = document.getElementById("Width").value;
    let type = document.getElementById("Type").value;
    let steps = document.getElementById("Steps").value;

    console.log(direction, length, width, type, steps);

    let plan = housePlans.find(function(item){

        return item.FacingDirection === direction &&
               item.Length === length &&
               item.Width === width &&
               item.Type === type &&
               item.Steps === steps;

    });

    if(plan){
        document.getElementById("result").src = plan.image;
    }
    else{
        alert("No matching plan found.");
    }

}
