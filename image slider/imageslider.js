let scrollContainer = document.querySelector('.gallery');
let nextBtn = document.getElementById('next-btn');
let prevBtn = document.getElementById('prev-btn');

scrollContainer.addEventListener('wheel',(evt)=>{
    // to prevent default behaviour of scroll up and down
  evt.preventDefault();
  scrollContainer.style.scrollBehavior='auto';
  scrollContainer.scrollLeft += evt.deltaY;
})

nextBtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior='smooth';
    scrollContainer.scrollLeft += scrollContainer.offsetWidth;
})

prevBtn.addEventListener('click',()=>{
    // scrollContainer.scrollLeft -= 900;
    scrollContainer.style.scrollBehavior='smooth';
    scrollContainer.scrollLeft -= scrollContainer.offsetWidth;

})