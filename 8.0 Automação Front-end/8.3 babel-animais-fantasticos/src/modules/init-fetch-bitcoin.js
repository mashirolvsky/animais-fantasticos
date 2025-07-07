export default function initFetchBitcoin() {
  try {
    fetch("https://blockchain.info/ticker")
      .then(r => {
        r.json();
      })
      .then(bitcoin => {
        const btc = document.querySelector(".btc-preco");
        return (btc.innerText = (200 / bitcoin.BRL.sell).toFixed(6));
      });
  } catch (error) {
    console.log(error);
  }
}
