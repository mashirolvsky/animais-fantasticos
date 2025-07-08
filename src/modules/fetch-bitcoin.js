export default function fetchBitcoin(url, target) {
  try {
    fetch(url)
      .then(r => {
        return r.json();
      })
      .then(bitcoin => {
        const btc = document.querySelector(target);
        return (btc.innerText = (200 / bitcoin.BRL.sell).toFixed(6));
      });
  } catch (error) {
    console.log(error);
  }
}
