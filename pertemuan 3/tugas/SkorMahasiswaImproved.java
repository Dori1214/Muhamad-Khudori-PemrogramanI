import java.util.Scanner;

public class SkorMahasiswaImproved {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);


        System.out.print("Masukkan Nama: ");
        String nama = input.nextLine();

        int sks;
        do {
            System.out.print("Masukkan SKS Mata Kuliah (2/3): ");
            sks = input.nextInt();
        } while (sks != 2 && sks != 3);

        int totalKehadiran = (sks == 2) ? 14 : 21;

        int kehadiran;
        do {
            System.out.print("Masukkan Jumlah Kehadiran (0 - " + totalKehadiran + "): ");
            kehadiran = input.nextInt();
        } while (kehadiran < 0 || kehadiran > totalKehadiran);

        double uts;
        do {
            System.out.print("Masukkan Nilai UTS (0 - 100): ");
            uts = input.nextDouble();
        } while (uts < 0 || uts > 100);

        double uas;
        do {
            System.out.print("Masukkan Nilai UAS (0 - 100): ");
            uas = input.nextDouble();
        } while (uas < 0 || uas > 100);


        double skorKehadiran = ((double) kehadiran / totalKehadiran) * 100;
        double skorUTS = uts;
        double skorUAS = uas;

        double rataRata = (skorKehadiran + skorUTS + skorUAS) / 3;


        System.out.println("\n======== HASIL ========");
        System.out.println("Nama             : " + nama);
        System.out.printf("Skor Kehadiran   : %.2f%% out of 100%%\n", skorKehadiran);
        System.out.printf("Skor UTS         : %.2f%% out of 100%%\n", skorUTS);
        System.out.printf("Skor UAS         : %.2f%% out of 100%%\n", skorUAS);
        System.out.printf("Rata-rata Skor   : %.2f%%\n", rataRata);

        input.close();
    }
} 
