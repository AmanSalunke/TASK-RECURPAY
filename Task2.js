
const addToCartButton=document.querySelector("#addToCartButton");
const verifyButton = document.querySelector("#verifyButton");
const pincodeInput = document.querySelector("#pincodeInput");
const messageElement = document.querySelector("#message");

const ineligiblePincodes = [560017, 560018, 560019, 560020];

addToCartButton.disabled = true;

verifyButton.addEventListener("click", () => {
const pincode = pincodeInput.value.trim();

if (!pincode) {
    showMessage("Please enter a pincode.");
    return;
}

const isEligible = !ineligiblePincodes.includes(parseInt(pincode));

showMessage(isEligible? "You are eligible for COD!": "Sorry, You are not eligible for COD.");
addToCartButton.disabled = !isEligible;
    });

function showMessage(message) {
    messageElement.textContent = message;
}
                

                        
const quantityInput = document.querySelector("#quantityInput");
const totalAmountElement =document.querySelector("#totalAmount");

 const pricePerItem = 2599; // Set your price per item here

function updateTotalAmount() {
const quantity = parseInt(quantityInput.value, 10);
const totalAmount = quantity * pricePerItem;
totalAmountElement.textContent = totalAmount.toFixed(2); // Display total with two decimal places
}
quantityInput.addEventListener("input", updateTotalAmount);

updateTotalAmount();
             