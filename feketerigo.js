

function agy(){
    document.getElementById("agy").innerHTML = document.getElementById("matekrange").value;
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


    if (document.getElementById("matekrange").value > 0)
    {
        jo("2");
    }
    else
    {
        rossz("2");
    }

    if (document.getElementById("dia").value === true)
    {
        jo("3");
    }   
    else
    {
        rossz("3");
    }

}