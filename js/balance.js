function getInputValue(inputId) {
    const costText = document.getElementById(inputId).value;
    const cost = parseFloat(costText);
    return cost;
}

function savingAmountCalculation() {
    const savingPercentage = getInputValue('saving-percentage');
    const income = getInputValue('total-income');
    const savingAmount = income * (savingPercentage / 100);

    const savingAmountField = document.getElementById('saving-amount');
    savingAmountField.innerText = savingAmount;

    const balanceText = document.getElementById('balance').innerText;
    const balance = parseFloat(balanceText);
    document.getElementById('remaining-balance').innerText = balance - savingAmount;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = getInputValue('total-income');
    const foodCost = getInputValue('food-expense');
    const rentCost = getInputValue('rent-expense');
    const clothCost = getInputValue('cloth-expense');


    if (isNaN(income) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost)) {
        console.log('please input integer number');
    }

    else if (income < 0 || foodCost < 0 || rentCost < 0 || clothCost < 0) {
        console.log('please input positive number');
    }

    else {
        const totalExpense = document.getElementById('total-expense');
        const balancefield = document.getElementById('balance');

        const totalCost = foodCost + rentCost + clothCost;

        if (income >= totalCost) {
            totalExpense.innerText = totalCost;
            balancefield.innerText = income - totalCost;
        }
        else {
            console.log('expense exceed income');
        }
    }

});

document.getElementById('save-btn').addEventListener('click', function () {
    const savingPercentage = getInputValue('saving-percentage');
    const income = getInputValue('total-income');
    const savingAmount = income * (savingPercentage / 100);
    const savingAmountField = document.getElementById('saving-amount');
    savingAmountField.innerText = savingAmount;

    const balanceText = document.getElementById('balance').innerText;
    const balance = parseFloat(balanceText);
    document.getElementById('remaining-balance').innerText = balance - savingAmount;
});