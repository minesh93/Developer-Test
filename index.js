
//- Task One: Repeat contents of array 3 times.
function repeat(array){
	let returnArray = [];
	for (var i = 0; i < 3; i++) {
		returnArray = returnArray.concat(array);
	}
	return returnArray;
}

console.log("Task One:" + repeat([1,2,3]) );


//- Task Two: No vowels, lowercase except the first letter.
function reformat(input){

	let letters = input.split("");

	return letters.reduce((prev, current,index,array) => {
		if(index == 0){
			current = current.toUpperCase();
		} else {
			current = current.toLowerCase();
		}
		if(!/^([aeiou])$/.test(current)){
			return prev + current;
		}
		return prev;
	}, '');

}

console.log("Task Two:" + reformat("liMeSHArp DeveLoper TEST") );


//- Task Three: Next Binary Number
function next_binary_number(number){
	let clonedNumber = number.slice();
	let allOne = true;
	for (var i = 0; i < number.length; i++) {
		if(number[i] == 0){
			allOne = false;
			if(i == number.length - 1){
				number[i] = 1;
			}
		} else {
			if(i != number.length - 1){
				if(number[i-1] == 0 && number[i+1] == 0){
					clonedNumber[i+1] = 1;
					clonedNumber[i] = 1;
					clonedNumber[i-1] = 0;
				} else if(number[i-1] == 0 && number[i+1] == 1){
					clonedNumber[i+1] = 0;
					clonedNumber[i] = 0;
					clonedNumber[i-1] = 1;
				}
			}
			if(i == number.length - 1){
				if(number[i-1] == 0){
					clonedNumber[i-1] = 1;
				} 
				clonedNumber[i] = 0;
			}
		}
	}
	if(allOne){
		clonedNumber.push(0);
	}
	return clonedNumber;
}

console.log("--- Task Three ---");
console.log("[1,0,0,0] : " + next_binary_number([1,0,0,0]) );
console.log("[1,0,0,1] : " + next_binary_number([1,0,0,1]) );
console.log("[1,0,1,0] : " + next_binary_number([1,0,1,0]) );
console.log("[1,0,1,1] : " + next_binary_number([1,0,1,1]) );
console.log("[1,0] : " + next_binary_number([1,0]) );
console.log("[1,1] : " + next_binary_number([1,1]) );
console.log("33[1,0,0,0,0,1] : " + next_binary_number([1,0,0,0,0,1]) );
console.log("34[1,0,0,0,1,0] : " + next_binary_number([1,0,0,0,1,0]) );
console.log("35[1,0,0,0,1,1] : " + next_binary_number([1,0,0,0,1,1]) );
console.log("[1,0,0,0,0,0,0,0,0,1] : " + next_binary_number([1,0,0,0,0,0,0,0,0,1]) );
