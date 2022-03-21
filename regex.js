

String.prototype.insert = function(index, string) {
  if (index > 0) {
    return this.substring(0, index) + string + this.substr(index);
  }
  return string + this;
};


function insertDash(textString){	

	var regex1 = /A\d$/;
	var regex2 = /-A\d$/;
	var regex3 = /^PA/;
	var regex4 = /^PA-\d/;

	if ((textString.match(regex1)) && !(textString.match(regex2))){
		return textString.insert(textString.match(regex1).index+0 ,'-');
	};

	if ((textString.match(regex3)) && !(textString.match(regex4))){
		return textString.insert(textString.match(regex3).index+2 ,'-');
	};

	return textString;
}

function validateInput(textString){
	console.log("Input at validation stage " + textString)
	var regex1 = /^\d{6}-A\d$/;
	var regex2 = /^PA-\d{7}$/;

		if ((textString.match(regex1)) || (textString.match(regex2))){
			return textString
		}
	return '';
}


function cleanInput(textString){
	let inputString= textString.replace(/ /g,'');
	return inputString.replace(/minus/g, '-');
}

function normalizeInput(textString){
	let cleanedInput = cleanInput(textString);
	console.log("After input clean" + cleanedInput)

	cleanedInput = insertDash(cleanedInput);
	return validateInput(cleanedInput);
}




const testStrings = ['PA minus 1234450','PA123A3','PA1A1', '234','PA123445', 'PA-123','PA123445-PA','123445PA','123144A0', 'PA-1234567', 'PP-1345678', '000000-A0', '000000-B0', 'PA minus 123 45 6 7', 'minus PA minus 123 45 6 78', 'PA-000000-B0','000000--A0', '654 321 A 2', 'PA-000000A2'];


// iterate over array in Javascript
for (index = 0; index < testStrings.length; index++) {
	console.log("Raw input " + testStrings[index]);
	console.log("Function output is " +normalizeInput(testStrings[index]));
	console.log('#######');
	}