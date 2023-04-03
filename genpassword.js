let Numbers = document.querySelector('#Numbers');

 let Numbers_array = ['1','2','3','4','5','6','7','8','9'];

let Numbers_array_collect = []

Numbers.onclick = function () {

    if(Input.value == 0) {
       alert("Enter quantity in input")
    }
    else {
    for(let i = 0;i < Input.value;i++) {
         let a_1 = Math.floor(Math.random() * Numbers_array.length)

         Numbers_array_collect.unshift(a_1);
    }

         console.log(Numbers_array_collect)
         Print.innerHTML = Numbers_array_collect.join("");
         Numbers_array_collect.splice(0,Input.value)
     }
}



let Lower = document.querySelector('#Lower');

let Lower_array = ['a', 'b', 'c,', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

 let Lower_array_collect = [];

Lower.onclick = function () {

    if(Input.value == 0) {
        alert("Enter quantity in input")
    }
    else {
    for(let i = 0;i < Input.value;i++) {
         let b_1 = Math.floor(Math.random() * Lower_array.length)

         Lower_array_collect.unshift(Lower_array[b_1]);
    }
         console.log(Lower_array_collect)
         
         Print.innerHTML = Lower_array_collect.join("");
         Lower_array_collect.splice(0,Input.value)
     }
}


let Big = document.querySelector('#Big');

let Big_array = ['A','B', 'C,', 'D','E','F','G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let Big_array_collect = [];

Big.onclick = function () {

     if(Input.value == 0) {
        alert("Enter quantity in input")
    }
    else {
    for(let i = 0;i < Input.value;i++) {
         let c_1 = Math.floor(Math.random() * Big_array.length)

         Big_array_collect.unshift(Big_array[c_1]);
    }
         console.log(Big_array_collect)
         Print.innerHTML = Big_array_collect.join("");
         Big_array_collect.splice(0,Input.value)
     }

}



let Symbols = document.querySelector('#Symbols');

let Symbols_array = ['$', '€', '¥', '£', 'ƒ', '₣', '¢', '¤', '฿', '₠', '₡', '₢',]


let Symblos_array_collect = [];

Symbols.onclick = function () {

    if(Input.value == 0) {
        alert("Enter quantity in input")
    }
    else {
    for(let i = 0;i < Input.value;i++) {
         let e_1 = Math.floor(Math.random() * Symbols_array.length)

         Symblos_array_collect.unshift(Symbols_array[e_1]);
    }
         console.log(Symblos_array_collect)
          Print.innerHTML = Symblos_array_collect.join("");
         Symblos_array_collect.splice(0,Input.value)
     }
}



let Input = document.querySelector('#input');


Input.addEventListener('input',function () {
  
})


let Print = document.querySelector("#print")

