// selecting the button
const btn = document.getElementsByTagName('button')[0];
// now selecting all the tags upto parent
const span = document.getElementsByTagName('span')[0];
const div = document.getElementsByTagName('div')[0];
const body = document.getElementsByTagName('body')[0];

btn.addEventListener('click', ()=>{
    console.log("Button Clicked");
});

span.addEventListener('click', ()=>{
    console.log('Span Clicked');
})

div.addEventListener('click', (event)=>{
    event.stopPropagation();
    console.log('Div Clicked')
})

btn.addEventListener('mouseover', ()=>{
    console.log("mouseover Event");
})

body.addEventListener("click", ()=>{
    console.log('Body CLicked');
});