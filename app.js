const products = document.querySelector('.productHolder')

function createCard([img,product,category,brandName,rating,price,offer]){
    let code = `
    <div class="card">
              <img class="shop-img" src="${img}" alt="${product}">
              <div class="cardText">
                  <p class="categoryText">${category}</p>
                  <h2 class="brandText">${brandName}</h2>
                  <h5>${rating}</h5>
                  <p class="priceText">${price}</p>
                  <button class="button-shop"><span> Buy</span></button>
              </div>
          </div>
          `;
          products.innerHTML += code;
}


let item1 = ["img/cat 13.jfif",
'shows',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 150,000"
];
let item2 = ["img/dog2.jpg",
'shows',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 150,000"
];


createCard(item1);
createCard(item2);
createCard(item1);
createCard(item1);
createCard(item1);
createCard(item1);
createCard(item2);
createCard(item1);
createCard(item1);
createCard(item1);
createCard(item2);
createCard(item1);
createCard(item1);
createCard(item1);
createCard(item1);

