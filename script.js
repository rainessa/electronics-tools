const content = document.getElementById('content');
const navLinks = document.querySelectorAll('.nav-link');

function loadPage(page) {
  let html = '';

  if (page === 'home') {
    html = `

      <section style="text-align:center; padding:2rem; background-color:#f5f5f5; border-radius:12px; max-width:800px; margin:2rem auto;">
  <h2 style="font-size:2rem; margin-bottom:1rem; color:#333;">Expert Electronics Repair & Tools</h2>
  <p style="font-size:1.1rem; margin-bottom:1.5rem; color:#555;">
    Fast, reliable, and affordable solutions for all your electronic devices. From repairs to professional tool advice, we deliver <strong>quality, precision, and care</strong> every time. Your satisfaction is our priority!
  </p>
</section>

        <h2>Welcome to ElectroFix</h2>
        <p>Your trusted partner for electronic tools and device repair services.</p>
        <p>We provide expert solutions for TVs, radios, computers, phones, and more.</p>

        <h3 style="margin-top: 1.5rem;">Popular Tools</h3>
        <div class="gallery">
          
        </div>
      </section>
      <div style="display:flex; justfy-content:center; gap:1 rem">
    <img src="images/tool1.jpeg" alt="" style="width:20%; margin-top:1.5rem; border-radius:8px;">
    <img src="images/tool2.jpeg" alt="" style="width:20%; margin-top:1.5rem; border-radius:8px;">
    <img src="images/tool3.jpeg" alt="" style="width:20%; margin-top:1.5rem; border-radius:8px;">
    <img src="images/tool4.jpeg" alt="" style="width:20%; margin-top:1.5rem; border-radius:8px;">
   </div>
    
    
    `;
  } else if (page === 'about') {
    html = `
      <section>
      <section class="about-us">
  <div class="container">
       <h2>About Us</h2>
      <p>ElectroFix is a team of skilled technicians with over 10 years of experience in electronics repair and maintenance.</p>
        <p>We are passionate about bringing dead devices back to life!</p>

        <div class="gallery">
  </div>
</section>
<div style="display:flex; justfy-content:center; gap:1 rem">
    <img src="images/tool9.jpeg" alt="" style="width:15%; margin-top:1.5rem; border-radius:8px;">
    <img src="images/tool6.jpeg" alt="" style="width:15%; margin-top:1.5rem; border-radius:8px;">
    <img src="images/tool8.jpeg" alt="" style="width:15%; margin-top:1.5rem; border-radius:8px;">
    <img src="images/tool10.jpeg" alt="" style="width:15%; margin-top:1.5rem; border-radius:8px;">
   </div>
      </section>
    `;
  } else if (page === 'services') {
    html = `
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>TV and Radio Repair</li>
          <li>Computer Diagnostics and Maintenance</li>
          <li>Rice cooker</li>
          <li>Ice maker</li>
          <li>Coffee maker</li>
          <li>Washing machine</li>
          <li>Blender</li>
          <li>Electric iron</li>
          <li>Flat TV</li>
        </ul>
    
      </section>
    `;
  } else if (page === 'contact') {
    html = `
    <section class="contact-section">
  <h2>Contact Us</h2>
  <p>Have a question or need a repair? Reach us easily using the options below 👇</p>

  <div class="contact-info">
    <!-- 📞 Phone -->
    <div class="info-box">
      <i class="fa-solid fa-phone"></i>
      <h3>Call Us</h3>
      <p>
        <a href="tel:+250784246702" class="contact-link">
          +250 784 246 702
        </a>
      </p>
    </div>

    <!-- 💬 WhatsApp -->
    <div class="info-box">
      <a href="https://wa.me/250784246702" target="_blank" class="whatsapp-btn">
        <i class="fa-brands fa-whatsapp"></i>
      </a>
      <h3>WhatsApp</h3>
      <p>Message us directly on WhatsApp</p>
    </div>

    <!-- 📧 Email -->
    <div class="info-box">
      <i class="fa-solid fa-envelope"></i>
      <h3>Email</h3>
      <p>
        <a href="mailto:michaelhakizimanahassan@gmail.com" class="contact-link">
          michaelhakizimanahassan@gmail.com
        </a>
      </p>
    </div>
  </div>
</section>

    `;
  }
  content.innerHTML = html;
}
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    loadPage(link.dataset.page);
  });
});

loadPage('home');
