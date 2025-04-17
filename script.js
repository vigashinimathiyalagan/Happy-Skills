function handleCTAClick() {
  const modal = document.createElement("div");
  modal.innerHTML = `
    <div style="position:fixed;top:0;left:0;width:100%;height:100%;
    background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:1000;">
      <div style="background:white;padding:2rem 3rem;border-radius:16px;text-align:center;">
        <h2 style="color:#ff4081;">Thanks for reaching out!</h2>
        <p>We'll get back to you shortly 😊</p>
        <button style="margin-top:1rem;padding:0.5rem 1rem;background:#ff69b4;color:white;border:none;border-radius:8px;" onclick="this.closest('div').parentElement.remove()">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});
