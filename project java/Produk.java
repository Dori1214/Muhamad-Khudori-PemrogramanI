public class Produk {
    private String nama;
    private int stok;
    private double harga;

    public Produk(String nama, int stok, double harga) {
        this.nama = nama;
        this.stok = stok;
        this.harga = harga;
    }

    // Getter untuk mengambil data
    public String getNama() { return nama; }
    public int getStok() { return stok; }
    public double getHarga() { return harga; }

    // Setter untuk mengubah stok
    public void setStok(int stok) { this.stok = stok; }

    @Override
    public String toString() {
        return String.format("Nama: %-15s | Stok: %-5d | Harga: Rp%,.2f", nama, stok, harga);
    }
}