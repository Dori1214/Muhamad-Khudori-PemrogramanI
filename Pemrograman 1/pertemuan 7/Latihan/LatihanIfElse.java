package Latihan;

import java.util.Scanner;

public class LatihanIfElse {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Masukkan nilai: ");
        int nilai = input.nextInt();

        if (nilai >= 75) {
            System.out.println("Hasil: LULUS");
        } else {
            System.out.println("Hasil: GAGAL");
        }
    }
}