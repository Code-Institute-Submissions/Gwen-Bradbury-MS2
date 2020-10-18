/* Variables */
let i = 0;
let time = 4000;
/* Array of Images */
let images = [
{
  content: 'assets/images/coral_optimized.jpg',
  altText: 'Coral'
},
{
   content: 'assets/images/ray_optimized.jpg',
   altText: 'Stingray'
},
{
    content: 'assets/images/sharks.jpg',
    altText: 'Sharks'
},
{
   content: 'assets/images/shoal_optimized.jpg',
   altText: 'Fish'
},
{
   content: 'assets/images/singlefish_optimized.jpg',
   altText: 'Fish next to a diver'
}
];

/* Function to add images to carousel */
function carousel() {
    document.querySelector('.image').src = images[i].content;
    document.querySelector('.image').alt = images[i].altText;
    if (i < images.length -1 ){
    	i++;
    }
    else{
    	i = 0;
    }
/* Sets the time before the images change */ 
    setTimeout(carousel, time);
}
window.onload = carousel();