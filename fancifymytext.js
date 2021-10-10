const btnbig = document.addEventListener()

function hello() {
    alert("Hello World!");
}

function bigger()   {
    document.getElementById("texts").style.fontSize = "24pt";
}

function fun(){
    alert("FANCY MODE ACTIVATED! ");
    document.getElementById("texts").style.fontWeight = "bold";
    document.getElementById("texts").style.color = "blue";
    document.getElementById("texts").style.textDecoration = "underline";
}

function boring(){
    alert("BOOOO BORRRRRRRRRIIIIIIINNNNNGGGGG ");
    document.getElementById("texts").style.fontWeight = "normal";
    document.getElementById("texts").style.color = "black";
    document.getElementById("texts").style.textDecoration = "none";
}

function Moo(){
    var text=document.getElementById("texts");
    text.style.textTransform="uppercase"
    let string1=text.value.split(".");
    let string2=string1.join("-Moo");
    text.value=string2;
}
