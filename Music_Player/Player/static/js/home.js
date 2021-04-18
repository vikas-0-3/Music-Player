var song_array = ["ALONE", "BABY", "BOYFRIEND", "DARKSIDE", "DESPACITO",
                 "FADED", "FRIENDS", "GIRLS_LIKE_YOU", "HOTLINE_BLING",
                 "JB_FRIENDS", "LET_ME_LOVE_YOU", "LILY", "LOVE_ME_LIKE_YOU_DO",
                  "LOVE_THE_WAY_YOU_LIE", "MIA", "SHAPE_OF_YOU", "SIA",
                   "SUNFLOWER", "TAKI_TAKI", "WHAT_DO_YOU_MEAN"]
var current_number=0;
var elements = document.getElementsByClassName("chip");
var myFunction = function() {
    current_number=this.id;
    play(this.id)
};


var pl = document.getElementById("player");
pl.onended = function() {
    current_number = parseInt(current_number)+1;

    if(current_number > song_array.length-1){
        current_number = 0;
        console.log(current_number);
        play(current_number);
    }
    else {
        play(current_number);
    }
    
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

function changestyle(x) {
    for (var i = 0; i < elements.length; i++) {
        if(i==x) {
            document.getElementById(i).style.backgroundColor = "black";
            document.getElementById(i).style.color = "blueviolet";
        }
        else {
            document.getElementById(i).style.backgroundColor = "white";
            document.getElementById(i).style.color = "black";
        }
    } 
    console.log(x);
    var nodes_elements = document.getElementById(x).childNodes;
    document.getElementById("song_name").innerHTML = nodes_elements[3].textContent;
}



function play(x) {
    document.getElementById("play_btn").style.display = "none";
    document.getElementById("pause_btn").style.display = "inline";
    document.getElementById('player').src = "http://127.0.0.1:8000/static/music/hollywood/"+song_array[x]+".mp3";
    document.getElementById('player').play();
    
    var dur = document.getElementById("player");
    dur.onloadedmetadata = function() {
        var input = dur.duration;
        var min = input/60;
        var sec = input%60;
        console.log(input);
        document.getElementById("prog").max=input;
        document.getElementById("total_time").innerHTML = parseInt(min)+":"+parseInt(sec);
    }
    changestyle(x);
}

function chnge(tme) {
    document.getElementById("timer_min").innerHTML = parseInt(tme/60);
    document.getElementById("timer_sec").innerHTML = parseInt(tme%60);
    document.getElementById("prog").value=tme;

} 

function play2() {
    document.getElementById("play_btn").style.display = "none";
    document.getElementById("pause_btn").style.display = "inline";
    document.getElementById('player').play(); 
}

function pause() {
    document.getElementById("pause_btn").style.display = "none";
    document.getElementById("play_btn").style.display = "inline";
    document.getElementById('player').pause();
}

function forward() {
    current_number = parseInt(current_number)+1;


    if(current_number > song_array.length-1){
        current_number = 0;
        console.log(current_number);
        play(current_number);
    }
    else {
        play(current_number);
    }

    play(current_number);
}

function backward() {
    current_number = parseInt(current_number)-1;


    if(current_number < 0){
        current_number = song_array.length-1;
        console.log(current_number);
        play(current_number);
    }
    else {
        play(current_number);
    }

    play(current_number);
}
