// Make the LOGO text clickable to refresh and go back to index.html
document.addEventListener("DOMContentLoaded", function () {
    const logoText = document.getElementById("logo-text");
    if (logoText) {
        logoText.style.cursor = "pointer";
        logoText.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const logoVideo = document.getElementById("logo-video");

  // Ensure loop is completely disabled
  logoVideo.loop = false;
  logoVideo.removeAttribute("loop");

  // When the video ends, force it to stop and reset
  logoVideo.addEventListener("ended", function () {
    logoVideo.pause(); // Stop playback
    logoVideo.currentTime = 0; // Reset to the first frame
    logoVideo.removeAttribute("autoplay"); // Prevent auto-restarting
  });
});
//Navigation menu toggle functionality
function toggleMenu() {
  const menu = document.querySelector(".nav-links");
  menu.classList.toggle("show");
}


// Search bar functionality
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const suggestionsBox = document.getElementById("suggestions");
    const searchButton = document.getElementById("search-icon");
    const products = document.querySelectorAll(".product");

    const productList = [
        { name: "Laya (Coming Soon)", img: "images/COMING SOON.JPG"},
        
        { name: "Giorgio Armani Acqua Di Giò", img: "MEN/AQUA 1.jpg" },
        { name: "Chanel Bleu de Chanel", img: "MEN/BLEU 2.jpg" },
        { name: "Creed Aventus", img: "MEN/CREED 1.webp" },
        { name: "Christian Dior Sauvage", img: "MEN/DIOR 2.jpg" },
        { name: "Versace Eros", img: "MEN/EROS 2.webp" },
        { name: "Versace Eros Flame", img: "MEN/FLAME 1.webp" },
        { name: "Lacoste L.12.12 Noir Black", img: "MEN/LACOSTE 2.jpg" },
        { name: "Jean Paul Gaultier Ultra Mâle", img: "MEN/MALE 1.webp" },

        { name: "La Vie Est Belle by Lancome", img: "WOMEN/BELLE 1.jpg" },
        { name: "Victoria's Secret Bombshell", img: "WOMEN/BOMB 1.webp" },
        { name: "CHANEL No 5 Paris", img: "WOMEN/CHAN 2.jpg" },
        { name: "Davidoff Cool Water Reborn", img: "WOMEN/COOL 2.avif" },
        { name: "Calvin Klein Eternity", img: "WOMEN/ETERNITY 2.jpg" },
        { name: "Christian Dior J'adore", img: "WOMEN/JADORE 1.jpg" },
        { name: "Jo Malone Peony & Blush Suede", img: "WOMEN/MALONE 2.webp" },
        { name: "GUERLAIN Shalimar", img: "WOMEN/SHAL 1.webp" },

        { name: "Gucci Bamboo", img: "UNISEX/BAMB 2.jpg" },
        { name: "Yves Saint Laurent Black Opium", img: "UNISEX/BLACK 1.jpg" },
        { name: "Gucci Intense Oud", img: "UNISEX/GUCCI 2.jpg" },
        { name: "Ralph Lauren Polo Blue", img: "UNISEX/POLO 1.jpg" },
        { name: "Tom Ford Black Orchid", img: "UNISEX/TOM 2.webp" },
        { name: "Chanel Bleu de Chanel", img: "MEN/BLEU 2.jpg" }
      ];

    // Show suggestions while typing
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        suggestionsBox.innerHTML = "";

        if (query) {
            const filtered = productList.filter(product => product.name.toLowerCase().includes(query));

            if (filtered.length > 0) {
                suggestionsBox.style.display = "block";

                filtered.forEach(product => {
                    const suggestion = document.createElement("div");
                    suggestion.classList.add("suggestion-item");
                    suggestion.innerHTML = `<img src="${product.img}" alt="${product.name}"><span>${product.name}</span>`;
                    
                    // Auto-fill and trigger search
                    suggestion.addEventListener("click", function () {
                        searchInput.value = product.name;
                        suggestionsBox.style.display = "none";
                        searchButton.click(); // Auto-trigger search
                    });

                    suggestionsBox.appendChild(suggestion);
                });
            } else {
                suggestionsBox.style.display = "none";
            }
        } else {
            suggestionsBox.style.display = "none";
        }
    });

    // Close suggestions when clicking outside the search box
    document.addEventListener("click", function (event) {
        if (!searchInput.contains(event.target) && !suggestionsBox.contains(event.target)) {
            suggestionsBox.style.display = "none";
        }
    });

    // Search functionality
    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        let found = false;

        if (query) {
            products.forEach((product) => {
                const productName = product.querySelector("h3").innerText.toLowerCase();

                if (productName.includes(query)) {
                    product.scrollIntoView({ behavior: "smooth", block: "center" });
                    product.style.border = "2px solid #FFD700";
                    found = true;
                } else {
                    product.style.border = "none";
                }
            });

            suggestionsBox.style.display = "none"; // Hide suggestions after search

            if (!found) {
                alert("No matching products found.");
            }
        } else {
            alert("Please enter a search term.");
        }
    });
});


// Toggle dropdown visibility
function toggleDropdown() {
    const dropdown = document.getElementById("categoryDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetID = this.getAttribute("href");
        const targetElement = document.querySelector(targetID);
        const navbarHeight = document.querySelector(".navbar").offsetHeight;

        // Adjust scroll position without modifying layout
        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight - 10, // Fine-tune this value
            behavior: "smooth"
        });
    });
});


// Show suggestions & scroll to section
function showSuggestions(categoryId, event) {
    event.preventDefault(); // Prevent page from jumping to the top

    const suggestionsContainer = document.getElementById("suggestions-container");
    let content = "";

    switch (categoryId) {
        case "laya-perfumes":
            content = "<p><strong>Suggested Laya Perfumes:</strong> Mystic Bloom, Amber Nights, Ocean Spirit</p>";
            break;
        case "mens-perfumes":
            content = "<p><strong>Suggested Men's Perfumes:</strong> Giorgio Armani Acqua Di Giò, Chanel Bleu de Chanel, Creed Aventus</p>";
            break;
        case "womens-perfumes":
            content = "<p><strong>Suggested Women's Perfumes:</strong> La Vie Est Belle, Victoria's Secret Bombshell, CHANEL No 5</p>";
            break;
        case "unisex-perfumes":
            content = "<p><strong>Suggested Unisex Perfumes:</strong> Gucci Bamboo, Yves Saint Laurent Black Opium, Tom Ford Black Orchid</p>";
            break;
        default:
            content = "<p><strong>No suggestions available.</strong></p>";
    }

    suggestionsContainer.innerHTML = content;
    suggestionsContainer.style.display = "block";

    // **Smooth scroll to the selected section**
    const section = document.getElementById(categoryId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // **Close dropdown properly**
    setTimeout(() => {
        document.getElementById("categoryDropdown").style.display = "none";
    }, 300);
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("categoryDropdown");
    const productLink = document.getElementById("productLink");

    if (!dropdown.contains(event.target) && event.target !== productLink) {
        dropdown.style.display = "none";
    }
});


//Promotion slider functionality
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }

    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    showSlide(currentSlide); // Initialize first slide

    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      }, 8000); // Change every 8 seconds

  });



  // Cart functionality
let cart = [];

function scrollSlider(sliderId, direction) {
        const slider = document.getElementById(`${sliderId}-slider`);
        const scrollAmount = 1200; // Distance to scroll

        if (slider) {
            slider.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        } else {
            console.error(`Slider with ID '${sliderId}-slider' not found.`);
        }
};

function addToCart(name, price, imageSrc) {
    const existing = cart.find((item) => item.name === name);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ name, price, qty: 1, image: imageSrc });
    }
    alert(`${name} added to cart`);
    updateCartList();
}

function updateCartList() {
    const list = document.getElementById("cartList");
    const totalPriceEl = document.getElementById("totalPrice");
    list.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");

        // Product Image
        const img = document.createElement("img");

        // Create item text
        const itemText = document.createElement("span");
        itemText.textContent = `${item.name} (x${item.qty}) - ₱${item.price * item.qty}`;

        // Quantity Buttons
        const decreaseBtn = document.createElement("button");
        decreaseBtn.textContent = "−";
        decreaseBtn.classList.add("qty-btn");
        decreaseBtn.onclick = () => changeQuantity(index, -1);

        const increaseBtn = document.createElement("button");
        increaseBtn.textContent = "+";
        increaseBtn.classList.add("qty-btn");
        increaseBtn.onclick = () => changeQuantity(index, 1);

        // Remove Button (Trash Bin Icon)
        const removeBtn = document.createElement("button");
        removeBtn.innerHTML = "🗑️";
        removeBtn.classList.add("trash-btn");
        removeBtn.onclick = () => removeFromCart(index);

        // Append elements
        li.appendChild(img);
        li.appendChild(itemText);
        li.appendChild(decreaseBtn);
        li.appendChild(increaseBtn);
        li.appendChild(removeBtn);
        list.appendChild(li);

        total += item.price * item.qty;
    });

    totalPriceEl.textContent = `Total: ₱${total}`;
}


function changeQuantity(index, amount) {
    if (cart[index].qty + amount > 0) {
        cart[index].qty += amount;
    } else {
        cart.splice(index, 1);
    }
    updateCartList();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartList();
}

function toggleCartPanel() {
    const cartPanel = document.querySelector(".cart-panel");
    const overlay = document.getElementById("overlay");

    if (cartPanel.classList.contains("active")) {
        cartPanel.classList.add("closing");
        overlay.style.display = "none"; // Hide overlay
        setTimeout(() => {
            cartPanel.classList.remove("active", "closing");
        }, 500);
    } else {
        cartPanel.classList.add("active");
        overlay.style.display = "block"; // Show overlay
    }

    updateCartList();
}

function placeOrder(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    if (!cart.length) {
        alert("Your cart is empty!");
        return;
    }

    alert(`Thank you ${name}! Your order has been placed.`);
    cart = [];
    document.querySelector("form").reset();
    toggleCartPanel();
}



// Close when clicking outside
window.addEventListener("click", function (event) {
    const panel = document.getElementById("cartPanel");
    const button = document.querySelector(".buy-now-button");

    // Exclude quantity buttons and trash icon
    if (
        panel.classList.contains("active") &&
        !panel.contains(event.target) &&
        event.target !== button &&
        !event.target.classList.contains("qty-btn") &&
        !event.target.classList.contains("trash-btn")
    ) {
        toggleCartPanel();
    }
});


