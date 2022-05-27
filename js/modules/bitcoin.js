export default function fetchBitcoin(url, target) {
  fetch(url)
    .then(res => res.json())
    .then(bit => {
      const btcPrice = document.querySelector(target);
      btcPrice.innerText = (100000 / bit.BRL.sell).toFixed(3);
    })
    .catch(err => {
      console.log(err)
    })
}
