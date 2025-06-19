Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b, 0);
};

function MAD() {
    const numberOfNumbers = parseInt(document.getElementById("numberOfNumbers").value);
    let values = [];

    for (let i = 0; i < numberOfNumbers; i++) {
        values.push(parseFloat(document.getElementById("option" + i).value));
    }

    const mean = values.sum() / numberOfNumbers;

    let deviations = values.map(value => Math.abs(value - mean));

    const mad = deviations.sum() / numberOfNumbers;

    document.getElementById("result").innerHTML = "Mean Absolute Deviation: " + mad;
}
document.getElementById("calculateButton").addEventListener("click", MAD);