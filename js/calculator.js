const refs = {
    balance: document.querySelector('[data-operation="balance"]'),
    income: document.querySelector('[data-operation="income"]'),
    costs: document.querySelector('[data-operation="costs"]'),
    reportsFields: document.querySelector('[data-report]'),
    inputName: document.querySelector('[data-name]'),
    inputValue: document.querySelector('[data-input]'),
    btn: document.querySelector('[data-btn]'),
};

refs.inputName.addEventListener('input', addIncome)

refs.inputValue.addEventListener('input', addIncome);


let incomeValue = 0;
let costsValue = 0;

function addIncome() {
    refs.btn.classList.remove('is-active');

    if (refs.inputValue.value.length >= 3 && refs.inputName.value.length > 0) {
        refs.btn.classList.add('is-active');
        refs.btn.addEventListener('click', onBtnClickAddIncome);
    };
};

function onBtnClickAddIncome() {

    if (Number(refs.inputValue.value) > 0) {
        incomeValue += Number(refs.inputValue.value);
        refs.income.textContent = incomeValue;
    } else {
        costsValue -= Number(refs.inputValue.value);
        refs.costs.textContent = -costsValue;
    };

    refs.balance.textContent = incomeValue - costsValue;
    refs.btn.classList.remove('is-active');
    refs.inputValue.value = '';

};

