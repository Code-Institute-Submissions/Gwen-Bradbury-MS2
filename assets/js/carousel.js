let i = 0;
let time = 4000;
let images = [
{
  content: 'assets/images/coral.jpg'
},
{
   content: 'assets/images/ray.jpg'
},
{
   content: 'assets/images/seal.jpg'
},
{
    content: 'assets/images/sharks.jpg'
},
{
   content: 'assets/images/shoal.jpg'
},
{
   content: 'assets/images/singlefish.jpg'
}
]

function carousel() {
    document.querySelector('.image').src = images[i].content;
    if (i < images.length -1 ){
    	i++;
    }
    else{
    	i = 0;
    } 
    setTimeout(carousel,time);
}
window.onload = carousel();