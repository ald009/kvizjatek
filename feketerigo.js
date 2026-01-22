

function agy(){
    document.getElementById("agy").innerHTML = document.getElementById("matekrange").value;
}


var helyes = 0;
function sub(){


    if (document.getElementById("anyad").value.trim().toLowerCase() === "anyad")
    {
        jo("1");
    }
    else
    {
        rossz("1");
    }


}

function jo(hany){
        document.getElementById(hany).innerHTML = "Helyes!";
        document.getElementById(hany).style.color = "green";
        helyes += 1;
}

function rossz(hany){
        document.getElementById(hany).innerHTML = "Rossz válasz!";
        document.getElementById(hany).style.color = "red";
        
}