const questions = [
    {
      id: 1,
      title: 'Do I have to allow the use of cookies?',
      info:
        'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
    },
    {
      id: 2,
      title: 'How do I change my My Page password?',
      info:
        'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
    },
    {
      id: 3,
      title: 'What is BankID?',
      info:
        'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
    },
    {
      id: 4,
      title: 'Whose birth number can I use?',
      info:
        'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
    },
    {
      id: 5,
      title: 'When do I recieve a password ordered by letter?',
      info:
        'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
    },
  ];

const faqContainer = document.querySelector('.faq-container');

questions.map(question=>{
    const faqItem = document.createElement('article');
    faqItem.classList.add('faq-ques');
    faqItem.innerHTML=`<p class="faq-text" data-id=${question.id}>${question.title}</p>
    <button id="ques-icon"><i class="fa-solid fa-plus fa-icon"></i></button>`  
   faqContainer.append(faqItem);
    

//    info container
const infoItem = document.createElement('article');
infoItem.classList.add('faq-info');

// icon button change functionality
    const iconBtn = faqItem.querySelector('#ques-icon');
   const icon=iconBtn.querySelector('i')
     iconBtn.addEventListener('click',()=>{
      if(icon.classList.contains('fa-plus')){
        icon.classList.remove('fa-plus')
        icon.classList.add('fa-minus');
        infoItem.innerHTML=`<p class='info'>${question.info}</p>`
        faqItem.insertAdjacentElement('afterend',infoItem)
            }else{
        icon.classList.add('fa-plus');
        icon.classList.remove('fa-minus');
        infoItem.remove();

          }
   })
})

