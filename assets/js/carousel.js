let i = 0;
let time = 4000;

let images = [
{
  content: '../images/coral.jpg'
},
{
   content: '../images/ray.jpg'
},
{
   content: '../images/seal.jpg'
},
{
    content: '../images/shark.jpg'
},
{
   content: '../images/shoal.jpg'
},
{
   content: '../images/singlefish.jpg'
},
{
   content: '../images/turtle.jpg'
}
]

function carousel() {
    document.querySelector('.image').alt = images[i].content;
    if (i < images.length -1){
    i++;
    }else{
        i = 0;
    }
    setTimeout(carousel, time);
}

window.onload = carousel();