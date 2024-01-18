/* let carName = 'Bugatti'
switch(carName){
    case'BMW':
        alert('BMW is my car!')
        break
    case'Mercedes':
        alert('Mercedes is my car!')
        break
    case'Bugatti':
        alert('Bugatti is my car')
        break
    case'Volswagen':
        alert('Volswagen is my car')
        break
    default:
        alert("This isn't my car")
} */

/* let inputTop = prompt('input number from 55 to 99')
switch(true){
    case (inputTop > 54 && inputTop < 100):
        alert('Correct')
        break
    default:
        alert('Incorect')
} */

/* Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100). 
До якої групи відноситься Максим, якщо йому 55 років. Назву групи вивести на екран. */

/* let peopleAge = prompt('Input your age')
switch(true){
    case (peopleAge > 0 && peopleAge < 17):
        alert('Child')
        break
    case (peopleAge > 17 && peopleAge < 61):
        alert('Adult')
        break
    case (peopleAge > 61 && peopleAge < 101):
        alert('Pensioner')
        break
    default:
        alert('?')
} */



/* Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число,яке дорівнює сумі букв імені і прізвища. 
Якщо умова не виконується - вивести “УПС”. Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12. 
Використовувати вбудований метод length. */

/* let yourName = prompt('Imput your name')
let yourSurname = prompt('Imput your surname')
let yourFullName = yourName + yourSurname
switch(true){
    case(yourName.length > 3 && yourSurname.length > 4):
        alert(yourFullName.length)
        break
    default:
        alert('Mistake')
} */




/* Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". 
При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці. */

let select = document.querySelector('.select')
select.addEventListener('change',function(){
    let selectValue = select.value
    switch(selectValue){
        case'Juice':
            alert('Juice')
            break
        case'Coffe':
            alert('Coffe')
            break
        case'Tea':
            alert('Tea')
            break
        default:
            alert('Choose something please')
    }
})

let day = document.querySelector('.day')
day.addEventListener('change',function(){
    let dayValue = day.value
    switch(dayValue){
        case'Monday':
        case'Tuesday':
        case'Wensday':
        case'Thursday':
        case'Friday':
            alert('work')
            break
        case'Saturday':
        case'Sunday':
            alert('free')
            break
        default:
            alert('input name of a day')
    }
})

let monthBtn = document.querySelector('.month-btn')
let month = document.querySelector('.month')
monthBtn.addEventListener('click',function(){
    let monthValue = month.value
    switch(monthValue){
        case'12':
        case'1':
        case'2':
            alert('Winter')
            break
        case'3':
        case'4':
        case'5':
            alert('Spring')
            break
        case'6':
        case'7':
        case'8':
            alert('Summer')
            break
        case'9':
        case'10':
        case'11':
            alert('Autum')
            break
        default:
            alert('Input month name')
        }
    
    switch(monthValue){
        case'9':
        case'4':
        case'6':
        case'11':
            alert('30 days')
            break
        case'2':
            alert('28/29 days')
            break
        case'1':
        case'3':
        case'4':
        case'6':
        case'7':
        case'8':
        case'10':
        case'12':
        case'5':
            alert('31 days')
            break
        default:
    }
})

let lightBtn = document.querySelector('.light-btn')
let light = document.querySelector('.light')
lightBtn.addEventListener('click',function(){
    lightValue = light.value
    switch(lightValue){
        case'red':
            alert('stop')
            break
        case'green':
            alert('go')
            break
        case'yellow':
            alert('wait')
            break
        default:
    }
})

let numberFirst = document.querySelector('.number1')
let numberSecond = document.querySelector('.number2')
let math = document.querySelector('.math')
math.addEventListener('change',function(){
    mathValue = math.value
    numberFirstValue = numberFirst.value
    numberSecondValue = numberSecond.value
    switch(mathValue){
        case'*':
            let mnozenie = Number(numberFirstValue) * Number(numberSecondValue)
            alert(mnozenie)
            break
        case'/':
            let delenie = Number(numberFirstValue) / Number(numberSecondValue)
            alert(delenie)
            break
        case'+':
            let plus = Number(numberFirstValue) + Number(numberSecondValue)
            alert(plus)
            break
        case'-':
            let minus = Number(numberFirstValue) - Number(numberSnumberSecondValueecond)
            alert(minus)
            break
    }
})




/* Виберіть будь-яке число від 1 до 5 включно через функцію random. За допомогою if else визначіть, що це за число. */

/* let randomNum = Math.floor(Math.random()*5+1)
if (randomNum === 1){
    console.log('It wil be 1')
} else if(randomNum === 2){
    console.log('It wiil be 2')
} else if(randomNum === 3){
    console.log('It wiil be 3')
} else if(randomNum === 4){
    console.log('It wiil be 4')
} else if(randomNum === 5){
    console.log('It wiil be 5')
}

let body = document.querySelector('.body')
switch(true){
    case(randomNum === 1):
        alert('It will be 1')
        break
    case(randomNum === 2):
        alert('It will be 2')
        break
    case(randomNum === 3):
        alert('It will be 3')
        break
    case(randomNum === 4):
        alert('It will be 4')
        document.body.style.backgroungColor = '#000'
        break
    case(randomNum === 5):
        alert('It will be 5')
        document.body.style.backgroungColor = '#ff0000'
        break
    default:
} */

/* Змінна lang може приймати 4 значення: 'ua', 'en', 'ru', 'fr'. За допомогою конструкції switch виведи на екран назву 
місяця в залежності від обраної мови. Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier". */

/* let lang = document.querySelector('.lang')
lang.addEventListener('change',function(){
    langValue = lang.value
    switch(langValue){
        case'En':
            alert('April')
            break
        case'Ua':
            alert('Апріль')
            break
        case'Fr':
            alert('Janvier')
            break
        case'Ru':
            alert('Октябрь')
            break
    }
}) */

    /* Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 1 - самовивіз, 
    2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції.
        - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
        - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
        - 'Посилка буде відправлена сьогодні'
        - 'Вам передзвонит менеджер'. */

/* let choise = prompt('Напишить вид доставки')
switch(choise){
    case'самовивіз':
        alert('Ви зможете забрати товар завтра з 12:00 в нашому офісі')
        break
    case"кур'єр":
        alert("Кур'єр доставить замовлення завтра з 9:00 до 18:00")
        break
    case'пошта':
        alert('Посилка буде відправлена сьогодні')
        break
    default:
        alert('Вам передзвонит менеджер')
} */

/*      Напиши скрипт вибору готеля по кількості зірок.
    1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
    Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
    'Токої кількості зірок немає' */

/* let stars = prompt('How many stars hotel do you want?')
switch(stars){
    case'1':
        alert('20$')
        break
    case'2':
        alert('30$')
        break
    case'3':
        alert('50$')
        break
    case'4':
        alert('70$')
        break
    case'5':
        alert('120$')
        break
    default:
        alert('This number of stars does not exist')
} */