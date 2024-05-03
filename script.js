
for (let i = 1; i <= 256; i++){
    let div = document.createElement("div");
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.border = "2px solid blue";
    div.id = "box";
    document.getElementById("container").appendChild(div);
}

function changeStyle(div){
    div.style.background = "blue";
}


document.getElementById("box").addEventListener("mouseover", changeStyle);
