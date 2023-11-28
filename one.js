//treat all js code as newer version
"use strict";
// console.log(typeof undefined);  ->undefined
// console.log(typeof Nan);  ->undefined
// console.log(typeof null); ->object

let score =null
// console.log(score)
//it converts null value to 0
let valueInNumber=Number(score)
// console.log(valueInNumber)

//browser makes conversion to string but if we want in different forms we can do that
// console.log(true++) error
// console.log(null > 0)   ->false
// console.log(null == 0)  ->false
// console.log(null < 0)   ->false
// console.log(null <= 0)  ->true
// console.log(null >= 0)  ->true
// console.log(null != 0)  ->true
// console.log(undefined > 0)  ->false
// console.log(undefined >= 0) ->false
// console.log(undefined == 0) ->false
// console.log(undefined < 0)  ->false
// console.log(undefined <= 0) ->false
// console.log(undefined != 0)  ->true

// null -> empty  naaki 0 khali
// undefined-> value ab tak defined nahi hai variable declared hai
// symbol -> kisi bho value ko unique banake le liye use hota hai