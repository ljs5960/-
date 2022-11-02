import java.util.Scanner;

class Max3 {
    public static void main(String[] args) {
        Scanner stdIn = new Scanner(System.in);

        System.out.println("===세 정수의 최댓값 구하기===");

        System.out.println("Value of a : ");
        int a = stdIn.nextInt();
        System.out.println("Value of b : ");
        int b = stdIn.nextInt();
        System.out.println("Value of c : ");
        int c = stdIn.nextInt();

        int max = a;
        if (b > max)
            max = b;
        if (c > max)
            max = c;

        System.out.println("Max : " + max);
    }
}