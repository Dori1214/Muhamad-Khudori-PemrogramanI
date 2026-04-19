import java.util.Scanner;

public class DataMahasiswa {
    public static void main(String[] args) {
        // Menggunakan try-with-resources agar Scanner menutup otomatis
        try (Scanner input = new Scanner(System.in)) {
            
            System.out.println("=== Form Data Mahasiswa ===");

            System.out.print("Input Nama          : ");
            String nama = input.nextLine();

            System.out.print("Input NIM           : ");
            String nim = input.nextLine();

            System.out.print("Input Program Studi : ");
            String programStudi = input.nextLine();

            // Menampilkan hasil dengan format yang lebih bersih
            System.out.println("\n--------------------------");
            System.out.println(" HASIL DATA MAHASISWA ");
            System.out.println("--------------------------");
            System.out.printf("Nama          : %s%n", nama);
            System.out.printf("NIM           : %s%n", nim);
            System.out.printf("Program Studi : %s%n", programStudi);
            System.out.println("--------------------------");
        } catch (Exception e) {
            System.out.println("Terjadi kesalahan saat input data.");
        }
    }
}
