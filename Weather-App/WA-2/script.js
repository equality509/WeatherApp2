

const API_KEY= '5b1130d5223f4939581e843969ebceb3';
const BASE_URL='https://api.openweathermap.org/data/2.5/weather?';





const $input = $('input[type=text]')

//lat={lat}&lon={lon}&appid={API key}

http://api.openweathermap.org/geo/1.0/direct?q=Atlanta&appid=91b881f8e58c5dc974ea34623da2fabb



function handleGetData(city) {
    $.ajax(BASE_URL + `q=${city}&appid=` + API_KEY)
    .then(function(data) {
        console.log('Data: ', data);

        const $city = $('#city')

        $city.empty()
    
        $city.html(`
        <h1>City: ${data.name}</h1>
        `)


        const $temp = $('#temp');

        $temp.empty()

        $temp.html(`
        <h1>Temperature: ${data.main.temp}</h1>
        `)

        const $index = $('#index')

         $index.empty()

        $index.html(`
        <h1>Feels Like: ${data.main.feels_like}</h1>
        `)


        const $desc = $('#desc')

        $desc.empty()

        $desc.html(`
        <h1>Weather: ${data.weather[0].main}</h1>
        `)















    }, function(error) {
        console.log('Error: ', error);
    })


// function handleGetData(url) {
//    return $.ajax(url)
//     // .then((r) => console.log(r))
// }

// handleGetData(`http://api.openweathermap.org/geo/1.0/direct?q=${inputText}&appid=efe8bd4d31b17edbb4552976cc8f1497`)
// .then((location) => {
//     console.log(location[0].lat)
// const lat = location[0].lat
// const lon = location[0].lon
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`


// handleGetData()
// .then(weather => {
//     console.log(weather)

    

// })

}
// // })
$("input[type=submit]").on("click", (event) => {

    // prevent the refresh
    event.preventDefault()

    // grab text from input box
    const inputText = $("input[type=text]").val()
    
    // update the screen
    handleGetData(inputText)
})
