import java.util.Scanner;

public class DataMahasiswaImproved {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        String nama;
        String nim;
        String programStudi;
        String gender;
        String reguler;

        System.out.print("Input Nama: ");
        nama = input.nextLine();

        System.out.print("Input NIM: ");
        nim = input.nextLine();

        System.out.print("Input Program Studi: ");
        programStudi = input.nextLine();

        System.out.println("\nPilih Gender:");
        System.out.println("1. Laki-Laki");
        System.out.println("2. Perempuan");
        System.out.print("Masukkan pilihan (1/2): ");
        int pilihGender = input.nextInt();

        if (pilihGender == 1) {
            gender = "Laki-Laki";
        } else if (pilihGender == 2) {
            gender = "Perempuan";
        } else {
            gender = "Tidak valid";
        }

        System.out.println("\nPilih Kelas Reguler:");
        System.out.println("1. A");
        System.out.println("2. B");
        System.out.println("3. CK");
        System.out.println("4. CS");
        System.out.print("Masukkan pilihan (1-4): ");
        int pilihReguler = input.nextInt();

        switch (pilihReguler) {
            case 1:
                reguler = "A";
                break;
            case 2:
                reguler = "B";
                break;
            case 3:
                reguler = "CK";
                break;
            case 4:
                reguler = "CS";
                break;
            default:
                reguler = "Tidak valid";
        }

        System.out.println("\nData Mahasiswa:");
        System.out.println("Nama           : " + nama);
        System.out.println("NIM            : " + nim);
        System.out.println("Program Studi  : " + programStudi);
        System.out.println("Gender         : " + gender);
        System.out.println("Reguler        : " + reguler);

        input.close();
    }
}