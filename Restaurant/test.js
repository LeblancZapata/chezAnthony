// ---------- Mobile menu toggle ----------
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenuButton.classList.toggle("menu-open");
  mobileMenu.classList.toggle("hidden");
});

// ---------- Smooth scrolling ----------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Close mobile menu if open
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenuButton.classList.remove("menu-open");
      mobileMenu.classList.add("hidden");
    }

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// ---------- Back to top button ----------
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible");
    backToTopButton.classList.add("opacity-100", "visible");
  } else {
    backToTopButton.classList.remove("opacity-100", "visible");
    backToTopButton.classList.add("opacity-0", "invisible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- Menu data (prices are in FCFA) ----------
// Conversion used: 1 USD = 600 FCFA (rounded)
const menuItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description:
      "Juicy beef patty with melted cheese, lettuce, tomato, onion, pickles and our special sauce.",
    price: 4194, // FCFA
    category: "burgers",
    image:
      "https://images.unsplash.com/photo-1692737347720-90de4c1862d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: 2,
    name: "Bacon Avocado Burger",
    description:
      "Beef patty with crispy bacon, fresh avocado, Swiss cheese and garlic aioli.",
    price: 5394,
    category: "burgers",
    image:
      "https://media.istockphoto.com/id/178974074/photo/bison-burger.jpg?s=612x612&w=is&k=20&c=eJbz5-ZWWlfMYC_pTqUekiEKi53kOyi8Ue5nUQ0k_So=",
  },
  {
    id: 3,
    name: "Spicy Jalapeño Burger",
    description:
      "Beef patty with pepper jack, jalapeños, spicy mayo, lettuce, and tomato.",
    price: 4794,
    category: "burgers",
    image:
      "https://images.unsplash.com/photo-1690650262031-b01b6e172374?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: 4,
    name: "Portobello Mushroom Burger",
    description:
      "Grilled portobello with roasted peppers, goat cheese, arugula and balsamic glaze.",
    price: 4494,
    category: "burgers",
    image:
      "https://media.istockphoto.com/id/157649242/photo/portabello-mushroom-burger-with-spinach.jpg?s=612x612&w=is&k=20&c=eBz6qaCvjRHmg82krMp1hiiUUtxhyPgyuVPzhg9HugY=",
  },
  {
    id: 5,
    name: "French Fries",
    description:
      "Crispy golden fries with sea salt. Add cheese or chili for extra.",
    price: 2094,
    category: "sides",
    image:
      "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
  },
  {
    id: 6,
    name: "Onion Rings",
    description: "Crispy battered onion rings served with spicy dip.",
    price: 2694,
    category: "sides",
    image:
      "https://plus.unsplash.com/premium_photo-1683121324272-90f4b4084ac9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
  },
  {
    id: 7,
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries with a hint of cinnamon sugar.",
    price: 2994,
    category: "sides",
    image:
      "https://media.istockphoto.com/id/618188714/photo/basket-of-sweet-potato-french-fries.jpg?s=612x612&w=is&k=20&c=WydpkoECffDegX-sSDHFWVy_zDOCbp4zlo8DX7mfwUM=",
  },
  {
    id: 8,
    name: "Soda",
    description: "Choice of Coke, Sprite, or other local soft drinks.",
    price: 1494,
    category: "drinks",
    image:
      "https://images.unsplash.com/photo-1605548230624-8d2d0419c517?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: 9,
    name: "Milkshake",
    description: "Creamy milkshake in vanilla, chocolate or strawberry.",
    price: 3294,
    category: "drinks",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
  },
  {
    id: 10,
    name: "Local Craft Beer",
    description: "Selection of local beers — ask for today's options.",
    price: 3894,
    category: "drinks",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: 11,
    name: "Chocolate Brownie",
    description: "Warm brownie with vanilla ice cream and chocolate sauce.",
    price: 4194,
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1672867458764-2a04080005fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
  },
  {
    id: 12,
    name: "Apple Pie",
    description: "Homemade apple pie with cinnamon and vanilla ice cream.",
    price: 3594,
    category: "desserts",
    image:
      "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
  },
];

// ---------- Render menu ----------
const menuContainer = document.getElementById("menu-items-container");
const categoryButtons = document.querySelectorAll(".menu-category-btn");

function formatPrice(fcfa) {
  // Use a readable thousands separator (space)
  return fcfa.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " FCFA";
}

function renderMenuItems(category = "all") {
  menuContainer.innerHTML = "";

  const filteredItems =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  filteredItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className =
      "menu-item bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 relative";
    menuItem.innerHTML = `
      <div class="relative h-48 overflow-hidden">
        <img src="${item.image}" alt="${
      item.name
    }" class="w-full h-full object-cover">
        <div class="menu-item-overlay absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0">
          <span class="text-white font-bold text-lg">${formatPrice(
            item.price
          )}</span>
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">${item.name}</h3>
        <p class="text-gray-600">${item.description}</p>
      </div>
    `;
    menuContainer.appendChild(menuItem);
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) =>
      btn.classList.remove("active", "bg-amber-500", "text-white")
    );
    categoryButtons.forEach((btn) =>
      btn.classList.add("bg-white", "hover:bg-amber-100", "text-gray-800")
    );

    button.classList.add("active", "bg-amber-500", "text-white");
    button.classList.remove("bg-white", "hover:bg-amber-100", "text-gray-800");

    const category = button.getAttribute("data-category");
    renderMenuItems(category);
  });
});

// Initial render
renderMenuItems();

// ---------- Contact form (client-side only) ----------
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value || "Guest";
  // No backend configured — show a friendly message
  alert(
    `Merci ${name}! Thank you — your message has been received. We'll contact you soon.`
  );

  contactForm.reset();
});
