const card_container = document.querySelector('.cards-block');
const cards = document.querySelectorAll('.cards');
const observer = new IntersectionObserver(entries =>{
    entries.forEach((node)=>{
        node.target.classList.toggle('show',node.isIntersecting);
        if (node.isIntersecting){
            observer.unobserve(node.target);
        }
    })
},{
    // root:card_container
    threshold:1
    // rootMargin: "100px"
});


const lastCardObserver = new IntersectionObserver(entries =>{
    const lastCard = entries[0];
    console.log(lastCard);
    if (!lastCard.isIntersecting)   return ;
    loadNewCard();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector('.cards:last-child'));
},{})

lastCardObserver.observe(document.querySelector('.cards:last-child'));

cards.forEach((card)=>{
    observer.observe(card);
})

function loadNewCard(){
    for (let i=0;i<10;i++){
        let card = document.createElement('div');
        card.innerText = "This is New Cards";
        card.classList.add('cards');
        observer.observe(card);
        card_container.append(card);
    }
}