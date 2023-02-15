
var inp = document.getElementById("inp");
var btnn = document.getElementById("btn");
var temp = document.getElementById("temp");
var city = document.getElementById("city");
var climate = document.getElementById("climate");
var feels = document.getElementById("feels");
var air = document.getElementById("air");

var api_key = "05b7a45bc5da07674855be685b9381e0";


btnn.addEventListener("click", ()=>
{
    if (inp.value=="")
    {
        alert("Please enter city name");
    }

    else {
        var userinp = inp.value;
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${userinp}&appid=${api_key}`;
        fetch(url).then(result =>result.json())
        .then((data)=>
            {
                console.log(data);
                const{name} = data;
                const{feels_like} = data.main;
                const{description} = data.weather[0];
                const{humidity} = data.main;
                const{speed} = data.wind;
                city.innerHTML=name;
                temp.innerHTML=Math.floor(feels_like-273) + "°C";
                climate.innerHTML=description;
                feels.innerHTML=humidity + "%";
                air.innerHTML=speed + "km/h";
            })
            .catch (()=>
            {
                alert("no data found");
            })
    }
})

