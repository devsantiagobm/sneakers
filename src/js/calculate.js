export function calculateAmount(){
    const minus = document.querySelector('.data__button:nth-child(1)')
    const add = document.querySelector('.data__button:nth-child(3)')
    const amount = document.querySelector('.data__amount');
    
    eventos();
    function eventos(){
        minus.addEventListener('click', () => operacion("-"))
        add.addEventListener('click', () => operacion("+"))
    }

    function operacion(op){
        const amountNumber = Number(amount.textContent);
        amount.textContent = eval(amountNumber + op + 1);
        if(amount.textContent < 0) amount.textContent = 0;
    }


}