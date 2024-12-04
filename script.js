function showLove() {
  const heartContainer = document.querySelector(".heart-container");

  // Tạo hiệu ứng trái tim rơi
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heartContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000); // Loại bỏ sau 5s
  }

  // Hiển thị lời tỏ tình
  const message = document.createElement("div");
  message.style.position = "absolute";
  message.style.top = "50%";
  message.style.left = "50%";
  message.style.transform = "translate(-50%, -50%)";
  message.style.color = "white";
  message.style.fontSize = "2rem";
  message.style.background = "rgba(0, 0, 0, 0.5)";
  message.style.padding = "20px";
  message.style.borderRadius = "10px";
  message.style.textAlign = "center";
  message.innerHTML = "Thiện yêu Trinh ❤️";
  document.body.appendChild(message);

  setTimeout(() => message.remove(), 4000); // Loại bỏ lời tỏ tình sau 4s
}
