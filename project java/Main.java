import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    private static ArrayList<Produk> daftarProduk = new ArrayList<>();
    private static Scanner input = new Scanner(System.in);

    public static void main(String[] args) {
        int pilihan;

        do {
            System.out.println("\n=== SISTEM GUDANG JAVA ===");
            System.out.println("1. Tambah Barang");
            System.out.println("2. Lihat Semua Barang");
            System.out.println("3. Update Stok");
            System.out.println("4. Keluar");
            System.out.print("Pilih menu (1-4): ");
            pilihan = input.nextInt();
            input.nextLine(); // Membersihkan buffer

            switch (pilihan) {
                case 1: tambahBarang(); break;
                case 2: lihatBarang(); break;
                case 3: updateStok(); break;
                case 4: System.out.println("Terima kasih!"); break;
                default: System.out.println("Pilihan tidak valid!");
            }
        } while (pilihan != 4);
    }

    private static void tambahBarang() {
        System.out.print("Nama Barang: ");
        String nama = input.nextLine();
        System.out.print("Jumlah Stok: ");
        int stok = input.nextInt();
        System.out.print("Harga Barang: ");
        double harga = input.nextDouble();

        daftarProduk.add(new Produk(nama, stok, harga));
        System.out.println("✅ Barang berhasil ditambahkan!");
    }

    private static void lihatBarang() {
        if (daftarProduk.isEmpty()) {
            System.out.println("📭 Gudang masih kosong.");
        } else {
            System.out.println("\n--- DAFTAR STOK GUDANG ---");
            for (int i = 0; i < daftarProduk.size(); i++) {
                System.out.println((i + 1) + ". " + daftarProduk.get(i));
            }
        }
    }

    private static void updateStok() {
        lihatBarang();
        if (daftarProduk.isEmpty()) return;

        System.out.print("Pilih nomor barang yang akan diupdate: ");
        int no = input.nextInt() - 1;

        if (no >= 0 && no < daftarProduk.size()) {
            System.out.print("Masukkan jumlah stok baru: ");
            int stokBaru = input.nextInt();
            daftarProduk.get(no).setStok(stokBaru);
            System.out.println("✅ Stok berhasil diperbarui!");
        } else {
            System.out.println("❌ Nomor tidak ditemukan.");
        }
    }
}