const countryapiurl= 'https://restcountries.com/v2/all';

fetch(countryapiurl)
// parse response json
.then(res=>res.json())
.then(data=>{
    const countrydropdown = document.getElementById('country-dropdown');
      // extracting countrynames from api response
    data.map(country=>{
        const option = document.createElement('option');
        option.value=country.name;
        option.textContent=country.name;
        countrydropdown.append(option)
    })
})
.catch(err=>{
    console.error('Fetch error',err);
})

const registerapiurl = "https://655e0fae9f1e1093c59a71b0.mockapi.io/jsregister";
const formElement = document.querySelector('.form-container');
const formSubmitButton = document.querySelector('#submit-btn');
formElement.addEventListener('submit',(e)=>{
e.preventDefault();
const formData = new FormData(formElement);
console.log(Object.fromEntries(formData));
// post request
fetch(registerapiurl,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(Object.fromEntries(formData))
})
.then(res =>res.json())
.then(data=>{
    console.log('api response:',data);
})
.catch(err=>{
    console.error('Error:',err);
})
})

// password functionality
const passwordInput = document.getElementById('password');
const passwordBtn = document.querySelector('#password-btn');
const passwordeyeicon = document.querySelector('.fa-eye');
passwordBtn.addEventListener('click',(e)=>{
    e.preventDefault();
   const newType =  passwordInput.type==='password'?'text':'password';
   passwordInput.type = newType;
   const iconType = newType==='password'? 'fa-eye' : 'fa-eye-slash';
   passwordeyeicon.className = `fa-regular ${iconType}`;

})




