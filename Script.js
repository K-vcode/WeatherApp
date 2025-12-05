
    const apiKey ="9768bbd57b1ddccdd8eeb12822f3d08e";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=matric&q=";

    const searchBox= document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");

    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);  

        document.querySelector(".city").innerHTML =data.name;
        document.querySelector(".temp").innerHTML=data.main.temp;
        document.querySelector(".humidity").innerHTML=data.main.humidity;
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    }

    searchBtn.addEventListener("click",()=>{
      checkWeather(searchBox.value);
    });
    
function hello (){
    console.log("hello world");
}
hello();
he();

const he = () => console.log("hello arrow");