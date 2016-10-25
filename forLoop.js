// Count Up By
// Create a program that takes two numbers - one to count to and another to determine what multiple to use to get there.
//
// Here is some sample input:
// Count to: 30
// Count by: 5
// Output: 5, 10, 15, 20, 25, 30
//
// Count to: 50
// Count by: 7
// Output: 7, 14, 21, 28, 35, 42, 49
//
//
//

var countUp = function(countTo, countBy) {// function with 2 params
	//(number, number) -> numbers
	var total = 0;
  for(var counter = 0; (total + countBy) <= countTo; counter += 1) { // Initalize Counter, Tell Condition total + 5 is less then equel too 30 then expression + 1 // first condition second the work then third adds 1 then counter becomes 1
    total += countBy;
    console.log(total);
  };
};


countUp(30, 5); //30 is count to  5 is count by

countUp(50, 7);




//for loop with names
var names = ["Eric", "Thor", "Tony", "Spiderman"]

for (index = 0; index < names.length; index += 1){
	alert("Hello " + names[index])

}


//Write a loop to multiply an arbitrary amount of numbers. This should look very similar to the code to sum numbers from the lesson.

var numbers = [5,10,15,20];
total = 1;
for (index = 0; index < numbers.length; index += 1 ){
	total = total * numbers[index];
}


// vowel Replacer


var userInput = "This is our sample sentence, containing vowels.";

var vowelReplace = function(inputString) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var output = [];
  for (strIndex = 0; strIndex < inputString.length; strIndex += 1) {
    if (vowels.includes(inputString[strIndex])) {
      output.push('-');
    } else {
    output.push(inputString[strIndex]);
    }
  };
  var outputString = output.join('');
  console.log(outputString);
};

vowelReplace(userInput);
