public class ItemGameRPG {
    public static void main(String[] args) {
        // Array item RPG
        String[] itemNama = {"Potion", "Elixir", "Sword", "Shield", "Armor"};
        int[] itemPower = {50, 100, 150, 120, 200};

        // Daftar item
        System.out.println("=== Daftar Item RPG ===");
        for (int i = 0; i < itemNama.length; i++) {
            System.out.println((i + 1) + ". " + itemNama[i] + " (Power: " + itemPower[i] + ")");
        }

        // Use item
        int hpPlayer = 100;
        System.out.println("\nHP awal player: " + hpPlayer);

        // Use Potion (index 0)
        hpPlayer += itemPower[0];
        System.out.println("Player menggunakan " + itemNama[0]);
        System.out.println("HP setelah menggunakan item: " + hpPlayer);
    }
}