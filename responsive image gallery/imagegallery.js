const images = ['./image1.jpg','./image2.jpg','./image3.jpg','./image4.jpg','./image5.jpg','./image6.jpg','./image7.jpg','./image8.jpg','./image9.jpg']

const fullImgBox = document.getElementById('fullImgBox')
const fullImg = document.getElementById('fullImg')
function openFullImg(pic){
    fullImgBox.style.display='flex';
    fullImg.src=pic;
}
images.map((img)=>{
    const galleryDiv=document.getElementById('image-gallery')
    let newImg = document.createElement('img')
    newImg.width=300;
    newImg.height=300;
   newImg.src= img;
    newImg.alt=img.replace(/.jpg/gi,'')
    newImg.addEventListener('click',()=>openFullImg(img));
    console.log(img);
    galleryDiv.append(newImg);
})
function closeFullImg(){
    fullImgBox.style.display='none';
}

