// let marks_std1=78;
// let marks_std10=99;
// let marks_std6=100;
// let marks_std4=67;
// let marks_std3=78;
// console.log(marks_std1);
// console.log(marks_std6);
// console.log(marks_std10);




// let marks=[23,34,55,78,65,45];
// console.log(marks);
// console.log(marks[2]);
// console.log(marks[3]);

// marks[0]=5000
// console.log(marks[0]);


// let heroes=["iqbal","quaid-e-azam","imran khan"];
// console.log(heroes.length);


// let marks=[89,45,67,34,67,67,25,67,42,45];
// for(let idx=0; idx<marks.length; idx++)
// {
//     console.log(marks[idx]);
    
// }
// marks[2]=500
// console.log(marks[2]);
// console.log("values",marks.length);


//let hero=["shoaib","asad","abdullah","ali","shani","Gull","zohabi"];
// for(let idx=0; idx<hero.length; idx++)
// {
//     console.log(hero[idx]); // Add a semicolon here
// }
// console.log("value",hero.length);


// for of loop
// for(let ali of hero)
// {
//     console.log(ali);
// }


// let cities=["mandi","baseerpur","depalpur","okara","sahiwal"];
// for(let i of cities)
// {
//     console.log(i.toUpperCase());
// }


//pracities question
// let array=[45,46,47,48,49,50,51,52,53,54,55];
// let sum=0;
// for(let i=0; i<array.length;i++)
// {
//     sum=sum+array[i];
    
// }
// console.log("the sum is ",sum);
// let avg=0;
// avg=sum/array.length;
// console.log("the average",avg);



// let item=[250,645,300,900,50];
// let i=0;
// for(let value of item)
// {
//     console.log("The  original price is =",value);
//     let offer=value/10;
//     item[i]=value-offer;
//     console .log("The original price of each item after discount",item[i]);

// }


// let item = [250, 645, 300, 900, 50];

// for (let i = 0; i < item.length; i++) {
//     let offer = item[i] - 10;
//     item[i] -=offer;
  
// }
// console.log("Discounted price for item at index is", item);



//   ------push--------
// let fooditem=["apple","banana","orange","strawbarry","egg","meat"];
// fooditem.push("nuts","seed","coconet");
// console.log(fooditem);



// let fooditem=["apple","banana","orange","strawbarry","egg","meat"];
// //fooditem.pop();
// console.log(fooditem);
// let deleteditem=fooditem.pop();
// console.log("deleted =",deleteditem);

// //---------------to string-------------
// let fooditem=["apple","banana","orange","strawbarry","egg","meat"];
// console.log(fooditem.toString());
// console.log(fooditem);



//----concate  is mean joining the multiply array--------------
// let hero=["quaid-e-Azam","Allama Iqbal","abdul Star"];
// let history_hero=["Molana yousfzai","Imran Khan"];
// let army_hero=["mejhar aziz shaheed","lalak jan shaheed"];
// let Pakistan_hero=hero.concat(history_hero,army_hero);
// console.log(Pakistan_hero);

//---------unshift----like a works push  as at start-----
// let hero=["quaid-e-Azam","Allama Iqbal","abdul Star"];
// hero.unshift("ali","shoaib");
// console.log(hero);


//---------shift mean like work as pop as in start--------
// let hero=["quaid-e-Azam","Allama Iqbal","abdul Star"];
// let val=hero.shift();
// console.log("delet the name  = ",val);



//--------slice  mean  how select the element   -------
// let hero=["quaid-e-Azam","Allama Iqbal","abdul Star","imran  kham"];
// console.log(hero);
// console.log(hero.slice(1,3));




//------splice  mean how to stsrt  ,  how to delete   and  how to add
// let hero=["quaid-e-Azam","Allama Iqbal","abdul Star","imran  kham"];
// console.log(hero);
// hero.splice(1,0,"ali","shoaib");


// let array=[1,2,3,4,5,6,7,8,9];
// console.log(array);
// array.splice(4,0,102,103,104,105);



let company=["bloomberg","microsoft","uber","google","IBM","Netflex"];
console.log(company);
let val=company.shift();
console.log(val);
company.splice(1,2,"Ola");
company.splice(5,0,"Ammazoon");



