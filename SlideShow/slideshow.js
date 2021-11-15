let count = 0

function counthandle(){
    if(Math.abs(count)==5){
        count = 0;
    }
}

function pictureup(){
    count += 1
    counthandle();
    if (Math.abs(count) == 0){
        let img = document.getElementById("image")
       img.src = "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png"
    }
    else if (Math.abs(count) == 1){
        let img = document.getElementById("image")
        img.src = "https://a.espncdn.com/i/teamlogos/mlb/500/kc.png"
    }
    else if (Math.abs(count) == 2){
        let img = document.getElementById("image")
        img.src = "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/MastersTournamentLogo.svg/1200px-MastersTournamentLogo.svg.png"
    }
    else if (Math.abs(count) == 3){
        let img = document.getElementById("image")
        img.src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Kansas_Jayhawks_logo.svg/1200px-Kansas_Jayhawks_logo.svg.png"
    }
    else if (Math.abs(count) == 4){
        let img = document.getElementById("image")
        img.src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/2017USOpenLogo.svg/1200px-2017USOpenLogo.svg.png"
    }
}

function picturedown(){
    count -= 1
    counthandle();
    if (Math.abs(count) == 0){
        let img = document.getElementById("image")
       img.src = "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png"
    }
    else if (Math.abs(count) == 4){
        let img = document.getElementById("image")
        img.src = "https://a.espncdn.com/i/teamlogos/mlb/500/kc.png"
    }
    else if (Math.abs(count) == 3){
        let img = document.getElementById("image")
        img.src = "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/MastersTournamentLogo.svg/1200px-MastersTournamentLogo.svg.png"
    }
    else if (Math.abs(count) == 2){
        let img = document.getElementById("image")
        img.src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Kansas_Jayhawks_logo.svg/1200px-Kansas_Jayhawks_logo.svg.png"
    }
    else if (Math.abs(count) == 1){
        let img = document.getElementById("image")
        img.src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/2017USOpenLogo.svg/1200px-2017USOpenLogo.svg.png"
    }
}