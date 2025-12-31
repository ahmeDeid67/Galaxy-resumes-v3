document.addEventListener("DOMContentLoaded", function () {
  fetch("footer/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });

    const canvas = document.getElementById("avatarCanvas");
  const ctx = canvas.getContext("2d");

  let angle = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createConicGradient(angle, 27, 27);
    gradient.addColorStop(0, "#ff6aa2");
    gradient.addColorStop(0.5, "#7aa8ff");
    gradient.addColorStop(1, "#ff6aa2");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(27, 27, 27, 0, Math.PI * 2);
    ctx.fill();

    angle += 0.02; // سرعة الحركة
    requestAnimationFrame(draw);
  }

  draw();
});
