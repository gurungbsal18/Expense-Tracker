const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const getTranscationFromLocalStorage = JSON.parse(localStorage.getItem('transcations'));

console.log(getTranscationFromLocalStorage);

let transcations = localStorage.getItem('transactions') != null ? getTranscationFromLocalStorage : [];

function addTransaction (e) {
    e.preventDefault();
    console.log(e)

    if(text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please enter required field')
    }

    const transaction = {
        id: generateId(),
        text : text.value,
        amount : +amount.value,
    }

    transcations.push(transaction)
    addTransactionDOM(transaction)
    updateValues()

    text.value =''
    amount.value= ''
}

function generateId() {
    return Math.floor(Math.random() * 100)
}

function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+'
    const item = document.createElement('li')

    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')
    item.innerHTML = `
    ${transaction.text} <span>${sign} ${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onClick="removeTransaction(${transaction.id})">X</button>
    `

    list.appendChild(item)
}

form.addEventListener('submit', addTransaction)