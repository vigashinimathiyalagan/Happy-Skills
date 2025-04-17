// Handle CTA
function handleCTAClick() {
  const popup = document.createElement("div");
  popup.innerHTML = `
    <div style="position:fixed;top:0;left:0;width:100%;height:100%;
      background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:1000;">
      <div style="background:#fff;padding:2rem 3rem;border-radius:12px;text-align:center;">
        <h2 style="color:#ff4081;">Thank you!</h2>
        <p>We’ll get in touch with you soon.</p>
        <button onclick="this.closest('div').parentElement.remove()" 
        style="margin-top:1rem;padding:0.5rem 1rem;background:#ff69b4;color:white;border:none;border-radius:6px;">Close</button>
      </div>
    </div>`;
  document.body.appendChild(popup);
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// On-scroll reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("reveal");
    }
  });
});

// Remove loader
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});
