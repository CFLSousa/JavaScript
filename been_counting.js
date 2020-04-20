let countBs=(str)=>{
	return countChar(str,'B');
};

let countChar=(str,ch)=>{
  	let counter=0;
	for(let c of str){
      if(c===ch)
    	counter++;
    }
    return counter;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4