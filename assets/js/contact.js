const setupArrow = () => {
  const canvas = document.getElementById("contact-arrow");
  const ctx = canvas.getContext("2d");

  const W = window.innerWidth;
  canvas.width = W;
  canvas.height = 40;

  ctx.moveTo(0, 0);
  ctx.lineTo(W / 2, 40);
  ctx.lineTo(W, 0);
  ctx.fillStyle = "#1B1B1F";
  ctx.fill();
}

export default setupArrow;