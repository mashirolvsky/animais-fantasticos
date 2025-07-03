const promise = new Promise(function (resolve, reject) {
  let condition = false;
  if (condition) {
    resolve({
      id: AbortController,
      event: Promise.race,
    });
  } else {
    reject(Error("UM ERRO OCORREU"));
  }
});
let newPromise = promise
  .then(a => {
    console.log(a);
    return a;
  })
  .then(
    b => {
      console.log(b);
      return b;
    },
    err => {
      {
        console.log("INSIDE THE -> CATCH ERROR");
        console.error(err);
      }
    }
  )
  .catch(err => {
    {
      console.log("CATCH ERRORR");
      console.error(err);
    }
  })
  .finally(value => {
    console.log("KKKKKK", value);
  });

console.log(newPromise);

const logados = new Promise(r =>
  setTimeout(() => {
    console.log("Logados Carregou!");
    r("Usuario logado");
  }, 1500)
);

const visitante = new Promise(r =>
  setTimeout(() => {
    console.log("Visitantes Carregou!");
    r("Usuario Visitante");
  }, 2500)
);

const allUser = Promise.race([logados, visitante]);

allUser.then(r => {
  console.log(r);
});
