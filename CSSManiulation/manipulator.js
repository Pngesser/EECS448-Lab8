function border(){
    let color = document.getElementById("border")
    if(color.value == 'red'){
        document.getElementById("text").style.borderColor = "red";
    }
    else if(color.value == 'green'){
        document.getElementById("text").style.borderColor = "green";
    }
    else if(color.value == 'blue'){
        document.getElementById("text").style.borderColor = "blue";
    }
}

function background(){
    let color = document.getElementById("background")
    if(color.value == 'red'){
        document.getElementById("text").style.backgroundColor = "red";
    }
    else if(color.value == 'green'){
        document.getElementById("text").style.backgroundColor = "green";
    }
    else if(color.value == 'blue'){
        document.getElementById("text").style.backgroundColor = "blue";
    }
}

function change(){
    background();
    border();
}