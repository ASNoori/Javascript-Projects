const availableKeywords = [
    'html',
    'css',
    'how to create website',
    'what is dynamic page',
    'where to learn coding',
    'web develpment tutorial'
];
const inputBox = document.getElementById('input-box');
const resultBox = document.querySelector('.result-box');
inputBox.addEventListener('keyup',()=>{
    let result=[];
    let input = inputBox.value;
    if(input.length){
        result=availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase())
        });
        console.log(result)
    }
    displayResult(result);
    if(!result.length){
        resultBox.innerHTML="<p>"+'search result not found'+"</p>";
    }
})
inputBox.addEventListener('focusout',()=>{
    resultBox.innerHTML='';
})
function displayResult(result){
 const content = result.map((list)=>{
    return "<li onclick=selectInput(this)>"+list+"</li>"
  })
  resultBox.innerHTML= "<ul>"+content.join('')+"</ul>";
}

function selectInput(list){
    inputBox.value=list.innerHTML;
    resultBox.innerHTML='';
}