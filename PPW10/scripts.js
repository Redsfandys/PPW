// penjumlahan
function tambah() {
    const bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    const bilangan2 = parseFloat(document.getElementById("bilangan2").value);
    
    // Validasi input
  if (isNaN(bilangan1) || isNaN(bilangan2)) {
      alert("Mohon masukkan angka yang valid!");
      return;
    }
    
    const hasil = bilangan1 + bilangan2;
    document.getElementById("hasil").innerText = hasil;
  document.getElementById("operasiHeader").innerText = "Hasil Penjumlahan";
}

// pengurangan
function kurang() {
    const bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    const bilangan2 = parseFloat(document.getElementById("bilangan2").value);
    
    // Validasi input
    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert("Mohon masukkan angka yang valid!");
        return;
    }
    
    const hasil = bilangan1 - bilangan2;
    document.getElementById("hasil").innerText = hasil;
    document.getElementById("operasiHeader").innerText = "Hasil Pengurangan";
}

// perkalian
function kali() {
    const bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    const bilangan2 = parseFloat(document.getElementById("bilangan2").value);
    
    // Validasi input
    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert("Mohon masukkan angka yang valid!");
    return;
  }
  
  const hasil = bilangan1 * bilangan2;
  document.getElementById("hasil").innerText = hasil;
  document.getElementById("operasiHeader").innerText = "Hasil Perkalian";
}

// pembagian
function bagi() {
    const bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    const bilangan2 = parseFloat(document.getElementById("bilangan2").value);
    
    // Validasi input
    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert("Mohon masukkan angka yang valid!");
        return;
    }
    
    // pembagian oleh nol
    if (bilangan2 === 0) {
        alert("Tidak bisa membagi dengan nol!");
        return;
    }
        
        const hasil = bilangan1 / bilangan2;
        document.getElementById("hasil").innerText = hasil.toFixed(2);
        document.getElementById("operasiHeader").innerText = "Hasil Pembagian";
    }