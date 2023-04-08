var number = prompt('Оцените наш сервис')

if (number < 5){
    alert('Мы работаем над улучшением сервиса!')
} else if (number >= 5){
    alert(('Спасибо за высокую оценку!'))
} else {
    alert('Нужно вводить не буквы, а цифры' )
}

var message = prompt("Выберите язык отображения недели")
var Eng = ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday "]
var Rus = [" Пн, Вт, Ср, Чт, Пт, Сб, Вс"]

if (message === "English") {
    console.log(Eng)
} else if (message === "Русский") {
    console.log(Rus)
} else {
    console.log("Error")
}