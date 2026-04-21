package Tugas;

import java.util.Scanner;

public class PenilaianMahasiswa {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String ulang;

        do {
            System.out.print("Masukkan nama: ");
            String nama = sc.nextLine();

            int nilai;

            // Validasi nilai
            while (true) {
                System.out.print("Masukkan nilai (0-100): ");
                nilai = sc.nextInt();

                if (nilai >= 0 && nilai <= 100) {
                    break;
                } else {
                    System.out.println("Nilai tidak valid!");
                }
            }

            // Tentukan grade
            char grade;
            if (nilai >= 85) {
                grade = 'A';
            } else if (nilai >= 75) {
                grade = 'B';
            } else if (nilai >= 65) {
                grade = 'C';
            } else {
                grade = 'D';
            }

            // Status lulus
            String status = (nilai >= 75) ? "LULUS" : "TIDAK LULUS";

            // Output
            System.out.println("\n=== HASIL ===");
            System.out.println("Nama   : " + nama);
            System.out.println("Nilai  : " + nilai);
            System.out.println("Grade  : " + grade);
            System.out.println("Status : " + status);

            sc.nextLine(); // buffer
            System.out.print("\nUlangi? (Y/T): ");
            ulang = sc.nextLine();

        } while (ulang.equalsIgnoreCase("Y"));

        sc.close();
    }
}