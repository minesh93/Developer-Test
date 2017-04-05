
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
