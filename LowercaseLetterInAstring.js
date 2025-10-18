string = "EMMANueL"
let index = 0;
count = 0
while(index < string.length){
let lowercase = string.charCodeAt(index)
	if(lowercase >= 97 && lowercase < 123){
		console.log(string[index]);
		count += 1
		

	}
index ++
}
console.log("The sum of lowercase letters is: ",count);
