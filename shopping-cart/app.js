function updateQuantity(quantity, individualCost, Price, isIncrease) {
  const productQuantity = document.getElementById(quantity);
  let quantityValue = parseInt(productQuantity.value);
  if (isIncrease) {
    quantityValue++;
    productQuantity.value = quantityValue;
  } else if (quantityValue > 0) {
    quantityValue--;
    productQuantity.value = quantityValue;
  }
  const priceId = document.getElementById(Price);
  const totalPrice = quantityValue * individualCost;
  priceId.innerText = totalPrice;

  calculateTotal();
}
//  cost of phone
function subTotal(product) {
  const item = document.getElementById(product + "-quantity");
  const itemNumber = parseInt(item.value);
  return itemNumber;
}

function calculateTotal() {
  const phoneNumber = subTotal("phone");
  const caseNumber = subTotal("case");
  const total = phoneNumber * 1219 + caseNumber * 59;
  const tax = total * 0.1;

  document.getElementById("sub-total").innerText = total;
  document.getElementById("tax").innerText = tax.toFixed(2);
  document.getElementById("grand-total").innerText = tax + total;
}

document.getElementById("phone-plus").addEventListener("click", function () {
  updateQuantity("phone-quantity", 1219, "phone-cost", true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateQuantity("phone-quantity", 1219, "phone-cost", false);
});
document.getElementById("case-plus").addEventListener("click", function () {
  updateQuantity("case-quantity", 59, "case-cost", true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateQuantity("case-quantity", 59, "case-cost", false);
});
