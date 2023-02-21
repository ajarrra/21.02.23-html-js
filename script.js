let example1 = document.querySelector("article"); //всегда пишем документ для нтмл
console.log(example1); 

let example2 = document.querySelector("p");
example2.textContent = "Hello world";  //изменили описание параграфа
console.log(example2);


let example3 = document.querySelector(".example-3");  //класс
console.log(example3);

let example4 = document.querySelector("#example-4");  //айди 
console.log(example4);

let example5 = document.querySelector("p:nth-child(4"); //псевдо селектор
console.log (example5);
