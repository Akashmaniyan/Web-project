document.addEventListener('DOMContentLoaded', () => {
const items = document.querySelectorAll('.item');
const cards=document.querySelectorAll('.card');
items.forEach(item=>{
    item.addEventListener('click',()=>{
        items.forEach(i=>i.classList.remove('active'));
        item.classList.add('active');

        const filter=item.dataset.filter;

        cards.forEach(card =>{
            if(filter==='all' || card.dataset.category === filter){
                card.classList.remove('hidden');
            }else{
                card.classList.add('hidden');
            }
        });
    })
})

//navigation bar
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{
    nav.classList.toggle('open');
    if(nav.classList.contains('open')){
        toggle.textContent='x';
    }else{
        toggle.textContent='☰'
    }
})
})




