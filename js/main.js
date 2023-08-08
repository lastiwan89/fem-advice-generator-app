const dice = document.querySelector(".dice");

dice.addEventListener("click", async function () {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    document.querySelector(".title").textContent = `advice #${data.slip.id}`;
    document.querySelector(".advice").textContent = `“${data.slip.advice}”`;
  } catch (error) {
    console.error("error fetcing data:", error);
    throw error;
  }
});
