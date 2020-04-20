let every=(array,test)=>{
	for(let elem of array){
    	if(!test(elem))
          return false;
    }
	return true;
};

let everyS=(array,test)=>{
  	return !array.some(elem => !test(elem));
};


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log("---");

console.log(everyS([1, 3, 5], n => n < 10));
// → true
console.log(everyS([2, 4, 16], n => n < 10));
// → false
console.log(everyS([], n => n < 10));
// → true