function Spr(){
    var h1 = document.getElementById("newPassword").value;
    var h2 = document.getElementById("secondPassword").value;
    if(h1==h2){
        document.getElementById("spr").innerHTML="Podane hasła są takie same :)<br>";
    }
    else{
        document.getElementById("spr").innerHTML="Podane hasła są różne!<br>";
    }
}