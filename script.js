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
}


form.addEventListener('submit', addTransaction)