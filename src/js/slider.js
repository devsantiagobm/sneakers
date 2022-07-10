export function slider(){

    const listImages = document.querySelector('.images__list')
    const imageMain = document.querySelector('.images__central')

    listImages.addEventListener('click', e => {
        if(e.target.classList.contains('images__item')){
            const image = e.target;
            
            image.classList.add('images__item--active') 
            imageMain.src = image.children[0].src;
            for(let item of listImages.children){
                if(item != image){
                    item.classList.remove('images__item--active')
                }
            }

        }
    })


}