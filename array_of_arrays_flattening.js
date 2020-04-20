let flatten=(arr)=>{
	return arr.reduce((accArr, currArr) => accArr.concat(currArr),[]);
};

console.log(flatten([[2,5],[3,9],[8,1]]));
//[2, 5, 3, 9, 8, 1]
console.log(flatten([[2,5],[3,9],[8,1],[7,5,6],[8,1,4,3]]));
//[2, 5, 3, 9, 8, 1, 7, 5, 6, 8, 1, 4, 3]
console.log(flatten([[],[],[]]));
//[]
console.log(flatten([]));
//[]