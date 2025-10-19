prompt = int(input("Enter a number: "))
number = 1
factor = prompt
while factor > 0:
	number = number * factor
	factor -= 1
print(number)
