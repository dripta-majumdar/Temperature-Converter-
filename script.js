document.querySelector("#convert-btn").addEventListener("click", () => {
  const response = parseFloat(document.querySelector("#temperature").value);

  const unit = document.querySelector("#unit").value;

  let c;

  switch (unit) {
    case "F":
      c = ((response - 32) * 5) / 9;
      break;
    case "K":
      c = response - 273.15;
      break;
    default:
      c = response;
  }
  document.querySelector("#result").textContent = c.toFixed(3) + "°C";
});
