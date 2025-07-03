// async function puxarDados() {
//   const dados = await fetch("./dados.json");
//   const clientes = await fetch("./clientes.json");

//   const jsonDados = await (await dados).json();
//   const jsonClientes = await (await clientes).json();

//   console.log(jsonDados, jsonClientes);
// }

// puxarDados();

async function asyncSemPromise() {
  // Console não irá esperar.
  await new Promise(resolve => {
    setTimeout(() => {
      console.log("Depois de 1s");
      resolve();
    }, 1000);
  });
  console.log("acabou");
}
asyncSemPromise();
