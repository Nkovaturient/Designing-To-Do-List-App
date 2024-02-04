let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");


btn.addEventListener("click", function(){

    let item= document.createElement("li");
    item.innerText= inp.value;
   item.classList.add("span");

    let delbtn= document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    
    item.appendChild(delbtn);

    ul.appendChild(item);
    inp.value="";
  
    delbtn.addEventListener("click", ()=>{
        ul.removeChild(item);
    });
    
});



let del=document.querySelectorAll(".delete");

for( dell of del){
dell.addEventListener("click", function(){
    //'delete' class ka parent 'list'  ko delete krna hai
    let par= this.parentElement;
   par.remove();

}); 
}

