const imageArray = [
    './image1.jpg',
    './image2.jpg',
    './image3.jpg',
    './image4.jpg',
];

// Variables to track the current image index
  let currentIndex = 0;

// function to update displayed image
function updateImg(){
    const currentImgEl = document.getElementById('currentImg');
       currentImgEl.src = imageArray[currentIndex];
    //    startSlideShow();
    updateDots();
}
// function to go to prev image
function prevImg(){
    clearInterval(intervalId);
    if(currentIndex>0){
    currentIndex = (currentIndex -1)%imageArray.length;
    }
    else{
        currentIndex = imageArray.length-1;
    }
    updateImg();
    startSlideShow();
}
function nextImg(){
    clearInterval(intervalId);
    if(currentIndex<imageArray.length-1){
    currentIndex = (currentIndex +1)%imageArray.length;
    }
    else{
        currentIndex=0;
    }
    updateImg();
    startSlideShow();
}
// function to automatically go to next image
function autoAdvance(){
    // Check if the current index is the last image, go back to the first image
    if (currentIndex < imageArray.length - 1) {
        currentIndex = (currentIndex + 1) % imageArray.length;
    } else {
        currentIndex = 0;
    }
    updateImg();
    updateDots();  // Added to update dot colors
  
}

function startSlideShow(){
    intervalId = setInterval(autoAdvance, 2000);
}

// Stop the slideshow when the page is closed or navigated away
window.addEventListener('beforeunload',()=>{
    clearInterval(intervalId);
})
 // Initialize the first image and dots
 updateImg();
 startSlideShow();
 updateDots();  // Added to initialize dots

// dot
function updateDots(){
    const dotContainer = document.getElementById('dotcontainer');
    //clear existing dots
    dotContainer.innerHTML = '';
    for(let i=0;i<imageArray.length;i++){
        const dotel = document.createElement('span');
        dotel.className = 'dot';
        dotel.addEventListener('click',()=>{
              navigateToImage(i)
        })
        dotContainer.append(dotel);
    }
      // Mark the current dot as active
      const dots = document.querySelectorAll('.dot');
      console.log(dots);
      dots[currentIndex].classList.add('active');
  }

function navigateToImage(index){
    clearInterval(intervalId);  // Stop the slideshow when navigating via dot click
    currentIndex= index;
    updateImg();
    updateDots();  // Added to update dot colors
    startSlideShow();  // Start the slideshow when navigating via dot click
}

