/*
Function arrayToList that builds up a list structure like the one
shown when given array as argument (example: [1, 2, 3]).

let list = {
  value: 1,
  	rest: {
      value: 2,
      rest: {
      	value: 3,
      	rest: null
   	  }
  	}
};
*/
function arrayToList(arr){
	let list=null;	
  	let aLen=arr.length;
	
	for(let i=aLen-1;i>=0;i--){
    	list={value:arr[i], rest:list};
    }

	return list;
}

/*
listToArray function that produces an array from a list.
*/
function listToArray(list){
  	if(list.rest==null){
    	return [list.value];
    }
    else{
		let arr=listToArray(list.rest);
      	arr.unshift(list.value);
      	return arr;
    }
}

/*
prepend function, which takes an element and a list 
and creates a new list 
that adds the element to the front of the input list.
*/
let prepend=(elem,list)=>{
  	return {value:elem, rest:list};
};

/*
nth function, which takes a list and a number 
and returns the element at the given position in the list 
(with zero referring to the first element) 
or undefined when there is no such element.
*/
let nth=(list,num)=>{
    if(num===0){
    	return list.value;
    }
    else if(num>0 && num<listToArray(list).length){
      	return nth(list.rest,num-1);
    }
    else{
      return undefined;
    }
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
console.log(nth(arrayToList([10, 20, 30, 9, 8, 7, 5, 66, 99]), 8));
// → 20