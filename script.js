//API

const cards = document.querySelector(".cards");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data
      .filter((el) => el.category.includes("electronics"))
      .sort((a, b) => a.price - b.price)
      .forEach((el, idx) => {
        cards.innerHTML += `
        <div>
    <img src=${el.image} alt="">
    <span>${el.id}</span>
    <h3>${el.title}</h3> 
    <p>${el.description}</p>
    <h5>${el.category}</h5>
    <button class=" delBtn btn btn-success">${el.price}$</button>
        </div>
        `;
      });
  });
