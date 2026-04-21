import java.util.Scanner;

public class DataNilaiMahasiswaImproved {
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

        // Penentuan grade
        char grade;

        if (total >= 90) {
            grade = 'A';
        } else if (total >= 80) {
            grade = 'B';
        } else if (total >= 70) {
            grade = 'C';
        } else if (total >= 60) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        // Informasi
        System.out.println("\n============ HASIL ============");
        System.out.println("Jumlah Kehadiran : " + jumlahKehadiran);
        System.out.println("Bobot Kehadiran  : " + bobotKehadiran);
        System.out.println("Bobot Tugas      : " + bobotTugas);
        System.out.println("Bobot UTS        : " + bobotUTS);
        System.out.println("Bobot UAS        : " + bobotUAS);
        System.out.println("Total Nilai      : " + total);
        System.out.println("Grade            : " + grade);

        input.close();
    }
}