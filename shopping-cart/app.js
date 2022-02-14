const textNumber = document.getElementById("phone-counter");
const phonePlusIcon = document.getElementById("phone-plus-icon");
const phoneMinusICon = document.getElementById("phone-minus-icon");

phonePlusIcon.addEventListener("click", function () {
  textNumber.value = parseInt(textNumber.value) + 1;
});

phoneMinusICon.addEventListener("click", function () {
  if (textNumber.value == 0) {
    return;
  }
  textNumber.value = parseInt(textNumber.value) - 1;
});
