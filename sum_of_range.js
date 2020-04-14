/*
range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
*/
let range=(start,end,step=start>end?-1:1)=>{
  	let arr=[];
  
	if(start<end){
      for(let i=start;i<=end;step>0?i+=step:i+=1){
        arr.push(i);
      }
    }
    else if(start>end){
		for(let i=start;i>=end;step<0?i+=step:i-=1){
          arr.push(i);
        }
    }
  	return arr;
};

let sum=(arr)=>{
  	return arr.reduce((acc,val) => acc+val);
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55