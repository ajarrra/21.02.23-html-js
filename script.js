let example1 = document.querySelector("article"); //всегда пишем документ для нтмл
console.log(example1);

let example2 = document.querySelector("p");
example2.textContent = "Hello world";  //изменили описание параграфа
example2.style.color = "tomato"; //меняем цвет текста
example2.style.fontSize = "25px"; //с большой буквы если тире 
console.log(example2);


let example3 = document.querySelector(".example-3");  //класс
example3.textContent = "This is my vloggg";
example3.style.fontWeight = "600";
console.log(example3);

let example4 = document.querySelector("#example-4");  //айди 
example4.textContent += "I like sushiiii";//короткий вариант добавления
example4.style.backgroundColor = "violet"
console.log(example4);

let example5 = document.querySelector("p:nth-child(4"); //псевдо селектор
example5.textContent = example5.textContent + "Like like like"; //старое содержимое + новый текст
console.log(example5);


let example6 = document.querySelectorAll("article p "); //выбирает все эл
//console.log(example6[0]);//как массив 
for (let i = 0; i < example6.length; i++) {
    let paragraph = example6[i];
    paragraph.textContent += "🥰";
}

let example7 = document.createElement ("p"); //создали эл  // <p></p>
example7.textContent = "Lorem ipsum";//добавл текст  <p>Lorem ipsum </p>
//document.body.append(example7);   // привязываем к body  <body> ....  <p>Lorem ipsum </p> </body>
//добавить в конце этого эл (append) а (predend) доб в начале 

example1.append(example7); 

//создать код кот хранит в ex8 ul
let example8 = document.createElement("ul");
//добавть ul к body
document.body.append(example8);
//заполним li
for( let i = 1 ; i <= 10; i++){
    let listItem = document.createElement("li")
    listItem.textContent = "example  " + i;
    example8.append(listItem);    
} 




