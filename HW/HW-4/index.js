
function exchange(sumUAH,currencyValues,exchangeCurrency){

    if(exchangeCurrency==='USD'){
        console.log(sumUAH/currencyValues[0].value);
    } else  if (exchangeCurrency==='EUR'){
        console.log(sumUAH/currencyValues[1].value);
    }

}
exchange(5100,[{currency:'USD',value:42},{currency:'EUR',value:51}],'EUR');