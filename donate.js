var address = "0xb291D7150d44C048008e58747dA44cCe5dbB9b30";

function donateXJR() {
  var amount = prompt("How many JuniorCoins would you like to donate?");
    $.getJSON("http://coincap.io/page/ETH", function (data) {
      var price = data.usd_price / 100;
    });
    
    prompt("Please send " + amount * 1 + " Ether (" + amount * price + ") to this address.", address);
}
