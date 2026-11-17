// ===== auth.js : DEMO login system using localStorage (NOT truly secure) =====
const USERS_KEY = "aeroUsers", SESSION_KEY = "aeroCurrentUser",
      REDIRECT_KEY = "aeroAfterLogin", ORDERS_KEY = "aeroOrders";

function readStore(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch (e) { return fallback; }
}

function currentUser() { return readStore(SESSION_KEY, null); }

function registerUser(name, email, password) {
  const users = readStore(USERS_KEY, []);
  email = email.trim().toLowerCase();
  if (users.some(u => u.email === email)) return { ok:false, msg:"This email is already registered." };
  users.push({ name:name.trim(), email, password });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return { ok:true, msg:"Account created! You can login now." };
}

function loginUser(email, password) {
  email = email.trim().toLowerCase();
  const user = readStore(USERS_KEY, []).find(u => u.email === email);
  if (!user) return { ok:false, msg:"No account found with this email." };
  if (user.password !== password) return { ok:false, msg:"Wrong password." };
  localStorage.setItem(SESSION_KEY, JSON.stringify({ name:user.name, email:user.email }));
  return { ok:true, msg:"Login Successful!" };
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = "index.html";
}

// Go where the user wanted before login (or home)
function afterLoginRedirect() {
  const next = sessionStorage.getItem(REDIRECT_KEY);
  sessionStorage.removeItem(REDIRECT_KEY);
  window.location.href = next || "index.html";
}

// Returns true if logged in; otherwise sends user to login page and remembers the page
function requireLogin(returnTo) {
  if (currentUser()) return true;
  sessionStorage.setItem(REDIRECT_KEY, returnTo || location.pathname.split("/").pop() + location.search);
  window.location.href = "login.html";
  return false;
}

// Green/red popup at top of page (uses .success-msg style from style.css)
function showToast(text, isError) {
  let t = document.getElementById("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "success-msg"; document.body.appendChild(t); }
  t.textContent = text;
  t.style.background = isError ? "#dc3545" : "#28a745";
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

// BUY: needs login, then saves the order. Returns the order (or null if redirected)
function buyNow(id, qty) {
  qty = qty || 1;
  if (!requireLogin("product-details.html?id=" + id)) return null;
  const p = getProduct(id);
  const order = { orderId:"AS" + Date.now().toString().slice(-6), user:currentUser().email,
                  product:p.name, qty, total:p.price * qty, date:new Date().toLocaleString() };
  const orders = readStore(ORDERS_KEY, []);
  orders.push(order);
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  showToast("✔ Product Bought Successfully!");
  return order;
}

// Nav bar: Login  ->  "Hi, Name | Logout"
document.addEventListener("DOMContentLoaded", function () {
  const link = document.getElementById("authLink");
  const user = currentUser();
  if (!link || !user) return;
  link.textContent = "Hi, " + user.name.split(" ")[0];
  link.href = "#";
  const out = document.createElement("a");
  out.href = "#"; out.textContent = "Logout";
  out.onclick = function (e) { e.preventDefault(); logout(); };
  link.after(out);
});
