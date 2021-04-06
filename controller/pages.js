import axios from 'axios';
import Weather from '../model/Weather.js';
Weather;

export const homePage = (req, res) => {
    res.render("home", {
        ref: 'About'
    });
}



export const aboutPage = (req, res) => {
    res.render("about", {
        ref: 'Go back'
    });
}
export const getWeather = (req, res) => {

    const city = req.body.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`;

    const weather = new Weather(req.body.city);
    weather.validateUserInput();

    if (weather.errors.length) {
        res.render("home", {
            city: weather.errors.toString(),
            ref: 'About',
            description: "",
            temperature: "",

        })
    } else {
        axios.get(url)
            .then((response) => {
                const description = response.data.weather[0].description;
                const temperature = response.data.main.temp;
                res.render('home', {
                    ref: 'About',
                    city: city,
                    description: description,
                    temperature: temperature

                });
            })
            .catch(err => res.send("<h1>Something went wrong ⚠️<a href'/'>Home</a> </h1>"))

    }







}