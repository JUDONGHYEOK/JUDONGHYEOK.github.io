const daysOfWeek=["Mon","Tue","Wed","Thu","Fri",true,54];

const nicoInfo={
    name:'Nicola',
    age:33,
    gender:"Male",
    isHandsome:true,
    favMovies:["Along the gods","LOTR"],
    favFood:[{name:"Kimchi",fatty:false},{name:"Cheese burger",fatty:true}]
};
console.log(daysOfWeek[2]);
console.log(console);

function sayHello(name,age){
    return `Hello ${name} you are ${age} years old`; 
}

const greetNicolas=sayHello("Nicolas",14)

console.log(greetNicolas);

const title=document.querySelector("#title");

const CLICKED_CLASS="clicked";

function handleClick() {
    const hasClass=title.classList.contains(CLICKED_CLASS);

    if(hasClass){
                title.classList.remove(CLICKED_CLASS);

    }else{
        title.classList.add(CLICKED_CLASS);

    }
}

function init() {
    title.addEventListener("click",handleClick);
}
init();
