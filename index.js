
//- Task One: Repeat contents of array 3 times.
function repeat(array){
	let returnArray = [];
	for (var i = 0; i < 3; i++) {
		returnArray = returnArray.concat(array);
	}
	return returnArray;
}

console.log( repeat([1,2,3]) );