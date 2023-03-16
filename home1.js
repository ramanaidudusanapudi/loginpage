function header()
{
    document.getElementById("h1").style.transform="translate(25vw,0vh)"
    document.getElementById("h1").style.color="white"
    document.getElementById("h1").style.transition="transform 0.5s,color 0.5s"

    document.getElementById("h2").style.transform="translate(25vw,0vh)"
    document.getElementById("h2").style.color="white"
    document.getElementById("h2").style.transition="transform 0.5s,color 0.5s"

    document.getElementById("h3").style.transform="translate(0vw,-30vh)"
    document.getElementById("h3").style.color="white"
    document.getElementById("h3").style.transition="transform 0.5s,color 0.5s"

    document.getElementById("h4").style.transform="translate(0vw,-20vh)"
    document.getElementById("h4").style.color="white"
    document.getElementById("h4").style.transition="trasform 0.5s,color 0.5s"

    document.getElementById("hexagon").style.backgroundColor="white"
    document.getElementById("v").style.color="black"   
    document.getElementById("hexagon").style.transform="translate(10vw,-20vh)"
    document.getElementById("hexagon").style.transition="trasform 0.5s,color 0.5s"
    document.getElementById("v").style.transform="translate(0vw,0vh)"
    document.getElementById("v").style.transition="trasform 0.5s,color 0.5s"

   

}
var a=setTimeout(header,500)
function hoverhexa(){
    document.getElementById("hexagon").style.backgroundColor="black"
    document.getElementById("v").style.color="white"
}

function hoverhexaout(){
    document.getElementById("hexagon").style.backgroundColor="white"
    document.getElementById("v").style.color="black"
}