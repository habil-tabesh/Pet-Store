const products = document.querySelector('.productHolder')

function createCard([img,name,product,category,brandName,rating,price]){
    let code = `
    <div class="card">
              <img class="shop-img" src="${img}" alt="${product} onClick="window.open('Gallery/1.JPG','no','scrollbars=yes,width=429,height=290')" >>
              <div class="ribbon-2"> ${name}  </div>
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
function image(img) {
    var src = img.src;
    window.open(src);
}

let item1 = ["img/cat 13.jfif",
'Graphite',
'',
'Rare',
"⭐⭐⭐⭐⭐",
"$ 150,000"
];
let item2 = ["img/dog2.jpg",
'Sasha',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 350,000"
];
let item3 = ["img/cat 8.jfif",
'Artemis',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 250,000"
];
let item4 = ["img/dog bg bl 1.jpg",
'Pippa',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 200,000"
];
let item5 = ["img/black dog 1.jpg",
'Alvin',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 400,000"
];
let item6 = ["img/black cat.jpg",
'Sakamoto',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 210,000"
];
let item7 = ["img/black dog 2.jpg",
'Winston',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 500,000"
];
let item8 = ["img/black dog 3.jpg",
'Cora',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 190,000"
];
let item9 = ["img/black dog 4.jpg",
'Olympia',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 990,000"
];
let item10 = ["img/black dog 5.jpg",
'Ophelia',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 1,190,000"
];
let item11 = ["img/black dog 6.png",
'Apollo',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 1,190,000"
];
let item12 = ["img/black dog 7.jpg",
'Monty',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 1,690,000"
];
let item13 = ["img/black cat 2.jpg",
'Queenie',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 1,290,000"
];
let item14 = ["img/black cat 1.jpg",
'Yuki',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 1,090,000"
];
let item15 = ["img/black cat 3.jpg",
'Baldo',
'the king cat',
'Rare',
"⭐⭐⭐⭐⭐⭐",
"$ 690,000"
];
let item16 = ["img/black fish 1.jpg",
'Jewel',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 220,000"
];
let item17 = ["img/black fish 2.jpg",
'Shelly',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 110,000"
];
let item18 = ["img/black fish 3.jpg",
'Goldie',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 120,000"
];
let item19 = ["img/black fish.jpg",
'Lake Skywalker',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 320,000"
];
let item20 = ["img/cat12.png",
'Shadow',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 520,000"
];
let item21 = ["img/dog bed 3.jpg",
'Dog bed',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 25,000"
];

let item22 = ["img/dog bed.webp",
'Dog bed',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 20,000"
];
let item23 = ["img/dog bed2.webp",
'Dog bed',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 20,000"
];
let item24 = ["img/dog beds.jpg",
'Dog bed',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 20,000"
];
let item25 = ["img/dog bowls.jpg",
'Golden Pet Bowl',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 10,000"
];
let item26 = ["img/dog bowl2.avif",
'Golden Pet Bowl',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 10,000"
];
let item27 = ["img/dog bowl.jpg",
'Golden Pet Bowl',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 10,000"
];
let item28 = ["img/dog carrier 2.jpg",
'Dog Career',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 10,000"
];
let item29 = ["img/dog carrier.jpg",
'Dog Career',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 10,000"
];
let item30 = ["img/dog chain.jpg",
'Golden Dog Chain',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 10,000"
];
let item31 = ["img/dog chain 2.jpg",
'Golden Dog Chain',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 10,000"
];
let item32 = ["img/dog chain 3.jpg",
'Golden Dog Chain',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 10,000"
];
let item33 = ["img/dog chain 4.jpg",
'Golden Dog Chain',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 10,000"
];
let item34 = ["img/peacock.jpg",
'Blue Moon',
'the king cat',
'Rare',
"⭐⭐⭐⭐",
"$ 550,000"
];



createCard(item1);
createCard(item2);
createCard(item3);
createCard(item4);
createCard(item6);
createCard(item7);
createCard(item8);
createCard(item9);
createCard(item10);
createCard(item11);
createCard(item12);
createCard(item13);
createCard(item14);
createCard(item15);
createCard(item16);
createCard(item17);
createCard(item18);
createCard(item19);
createCard(item20);
createCard(item21);
createCard(item22);
createCard(item23);
createCard(item24);
createCard(item25);
createCard(item26);
createCard(item27);
createCard(item28);
createCard(item29);
createCard(item30);
createCard(item31);
createCard(item32);
createCard(item33);
createCard(item34);

