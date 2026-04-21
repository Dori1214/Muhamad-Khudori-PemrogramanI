package Latihan;

public class ContohWhile {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 5) {
            System.out.println("Angka: " + i);
            i++; // Penting untuk mengubah nilai agar tidak terjadi infinite loop
        }
    }
}