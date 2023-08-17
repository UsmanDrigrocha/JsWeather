const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;


const setCity = async () => {
    let city = document.querySelector('#search').value;
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        const temp = data.main.temp;
        showCity(temp, city, data);
    } catch (err) {
        alert("Some Error Occured ⚠");
    }
}



const showCity = (temp, city, data) => {
    let tempDiv = document.querySelector('.temp');
    tempDiv.innerHTML = temp + " °C";

    let cityDiv = document.querySelector('.city');
    cityDiv.innerHTML = city;

    let imageDesc = document.querySelector('#image').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    let descDiv = document.querySelector('.desc').innerHTML = ` ${data.weather[0].main}`;
}

