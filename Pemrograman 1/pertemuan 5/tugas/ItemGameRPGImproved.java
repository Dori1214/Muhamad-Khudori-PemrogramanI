import java.util.Scanner;

public class ItemGameRPGImproved {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Array item
        String[] itemNama = {"Potion", "Elixir", "Sword", "Shield", "Armor"};
        int[] itemPower = {50, 100, 150, 120, 200};

        int hpPlayer = 100;
        int attackPlayer = 50;
        int defensePlayer = 30;

        boolean isRunning = true;

        while (isRunning) {
            System.out.println("\n=== RPG Inventory System ===");
            System.out.println("HP: " + hpPlayer + " | ATK: " + attackPlayer + " | DEF: " + defensePlayer);
            System.out.println("Pilih item untuk digunakan:");

            // Tampilkan item
            for (int i = 0; i < itemNama.length; i++) {
                System.out.println((i + 1) + ". " + itemNama[i]);
            }
            System.out.println("0. Keluar");

            System.out.print("Pilihan: ");
            int pilihan = input.nextInt();

            switch (pilihan) {
                case 1: // Potion
                    hpPlayer += itemPower[0];
                    System.out.println("Kamu menggunakan Potion! HP +" + itemPower[0]);
                    break;
                case 2: // Elixir
                    hpPlayer += itemPower[1];
                    System.out.println("Kamu menggunakan Elixir! HP +" + itemPower[1]);
                    break;
                case 3: // Sword
                    attackPlayer += itemPower[2];
                    System.out.println("Kamu menggunakan Sword! ATK +" + itemPower[2]);
                    break;
                case 4: // Shield
                    defensePlayer += itemPower[3];
                    System.out.println("Kamu menggunakan Shield! DEF +" + itemPower[3]);
                    break;
                case 5: // Armor
                    defensePlayer += itemPower[4];
                    System.out.println("Kamu menggunakan Armor! DEF +" + itemPower[4]);
                    break;
                case 0:
                    isRunning = false;
                    System.out.println("Keluar dari game.");
                    break;
                default:
                    System.out.println("Pilihan tidak valid!");
            }
        }

        input.close();
    }
}
