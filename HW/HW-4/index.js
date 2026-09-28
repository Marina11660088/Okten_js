
function exchange(sumUAH,currencyValues,exchangeCurrency){
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
console.log(exchange(50000,[{currency:'USD',value:42},{currency:'EUR',value:51}],'EUR'));

