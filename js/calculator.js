const refs = {
    balance: document.querySelector('[data-operation="balance"]'),
    income: document.querySelector('[data-operation="income"]'),
    costs: document.querySelector('[data-operation="costs"]'),
    reportsFields: document.querySelector('[data-report]'),
    inputName: document.querySelector('[data-name]'),
    inputValue: document.querySelector('[data-input]'),
    btn: document.querySelector('[data-btn]'),
};

let incomeValue = 0;
let costsValue = 0;

const addIncome = () => {
    refs.btn.classList.remove('is-active');

    if (refs.inputValue.value.length >= 3 && refs.inputName.value.length > 0) {
        refs.btn.classList.add('is-active');
        refs.btn.addEventListener('click', onBtnClickAddValue);
    };
};

const onBtnClickAddValue = () => {

    if (Number(refs.inputValue.value) > 0) {
        incomeValue += Number(refs.inputValue.value);
        refs.income.textContent = incomeValue;
    } else {
        costsValue -= Number(refs.inputValue.value);
        refs.costs.textContent = -costsValue;
    };

    refs.balance.textContent = incomeValue - costsValue;
    refs.btn.classList.remove('is-active');
    creatHistoryReport()
    refs.inputValue.value = '';
    refs.inputName.value = '';
};

const creatHistoryReport = () => {
    const historyReport = () => 
        [`<div class="order-report">
    <div class="report-field">
    ${refs.inputName.value}
    </div>
    <div class="report-field">
    ${refs.inputValue.value}&#8372;
    </div>
    </div>
    `].join(' ');
    refs.reportsFields.insertAdjacentHTML('afterend', historyReport());
}



refs.inputName.addEventListener('input', addIncome);

refs.inputValue.addEventListener('input', addIncome);