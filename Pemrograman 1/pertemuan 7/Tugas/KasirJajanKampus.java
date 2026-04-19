package Tugas;


import java.util.Scanner;

public class KasirJajanKampus {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in)) {
            int pilihanMenu, pilihanLevel, jumlah;
            int hargaMenu = 0;
            int hargaLevel = 0;
            int total;
            String namaMenu = "";
            String namaLevel = "";

            System.out.println("=== Selamat Datang di Kedai Jajan Kampus ===");
            System.out.println("1. Seblak Komplit   (Rp12000)");
            System.out.println("2. Mie Ayam Spesial (Rp10000)");
            System.out.print("Pilih menu (1-2): ");
            pilihanMenu = input.nextInt();

            // Switch Menu
            switch (pilihanMenu) {
                case 1:
                    namaMenu = "Seblak Komplit";
                    hargaMenu = 12000;
                    break;
                case 2:
                    namaMenu = "Mie Ayam Spesial";
                    hargaMenu = 10000;
                    break;
                default:
                    System.out.println("Menu tidak tersedia!");
                    return;
            }

            System.out.println("\n=== Pilih Level Pedas ===");
            System.out.println("1. Biasa   (+Rp0)");
            System.out.println("2. Pedas   (+Rp2000)");
            System.out.println("3. Gila    (+Rp4000)");
            System.out.print("Pilih level (1-3): ");
            pilihanLevel = input.nextInt();

            // Switch Level
            switch (pilihanLevel) {
                case 1:
                    namaLevel = "Biasa";
                    hargaLevel = 0;
                    break;
                case 2:
                    namaLevel = "Pedas";
                    hargaLevel = 2000;
                    break;
                case 3:
                    namaLevel = "Gila";
                    hargaLevel = 4000;
                    break;
                default:
                    System.out.println("Level tidak valid!");
                    return;
            }

            System.out.print("\nMasukkan jumlah porsi: ");
            jumlah = input.nextInt();

            // Perhitungan
            total = (hargaMenu + hargaLevel) * jumlah;

            // Diskon Khusus "Tanggal Tua" (Jika belanja di atas Rp50.000)
            if (total >= 50000) {
                System.out.println("Wah, kamu dapat 'Diskon Tanggal Tua' sebesar 10%!");
                total -= (total * 10 / 100);
            } else {
                System.out.println("Terima kasih sudah memesan di kedai kami.");
            }

            // Output Struk
            System.out.println("\n=== Struk Pesanan ===");
            System.out.println("Menu     : " + namaMenu);
            System.out.println("Level    : " + namaLevel);
            System.out.println("Jumlah   : " + jumlah + " porsi");
            System.out.println("Total    : Rp" + total);
        }
    }
}
