

const API_KEY= 'efe8bd4d31b17edbb4552976cc8f1497';
const BASE_URL='https://api.openweathermap.org/data/2.5/weather?';



const $temp = $('#temp');
const $index = $('#index')
const $desc = $('desc')

const $input = $('input[type=text]')

//lat={lat}&lon={lon}&appid={API key}




// function handleGetData() {
//     $.ajax(BASE_URL + 'q=Atlanta&appid=' + API_KEY)
//     .then(function(data) {
//         console.log('Data: ', data)
//     }, function(error) {
//         console.log('Error: ', error)
//     })
// }

function handleGetData(url) {
   return $.ajax(url)
    // .then((r) => console.log(r))
}

handleGetData(`http://api.openweathermap.org/geo/1.0/direct?q=${inputText}&appid=efe8bd4d31b17edbb4552976cc8f1497`)
.then((location) => {
    console.log(location[0].lat)
const lat = location[0].lat
const lon = location[0].lon
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`


handleGetData(url)
.then(weather => {
    console.log(weather)

    const $city = $('#city')

    $city.empty()

    $city.html(`
    <h1>${weather.name}</h1>
    `)

})


})
$("input[type=submit]").on("click", (event) => {

    // prevent the refresh
    event.preventDefault()

    // grab text from input box
    const inputText = $("input[type=text]").val()
    
    // update the screen
    handleGetData(inputText)
})
