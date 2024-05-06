

//for of loop

// let string="ali shoaib";
// for(let i of string)
// {
//     console.log("i =",i);
// }

// let value="Pakistan";
// let size=0;
// for(let i of value)
// {
//     console.log("i=",i);
//     size++;
// }
// console.log("size is =",size);




//  for in loop

// let student={
//     nmae:"ali shoaib",
//     age:20,
//     cgpa:7.0,
//     isPass:true,
// }
// for(let key in student)
// {
//     console.log("key =",key,"value =",student[key]);
// }



//  pracices question   print the number 1 to 100

// for(let num=1;num<=100;num++)
// {
//     if(num%2===1){
//     console.log("num is odd=",num);
//     }
// }


// let game_number=100;
// let user_number=prompt("guess the game_number");
// while(user_number!=game_number)
// {
//     user_number=prompt("you enter the wrong number  and  guess again");
// }
// console.log("congulation you enter the right number");



// let str2="ali shoaib";
// let str='ali shoab';
// str.length
// str2.lenght
// console.log(str2[9]);

//  template literal is  a special type  of  string 
// let sentences=`this is a template literal`;the
// console.log(sentences,typeof sentences);


// let obj={
//     item:"pen",
//     price:10
// }
// console.log("the item is ",obj.item," and price is",obj.price);
// console.log(`the item is ${obj.item} and price is ${obj.price}`)


//   string expression 
// let obj=`this a speical type string ${1+2+3}`;
// console.log(obj);


//   escape  character
// console.log("ali\t\tshoaib"); 


// let str="ali\tshoaib";
// console.log(str.length);

//  string method  toUppercase
// let string="ali shoaib";
// console.log(string.toUpperCase());

///  string  method  toLowerCase

// let str="Pakistan";
// console.log(str.toLowerCase());


///trim method

// let str="      ali                      shoaib     ";
// console.log(str.trim());

 //   slice how to start andhow to end

//  let str="0123456789";
//  console.log(str.slice(3,8));

// let str="abcdefghijklmnopqrstuvwxyz";
// console.log(str.slice(0,25));

// concat  string

// let str1="ali";
// let str2="shoaib";
// let result=str2.concat(str1);
// console.log(result);
// let resu="my personal name is"+str1+str2;
// console.log(resu);


//replace string method

// let string="hello";
// console.log(string.replace("h","y"));
// console.log(string.replace("h","m"));
// console.log(string.replace("hello","pak"));

let string="abcdefgh";
console.log(string.charAt(5));
