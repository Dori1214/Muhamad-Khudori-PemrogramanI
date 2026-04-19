import java.util.Scanner;

public class SkorMahasiswa {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Masukkan Nama: ");
        String nama = input.nextLine();

        System.out.print("Masukkan SKS Mata Kuliah: ");
        int sks = input.nextInt();

        System.out.print("Masukkan Jumlah Kehadiran: ");
        int kehadiran = input.nextInt();

        System.out.print("Masukkan Nilai UTS: ");
        double uts = input.nextDouble();

        System.out.print("Masukkan Nilai UAS: ");
        double uas = input.nextDouble();


        int totalKehadiran = 0;

        if (sks == 2) {
            totalKehadiran = 14;
        } else if (sks == 3) {
            totalKehadiran = 21;
        } else {
            System.out.println("SKS tidak valid!");
            input.close();
            return;
        }

        double skorKehadiran = ((double) kehadiran / totalKehadiran) * 100;
        double skorUTS = uts;
        double skorUAS = uas;


        System.out.println("\n======== HASIL ========");
        System.out.println("Nama             : " + nama);
        System.out.printf("Skor Kehadiran   : %.2f%% out of 100%%\n", skorKehadiran);
        System.out.printf("Skor UTS         : %.2f%% out of 100%%\n", skorUTS);
        System.out.printf("Skor UAS         : %.2f%% out of 100%%\n", skorUAS);

        input.close();
    }
}

