const allProduct = [
    {
      id:1,
      title:"Fjallraven - Foldsack No. 1 ",
      price:109.95,
      description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category:"men'sClothing",
      image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating:{rate:3.9,count:120}
    },
    {
      id:2,
      title:"Mens Casual Slim T-Shirts ",
      price:22.3,
      description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
      category:"men'sClothing",
      image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating:{rate:4.1,count:259}
    },
    {
      id:3,
      title:"Mens Cotton Jacket",
      price:55.99,
      description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain climbing",
      category:"men'sClothing",
      image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating:{rate:4.7,count:500}
    },
    {
      id:4,
      title:"Mens Casual Slim Fit",
      price:15.99,
      description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore",
      category:"men'sClothing",
      image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating:{rate:2.1,count:430}
    },
    {
      id:5,
      title:"Women's Legends Naga Gold ",
      price:695,
      description:"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
      category:"jewelery",
      image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating:{rate:4.6,count:400}
    },
    {
      id:6,
      title:"Solid Gold Petite Micropave ",
      price:168,
      description:"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States.",
      category:"jewelery",
      image:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating:{rate:3.9,count:70}
    },
    {
      id:7,
      title:"White Gold Plated Princess",
      price:9.99,
      description:"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement.",
      category:"jewelery",
      image:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating:{rate:3,count:400}
    },
    {
      id:8,
      title:"Pierced Owl Rose Gold Plated Stainless Steel Double",
      price:10.99,
      description:"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category:"jewelery",
      image:"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating:{rate:1.9,count:100}
    },
    {
      id:9,
      title:"WD 2TB Elements Portable External Hard Drive  ",
      price:64,
      description:"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity.",
      category:"electronics",
      image:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating:{rate:3.3,count:203}
    },
    {
      id:10,
      title:"SanDisk SSD PLUS 1TB Internal SSD ",
      price:109,
      description:"Faster boot up (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores).",
      category:"electronics",
      image:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating:{rate:2.9,count:470}
    },
    {
      id:11,
      title:"Silicon Power 256GB SSD ",
      price:109,
      description:"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup .",
      category:"electronics",
      image:"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating:{rate:4.8,count:319}
    },
    {
      id:12,
      title:"WD 4TB Gaming Drive ",
      price:114,
      description:"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category:"electronics",
      image:"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating:{rate:4.8,count:400}
    },
    {
      id:13,
      title:"Acer SB220Q bi 21.5 inches Full HD ",
      price:599,
      description:"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz.",
      category:"electronics",
      image:"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating:{rate:2.9,count:250}
    },
    {
      id:14,
      title:"Samsung 49-Inch CHG90 144Hz",
      price:999.99,
      description:"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY. ",
      category:"electronics",
      image:"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating:{rate:2.2,count:140}
    },
    {
      id:15,
      title:"BIYLACLESEN Women's 3-in-1 ",
      price:56.99,
      description:"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece.",
      category:"women'sClothing",
      image:"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      rating:{rate:2.6,count:235}
    },
    {
      id:16,
      title:"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price:29.95,
      description:"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort .",
      category:"women'sClothing",
      image:"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      rating:{rate:2.9,count:340}
    },
    {
      id:17,
      title:"Rain Jacket Women Windbreaker ",
      price:39.99,
      description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design.",
      category:"women'sClothing",
      image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      rating:{rate:3.8,count:679}
    },
    {
      id:18,
      title:"MBJ Women's Solid Short Sleeve Boat  ",
      price:9.85,
      description:"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline .",
      category:"women'sClothing",
      image:"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      rating:{rate:4.7,count:130}
    },
    {
      id:19,
      title:"Opna Women's Short Sleeve Moisture",
      price:7.95,
      description:"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric.",
      category:"women'sClothing",
      image:"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      rating:{rate:4.5,count:146}
    },
    {
      id:20,
      title:"DANVOUY Womens T Shirt Casual Cotton Short",
      price:12.99,
      description:"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category:"women'sClothing",
      image:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating:{rate:3.6,count:145}
    }]
 

    let cardContent=document.querySelector(".card-content");
    let btnCatgs = document.querySelector(".sub-category-ul");
    
      function displayProductItems(allProduct) {
        let displayProduct = allProduct.map(function(item){
          return `
            <div class="productsmenue">
              <img src=${item.image} alt=${item.title} class="photo" onclick="showDetalis(${item.id})">
              <div class="productinfo">
                <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}$</h4>
                </header>
                <p class="discription">${item.description}</p>
                <button onclick='addToCart(${item.id})' class="button"> Add To Cart </button>
              </div>
            </div>
          </div>
          `
      })
        displayProduct=displayProduct.join("");
        cardContent.innerHTML = displayProduct;
      }
      displayProductItems(allProduct);
      displayCategoriesButtons ();


    function displayCategoriesButtons () {
        const catego = allProduct.reduce(function (value,item) {
          if (!value.includes(item.category)) {
            value.push(item.category);
          }
          return value;
        },["all"]);
        
        const categBtn = catego.map(function (btn) {
          return `<li><button class="filter-btn" type="button" data-id=${btn}>${btn}</button></li>`
        }).join("");
        btnCatgs.innerHTML = categBtn;
        const filterBtn = btnCatgs.querySelectorAll('.filter-btn');
        //Filter Items
      filterBtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          const category = e.currentTarget.dataset.id;
          const menuCateg = allProduct.filter (function (menuItem) {
            if (menuItem.category == category) {
              return menuItem;
            }
          });
          
          if (category === "all") {
            displayProductItems(allProduct);
          }
          else {
            displayProductItems(menuCateg);
          }
        })
      });
      }

  function addToCart(id) {
  let item = allProduct.filter((product) => product.id == id);
  localStorage.setItem(`product${id}`, JSON.stringify(item[0]));
}
function myCart() {
  var cart = document.getElementById("cart");
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key.startsWith("product")) {
      var product = JSON.parse(localStorage.getItem(`${key}`));
      cart.innerHTML += `
         <div class="productsmenue" >
          <img src='${product.image}' alt=${product.title} class="photo" >
          <div class="productinfo">
            <header>
            <h4>${product.title}</h4>
            <h4 class="price">${product.price}$</h4>
            </header>
            <p class="discription">${product.description}</p>
            <button onclick='remove(${product.id})' class="button"> Remove </button>
          </div>
      </div>`;
    }
  }
}
function remove(id) {
  event.target.parentNode.parentNode.remove();
  localStorage.removeItem(`product${id}`);
}


displayProductItems(allProduct)
  function showDetalis(id) {
    location.assign("showThisElement.html?"+id )
  }


  
  document.getElementById('icon').addEventListener('click',()=>{
    let ww = document.getElementById("search");
    allProduct.filter((e)=>{
      if (e.title.startsWith(ww.value.toUpperCase())){
        console.log(e.title);
      }
    })
  })
    