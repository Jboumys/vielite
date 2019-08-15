

function affiche(value){
  let {results:[data]} = value;
  let {itemsInCart, buyerCountry} = data;
  console.log(itemsInCart);
}
let api = "https://randomapi.com/api/006b08a801d82d0c9824dcfdfdfa3b3c";
fetch(api)
  .then(response => response.json())
    .then(data =>{affiche(data);})
      .catch(error => console.error("error status : " + error));
