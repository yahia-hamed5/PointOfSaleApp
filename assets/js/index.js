let products = {
  Drinks: [
    {
      name: "cola",
      price: 2,
      wight: "1 L",
      img: "./assets/images/drinks/soda.jpg",
    },
    {
      name: "mirinda",
      price: 2,
      wight: "1 L",
      img: "./assets/images/drinks/soda.jpg",
    },
    {
      name: "sprite",
      price: 2,
      wight: "1 L",
      img: "./assets/images/drinks/soda.jpg",
    },
  ],
  Burgers: [
    {
      name: "cheese burger",
      weight: "140g",
      price: 3.5,
      img: "./assets/images/burgers/burger.jpeg",
    },
    {
      name: "chicken-delux",
      weight: "240g",
      price: 4.25,
      img: "./assets/images/burgers/burger.jpeg",
    },
    {
      name: "big-john",
      weight: "650g",
      price: 5,
      img: "./assets/images/burgers/burger.jpeg",
    },
    {
      name: "spicy-chicken",
      weight: "150g",
      price: 4,
      img: "./assets/images/burgers/burger.jpeg",
    },
  ],
  Pizza: [
    {
      name: "margarita",
      price: 22,
      wight: "200g",
      img: "./assets/images/pizza/pizza.webp",
    },
    {
      name: "chicken ranch",
      price: 25,
      wight: "200g",
      img: "./assets/images/pizza/pizza.webp",
    },
    {
      name: "sea ranch",
      price: 30,
      wight: "200g",
      img: "./assets/images/pizza/pizza.webp",
    },
  ],
  Wok: [
    {
      name: "chicken wok",
      price: 10,
      wight: "100g",
      img: "./assets/images/wok/wok.jpeg",
    },
    {
      name: "turkey wok",
      price: 10,
      wight: "100g",
      img: "./assets/images/wok/wok.jpeg",
    },
    {
      name: "meet wok",
      price: 10,
      wight: "100g",
      img: "./assets/images/wok/wok.jpeg",
    },
  ],
  Dessert: [
    {
      name: "cheese cake",
      price: 5,
      wight: "50g",
      img: "./assets/images/desserts/dessert.jpeg",
    },
    {
      name: "molten cake",
      price: 7,
      wight: "50g",
      img: "./assets/images/desserts/dessert.jpeg",
    },
    {
      name: "muffin cake",
      price: 6,
      wight: "50g",
      img: "./assets/images/desserts/dessert.jpeg",
    },
  ],
  Pasta: [
    {
      name: "negresko",
      price: 20,
      wight: "100g",
      img: "./assets/images/pasta/pasta.webp",
    },
    {
      name: "mak and cheese",
      price: 18,
      wight: "100g",
      img: "./assets/images/pasta/pasta.webp",
    },
    {
      name: "makarona bel salsa",
      price: 14,
      wight: "100g",
      img: "./assets/images/pasta/pasta.webp",
    },
  ],
};

let catsDiv = document.querySelector("#mycatigory");
let cats = Object.keys(products);

cats.forEach((ele, index) => {
  catsDiv.innerHTML += `
            <div class="col-3" onclick="renderProducts('${ele}')">
            <div class="card border border-0 d-flex flex-column align-items-center gap-4 pt-4">
                <img src="./assets/images/burgers/burger.jpeg" alt="..." width="50px">
                <div class="card-body">
                    <p class="card-text" id="text">${ele}</p>
                </div>
            </div>
        </div>
    `;
});

function renderProducts(catName) {
  let productsToFecth = products[catName];
  catsDiv.innerHTML = ``;
  productsToFecth.forEach((ele, index) => {
    catsDiv.innerHTML += `
        <div class="col-3" onclick="addproduct('${catName}',${index})" >
            <div class="card-products border border-0 d-flex flex-column align-items-center gap-4 pt-4" id="products-card">
                <img src="./assets/images/burgers/burger.jpeg" alt="..." width="50px">
                <div class="card-body    ">
                    <p class="card-text d-flex align-items-center justify-content-center" id="name">${ele.name}</p>
                    <p class="card-text d-flex align-items-center justify-content-center" id="whight">${ele.wight}</p>
                    <h4 class="card-text d-flex align-items-center justify-content-center" id="price">${ele.price}$</h4>
                </div>
            </div>
        </div>   
    `;
  });
}

let cart = [
  {
    name: "negresko",
    price: 20,
    wight: "100g",
    img: "./assets/images/burgers/burger.jpeg",
    qty: 2,
  },
  {
    name: "mak and cheese",
    price: 18,
    wight: "100g",
    img: "./assets/images/burgers/burger.jpeg",
    qty: 2,
  },
  {
    name: "makarona bel salsa",
    price: 14,
    wight: "100g",
    img: "./assets/images/burgers/burger.jpeg",
    qty: 2,
  },
];

function addDiv() {
  catsDiv.innerHTML += `<div class="col-4  animate__animated  animate__fadeInRight"  id="name4">
  <table class=" table table-bordered table-dark " >
     <thead>
         <tr>
             <th>ــ</th>
             <th>Item Name</th>
             <th>Image</th>
             <th>Total</th>
             <th>Dec</th>
             <th>Qty</th>
             <th>Inc</th>
         </tr>
     </thead>
     <tbody>
         <!-- <tr>
             <th>1</th>
             <th><img src="./assets/images/burgers/burger.jpeg" width="70" alt=""></th>
             <th>name</th>
             <th><button class="btn btn-danger">-</button></th>
             <th>1</th>
             <th><button class="btn btn-primary">+</button></th>
         </tr> -->
     </tbody>
     <tfoot>
         <tr>
             <td colspan="4">Total</td>
             <td colspan="3" id="total">total$</td>
         </tr>
     </tfoot>
 </table>
</div>`;

}

function rendercart() {
  addDiv()
  // tbody.innerHTML+=``;
  cart.forEach((ele, index) => {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML += `
                     <tr>
                        <th>${index + 1}</th>
                        <th>${ele.name}</th>
                        <th><img src="${ele.img}" width="70" alt=""></th>
                        <th>${ele.price * ele.qty}$</th>
                        <th onclick="decItem(${index})"><button class="btn btn-danger">-</button></th>
                        <th>${ele.qty}</th>
                        <th onclick="incItem(${index})"><button class="btn btn-primary" >+</button></th>
                    </tr> 
`;
  });
  let sum = 0;
  cart.forEach((el) => {
    let x = +el.price * +el.qty;
    sum += x;
  });

  let totalCell = document.querySelector("#total");
  totalCell.innerHTML = sum + "$";
}

function addproduct(key, index) {
  let oneProduct = products[key][index];
  let isThere = cart.findIndex((ele) => {
    return ele.name == oneProduct.name;
  });
  if (isThere == -1) {
    oneProduct.qty = 1;
    cart.push(oneProduct);
  }else{
    cart[isThere].qty++;
  }

  rendercart();
}


function incItem(index){
  if ( cart[index].qty>=1) {
    cart[index].qty ++
  }
}
function decItem(index){
  if ( cart[index].qty>1) {
    cart[index].qty --
  }else{
    cart.splice(index,1)
  }
}
