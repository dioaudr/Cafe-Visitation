/**
 * Seseorang pengunjung bar direpresentasikan oleh JavaScript memiliki variable name, age, dan money.
 * Ia masuk ke bar untuk memesan minuman, namun bar memiliki kondisi sebagai berikut:
 *
 * - Jika name dari si pengunjung kosong, tampilkan di console "Anda tidak boleh masuk!" dan program selesai.
 *   Jika name tidak kosong, lanjut ke step ke 2.
 *
 * - Jika age dari si pengunjung dibawah 17 tahun, maka ia hanya boleh memesan juice.
 *   Jika age 17 tahun keatas, ia hanya boleh memesan anggur.
 *
 * - Juice memiliki harga 50000, sedangkan anggur memiliki harga 300000.
 *   Jika money/uang yang dimiliki tidak mencukupi, maka tampilkan di console "Uang tidak cukup. Anda harus pulang.".
 *   Jika uang cukup, tampilkan "Anda bisa pesan minum. Sisa uang anda: [...]",
 *   dan ganti [...] dengan sisa uang yang telah dikurangi oleh harga minuman.
 */

//Psudocode
/** STORE name WITH ANY string
 * STORE age WITH ANY number
 * STORE money WITH ANY number
 * 
 * IF name FALSY SET WITH "Anda tidak boleh masuk!"
 * ELSE IF age MORE THAN EQUAL TO 17 AND money MORE THAN EQUAL TO 300000
 * SET WITH nama PLUS ""Anda bisa pesan minum Anggur. Sisa uang anda: "" PLUS money - 300000
 * ELSE IF age LESS THAN TO 17 AND money MORE THAN EQUAL TO 50000
 * SET WITH nama PLUS ""Anda bisa pesan minum Jus. Sisa uang anda: "" PLUS money - 300000
 * 
 * ELSE SET WITH "Uang tidak cukup. Anda harus pulang."
 * 
 * END IF
 */

 let name = "Agus";
 let age = 12;
 let money = 800000;

 if(!name){
    console.log(" Anda tidak boleh masuk!")
} else if(age >= 17 && money >= 300000){
    console.log(name + " Anda bisa pesan minum Anggur. Sisa uang anda: " + (money - 300000));
} else if(age < 17 && money >= 50000){
    console.log(name + " Anda bisa pesan minum Jus. Sisa uang anda: " + (money - 50000));
}
else {console.log ("Uang tidak cukup. Anda harus pulang.");
}