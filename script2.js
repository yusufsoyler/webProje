const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
  themeToggle.classList.toggle('dark');
  themeToggle.classList.toggle('light');
  
  // Kayıt edilen tema tercihini yerel depolamada saklayabilirsiniz
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Sayfa yüklendiğinde kayıtlı temayı yüklemek için
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.classList.add(savedTheme);
}
//!*************************************************************************
