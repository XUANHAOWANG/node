const balance=document.getElementById('balance')
const money_plus=document.getElementById('money-plus')
const money_minus=document.getElementById('money-minus')
const list=document.getElementById('list')
const btn=document.getElementsByClassName('btn')
const text=document.getElementById('text')
const form=document.getElementById('form')
const amount=document.getElementById('amount')

const localStorageTransaction=JSON.parse(localStorage.getItem('transactions'))
function addTransactionList(transaction){

    //get sign
    const sign = transaction.amount<0?'-':'+'//check value
    const item=documnet.createElement('li')
    //add class
    item.
}