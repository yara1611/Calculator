
let operator
let ops = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear')
const equal = document.querySelector('.equal')
const nums=document.querySelectorAll('.number')
const decimal=document.querySelector('.decimal')
let currentVal='';
let preVal='';
let currentScreen = document.querySelector('.current')
let precScreen = document.querySelector('.previous')

clear.addEventListener('click',(e)=>{
    console.log(e.target.classList[1])
    currentVal=''
    preVal=''
    operator=''
    currentScreen.textContent=currentVal;
    precScreen.textContent=preVal;
})

equal.addEventListener('click',(e)=>{
    console.log(e.target.classList[1])
    operate()
    if(currentVal!=''&&preVal!='')
    {
        precScreen.textContent=''
    if(preVal.length<=5){
         currentScreen.textContent=preVal
    }
    else  {
        currentScreen.textContent=preVal.slice(0,5)+"..."
    }
}

})

decimal.addEventListener('click',addDecimal)

ops.forEach(op => {
    op.addEventListener('click',(e)=>{
        handleOperator(e.target.innerText)
        precScreen.textContent=preVal+" "+operator
        currentScreen.textContent=currentVal
    })
});

nums.forEach(num => {
    num.addEventListener('click',(e)=>{
        handleNumber(e.target.innerText)
        currentScreen.textContent=currentVal;
       
    })
});
function handleNumber(num){
    if(currentVal.length<=5)
        currentVal+=num;
}
function handleOperator(op){
    console.log(op)
    operator= op;
    preVal=currentVal;
    currentVal =''
}

function operate(){
    preVal=Number(preVal);
    currentVal=Number(currentVal);
    if(operator ==='+'){
        preVal+=currentVal
    }
    else if(operator ==='-'){
        preVal-=currentVal
    }
    else if(operator ==='x'){
        preVal*=currentVal
    }
    else {
        preVal/=currentVal
    }
    console.log(preVal)
    preVal=preVal.toString();
    currentVal=currentVal.toString();
}
function addDecimal(){
    if(!currentVal.includes('.')){
        currentVal+='.';
    }
}


