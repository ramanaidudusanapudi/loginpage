var userId="rama@gmail.com"
var pass="123"

function logintowebpage()
{
    var userGivenID=document.getElementById("usid").value
    var userGivenPass=document.getElementById("pass").value
    if(userId==userGivenID && pass==userGivenPass)
    {
        var fom=document.forms
        fom[0].action="./html/home1.html"
        fom[0].elements[2].type="submit"
    }
    else if(userId==userGivenID && pass!=userGivenPass)
    {
        document.getElementById("result").innerHTML="Wrong Password Enterd"
        document.getElementById("passdiv").style.borderColor="red"
        document.getElementById("emaildiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(255,0,162),red)"
    }
    else if(userId!=userGivenID && pass==userGivenPass)
    {
        document.getElementById("result").innerHTML="wrong User Id Entered"
        document.getElementById("emaildiv").style.borderColor="red"
        document.getElementById("passdiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
    }
    else{
        document.getElementById("result").innerHTML="Wrong User Id and Password"
        document.getElementById("emaildiv").style.borderColor="red"
        document.getElementById("passdiv").style.borderColor="Red"
        document.body.style.backgroundColor="red"
        document.body.style.backgroundImage="none"
    }
}
function passvis()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","./visible.png")
    document.getElementById("visible").style.transform="rotateY(360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}
function passhide()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","./hide.png")
    document.getElementById("visible").style.transform="rotateY(-360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}
