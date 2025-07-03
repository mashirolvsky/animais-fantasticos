const url = "http://api.anidb.net:9001/httpapi";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

const teste = fetch(url).then(r => r.json());

console.log(teste);
