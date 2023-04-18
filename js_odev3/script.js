const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const allBtn = document.createElement("button");
allBtn.type = "button";
allBtn.classList.add("btn", "btn-outline-dark");
allBtn.textContent = "All";
allBtn.id = "all";

const container1 = document.querySelector(".btn-container");
container1.appendChild(allBtn);

const koreaBtn = document.createElement("button");
koreaBtn.type = "button";
koreaBtn.classList.add("btn", "btn-outline-dark");
koreaBtn.textContent = "Korea";
koreaBtn.id = "korea";

container1.appendChild(koreaBtn);

const jpnBtn = document.createElement("button");
jpnBtn.type = "button";
jpnBtn.classList.add("btn", "btn-outline-dark");
jpnBtn.textContent = "Japan";
jpnBtn.id = "japan";

container1.appendChild(jpnBtn);

const chnBtn = document.createElement("button");
chnBtn.type = "button";
chnBtn.classList.add("btn", "btn-outline-dark");
chnBtn.textContent = "China";
chnBtn.id = "china";

container1.appendChild(chnBtn);

const menuDiv = document.querySelector(".section-center");

menuDiv.id = "menu";

allBtn.addEventListener("click", showMenu);

function showMenu() {
  let menuItems = menu.map((item) => {
    return `  <div class="card mb-3" style="max-width: 660px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${item.img}" class="img-fluid rounded-start border border-dark border-4 border-dashed" alt="${item.title}">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 style="color: red; font-size: 25px;" class="card-title d-flex justify-content-between">${item.title}
                      <span style="color: red;">${item.price}</span>
                      </h5>
                      <hr>
                      <p class="card-text"></p>
                      <p class="card-text">${item.desc}</p>
                      
                    </div>
                  </div>
                </div>
              </div>
    
    `;
  });

  menuDiv.innerHTML = menuItems.join("");
}

showMenu();

koreaBtn.addEventListener("click", koreaMenu);

function koreaMenu() {
  let menuItems = menu.map((item) => {
    if (item.category == "Korea") {
      return `  <div class="card mb-3" style="max-width: 660px;">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${item.img}" class="img-fluid rounded-start border border-dark border-4 border-dashed" alt="${item.title}">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 style="color: red; font-size: 25px;" class="card-title d-flex justify-content-between">${item.title}
                        <span style="color: red;">${item.price}</span>
                        </h5>
                        <hr>
                        <p class="card-text"></p>
                        <p class="card-text">${item.desc}</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
      
      `;
    }
  });

  menuDiv.innerHTML = menuItems.join("");
}

jpnBtn.addEventListener("click", japanMenu);

function japanMenu() {
  let menuItems = menu.map((item) => {
    if (item.category == "Japan") {
      return `  <div class="card mb-3" style="max-width: 660px;">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${item.img}" class="img-fluid rounded-start border border-dark border-4 border-dashed" alt="${item.title}">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 style="color: red; font-size: 25px;" class="card-title d-flex justify-content-between">${item.title}
                        <span style="color: red;">${item.price}</span>
                        </h5>
                        <hr>
                        <p class="card-text"></p>
                        <p class="card-text">${item.desc}</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
      
      `;
    }
  });

  menuDiv.innerHTML = menuItems.join("");
}

chnBtn.addEventListener("click", chinaMenu);

function chinaMenu() {
  let menuItems = menu.map((item) => {
    if (item.category == "China") {
      return `  <div class="card mb-3" style="max-width: 660px;">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${item.img}" class="img-fluid rounded-start border border-dark border-4 border-dashed" alt="${item.title}">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 style="color: red; font-size: 25px;" class="card-title d-flex justify-content-between">${item.title}
                        <span style="color: red;">${item.price}</span>
                        </h5>
                        <hr>
                        <p class="card-text"></p>
                        <p class="card-text">${item.desc}</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
      
      `;
    }
  });

  menuDiv.innerHTML = menuItems.join("");
}
