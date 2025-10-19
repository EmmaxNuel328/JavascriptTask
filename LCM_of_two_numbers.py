prompt1 = int(input("Enter first number: "))
prompt2 = int(input("Enter second number: "))
factor = 2
while factor <= 1000000:
	if prompt1 % factor == 0 or prompt2 % factor == 0:
		print(factor)
	factor += 1