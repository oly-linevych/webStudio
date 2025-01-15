/*  
function createProduct(obj, callback){
  const product = {
    id: Date.now(),
    ...obj
  }
  console.log(product)
 }

 function logProduct(obj){
  console.log(`Product ${obj.name}`)
 }
 function logTotalPrice(price, quantity){
  console.log(`Total price ${price * quantity}`)
 }

 createProduct({
  name: 'ola',
  price: 30,
  quality:3},
  logProduct
 )

 createProduct({
  name: 'oyla',
  price: 20,
  quality:3},
  logTotalPrice
 )  */

  /* function calculate(a, b, operation) {
    return operation(a, b)
  }
  

  
  console.log(calculate(5, 3, (x, y) => x + y)); // 8
  console.log(calculate(5, 3, (x, y) => x - y)); // 2
  console.log(calculate(5, 3, (x, y) => x * y)); // 15
   */

  /* const TRANSACTION_LIMIT = 1000;
  const account = {
    username: 'Jacob',
    balance: 400,
    withdraw(amount, onSuccess, onError){
      if (amount > TRANSACTION_LIMIT) {
        onError(`${TRANSACTION_LIMIT}`)
        return
      }else if (this.balance < amount) {
        onError('no cash');
        return
      }
      this.balance -= amount
      onSuccess('succesl')
      }
    }
  
  function handleSuccess(message) {
console.log(`success ${message}`)
  }
  function handleError(message) {
    console.log(`error ${message}`)
      }
      
      account.withdraw(2000, handleSuccess, handleError)
      account.withdraw(700, handleSuccess, handleError)
      account.withdraw(100, handleSuccess, handleError)


      function changeEven(numbers, value) {
let a = []
  numbers.forEach(element => {
    if (element % 2 === 0) {
     
      a.push(element + value)
    }
  })
   return a
} */
   /* function changeEven(numbers, value) {
    let a = []
      numbers.forEach(element => {
        if (element % 2 === 0) {
          a.push(element + value)
        } else {  
          a.push(element)
        }
      })
      console.log(a)
       return a
    }
    changeEven([1, 2, 3, 4, 5], 10)  */
/*     const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers)
const oddNumbers = numbers.filter(number => number % 2  === 1);
console.log(oddNumbers)
 */
/* const b = document.querySelector(".social")
const c = document.querySelector("h1")
const a = document.createElement('p')
console.log(a)
c.textContent = 'Новий абзац'
console.log(c.textContent)

/* /* /* console.log(b.classList.contains("social")) */
/* b.classList.add("sun", "moon", "star")
b.classList.remove("moon")
console.log(b.classList) */
 
/* for (let i = 20; i >= 0; i -= 5) {
  console.log(i);
}

 */
/* 
+Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.
+Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль.
+Напиши функцію, яка приймає масив чисел та виводить лише парні числа у консоль.
+Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив чисел. Потрібно вивести лише ті елементи масиву які більші за max.
+Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.
+Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна порахувати скільки разів шуканий елемент зустрічається у масиві.
+Напиши функцію яка приймає масив чисел. Функція повинна видалити усі негативні(відємні числа) з масиву та повернути новий масив.
+Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до нижнього регістру, в іншому випадку привести до верхнього регістру.
Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише непарні числа.
Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне число помножене на індекс, за яким воно знаходиться в масиві.
Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише числа, які діляться на 3. */



/* function string(arr){
for (let i = 0; i < arr.length; i++){
  if(arr[i].length < 6){
    arr[i] = arr[i].toLowerCase()
    
  } else {  arr[i] = arr[i].toUpperCase()  
  }
}
console.log(arr)
}
string(['hhGGGygc', 'uhgVFHfcuef8e', 'hfHHFBfg', 'gvfygfyFe', 'yChyf', 'hh', 'HH', 'HGGG']) */

/* function negative (arr){
let newArr = []
for (const ar of arr){
  if (ar >= 0) {
    newArr.push(ar)
  }
}
console.log(newArr)
}
negative([-2, 3, -4, 5, -6])
 */


/* function search(arr, elem){
  let total =0
for (let i = 0; i < arr.length; i++) {
if (arr[i] === elem) {
  total += 1
}
}
console.log(total)
}
search([3, 4, 5, 4, 6, 4], 4) */

/* function sum (arr){
let total = 0
for (let i = 0; i < arr.length; i++) {
  total += arr[i]
} console.log(total)
}
sum([2, 5, 7, 4, 3, 5,5]) */

/* function smile (arr, max) {
for (const elem of arr){
  if (elem > max) {
    console.log(elem)
  }
}
}

smile([12, 4, 6, 10, 3, 15], 9) */

/* function foo (a){
for (const elem of a){
  console.log(elem)
}

}

foo([1, 5, 10, 15, 20]) */

/* function numbers (a){
for (const number of a) {
  if (number % 2 === 0){
    console.log(number)
  }
}
}

numbers([1, 5, 10, 15, 20]) */


/* function numbers (arr) {
for (let i = 1; i <= arr.length; i++){
if (i %2 === 0){
  console.log(arr[i])
}
}
}

numbers(['ola', 'anna', 'hala', 'toma']) */
const formData = {
email:"",
message: ""
}

console.log(formData)
 const form = document.querySelector(".feedback-form");

/* const input = form.elements.email; */

form.addEventListener("input", handler)
function handler (evt)  {
    const key = evt.target.name; 
   const val = evt.target.value 
 formData[key] = val 

console.log(key)
console.log(val)



 localStorage.setItem(localStorageKey, JSON.stringify(formData)); 
};  
const localStorageKey = "feedback-form-state";
const input = form.elements.email;
const localInput = JSON.parse(localStorage.getItem(localStorageKey)) ?? "";
input.value = localInput.email

const textarea = form.elements.message;
const localTextarea =  JSON.parse(localStorage.getItem(localStorageKey)) ?? "";
textarea.value =localTextarea.message

/* 
formData.email.value = localStorage.getItem(localStorageKey) */
const localForm = JSON.parse(localStorage.getItem(localStorageKey)) ?? "";
console.log(localForm)

formData.email = localForm.email
formData.message = localForm.message
console.log(formData)
console.log(localForm)
  

 
form.addEventListener("submit", evt => {
 
	console.log(evt.target.elements.message.value);
  console.log(evt.target.elements.email.value)

  
  
}); 

