import java.util.Scanner;

class Hiu {
    String namaSpesies;
    String habitat;
    int panjang; // cm
    boolean berbahaya;

    // Constructor
    Hiu(String namaSpesies, String habitat, int panjang, boolean berbahaya) {
        this.namaSpesies = namaSpesies;
        this.habitat = habitat;
        this.panjang = panjang;
        this.berbahaya = berbahaya;
    }

    // Method untuk info
    void tampilkanInfo() {
        System.out.println("\n=== Data Hiu ===");
        System.out.println("Spesies   : " + namaSpesies);
        System.out.println("Habitat   : " + habitat);
        System.out.println("Panjang   : " + panjang + " cm");
        System.out.println("Berbahaya : " + (berbahaya ? "Ya" : "Tidak"));
    }

    // Method untuk aksi
    void berenang() {
        System.out.println(namaSpesies + " sedang berenang...");
    }

    void berburu() {
        System.out.println(namaSpesies + " sedang berburu mangsa!");
    }
}

public class SpesiesHiuImproved {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Array objek
        Hiu[] daftarHiu = {
            new Hiu("Great White Shark", "Laut terbuka", 600, true),
            new Hiu("Hammerhead Shark", "Perairan tropis", 400, true),
            new Hiu("Whale Shark", "Laut hangat", 1200, false)
        };

        boolean jalan = true;

        while (jalan) {
            System.out.println("\n=== Pilih Spesies Hiu ===");
            for (int i = 0; i < daftarHiu.length; i++) {
                System.out.println((i + 1) + ". " + daftarHiu[i].namaSpesies);
            }
            System.out.println("0. Keluar");

            System.out.print("Pilihan: ");
            int pilih = input.nextInt();

            if (pilih == 0) {
                jalan = false;
                System.out.println("Program selesai.");
            } else if (pilih >= 1 && pilih <= daftarHiu.length) {
                Hiu hiuDipilih = daftarHiu[pilih - 1];
                hiuDipilih.tampilkanInfo();

                System.out.println("Aksi:");
                System.out.println("1. Berenang");
                System.out.println("2. Berburu");
                System.out.print("Pilih aksi: ");
                int aksi = input.nextInt();

                switch (aksi) {
                    case 1:
                        hiuDipilih.berenang();
                        break;
                    case 2:
                        hiuDipilih.berburu();
                        break;
                    default:
                        System.out.println("Aksi tidak valid!");
                }
            } else {
                System.out.println("Pilihan tidak valid!");
            }
        }

        input.close();
    }
}