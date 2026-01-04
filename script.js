const calculateBtn = document.getElementById('calculate-btn');

calculateBtn.addEventListener('click',() =>{
    const depostiAmount = parseFloat(document.getElementById('deposit-amount').value);
    const depositFrequency = document.getElementById('deposit-frequency').value;
    const depositTenure = parseInt(document.getElementById('deposit-tenure').value);
    const interesRate = parseFloat(document.getElementById('interest-rate').value);
    
    const numberOFDepodits = depositTenure * getNumberOFDepositsPerYear(depositFrequency);

    const maturityAmount = depostiAmount * numberOFDepodits *Math.pow((1 + interesRate /100),depositTenure);

    document.getElementById('result').innerHTML = `Maturity Amount: ${maturityAmount.toFixed(2)}`
});
interest-rate
deposit-tenure
function
getNumberOFDepositsPerYear(frequency){
    switch(frequency){
        case "Monthly":
            return 12;
            case "Quarterly":
                return 4 ;
                case "Half-Yearly":
                    return 2 ;
                    case "Yearly":
                        return 1;
                        default:
                            return 0;

    }
}