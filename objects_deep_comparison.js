let deepEqual=(obj1,obj2)=>{
  
  	if(typeof obj1=="object" && obj1!=null && 
       		typeof obj2=="object" && obj2!=null){
      
      	let keys1=Object.keys(obj1);
        let keys2=Object.keys(obj2);
      	let keys1Len=keys1.length;
      	let keys2Len=keys2.length;
      
      	if(keys1Len!=keys2Len){ return false; }

      	for(let k in keys1){
          	//Compares propeties keys and values
          	//between the two objects
        	if(!keys2.includes(keys1[k]) || 
            		!deepEqual(obj1[keys1[k]],obj2[keys2[k]]))
            	return false;
        }
    }
  	else { return obj1===obj2; }
  
    return true;
};

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(5, 5));
// → true
console.log(deepEqual("as", "ay"));
// → false