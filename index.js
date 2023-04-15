document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".btn").classList.add("rotate-center");
  setTimeout(() => {
    document.querySelector(".btn").classList.remove("rotate-center");
    convert();
  }, 800);
});

function convert() {
  const value = document.querySelector(".input-unit").value;
  if (value) {
    document.querySelector(".length-value").textContent = `${value} meters = ${(
      value * 3.28
    ).toFixed(2)} feet | ${value} feet = ${(value * 0.3048).toFixed(2)} meters`;

    document.querySelector(".volume-value").textContent = `${value} litres = ${(
      value * 0.2641
    ).toFixed(2)} gallons | ${value} gallons = ${(value * 3.7854).toFixed(
      2
    )} litres`;

    document.querySelector(".mass-value").textContent = `${value} kilos = ${(
      value * 2.2046
    ).toFixed(2)} pounds | ${value} pounds = ${(value * 0.4535).toFixed(
      2
    )} kilos`;
    document.querySelector(".btn").value = "";
  } else {
    alert("Enter a numberic value greater than 0.");
    document.querySelector(".length-value").textContent = "-";
    document.querySelector(".volume-value").textContent = "-";

    document.querySelector(".mass-value").textContent = "-";
  }
}
