{
    console.log("Hello Developers! Nice to see You!");

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.5585;
        const rateUSD = 4.9590;
        const rateGBP = 5.0595;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;
        }
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const amountElement = document.querySelector(".js-amount");
            const currencyElement = document.querySelector(".js-currency");
            const resultElement = document.querySelector(".js-result");

            const amount = +amountElement.value;
            const currency = currencyElement.value;

            const result = calculateResult(amount, currency);

            resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency}</strong>`;

        });
    };

    init();
}