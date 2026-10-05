const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    if (sumUAH >= 0){
        for (const element of currencyValues) {
            if (element.currency === exchangeCurrency) {
                return sumUAH / element.value;
            }
        }
    } else {
        console.log('сумма повинна бути додатнім числом')
    }


}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));

