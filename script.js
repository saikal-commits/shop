const cards = document.querySelector(".cards");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((el, idx) => {
      cards.innerHTML += `
        <div>
    <img src=${el.image} alt="">
    <span>${el.id}</span>
    <h3>${el.price}$</h3>  
    <h2>${el.description}</h2>
    <button class="btn btn-success">add</button>

        </div>
        `;
    });
  });
