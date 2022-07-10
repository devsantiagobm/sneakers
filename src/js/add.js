export function addProduct() {
    const button = document.querySelector('.data__add');
    const amount = document.querySelector('.data__amount');
    const cartAmount = document.querySelector('.cart__units');
    const cartAmountPreview = document.querySelector('.user__products');
    const buttonCart = document.querySelector('.user__box:nth-child(1)');
    const cart = document.querySelector('.cart')
    const buttonCartDelete = document.querySelector('.cart__delete')
    const cartPayment = document.querySelector('.cart__payment');

    eventos();
    function eventos() {
        button.addEventListener('click', agregarProducto)
        buttonCart.addEventListener('click', abrirCarrito);
        buttonCartDelete.addEventListener('click', eliminarProducto)
    }

    function agregarProducto() {
        cartAmount.textContent = ` ${Number(amount.textContent) + Number(cartAmount.textContent)}`;
        cartAmountPreview.textContent = ` ${Number(amount.textContent) + Number(cartAmountPreview.textContent)}`;
        cartPayment.textContent = ` $${125.00 * cartAmount.textContent}.00`;
        amount.textContent = 0
        revisarContenido();
    }

    function abrirCarrito() {
        if (cart.style.maxHeight == "0px") {
            cart.style.maxHeight = `${cart.scrollHeight}px`;
            buttonCart.classList.add('user__box--active')
            revisarContenido();
        }
        else {
            cart.style.maxHeight = 0
            buttonCart.classList.remove('user__box--active')
        }
    }

    function revisarContenido(){
        cartAmount.textContent <= 0 || cartAmount.textContent == ""
        ? cart.classList.add('cart--empty')
        : cart.classList.remove('cart--empty')
        
    }

    function eliminarProducto(){
        cart.classList.add('cart--empty')
        cartAmount.textContent = 0;
        cartAmountPreview.textContent = 0;
    }
}