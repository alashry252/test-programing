let feelIcon=document.querySelector(".post .tolls .feel")
let fell=document.querySelector(".post .felling > span:first-child")
let whatFell=document.querySelector(".post .felling > span:last-child")
let felling=document.querySelector(".post .felling")
let local=document.querySelector(".post .tolls .location")
let user=document.querySelector(".post .tolls .user")


//images Objects 
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
// loction Object
let locations={
    1:{
        Name:"القاهرة"
    },
    2:{
        Name:"الاسكندرية"

    }, 
    3:{
        Name:"طنطا"

    }, 
    4:{
        Name:"البحيرة"

    }, 
    5:{
        Name:"اسوان"

    },
    6:{
        Name:"الجيزة"

    },7:{
        Name:"الغردقة"

    },8:{
        Name:"شرم الشيخ"

    }

}
// User Object
let users={
    1:{
        Name:"mohamed Ahmed",
        avter:"team-05.png"
    },
    2:{
        Name:"yousef Ahmed",
        avter:"friend-01.jpg"

    }, 
    3:{
        Name:"Ahmed Ali",
        avter:"friend-02.jpg"

    }, 
    4:{
        Name:"Ali Mohamed",
        avter:"friend-03.jpg"

    }, 
    5:{
        Name:"Ibrhem Ahmed",
        avter:"friend-04.jpg"

    },
    6:{
        Name:"mohmoud Hassan",
        avter:"friend-05.jpg"

    },7:{
        Name:"Hassan Ahmed",
        avter:"team-01.png"

    },8:{
        Name:"yasen Ali",
        avter:"team-03.png"

    }

}
//function To chick The Element Found
    function chick(){
        let elementClass=document.querySelector(".post .images")
        if(elementClass){
            elementClass.remove()

        }
    }
// feeling click
feelIcon.onclick=function(){
    fell.textContent="اشعر ب"
    whatFell.textContent="بم تشعر؟"
    fell.style="background-color:#3658983d"
    chick()
    createOption()
    

}

//Function To  Create The Element To Feeling Object
function createOption(){
    let select=document.createElement("ul")
    select.className="images"
    for(let i = 1;i<=Object.keys(images).length;i++){
        let option=document.createElement("li")
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
//Function To  Create The Element To Contry

function Contry(){
    let select=document.createElement("ul")
    select.className="images"
    for(let i = 1;i<=Object.keys(locations).length;i++){
        let option=document.createElement("li")
        let status=document.createElement("p")
        status.textContent=locations[i].Name
        option.appendChild(status)
        select.appendChild(option)

        option.onclick=function(){
            
            fell.textContent=status.innerHTML
            select.remove()
        }
    }
    felling.appendChild(select)
    
}


// location click

local.onclick=function(){
    whatFell.textContent=""
    fell.textContent=""
    
    chick()
    Contry()
}

//Function To  Create The Element To users

function theUsers(){
    let select=document.createElement("ul")
    select.className="images"
    for(let i = 1;i<=Object.keys(users).length;i++){
        let option=document.createElement("li")
        let img=document.createElement("img")
        img.src=`img/${users[i].avter}`
        let status=document.createElement("p")
        status.textContent=users[i].Name
        option.appendChild(img)
        option.appendChild(status)
        select.appendChild(option)

        option.onclick=function(){
            
            fell.textContent=status.innerHTML
            select.remove()
        }
    }
    felling.appendChild(select)
    
}
user.onclick=function(){
    whatFell.textContent=""
    fell.textContent=""
    chick()
    theUsers()


}
