function dodajDecimale() {
    let x = document.getElementById("number");
    x.value = (Math.round(x.value * 100) / 100).toFixed(2);
}