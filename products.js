// ===== products.js : ALL product data lives here (edit prices/text here only) =====
const PLACEHOLDER = "data:image/svg+xml," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" text-anchor="middle" fill="#999" font-family="Arial" font-size="22">No Image</text></svg>');

const PRODUCTS = [
  { id:1, name:"Casual T-Shirt", category:"Clothes", price:799, image:"https://m.media-amazon.com/images/I/51G9CxnLYPL._AC_UY1100_.jpg",
    desc:"Soft everyday cotton t-shirt with a relaxed fit.", brand:"AeroWear", rating:4.2, stock:"In Stock",
    features:["100% cotton","Regular fit","Machine washable","Sizes S to XXL"] },
  { id:2, name:"Denim Jacket", category:"Clothes", price:1899, image:"https://cdn-images.farfetch-contents.com/24/50/80/50/24508050_54930144_600.jpg",
    desc:"Classic denim jacket that goes with everything.", brand:"AeroWear", rating:4.4, stock:"In Stock",
    features:["Durable denim","Button front","Two chest pockets","Sizes S to XL"] },
  { id:3, name:"Oversized Hoodie", category:"Clothes", price:1299, image:"3l1ez_512.webp",
    desc:"Warm and cozy oversized hoodie for chilly days.", brand:"AeroWear", rating:4.5, stock:"In Stock",
    features:["Fleece lining","Oversized fit","Kangaroo pocket","Sizes M to XXL"] },
  { id:4, name:"Galaxy Phone", category:"Electronics", price:24999, image:"phone.webp",
    desc:"Fast smartphone with a bright display and great camera.", brand:"Galaxy", rating:4.3, stock:"In Stock",
    features:["6.5 inch AMOLED display","128 GB storage","50 MP camera","5000 mAh battery"] },
  { id:5, name:"Gaming Laptop", category:"Electronics", price:64999, image:"https://dlcdnwebimgs.asus.com/files/media/9f23870f-d33f-4a7c-99d9-06f53bd0aee8/v1/images/m-ksp-c_1.webp",
    desc:"Powerful laptop built for gaming and heavy work.", brand:"ASUS", rating:4.6, stock:"Few Left",
    features:["16 GB RAM","512 GB SSD","Dedicated graphics card","144 Hz display"] },
  { id:6, name:"Wireless Earbuds", category:"Electronics", price:2499, image:"61Lo3F0tRIL.jpg",
    desc:"True wireless earbuds with clear sound and long battery.", brand:"AeroSound", rating:4.1, stock:"In Stock",
    features:["Bluetooth 5.3","20 hours battery with case","Touch controls","Noise reduction"] },
  { id:7, name:"Nike Sneakers", category:"Shoes", price:4999, image:"pic4.jpg",
    desc:"Stylish and comfortable sneakers for daily wear.", brand:"Nike", rating:4.5, stock:"In Stock",
    features:["Breathable fabric","Cushioned sole","Lace-up","Sizes 6 to 11"] },
  { id:8, name:"Running Shoes", category:"Shoes", price:3299, image:"https://c0.wallpaperflare.com/preview/186/124/897/red-and-white-air-jordan-1-shoe-on-concrete-floor.jpg",
    desc:"Lightweight running shoes with great grip.", brand:"AeroSport", rating:4.2, stock:"In Stock",
    features:["Lightweight","Anti-slip sole","Shock absorption","Sizes 6 to 11"] },
  { id:9, name:"Sports Shoes", category:"Shoes", price:2799, image:"https://wallpaperaccess.com/full/10809061.jpg",
    desc:"Durable sports shoes for gym and outdoor training.", brand:"AeroSport", rating:4.0, stock:"In Stock",
    features:["Strong stitching","Soft insole","Wide fit","Sizes 6 to 11"] },
  { id:10, name:"Luxury Watch", category:"Watches", price:5999, image:"watch.jpg",
    desc:"Elegant watch with a premium golden finish.", brand:"AeroTime", rating:4.4, stock:"In Stock",
    features:["Stainless steel case","Water resistant","Analog display","1 year warranty"] },
  { id:11, name:"Classic Watch", category:"Watches", price:3499, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed3kRE_utyDhe3RAQkXk169uSn10KFXBD1OExdFjtxRqqT_XeemLmOrsp&s=10",
    desc:"Timeless classic watch for formal and casual looks.", brand:"AeroTime", rating:4.3, stock:"In Stock",
    features:["Leather strap","Analog display","Scratch resistant glass","1 year warranty"] },
  { id:12, name:"Digital Watch", category:"Watches", price:2199, image:"Apple-Watch-Ultra-2-q82-w2560-h.webp",
    desc:"Smart digital watch with fitness tracking.", brand:"AeroTime", rating:4.1, stock:"In Stock",
    features:["Step and heart rate tracking","Touch display","Water resistant","7 days battery"] },
  { id:13, name:"Vitamin C Serum", category:"Skin Care", price:699, image:"vitamin_c_serum_1.webp",
    desc:"Brightening serum for glowing, even-toned skin.", brand:"GlowCare", rating:4.4, stock:"In Stock",
    features:["30 ml bottle","Suitable for all skin types","Use once daily","Dermatologist tested"] },
  { id:14, name:"Face Cleanser", category:"Skin Care", price:399, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKEFnFug9VlIt-AQ8WFc06FuKrKPn6_zfTqfsJAtjkw&s=10",
    desc:"Gentle daily face wash that removes dirt and oil.", brand:"GlowCare", rating:4.2, stock:"In Stock",
    features:["100 ml","Soap free","Suitable for daily use","Dermatologist tested"] },
  { id:15, name:"Moisturizing Cream", category:"Skin Care", price:549, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPH5XQX4PaC03Mm8Ug2wNKm1zjV5zVXV1l0XidNRrng&s",
    desc:"Rich cream that keeps skin soft all day.", brand:"GlowCare", rating:4.3, stock:"In Stock",
    features:["50 g jar","24 hour hydration","Non greasy","Dermatologist tested"] }
];

function getProduct(id) { return PRODUCTS.find(p => p.id === Number(id)); }
function formatPrice(n) { return "₹" + n.toLocaleString("en-IN"); }

// Small product card used on index.html and product.html
function productCard(p) {
  return `
  <div class="card">
    <a href="product-details.html?id=${p.id}" class="card-link">
      <img src="${p.image}" alt="${p.name}" onerror="this.onerror=null;this.src=PLACEHOLDER">
      <h4>${p.name}</h4>
    </a>
    <p class="type">${p.category}</p>
    <p class="price">${formatPrice(p.price)}</p>
    <button onclick="buyNow(${p.id})">Buy Now</button>
  </div>`;
}
