/* Code modified from stackoverflow by Altin I. Sylejmani and Mr.roland
https://stackoverflow.com/questions/61957530/how-to-change-an-image-every-5-seconds-for-example
*/

let images = ['images/banner-100day.bmp', 'images/banner-99rent.bmp', 'images/banner-mgp.bmp'];
let index = 0;
const imgElement = document.getElementById('welcome-banner');

function change() {
    imgElement.src = images[index]
    index = (index + 1) % images.length
 }

window.onload = function () {
    setInterval(change, 6000);
};