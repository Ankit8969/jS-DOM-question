let arr = [
    "Rohan", "Ishant", "Ankit Kumar", "Ankit Sharma" , 
    "Mohan Kumar", "Dipesh", "Anjali","Monika", 
    "Rahul", "Karan", "Ujjwal", "Ashish", 
    "Ranjeet", "Rajeev Ranjan"];

// let's insert all the names inside the box
function insertTheNames(arr){
    // select the box 
    let nameBox = document.querySelector('.name-box');
    nameBox.innerHTML = "";
    arr.forEach((item)=>{
        let div = document.createElement('div');
        div.classList.add('individual-name');
        div.innerHTML = item;
        nameBox.appendChild(div);
    });
};
insertTheNames(arr);

// now it's time to add the sort function
const button = document.querySelector('.image-sort');
button.addEventListener('click',()=>{
    let nameBox = document.querySelector('.name-box');
    let temp = [...arr];
    if (!nameBox.classList.contains('AESC') && !nameBox.classList.contains('DESC')){
        nameBox.classList.add('AESC');
        temp.sort();
    } else if (nameBox.classList.contains('AESC')){
        nameBox.classList.remove("AESC");
        nameBox.classList.add("DESC");
        temp.sort();
        temp.reverse();
    }else if (nameBox.classList.contains('DESC')){
        nameBox.classList.remove("DESC");
    }
    insertTheNames(temp);
})