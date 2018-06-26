


var mydate = new Date()
var hours = mydate.getHours()

console.log('sup')

function setSky(hour) {
    var sky = document.getElementById('skyHolder');
    console.log(sky)
    if (hour <=  4) {
        sky.classList.add('time-early-morning')
    } else if (hour <=  5) {
        sky.classList.add('time-late-morning')
    } else if (hour <=  8) {
        sky.classList.add('time--dawn')
    } else if (hour <=  12) {
        sky.classList.add('time--early-afternoon')
    } else if (hour <=  16) {
        sky.classList.add('time--late-afternoon')
    } else if (hour <=  21 ){
        sky.classList.add('time-early-night')
    } else if (hour <= 24 ) {
        sky.classList.add('time-late-night')
    }
}

setSky(hours) //

// setSky(3) can change like this to manipulate time