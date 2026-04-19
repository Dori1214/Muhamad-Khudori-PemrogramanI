package Latihan;

import java.util.Scanner;

public class LatihanSwitch {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        
        System.out.print("Pilih (1) Pagi, (2) Malam: ");
        int opsi = in.nextInt();

        switch (opsi) {
            case 1 : System.out.println("Selamat Pagi!");
            case 2 : System.out.println("Selamat Malam!");
            default : System.out.println("Pilihan salah.");
        }
    }
}