public class Main {
    public static void main(String[] args) {

        int[]  numbers ={12, 3, 4, 5, 6};

        int firstMax = Integer.MIN_VALUE;
        int secoundMax = Integer.MIN_VALUE;

        for (int i = 0;  i < numbers.length; i++){
            if (numbers[i] > firstMax) {
                secoundMax = firstMax;
                firstMax = numbers[i];
            } else if (numbers[i] > secoundMax && numbers[i] != firstMax) {
                secoundMax = numbers[i];
            }

                System.out.println("secound  maximum number is"  +  secoundMax);

            }
        }
}