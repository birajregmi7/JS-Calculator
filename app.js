let buttons = document.querySelectorAll('.btn')
let inp = document.querySelector('.inp')
let string = ''
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML != '=' && e.target.innerHTML != 'C'){
            string += e.target.innerHTML;
            inp.value = string;
        }else if(e.target.innerHTML == '='){
            let total = eval(string)
            inp.value = total;
        }else{
            string = ''
            inp.value = string;
        }
    })
})
