let numero1 = document.querySelector('#numero1')

let um = document.querySelector('#um').value
let dois = document.querySelector('#dois').value
let tres = document.querySelector('#tres').value
let quatro = document.querySelector('#quatro').value
let cinco = document.querySelector('#cinco').value
let seis = document.querySelector('#seis').value
let sete = document.querySelector('#sete').value
let oito = document.querySelector('#oito').value
let nove = document.querySelector('#nove').value
let mais = document.querySelector('#mais').value
let vezes = document.querySelector('#vezes').value
let dividir = document.querySelector('#dividir').value
var apagar = document.querySelector('#apagar').value
var ponto = document.querySelector('#ponto').value
var input = document.querySelector('#input')

function numb1() {
  input.value += 1
  console.log(um)
}

function numb2() {
  input.value += 2
  console.log(dois)
}
function numb3() {
  input.value += 3
  console.log(tres)
}
function numb4() {
  input.value += 4
  console.log(quatro)
}
function numb5() {
  input.value += 5
  console.log(cinco)
}
function numb6() {
  input.value += 6
  console.log(seis)
}
function numb7() {
  input.value += 7
  console.log(sete)
}
function numb8() {
  input.value += 8
  console.log(oito)
}
function numb9() {
  input.value += 9
  console.log(nove)
}

function numb0() {
  input.value += 0
}

function more() {
  input.value += ' + '
  console.log(mais)
}

function menos() {
  input.value += ' - '
}

function remover() {
  input.value = ' '
}

function multiplicar() {
  input.value += ' * '
}

function divisao() {
  input.value += ' / '
}

function pontoo() {
  input.value += '.'
}

function igual() {
  if (
    input.value.includes('+') ||
    input.value.includes('-') ||
    input.value.includes('*') ||
    input.value.includes('/')
  ) {
    input.value = eval(input.value)
  } else {
    console.log('fudeuu')
  }
}
