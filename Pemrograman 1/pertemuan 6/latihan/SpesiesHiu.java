class Hiu {
    String namaSpesies;
    String habitat;
    int panjang; // cm

    // Constructor
    Hiu(String namaSpesies, String habitat, int panjang) {
        this.namaSpesies = namaSpesies;
        this.habitat = habitat;
        this.panjang = panjang;
    }

    // Method untuk info
    void tampilkanInfo() {
        System.out.println("Spesies: " + namaSpesies);
        System.out.println("Habitat: " + habitat);
        System.out.println("Panjang: " + panjang + " cm");
        System.out.println("------------------------");
    }
}

public class SpesiesHiu {
    public static void main(String[] args) {
        // Objek dari class hiu
        Hiu hiu1 = new Hiu("Great White Shark", "Laut terbuka", 600);
        Hiu hiu2 = new Hiu("Hammerhead Shark", "Perairan tropis", 400);
        Hiu hiu3 = new Hiu("Whale Shark", "Laut hangat", 1200);

        // Informasi
        hiu1.tampilkanInfo();
        hiu2.tampilkanInfo();
        hiu3.tampilkanInfo();
    }
}