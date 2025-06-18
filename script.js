function calc()
{
    const input1 = document.getElementById("input1")
    const input2 = document.getElementById("input2")
    var price = input1.value;
    var percent = input2.value;

    var tip = Math.round(price * (percent * 0.01));

    const tiptext = document.getElementById("tiptext")

    var longTotal = (parseFloat(tip) + parseFloat(price));
    var total = longTotal.toFixed(2);

    tiptext.textContent = "tip is: $" + tip + " and the total is: $" + total;
}