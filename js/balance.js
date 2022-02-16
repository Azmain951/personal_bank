function getInputValue(inputId) {
    const costText = document.getElementById(inputId).value;
    const cost = parseFloat(costText);
    return cost;
}

function updateBalanceFields(income, foodCost, rentCost, clothCost) {
    if (isNaN(income) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost)) {
        errorMessage('main-error', 'input a number!!!');
    }

    else if (income < 0 || foodCost < 0 || rentCost < 0 || clothCost < 0) {
        errorMessage('main-error', 'enter a positive value!!!');
    }

    else {
        const totalExpense = document.getElementById('total-expense');
        const balancefield = document.getElementById('balance');

        const totalCost = foodCost + rentCost + clothCost;
        totalExpense.innerText = totalCost;

        if (income >= totalCost) {
            balancefield.innerText = income - totalCost;
        }
        else {
            errorMessage('main-error', "Hold on...Your expenses are greater than your income!")
            balancefield.innerText = '';
        }
    }
}

function savingAmountCalculation() {
    const savingPercentage = getInputValue('saving-percentage');
    remainingBalanceField = document.getElementById('remaining-balance');
    if (isNaN(savingPercentage)) {
        errorMessage('saving-error', 'please enter a positive integer value');
    }
    else if (savingPercentage < 0) {
        errorMessage('saving-error', 'please enter a positive integer value');
    }
    else {
        const income = getInputValue('total-income');
        const savingAmount = income * (savingPercentage / 100);
        const savingAmountField = document.getElementById('saving-amount');
        savingAmountField.innerText = savingAmount;
        const balanceText = document.getElementById('balance').innerText;
        const balance = parseFloat(balanceText);

        if (savingAmount > balance) {
            errorMessage('saving-error', "You don't enough money for saving!!!");
            remainingBalanceField.innerText = '';

        }
        else {
            remainingBalanceField.innerText = balance - savingAmount;
        }
    }
}

function errorMessage(field, message) {
    const error = document.getElementById(field);
    error.innerText = message;
    error.style.color = "red";
}

function noErrorMessage(field) {
    const error = document.getElementById(field);
    error.innerText = '';
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    noErrorMessage('main-error');
    const income = getInputValue('total-income');
    const foodCost = getInputValue('food-expense');
    const rentCost = getInputValue('rent-expense');
    const clothCost = getInputValue('cloth-expense');

    updateBalanceFields(income, foodCost, rentCost, clothCost);
});

document.getElementById('save-btn').addEventListener('click', function () {
    noErrorMessage('saving-error');
    savingAmountCalculation();
});