module.exports = function toReadable (number) {
    let ones=['','one','two','three','four','five','six','seven','eight','nine']
    tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    res = '';
    b = String(number);
    c = Number(b[0]);
    d = Number(b[1]);
    e = Number(b[2]);
    if(number == 0){
        res = 'zero';
    }else if (number < 10){
        res = ones[number]
    }else if (number < 20 && number > 9){
        res = teens[number-10];
    }else if (number > 19 && number < 99){
        res = tens[c] + ' ' + ones[d];
    }else if (number > 99 && number < 110){
        res = ones[c] + ' hundred ' + ones[e];
    }else if(number > 109 && number < 120 ){
        res = ones[c] + ' hundred ' + teens[e];
    }else if (number > 119 && number < 200){
        res = ones[c] + ' hundred ' + tens[d] + ' ' + ones[e];
    }else if (number > 199 && number < 220){
        res = ones[c] + ' hundred' + ones[e];
    }else if (number > 219 && number < 1000){
        res = ones[c] + ' hundred ' + tens[d] + ' ' + ones[e];
    }
    return res
}
