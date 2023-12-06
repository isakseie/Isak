let revenue = [];

function payParking() {
  const numberOfHours = document.getElementById("numberOfHours").value;
  const price = numberOfHours * 28;
  revenue.push(price);
  alert(`Du må betale ${price} kr for parkering.`);
}

function showRevenue() {
  const revenueList = document.getElementById("revenue-list");
  revenueList.innerHTML = "";

  revenue.sort((a, b) => b - a);

  revenue.forEach((amount, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Inntekt ${index + 1}: ${amount} kr`;
    revenueList.appendChild(listItem);
  });
}

function endDay() {
  const totalRevenue = revenue.reduce((acc, curr) => acc + curr, 0);
  alert(`Total inntekt for dagen er ${totalRevenue} kr.`);
  revenue = [];
}
