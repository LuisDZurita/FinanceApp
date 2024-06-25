let income1 = 0;
let income2 = 0;
let income3 = 0;
let income4 = 0;
let incomeXt1 = 0;
let incomeXt2 = 0;
let 

function init() {
  handleInputChange();
  showTotalIncome(totalIncome());
}

///////////////////////////////////////////////////////////////////////////////////////////////

//Income handle//

function handleInputChange() {
  const week1 = document.querySelector(".income1");
  const week2 = document.querySelector(".income2");
  const week3 = document.querySelector(".income3");
  const week4 = document.querySelector(".income4");
  const weekExtra1 = document.querySelector(".incomeXt1");
  const weekExtra2 = document.querySelector(".incomeXt2");
  week1.addEventListener("change", (e) => {
    week1.value = e.target.value;
    income1 = Number(week1.value);
    showTotalIncome(totalIncome());
  });

  week2.addEventListener("change", (e) => {
    week2.value = e.target.value;
    income2 = Number(week2.value);
    showTotalIncome(totalIncome());
  });

  week3.addEventListener("change", (e) => {
    week3.value = e.target.value;
    income3 = Number(week3.value);
    showTotalIncome(totalIncome());
  });

  week4.addEventListener("change", (e) => {
    week4.value = e.target.value;
    income4 = Number(week4.value);
    showTotalIncome(totalIncome());
  });

  weekExtra1.addEventListener("change", (e) => {
    weekExtra1.value = e.target.value;
    incomeXt1 = Number(weekExtra1.value);
    showTotalIncome(totalIncome());
  });

  weekExtra2.addEventListener("change", (e) => {
    weekExtra2.value = e.target.value;
    incomeXt2 = Number(weekExtra2.value);
    showTotalIncome(totalIncome());
  });
}

function totalIncome() {
  return income1 + income2 + income3 + income4 + incomeXt1 + incomeXt2;
}

function showTotalIncome(total) {
  const container = document.querySelector("#totalIncome");
  container.innerHTML = `El Income total es : $${total}`;
}

/////////////////////////////////////////////////
//OutPut handle//

function handleOutputChange() {
  const rent = document.querySelector(".Output1");
  const week2 = document.querySelector(".income2");
  const week3 = document.querySelector(".income3");
  const week4 = document.querySelector(".income4");
  const weekExtra1 = document.querySelector(".incomeXt1");
  const weekExtra2 = document.querySelector(".incomeXt2");
  rent.addEventListener("change", (e) => {
    rent.value = e.target.value;
    Output1 = Number(rent.value);
    showTotalOutput(totalOutput());
  });
}

function totalOutput() {
  return;
}

function showTotalOutput(total) {

}

init();
