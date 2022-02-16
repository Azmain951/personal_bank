function getInputValue(inputId) {
    const costText = document.getElementById(inputId).value;
    const cost = parseFloat(costText);
    return cost;
}

function totalExpenseCalculation(foodCost, rentCost, clothCost) {
    const totalExpense = document.getElementById('total-expense');
    const totalCost = foodCost + rentCost + clothCost;
    totalExpense.innerText = totalCost;
    return totalCost;
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

    if (income > 0 && foodCost > 0 && rentCost > 0 && clothCost > 0) {
        const totalExpense = totalExpenseCalculation(foodCost, rentCost, clothCost);

        const balancefield = document.getElementById('balance');
        if (income > totalExpense) {
            balancefield.innerText = income - totalExpense;
        }
        else {
            console.log()
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