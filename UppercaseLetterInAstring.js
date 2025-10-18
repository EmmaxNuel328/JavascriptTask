string = "EMMANUEL"
let index = 0;
count = 0
while(index < string.length){
let uppercase = string.charCodeAt(index)
	if(uppercase >= 65 && uppercase < 91){
		console.log(string[index]);
		count += 1
		

	}
index ++
}
console.log("The sum of uppercase letters is: ",count);
