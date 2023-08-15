let fell=document.querySelector(".post .felling > span:first-child")
let whatFell=document.querySelector(".post .felling > span:last-child")
let felling=document.querySelector(".post .felling")

//Create Objects 
let images={
    1:{
    Name:"السعادة",
    baseUrl:"fa-solid fa-face-smile"
},
    2:{
    Name:"المحبة",
    baseUrl:"fa-solid fa-face-kiss-wink-heart"
} ,
    3:{
    Name:"الحزن",
    baseUrl:"fa-solid fa-face-frown-open"
},
    4:{
    Name:"الغضب",
    baseUrl:"fa-solid fa-face-angry"
},
5:{
    Name:"الجمال",
    baseUrl:"fa-solid fa-face-kiss-wink-heart"
},
    6:{
    Name:"العرفان",
    baseUrl:"fa-solid fa-face-grin-wide"
},
7:{
    Name:"المفاجاة",
    baseUrl:"fa-solid fa-face-surprise"
},
    8:{
    Name:"التعب",
    baseUrl:"fa-solid fa-face-tired"
},
9:{
    Name:"استعجاب",
    baseUrl:"fa-solid fa-face-grin-beam-sweat"
},
    10:{
    Name:"الاعجاب",
    baseUrl:"fa-solid fa-face-grin-stars"
}
}


whatFell.onclick=function(){
    fell.textContent="اشعر ب"
    fell.style="background-color:#3658983d"
    createOption()
}

//Function To  Create The Element 
function createOption(){
    let select=document.createElement("div")
    select.className="images"
    for(let i = 1;i<=10;i++){
        let option=document.createElement("div")
        let icon=document.createElement("i")
        icon.className=images[i].baseUrl
        let status=document.createElement("p")
        status.textContent=images[i].Name
        option.appendChild(icon)
        option.appendChild(status)
        select.appendChild(option)

        option.onclick=function(){
            fell.textContent=status.innerHTML
            select.remove()
        }
    }
    felling.appendChild(select)
    
}
