

function agy(){
    if (document.getElementById("matekrange").value === "250"){
        document.getElementById("agy").innerHTML = "Minden órán";
    }
    else{
        document.getElementById("agy").innerHTML = document.getElementById("matekrange").value;
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
function wat(hany){
        document.getElementById(hany).innerHTML = "Azért ennyire nem gondoltam komolyan...";
        document.getElementById(hany).style.color = "orange";
        helyes += 1;
}
var helyes = 0;
function sub(){


    if (document.getElementById("anyad").value.trim().toLowerCase() !== "")
    {
        if (document.getElementById("anyad").value.toLowerCase() === "horváth hajnalka" || document.getElementById("anyad").value.toLowerCase() === "havasné horváth hajnalka")
        {
            wat("1");
        }
        else
        {
            jo("1");
        }
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

    if (document.getElementById("dia").checked === true)
    {
        jo("3");
    }   
    else
    {
        rossz("3");
    }

    if (document.getElementById("bulcsuszam").value === "6")
    {
        jo("4");
    }
    else
    {
        rossz("4");
    }

    if (document.getElementById("utal").checked === true)
    {
        jo("5");
    }
    else
    {
        rossz("5");
    }

    if (document.getElementById("aha").checked === true)
    {
        jo("6");
    }
    else
    {
        rossz("6");
    }

    if (document.getElementById("paskolom").checked === true || document.getElementById("ketszeris").checked === true)
    {
        jo("7");
    }
    else
    {
        rossz("7");
    }

    if (document.getElementById("kopaszja").checked === true)
    {
        jo("8");
    }
    else
    {
        rossz("8");
    }

    if (document.getElementById("tokanylabel").innerHTML < "5")
    {
        jo("9");
    }
    else
    {
        rossz("9");
    }

    if (document.getElementById("szin").value === "#ff6a00")
    {
        jo("10");
    }
    else
    {
        rossz("10");
    }

alert("A helyes válaszok száma: " + helyes + "/10");

helyes = 0;
        




}