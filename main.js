// Sayt yuklanganda dark mode-ni tekshiradi
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
  updateButtonText();
};

// Tugmani bosganda dark/light rejimni almashtiradi
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  updateButtonText();
}

// Tugmadagi matnni yangilaydi
function updateButtonText() {
  const btn = document.querySelector(".butn");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "Light Mode";
  } else {
    btn.textContent = "Dark Mode";
  }
}
// Dark mode funksiyasi (avvaldan bor)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Mahsulotlar ro'yxati (masalan, har bir rasm uchun nom va narx)
const products = [
    { id: 'img1', name: 'Mahsulot 1', price: 10000 },
    { id: 'img2', name: 'Mahsulot 2', price: 15000 },
    { id: 'img3', name: 'Mahsulot 3', price: 20000 },
    { id: 'img4', name: 'Mahsulot 4', price: 25000 },
    { id: 'img5', name: 'Mahsulot 5', price: 30000 },
    { id: 'img6', name: 'Mahsulot 6', price: 35000 },
    { id: 'img7', name: 'Mahsulot 7', price: 40000 },
    { id: 'img8', name: 'Mahsulot 8', price: 45000 },
    { id: 'img9', name: 'Mahsulot 9', price: 50000 },
    { id: 'img10', name: 'Mahsulot 10', price: 55000 },
    { id: 'img11', name: 'Mahsulot 11', price: 60000 },
    { id: 'img12', name: 'Mahsulot 12', price: 65000 },
];

// Tanlangan mahsulotlar va umumiy summa
let selectedProducts = [];
let totalPrice = 0;

// Rasmlarni tanlash va alert chiqarish
document.querySelectorAll('.container1 img').forEach((img, index) => {
    img.setAttribute('id', `img${index + 1}`); // Har bir rasmga ID beramiz
    img.addEventListener('click', () => {
        const product = products[index];
        selectedProducts.push(product);
        totalPrice += product.price;

        // Alertda mahsulot nomi va narxini ko'rsatish
        alert(`Mahsulot: ${product.name}\nNarxi: ${product.price} so'm\nUmumiy summa: ${totalPrice} so'm`);

        // OK bosilganda zakaz tasdiqlanishi
        const confirmOrder = confirm('Zakazingizni tasdiqlaysizmi?');
        if (confirmOrder) {
            alert(`Sizning zakazingiz qabul qilindi!\nUmumiy summa: ${totalPrice} so'm`);
            // Zakaz tasdiqlangandan keyin ro'yxatni tozalash (agar kerak bo'lsa)
            selectedProducts = [];
            totalPrice = 0;
        }
    });
});