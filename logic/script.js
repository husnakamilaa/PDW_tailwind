//katalog baca daftar json
async function loadKatalog() {
    const container = document.getElementById("daftarVilla");
    if (!container) return; 

    try {
        const response = await fetch('../data/daftarVilla.json');
        const data = await response.json();

        container.innerHTML = ""; 

        data.forEach(villa => {
            container.innerHTML += `
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-2xl">
                    <img src="${villa.image}" alt="${villa.nama}" class="h-48 w-full object-cover">
                    <div class="p-6">
                        <h3 class="font-bold text-xl mb-2">${villa.nama}</h3>
                        <p class="text-gray-600 text-sm mb-4">${villa.deskripsi}</p>
                        <p class="text-blue-600 font-bold mb-4">${villa.harga} / Malam</p>
                        <a href="booking.html" class="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                            Pesan Sekarang
                        </a>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error("Gagal memuat data villa:", error);
    }
}

// load halamannya
document.addEventListener('DOMContentLoaded', loadKatalog);

// buat DOM form nya
function kirimData() {
    var nama = document.getElementById("nama").value;
    var villa = document.getElementById("pilihanVilla").value;
    var tanggal = document.getElementById("tanggal").value;

    if (!nama || !villa || !tanggal) {
        alert("Mohon lengkapi semua data ya!");
        return;
    }

    alert(
        "Konfirmasi Pemesanan:" +
        "\n-------------------" +
        "\nNama Lengkap  : " + nama +
        "\nVilla Dipilih : " + villa +
        "\nCheck-in      : " + tanggal
    );

    clearForm();
}

function clearForm() {
    document.getElementById("nama").value = "";
    document.getElementById("pilihanVilla").selectedIndex = 0; // Kembali ke pilihan pertama
    document.getElementById("tanggal").value = "";
}
  