//1)
//как расшифровывается DOM?
//Document Object Model
//2)
//для чего нужен DOM?
//объектную модель документа HTML-страницы.
//3)
//измените содержимое тега 'p' на 'Новый текст'
<p id="txt">Some text</p>

const txt = document.querySelector('#txt')

txt.innerText = 'Новый текст'

4)
//выведите в консоли содержимое тега 'p'
<p id="txt1">Some text</p>

const txt1 = document.querySelector('#txt1')

console.log(txt1);

5)
//получите доступ к элементу с помощью (get...)
<div class="master"></div>

const txt2 = document.getElementsByClassName('master')

6)
//получите доступ к элементу с помощью (get...)
<div id="master"></div>

const txt3 = document.getElementById('master')

7)
//получите доступ к элементу с помощью (get...)
<div></div>

const txt4 = document.getElementsByTagName('div')

8)
//получите доступ к элементу с помощью (query...) через имя атрибута
<div title="someText"></div>

const txt5 = document.querySelector('title')

9)
//получите доступ к элементу с помощью (query...) через имя и значение атрибута
<div title="someText"></div>

const txt6 = document.querySelector('.title.someText')

10)
//получите доступ к элементу с помощью (query...) через тег, имя и значение атрибута
<div title="someText"></div>

const txt7 = document.querySelector('div.title.someText')

11)
//получите доступ к элементу с помощью (query...) через имя класса
<div class="someText"></div>

const txt8 = document.querySelector('.someText')

12)
//получите доступ к элементу с помощью (query...) через имя идентификатора
<div id="someText"></div>

const txt9 = document.querySelector('#someText')

13)
//получите доступ к элементу с помощью (query...) через тег
<div></div>

const txt0 = document.querySelector('div')

14)
//измените значение атрибута 'type' на 'number' с помощью DOM метода
//<input type="text">
//type.attribute = number
15)
//измените фоновый цвет блока div на красный с помощью DOM метода
<div id='block'></div>

const txt10 = document.querySelector('#block')

txt10.style.div = 'background-color: red;'

16)
//добавьте атрибут 'title' со значением 'message' для блока нижу с помощью DOM метода
<div></div>

const txt11 = document.querySelector('div')

txt11.createElement(title)

txt11.appendChild('message')


//17)
//с помощью какого метода DOM можно создать элемент в javascript?

//document.createElement(element)	Создает html элемент

//18)
//с помощью какого метода DOM можно удалить элемент в javascript?

//document.removeChild(element)		Удаляет html элемент

//19)
//с помощью какого метода DOM можно добавить элемент в javascript?

//document.appendChild(element)		Добавляет html элемент

//20)
//с помощью какого метода DOM можно заменить элемент в javascript?

//document.replaceChild(new, old)		Заменяет html элемент

//21)
//с помощью какого метода DOM можно записать текст в элемент в javascript?

//document.write(text)				Записывает