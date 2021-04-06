/*

Напишите функцию, создающую выпадающий список на веб-странице (HTML select) из массива объектов со 
значениями. Массив должен содержать объекты со свойствами:

    value — значение для атрибута value тэга option
    label — значение для содержимого тэга option (заголовок элемента при открытии списка или выбранного 
        значения)

Вторым аргументом функция должна принимать выбранное значение (value выбранного по умолчанию элемента). 
По умолчанию выбирается 0-й элемент массива значений. Если переданное значение не найдено в массиве элементов, 
то нужно также выбрать 0-й элемент.

Возвращаемое значение — DOM-элемент select.

Проверка результата

Попробуйте разные комбинации массива элементов и значения по умолчанию. 
Не забудьте проверить ситуацию с несуществующим в массиве элементов значением по умолчанию.

*/

let objectList = [
    { value: '1', label: 'значение1' },
    { value: '2', label: 'значение2' },
    { value: '3', label: 'значение3' },
    { value: '4', label: 'значение4' },
];

function addOptionElem(array, num = 0) {
    let body = document.body;
    let select = body.appendChild(document.createElement("select"))
    array.forEach(function (el, index) {
       let option = document.createElement("option")
       option.value = el.value
       option.innerHTML = el.label
       select.appendChild(option)
       if (index === num) {
          option.setAttribute("selected", true)
       }
    })
    return select
 }

addOptionElem(objectList);