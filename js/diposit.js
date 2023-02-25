document.getElementById('btn-diposit').addEventListener('click', function () {
    const depositField = document.getElementById('diposit-field');
    const newDipositAmountString = depositField.value;
    const newDipositAmount = parseFloat(newDipositAmountString);

    const dipositTotalElement = document.getElementById('diposit-total');
    const previousDipositTotalString = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalString);

    const newDipositTotal = previousDipositTotal + newDipositAmount;
    dipositTotalElement.innerText = newDipositTotal;

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal + newDipositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    depositField.value = ''
})