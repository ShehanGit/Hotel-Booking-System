import java.util.Locale;
import java.util.Scanner;

public class Main{
    public static void main (String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter String :");
        String str1 = scanner.nextLine();

        str1 = str1.toLowerCase();

        boolean hasvoval = false;

        for(int i = str1.length()-1; i  > 0; i --) {
            char ch = str1.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                hasvoval = true;
                break;
            }

        }

        if(hasvoval){
            System.out.println("String has vowels  ");
        }else{
            System.out.println("String does not contain vowels  ");
        }
        scanner.close();
    }
}