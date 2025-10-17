import java.util.Scanner;
public class MakeAdifference{
public static void main(String[] args){
Scanner input = new Scanner(System.in);
System.out.print("Enter a four digit number: ");
int prompt = input.nextInt();
int prompt1 = prompt / 1000;
int prompt2 = (prompt%1000)/100;
int prompt3 = (prompt%100)/10;
int prompt4 = (prompt%10);


int encrypt1 = ((prompt1 + 7)/10);
int encrypt2 = ((prompt2 + 7)/10);
int encrypt3 = ((prompt3 + 7)/10);
int encrypt4 = ((prompt4 + 7)/10);

System.out.print(encrypt1,encrypt2,encrypt3,encrypt4);
}
}