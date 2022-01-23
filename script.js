const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
/*//колич классов
console.log(btns[0].classList.length);// колич class = 2
//методы classList
console.log(btns[0].classList.item(0))//получ class № 1 = blue
console.log(btns[0].classList.item(1))//получ class № 2 = some
console.log(btns[0].classList.add('red','ttttttt'));// добавл new class
console.log(btns[0].classList.remove('blue'));// delete new class
console.log(btns[0].classList.add('red'));// добавл new class
console.log(btns[0].classList.toggle('blue'));//добавл new class если его нет, если есть,add
//опред-е есть ли class u button
if (btns[1].classList.contains('red')) {
    console.log('red');// = false
};*/
//динамич преобраз page
/*
btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {//есть ли у 2 кнопки нет class red
        btns[1].classList.add('red');
    } else  {
        btns[1].classList.remove('red');//если есть
    }
});
*/
btns[1].classList.toggle("red")
//Делегирование событий
wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);//div#first.btn-block  -gray,  button - yellou(tegName'button')
    if (event.target && event.target.tagName == "BUTTON") {
       // if (event.target && event.target.matches("button.red")) {

            /*
                if (event.target && event.target.classList.contains('blue')) {
            */
        console.log('Hello');
    }
});
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);// добавл его в wrapper. addEv/
// перебор без делегированиия не работает
/*btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Hello');
    })
})*/



