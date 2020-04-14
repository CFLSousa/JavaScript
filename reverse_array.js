let reverseArray=(arr)=>{
	let revArr=[];
  	let start=arr.length-1;
  
	for(let i=start;i>=0;i--){
    	revArr[start-i]=arr[i];
    }
  
  	return revArr;
};

let reverseArrayInPlace=(arr)=>{
 	let swap=0;
  	let screen=arr.length-1;
  	let middle=Math.floor(arr.length/2);
  
  	for(let i=0;i<middle;i++){
    	swap=arr[i];
      	arr[i]=arr[screen-i];
      	arr[screen-i]=swap;
    }
	
	return arr;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]