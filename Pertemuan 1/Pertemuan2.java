import java.util.Scanner;

public class Pertemuan2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Masukkan nama Anda: ");
        String nama = input.nextLine();

        System.out.print("Masukkan alamat Anda: ");
        String alamat = input.nextLine();

        System.out.print("Masukkan usia Anda: ");
        int usia = input.nextInt();

        System.out.println("\n--- Data Pengguna ---");
        System.out.println("Nama : " + nama);
        System.out.println("Alamat : " + alamat);
        System.out.println("Usia : " + usia + " tahun");
    }
}