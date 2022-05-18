export default function initBitcoin() {

}

fetch('https://blockchain.info/ticker')
  .then(res => res.json())
  .then(bit => {
    const btcPrice = document.querySelector('.btc-price');
    btcPrice.innerText = (100000 / bit.BRL.sell).toFixed(3);
  })
  .catch(err => {
    console.log(err)
  })

// https://blockchain.info/ti 