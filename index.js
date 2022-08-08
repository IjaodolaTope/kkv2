function idCallerFunction(){
    if (window.matchMedia("(min-width:700px)").matches) {
        document.getElementById("nav_bar_caller_id").style.backgroundColor = "rgba(238, 170, 45, 0.356)";
    document.getElementById("nav_bar_caller_id").style.border = "solid .3px rgba(238, 170, 45, 0.356)";
    }
    else{       
        document.getElementById("nav_bar_caller_id").style.backgroundColor = "rgba(238, 170, 45, 0.356)";
        document.getElementById("nav_bar_caller_id").style.border = "solid .3px rgba(238, 170, 45, 0.356)";}
    
}

function logoColorFunction(){
    // document.getElementById('nav_logo_id').style.backgroundColor = "rgba(238, 170, 45, 0.356)";
    document.getElementById('nav_logo_id').style.backgroundColor = "rgba(238, 170, 45, 0.171)";
    // rgba(238, 170, 45, 0.171)
}

function logoWame(){
    document.getElementById("logowame").innerHTML ="Kk";
}

function searchBarSize(x){
    // document.getElementById("bar").style.width ="280px";
    // // document.getElementsByClassName("bar_icon").style.width ="20px";
    // // document.getElementById("div_input").style.border ="solid";
    // document.getElementById("div_input").style.paddingLeft ="0%";
    // document.getElementById("div_input").style.backgroundBlendMode ="overlay";
    // document.getElementById("div_icon").style.width ="20px";
    // document.getElementById("div_icon").style.marginRight ="0";
    // document.getElementById("div_input").style.backgroundColor ="rgba(0, 0, 0, 0.295)";
    // document.body.style.backgroundColor = "blue";
    if (window.matchMedia("(max-width:700px)").matches) {
    document.getElementById("search_main").style.display = "block";}
    
    if (window.matchMedia("(min-width:700px)").matches) {
        document.getElementById("bar").style.width ="285px";
        document.getElementById("div_input").style.backgroundBlendMode ="overlay";
        document.getElementById("div_input").style.width ="300px";
        // document.getElementById("div_input").style.backgroundColor ="rgba(0, 0, 0, 0.295)";
        document.getElementById("div_input").style.backgroundColor ="rgba(0, 0, 0, 0.5)";
        document.getElementById("bar").style.position ="relative";
        document.getElementById("bar").style.right ="18px";
        document.getElementById("search_div").style.display ="block";
        document.getElementById("search_main").style.display = "none";
    // document.getElementById("div_input").style.paddingLeft =".3%";
   
    // document.getElementById("div_icon").style.width ="20px";
    // document.getElementById("div_icon").style.marginRight ="0";
        }
    // else{document.body.style.backgroundColor = "yellow";}
}

function searchBarSize2(x){
    if (window.matchMedia("(min-width:700px)").matches) {
        document.getElementById("bar").style.width ="265px";
        document.getElementById("div_input").style.backgroundBlendMode ="overlay";
        document.getElementById("div_input").style.width ="300px";
        // document.getElementById("div_input").style.backgroundColor ="rgba(0, 0, 0, 0.295)";
        document.getElementById("div_input").style.backgroundColor ="rgb(214, 211, 211)";
        document.getElementById("bar").style.position ="static";
        document.getElementById("bar").style.right ="0";
        document.getElementById("search_div").style.display ="none";
        }
    // else{document.body.style.backgroundColor = "yellow";}
}

function makeSearchDis(){
    document.getElementById("search_main").style.display = "none";
}

if (window.matchMedia("(max-width:700px)").matches) {
    document.getElementById("search_main").style.display = "none";}