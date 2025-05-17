function generateHeartbeatPath() {
  const points = [];
  const width = 2000;
  const height = 200;
  let x = 0;

  while (x < width) {
    points.push(`${x},${height / 2}`);
    x += 20;
    points.push(`${x},${height / 2}`);
    x += 10;
    points.push(`${x},${height / 2 - 50}`);
    x += 10;
    points.push(`${x},${height / 2}`);
    x += 10;
    points.push(`${x},${height / 2 + 30}`);
    x += 10;
    points.push(`${x},${height / 2}`);
    x += 40;
  }

  return points.join(' ');
}

document.getElementById('line1').setAttribute('points', generateHeartbeatPath());
document.getElementById('line2').setAttribute('points', generateHeartbeatPath());

function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const container = document.getElementById("loginContainer");
  const lines = document.querySelectorAll(".heartbeat-svg");
  const errorMessage = document.getElementById("errorMessage");

  if (username === "admin" && password === "1234") {
    alert("Login correto!");
    errorMessage.style.display = "none";
    // prossegue...
  } else {
    container.classList.add("shake");

    // Mostrar mensagem de erro
    errorMessage.style.display = "block";

    // Animação de linha pulsando
    lines.forEach((line) => {
      line.classList.add("oscillate");
    });

    // Remover animação depois de um tempo
    setTimeout(() => {
      container.classList.remove("shake");
      lines.forEach((line) => {
        line.classList.remove("oscillate");
      });
    }, 1000);
  }
}