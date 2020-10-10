let i = 0;
let time = 4000;
let images = [
{
  content: 'assets/images/coral.jpg',
  altText: 'Coral'
},
{
   content: 'assets/images/ray.jpg',
   altText: 'Stingray'
},
{
    content: 'assets/images/sharks.jpg',
    altText: 'Sharks'
},
{
   content: 'assets/images/shoal.jpg',
   altText: 'Fish'
},
{
   content: 'assets/images/singlefish.jpg',
   altText: 'Fish next to a diver'
}
]

function carousel() {
    document.querySelector('.image').src = images[i].content;
    document.querySelector('.image').alt = images[i].altText;
    if (i < images.length -1 ){
    	i++;
    }
    else{
    	i = 0;
    } 
    setTimeout(carousel,time);
}
window.onload = carousel();