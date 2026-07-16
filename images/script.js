const housePlans = [

{
    FacingDirection: "North",
    Length: "20",
    Width: "30",
    Type: "Single",
    Steps: "Not Required",
    image: "images/N_30x20.jpg"
},

{
    FacingDirection: "West",
    Length: "30",
    Width: "40",
    Type: "Duplex",
    Steps: "Not Required",
    image: "images/west_30_40_duplex.jpg"
},

{
    FacingDirection: "North",
    Length: "40",
    Width: "30",
    Type: "Single",
    Steps: "Required",
    image: "images/north_40_30_single.jpg"
}

];

function showImage() {

    let direction = document.getElementById("FacingDirection").value;
    let length = document.getElementById("Length").value;
    let width = document.getElementById("Width").value;
    let type = document.getElementById("Type").value;
    let steps = document.getElementById("Steps").value;

    alert(direction + " " + length + " " + width + " " + type + " " + steps);

}

    let plan = housePlans.find(item =>

        item.FacingDirection === direction &&
        item.Length === length &&
        item.Width === width &&
        item.Type === type &&
        item.Steps === steps

    );

    if(plan){

        document.getElementById("result").src = plan.image;

    }
    else{

        alert("No matching house plan found.");
        document.getElementById("result").src = "";

    }

}
