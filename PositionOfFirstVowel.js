string = "tmminuel"
vowel = "aeiouAEIOU"
let index = 0
while(index < string.length ){
	if(string[index] == vowel[0] || string[index] == vowel[1] || string[index] == vowel[2] || string[index] == vowel[3] || string[index] == vowel[4] || string[index] == vowel[5] || 	  string[index] == vowel[5] || string[index] == vowel[6] || string[index] == vowel[7] || string[index] == vowel[8] || string[index] == vowel[9]){
		
	console.log(string[index],"is the first vowel and","\n","The position of",string[index],":", "is",index);
		break
	}

index++
}