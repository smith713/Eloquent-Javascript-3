// Minimum
function min(num1, num2){
    return (Math.min(num1,num2));
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Recursion
function isEven(number) {
    if (number == 0) {
        return true;
    } else if (number == 1) {
        return false;
    } else if (number < 0){
        return isEven(Math.abs(number));
    } else {
        return isEven(number-2);
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

// Bean Counting
function countBs(str) {
	var beanCount = 0;
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) === 'B') {
			beanCount += 1;
		};
	};
	return beanCount;
};

function countChar(str, letter) {
	var beanCount = 0;
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) === letter) {
			beanCount += 1;
		}
	}
	return beanCount;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4