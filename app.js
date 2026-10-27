const dishes = [
  {
    id: "chicken-fry",
    name: "Karempudi chicken fry",
    category: "nonveg",
    categoryLabel: "From the kitchen",
    description: "Village-style chicken, slow fried with curry leaves and house spices.",
    price: 240,
    detail: "A little spicy · Serves one",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=760&q=80",
    alt: "Spiced chicken curry with fresh herbs",
  },
  {
    id: "gongura-chicken",
    name: "Gongura chicken",
    category: "nonveg",
    categoryLabel: "From the kitchen",
    description: "Tender chicken with tangy gongura leaves and a proper Andhra kick.",
    price: 260,
    detail: "Andhra favourite · Serves one",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=760&q=80",
    alt: "A bowl of richly seasoned curry",
  },
  {
    id: "chicken-lollipop",
    name: "Chicken lollipop",
    category: "nonveg",
    categoryLabel: "Crowd favourite",
    description: "Crispy, spicy chicken lollipops tossed with garlic and chillies.",
    price: 220,
    detail: "Hot & crispy · Six pieces",
    image:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=760&q=80",
    alt: "Crispy spicy chicken pieces served as an appetizer",
  },
  {
    id: "chicken-wings",
    name: "Andhra chicken wings",
    category: "nonveg",
    categoryLabel: "Crowd favourite",
    description: "Juicy wings coated in a bold Andhra chilli and curry-leaf masala.",
    price: 240,
    detail: "Spicy & shareable · Six pieces",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=760&q=80",
    alt: "A plate of glazed chicken wings",
  },
  {
    id: "chicken-biryani",
    name: "Chicken dum biryani",
    category: "biryani",
    categoryLabel: "House special",
    description: "Fragrant basmati rice and spiced chicken, slow cooked dum-style.",
    price: 280,
    detail: "Served with raita · Serves one",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=760&q=80",
    alt: "A fragrant plate of chicken biryani with rice and spices",
  },
  {
    id: "village-meals",
    name: "Village veg meals",
    category: "veg",
    categoryLabel: "Veg favourite",
    description: "Rice, dal, seasonal curry, pickle and a little something sweet.",
    price: 180,
    detail: "A wholesome plate · Serves one",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=760&q=80",
    alt: "A colorful traditional Indian vegetarian meal",
  },
  {
    id: "paneer-curry",
    name: "Paneer butter masala",
    category: "veg",
    categoryLabel: "Veg favourite",
    description: "Soft paneer in a creamy tomato gravy with a touch of warmth.",
    price: 220,
    detail: "Mild & creamy · Serves one",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=760&q=80",
    alt: "Paneer curry finished with cream and herbs",
  },
  {
    id: "ghee-idli",
    name: "Ghee karam idli",
    category: "snacks",
    categoryLabel: "Little bite",
    description: "Soft idlis, warm ghee and our favourite house-made karam podi.",
    price: 100,
    detail: "Four little idlis · Veg",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=760&q=80",
    alt: "A traditional South Indian snack served fresh",
  },
  {
    id: "gulab-jamun",
    name: "Gulab jamun",
    category: "sweets",
    categoryLabel: "Something sweet",
    description: "Soft, golden milk dumplings soaked in fragrant sugar syrup.",
    price: 90,
    detail: "Two pieces · Vegetarian",
    image:
      "https://images.unsplash.com/photo-1666190092159-2f6d50a9bd7b?auto=format&fit=crop&w=760&q=80",
    alt: "Golden gulab jamun in sweet syrup",
  },
  {
    id: "double-ka-meetha",
    name: "Double ka meetha",
    category: "sweets",
    categoryLabel: "Something sweet",
    description: "A Hyderabad-style bread pudding with cardamom, nuts and saffron.",
    price: 120,
    detail: "Served warm · Vegetarian",
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=760&q=80",
    alt: "A traditional Indian dessert topped with nuts",
  },
  {
    id: "filter-coffee",
    name: "Filter coffee",
    category: "drinks",
    categoryLabel: "Something to sip",
    description: "A strong, smooth cup of freshly brewed South Indian coffee.",
    price: 50,
    detail: "Freshly brewed · Hot",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=760&q=80",
    alt: "A freshly brewed cup of coffee",
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

const menuGrid = document.querySelector("#menu-grid");
const emptyMenu = document.querySelector("#empty-menu");
const searchInput = document.querySelector("#menu-search");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const cartDialog = document.querySelector("#cart-dialog");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartFooter = document.querySelector("#cart-footer");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const orderConfirmation = document.querySelector("#order-confirmation");
const customerForm = document.querySelector("#customer-form");
const toast = document.querySelector("#toast");
const navToggle = document.querySelector("#nav-toggle");
const mainNav = document.querySelector("#main-nav");
const accountDialog = document.querySelector("#account-dialog");
const accountTrigger = document.querySelector("#account-trigger");
const accountLabel = document.querySelector("#account-label");
const authView = document.querySelector("#auth-view");
const profileView = document.querySelector("#profile-view");
const authForm = document.querySelector("#auth-form");
const authMessage = document.querySelector("#auth-message");
const profileForm = document.querySelector("#profile-form");
const profileMessage = document.querySelector("#profile-message");
const accountTitle = document.querySelector("#account-title");
const authDescription = document.querySelector("#auth-description");
const authSubmit = document.querySelector("#auth-submit");
const authPassword = document.querySelector("#auth-password");
const accountSwitch = document.querySelector("#account-switch");
const profileSaved = document.querySelector("#profile-saved");

const cart = new Map();
let activeCategory = "all";
let toastTimer;
let isRegistering = false;
let activeUsername = localStorage.getItem("karempudi-active-user");

const ACCOUNT_STORAGE_KEY = "karempudi-accounts";

function getAccounts() {
  const storedAccounts = localStorage.getItem(ACCOUNT_STORAGE_KEY);
  const accounts = storedAccounts ? JSON.parse(storedAccounts) : {};
  if (!accounts || typeof accounts !== "object" || Array.isArray(accounts)) {
    throw new Error("Saved account data is not valid.");
  }
  return accounts;
}

function saveAccounts(accounts) {
  localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(accounts));
}

function getActiveAccount() {
  if (!activeUsername) return null;
  return getAccounts()[activeUsername.toLowerCase()] ?? null;
}

async function hashPassword(password, salt) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const hash = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt: encoder.encode(salt), iterations: 120000 },
    key,
    256,
  );
  return [...new Uint8Array(hash)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function showAccountMessage(element, message) {
  element.textContent = message;
  element.hidden = false;
}

function updateAccountButton() {
  try {
    const account = getActiveAccount();
    if (account) {
      accountLabel.textContent = account.profile?.username || account.username;
      accountTrigger.setAttribute("aria-label", "Open your profile");
      return;
    }
  } catch (error) {
    console.error("Unable to load the saved Karempudi profile:", error);
  }
  activeUsername = null;
  accountLabel.textContent = "My account";
  accountTrigger.setAttribute("aria-label", "Open account");
}

function showAuthView() {
  authView.hidden = false;
  profileView.hidden = true;
  accountTitle.textContent = "Your account";
  authMessage.hidden = true;
  profileMessage.hidden = true;
  profileSaved.hidden = true;
}

function showProfileView(account) {
  authView.hidden = true;
  profileView.hidden = false;
  accountTitle.textContent = "Your profile";
  profileMessage.hidden = true;
  profileForm.elements.username.value = account.profile?.username || account.username;
  profileForm.elements.phone.value = account.profile?.phone || "";
  profileForm.elements.location.value = account.profile?.location || "";
  profileSaved.hidden = !account.profile?.phone;
}

function toggleAuthMode() {
  isRegistering = !isRegistering;
  authDescription.textContent = isRegistering
    ? "Create an account to set up your profile."
    : "Sign in to view your profile.";
  authSubmit.textContent = isRegistering ? "Create account" : "Log in";
  authPassword.autocomplete = isRegistering ? "new-password" : "current-password";
  accountSwitch.innerHTML = isRegistering
    ? 'Already have an account? <button type="button" id="switch-auth">Log in</button>'
    : 'New here? <button type="button" id="switch-auth">Create an account</button>';
  authMessage.hidden = true;
}

function renderMenu() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const visibleDishes = dishes.filter((dish) => {
    const matchesCategory =
      activeCategory === "all" || dish.category === activeCategory;
    const matchesSearch = `${dish.name} ${dish.description}`
      .toLowerCase()
      .includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  menuGrid.innerHTML = visibleDishes
    .map(
      (dish) => `
        <article class="food-card">
          <div class="food-image">
            <img src="${dish.image}" alt="${dish.alt}" loading="lazy" />
            <span class="food-tag">${dish.categoryLabel}</span>
          </div>
          <div class="food-content">
            <div class="food-title-row">
              <h3>${dish.name}</h3>
              <span class="food-price">${formatPrice(dish.price)}</span>
            </div>
            <p class="food-description">${dish.description}</p>
            <div class="food-card-footer">
              <span class="food-meta">${dish.detail}</span>
              <button class="add-button" type="button" data-add="${dish.id}" aria-label="Add ${dish.name} to your order">
                <span aria-hidden="true">+</span> Add
              </button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  emptyMenu.hidden = visibleDishes.length !== 0;
}

function renderCart() {
  const entries = [...cart.entries()];
  const itemCount = entries.reduce((total, [, quantity]) => total + quantity, 0);
  const subtotal = entries.reduce((total, [id, quantity]) => {
    const dish = dishes.find((item) => item.id === id);
    return total + dish.price * quantity;
  }, 0);

  cartCount.textContent = String(itemCount);
  cartEmpty.hidden = itemCount !== 0;
  cartFooter.hidden = itemCount === 0;
  orderConfirmation.hidden = true;

  cartItems.innerHTML = entries
    .map(([id, quantity]) => {
      const dish = dishes.find((item) => item.id === id);
      return `
        <article class="cart-row">
          <div>
            <h3>${dish.name}</h3>
            <p>${formatPrice(dish.price)} each · ${formatPrice(dish.price * quantity)}</p>
          </div>
          <div class="quantity-control" aria-label="${dish.name} quantity">
            <button type="button" data-remove="${id}" aria-label="Remove one ${dish.name}">−</button>
            <span>${quantity}</span>
            <button type="button" data-add="${id}" aria-label="Add one ${dish.name}">+</button>
          </div>
        </article>
      `;
    })
    .join("");
  cartTotal.textContent = formatPrice(subtotal);
}

function announceAdded(dish) {
  toast.textContent = `${dish.name} added to your order`;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    const dish = dishes.find((item) => item.id === addButton.dataset.add);
    cart.set(dish.id, (cart.get(dish.id) ?? 0) + 1);
    renderCart();
    announceAdded(dish);
    return;
  }

  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    const id = removeButton.dataset.remove;
    const quantity = cart.get(id);
    if (quantity === 1) {
      cart.delete(id);
    } else {
      cart.set(id, quantity - 1);
    }
    renderCart();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    filterButtons.forEach((filter) => {
      const isActive = filter === button;
      filter.classList.toggle("is-active", isActive);
      filter.setAttribute("aria-pressed", String(isActive));
    });
    renderMenu();
  });
});

searchInput.addEventListener("input", renderMenu);

navToggle.addEventListener("click", () => {
  const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isExpanded));
  navToggle.setAttribute(
    "aria-label",
    isExpanded ? "Open navigation" : "Close navigation",
  );
  mainNav.hidden = isExpanded;
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mainNav.hidden = true;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mainNav.hidden) {
    mainNav.hidden = true;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    navToggle.focus();
  }
});

document.querySelector("#cart-trigger").addEventListener("click", () => {
  cartDialog.showModal();
});

document.querySelector("#close-cart").addEventListener("click", () => {
  cartDialog.close();
});

accountTrigger.addEventListener("click", () => {
  try {
    const account = getActiveAccount();
    if (account) {
      showProfileView(account);
    } else {
      showAuthView();
    }
  } catch (error) {
    showAuthView();
    showAccountMessage(authMessage, "Unable to read saved account details. Please clear this site's stored data and try again.");
    console.error("Unable to open the Karempudi account:", error);
  }
  accountDialog.showModal();
});

document.querySelector("#close-account").addEventListener("click", () => {
  accountDialog.close();
});

accountSwitch.addEventListener("click", (event) => {
  if (event.target.closest("#switch-auth")) {
    toggleAuthMode();
  }
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  authMessage.hidden = true;
  const username = authForm.elements.username.value.trim();
  const password = authPassword.value;
  const usernameKey = username.toLowerCase();

  try {
    const accounts = getAccounts();
    if (isRegistering) {
      if (accounts[usernameKey]) {
        showAccountMessage(authMessage, "That username is already registered on this device.");
        return;
      }
      const salt = [...crypto.getRandomValues(new Uint8Array(16))]
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
      accounts[usernameKey] = {
        username,
        salt,
        passwordHash: await hashPassword(password, salt),
        profile: { username, phone: "", location: "" },
      };
      saveAccounts(accounts);
      activeUsername = usernameKey;
      localStorage.setItem("karempudi-active-user", activeUsername);
      updateAccountButton();
      showProfileView(accounts[usernameKey]);
    } else {
      const account = accounts[usernameKey];
      if (!account || (await hashPassword(password, account.salt)) !== account.passwordHash) {
        showAccountMessage(authMessage, "Username or password is incorrect.");
        return;
      }
      activeUsername = usernameKey;
      localStorage.setItem("karempudi-active-user", activeUsername);
      updateAccountButton();
      showProfileView(account);
    }
    authPassword.value = "";
  } catch (error) {
    showAccountMessage(authMessage, "We couldn't save or load your account. Please try again.");
    console.error("Karempudi account sign-in failed:", error);
  }
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileMessage.hidden = true;
  try {
    const accounts = getAccounts();
    const account = activeUsername
      ? accounts[activeUsername.toLowerCase()]
      : null;
    if (!account) {
      showAccountMessage(profileMessage, "Please log in again before saving your profile.");
      return;
    }
    account.profile = {
      username: profileForm.elements.username.value.trim(),
      phone: profileForm.elements.phone.value.trim(),
      location: profileForm.elements.location.value.trim(),
    };
    saveAccounts(accounts);
    profileSaved.hidden = false;
    updateAccountButton();
  } catch (error) {
    showAccountMessage(profileMessage, "We couldn't save your profile. Please try again.");
    console.error("Karempudi profile save failed:", error);
  }
});

document.querySelector("#logout-button").addEventListener("click", () => {
  try {
    localStorage.removeItem("karempudi-active-user");
    activeUsername = null;
    updateAccountButton();
    isRegistering = false;
    authDescription.textContent = "Sign in to view your profile.";
    authSubmit.textContent = "Log in";
    authPassword.autocomplete = "current-password";
    accountSwitch.innerHTML =
      'New here? <button type="button" id="switch-auth">Create an account</button>';
    showAuthView();
  } catch (error) {
    showAccountMessage(profileMessage, "We couldn't log out. Please try again.");
    console.error("Karempudi account logout failed:", error);
  }
});

document.querySelector("#browse-menu").addEventListener("click", () => {
  cartDialog.close();
});

customerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  orderConfirmation.hidden = false;
});

renderMenu();
renderCart();
updateAccountButton();
