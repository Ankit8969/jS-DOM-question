let accordion_heading = document.querySelectorAll(".first-section");
for (let i=0;i<accordion_heading.length;i++){
    accordion_heading[i].addEventListener("click", ()=>{
        let next_node = accordion_heading[i].nextElementSibling;
        if (next_node.classList.contains("visible")){
            let next_node = accordion_heading[i].nextElementSibling;
            accordion_heading[i].children[1].setAttribute("src","add.png")
            next_node.classList.remove("visible");
        }
        else{
            accordion_heading[i].children[1].setAttribute("src","minus.png")
            next_node.classList.add("visible");
        }
        for (let j=0;j<accordion_heading.length;j++){
            if (i!=j){
                let next_node = accordion_heading[j].nextElementSibling;
                next_node.classList.remove("visible");
                accordion_heading[j].children[1].setAttribute("src","add.png")
            }
        }
    })
}