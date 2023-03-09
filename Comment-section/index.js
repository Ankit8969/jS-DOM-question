// create the comment section using DOM elements
const parent = document.querySelector('.parent');

function createContentSection(content){
  const div = document.createElement('div');
  const div2 = document.createElement('div');
  const p = document.createElement('p');
  p.innerText = content;
  const reply = document.createElement('button');
  reply.innerText = "Reply";
  reply.classList.add('reply');
  reply.addEventListener('click',handleCommentClick);
  div2.appendChild(p);
  div2.appendChild(reply);
  div2.classList.add('make-inline-reply');
  div.appendChild(div2);
  return div;
}

function handleUserReply(event){
  console.log(event.target);
  let previousSibling = event.target.previousSibling;
  let inputBoxValue = previousSibling.value;
  previousSibling.parentNode.parentNode.appendChild(createContentSection(inputBoxValue));
  console.log(previousSibling.parentNode)
  previousSibling.parentNode.remove();
}

// creating the comment section
function createComment(){
  const div2 = document.createElement('div');
  div2.classList.add('parent-input-section');
    const div = document.createElement('div');
    div.classList.add('comment-box')
    const input = document.createElement('input');
    input.setAttribute('placeholder', 'Enter your Comment...');
    const reply = document.createElement('button');
    reply.classList.add('reply');
    reply.innerText = "Reply";
    reply.addEventListener('click',handleUserReply);
    div.appendChild(input);
    div.appendChild(reply);
  div2.appendChild(div);
  return div2;
}

function handleCommentClick(event) {
  console.log(event.target);
  event.target.parentNode.parentNode.appendChild(createComment());
}

// adding the onClick method to the reply button
let replyButton = document.querySelector(".Parentreply");
replyButton.addEventListener("click", handleCommentClick);
