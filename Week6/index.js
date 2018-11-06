// var,let,const

//if, else, switch
let test = 10.00

if (test < 15.00) {
  console.log('What a steal!')
} else {
  console.log('Not a steal, sorry.')
} else if (test< 20.00) {
  console.log('Not bayd, not bayd.')
} else if (test<25.00) {
  console.log('What a ripoff!')
}

switch (test) {
  case 15.00:
    console.log('This is 15.00')
  case 20.00:
    console.log('This is 20.00')
}

switch(true) {
  case test < 15.00:
    console.log ('This is less than 15.00')
case test < 20.00
console.log ('This is less than 20.00')
}}
//make switch To do if else if
switch(true) {
  case test < 15.00:
    console.log ('This is less than 15.00')
    break
case test < 20.00
console.log ('This is less than 20.00')
break
default:
console.log('This is the default')
//IF nothing happens add default

//Function stuff

function squareNumber(firstNum /*this is an argument*/)
{
  //console.log(firstNum * firstNum)
  return firstNum * firstNum
}

//function call
let answer = squareNumber(4)
console.log(answer * 2)