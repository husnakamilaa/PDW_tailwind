document.addEventListener('DOMContentLoaded', () => {
    console.log("Villa Website Ready!");

    const btnPesan = document.querySelectorAll('.btn-pesan');
    btnPesan.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Terima kasih! Permintaan Anda sedang diproses.');
        });
    });
});