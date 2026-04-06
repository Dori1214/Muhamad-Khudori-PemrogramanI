import java.util.Scanner;

public class DataNilaiMahasiswa {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Perintah
        System.out.print("Masukkan SKS Mata Kuliah: ");
        int sks = input.nextInt();

        int realisasi = 0;

        if (sks == 2) {
            realisasi = 14;
        } else if (sks == 3) {
            realisasi = 21;
        } else {
            System.out.println("SKS tidak valid!");
            input.close();
            return;
        }

        System.out.print("Masukkan jumlah kehadiran: ");
        int jumlahKehadiran = input.nextInt();

        System.out.print("Masukkan nilai tugas: ");
        double nilaiTugas = input.nextDouble();

        System.out.print("Masukkan nilai UTS: ");
        double nilaiUTS = input.nextDouble();

        System.out.print("Masukkan nilai UAS: ");
        double nilaiUAS = input.nextDouble();

        // Proses
        double bobotKehadiran = ((double) jumlahKehadiran / realisasi) * 10;
        double bobotTugas = (nilaiTugas / 100) * 20;
        double bobotUTS = (nilaiUTS / 100) * 30;
        double bobotUAS = (nilaiUAS / 100) * 40;

        double total = bobotKehadiran + bobotTugas + bobotUTS + bobotUAS;

        // Informasi
        System.out.println("\n============ HASIL ============");
        System.out.println("Jumlah Kehadiran : " + jumlahKehadiran);
        System.out.println("Bobot Kehadiran  : " + bobotKehadiran);
        System.out.println("Bobot Tugas      : " + bobotTugas);
        System.out.println("Bobot UTS        : " + bobotUTS);
        System.out.println("Bobot UAS        : " + bobotUAS);
        System.out.println("Total Nilai      : " + total);

        input.close();
    }
}