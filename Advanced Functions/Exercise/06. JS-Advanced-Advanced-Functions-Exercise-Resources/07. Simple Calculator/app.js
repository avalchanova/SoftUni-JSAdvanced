function calculator() {
    let a;
    let b;
    let resultSelector;

    let action = {
        init: (firstSelector, secondSelector, resSelector) => {
            a = document.querySelector(firstSelector);
            b = document.querySelector(secondSelector);
            resultSelector = document.querySelector(resSelector);
        },
        subtract: () => {
            let firstNum = Number(a.value);
            let secondNum = Number(b.value);
            let resNum = firstNum - secondNum;
            resultSelector.value = resNum;
        },
        add: () => {
            let firstNum = Number(a.value);
            let secondNum = Number(b.value);
            let resNum = firstNum + secondNum;
            resultSelector.value = resNum;
        }
    };
    return action;
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');

