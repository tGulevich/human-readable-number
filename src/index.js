module.exports = function toReadable (number) {
    let result;
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arrNum = Array.from(String(number), Number);
    
    switch (arrNum.length) {
        case 1:
            if (arrNum[0] !== 0) {
                result = ones[number];
            } else {
                result = 'zero';
            } 
            break;
        case 2:
            if (arrNum[0] === 1) {
                result = tens[number - 10];
            } else {
                result = tens2[arrNum[0] - 2] + " " + ones[arrNum[1]];
            }  
            break;
        case 3:
            if (arrNum[1] === 1) {
                result = ones[arrNum[0]] + " hundred " + tens[arrNum[2]];
            } else {
                result = ones[arrNum[0]] + " hundred " + (tens2[arrNum[1] - 2] || '') + " " + ones[arrNum[2]];
            }
            break;
    }
  return result.replace(/ +/g, ' ').trim();
}
