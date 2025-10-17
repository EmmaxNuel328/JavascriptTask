prompt = int(input("Enter a four digit number: "))
prompt1 = prompt // 1000
prompt2 = (prompt%1000)//100
prompt3 = (prompt%100)//10
prompt4 = (prompt%10)

encrypt3 = ((prompt3 - 7)+10)%10
encrypt4 = ((prompt4 - 7)+10)%10
encrypt1 = ((prompt1 - 7)+10)%10
encrypt2 = ((prompt2 - 7)+10)%10

print(encrypt3,encrypt4,encrypt1,encrypt2,)