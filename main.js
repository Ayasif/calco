let result = document.getElementById("result");
let buttons = document.querySelectorAll("input[type ='button']");
for(let i=0 ; i<buttons.length ; i++)
{
    buttons[i].addEventListener("click" , function(event)
    {
        if(event.target.value == "=")
        {
            result.value = eval(result.value);
        }
        else if(event.target.value == "Clear")
        {
            result.value = "";
        }
        else if(event.target.value == "Back")
        {
            newValue = result.value.substring(0,result.value.length - 1);
            result.value = newValue;
        }
        else if(event.target.value == "Random")
        {
            newValueRandom = Math.random(result.value);
            result.value = newValueRandom;
        }
        else if(event.target.value == "Round")
        {
            newValueRound = Math.round(result.value);
            result.value = newValueRound;
        }
        else if(event.target.value == "Sqrt")
        {
            newValueSqrt = Math.sqrt(result.value);
            result.value = newValueSqrt;
        }
        else if(event.target.value == "Sin")
        {
            newValueSin = Math.sin(result.value);
            result.value = newValueSin;
        }
        else if(event.target.value == "Cos")
        {
            newValueCos = Math.cos(result.value);
            result.value = newValueCos;
        }
        else if(event.target.value == "Ceil")
        {
            newValueCeil = Math.ceil(result.value);
            result.value = newValueCeil;
        }
        else if(event.target.value == "Floor")
        {
            newValueFloor = Math.floor(result.value);
            result.value = newValueFloor;
        }
        else if(event.target.value == "Pow")
        {
            newValuePow = Math.pow(result.value , result.value);
            result.value = newValuePow;
        }
        else
        {
            result.value += this.value;
        }
    })
}