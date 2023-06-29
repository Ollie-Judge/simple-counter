let counter = 0;
const counterOutput = document.getElementById("counterOutput");
counterOutput.innerHTML = counter;

const decrease = () => {
  counter--;
  counterOutput.innerHTML = counter;
};

const reset = () => {
  counter = 0;
  counterOutput.innerHTML = counter;
};

const increase = () => {
  counter++;
  counterOutput.innerHTML = counter;
};
