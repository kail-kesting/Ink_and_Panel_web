document.addEventListener("DOMContentLoaded", () => {
    
    // View Toggle Engine for Vault Structures
    // ==========================================
    const categoryView = document.getElementById("category-view");
    const searchInput = document.getElementById("comicSearch");
    
    const vaults = {
        "shonen-category-trigger": document.getElementById("shonen-vault-view"),
        "marvel-category-trigger": document.getElementById("marvel-vault-view"),
        "indie-category-trigger": document.getElementById("indie-vault-view"),
        "shojo-category-trigger": document.getElementById("shojo-vault-view")
    };

    // Open Chosen Vault & Hide Categories
    Object.keys(vaults).forEach(triggerId => {
        const triggerElement = document.getElementById(triggerId);
        const vaultElement = vaults[triggerId];
        
        if (triggerElement && vaultElement && categoryView) {
            triggerElement.addEventListener("click", () => {
                categoryView.style.display = "none";
                vaultElement.style.display = "flex";
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });

    // Back Buttons: Hide All Vaults & Show Categories
    document.querySelectorAll(".back-to-categories-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            // Clear search when going back to make sure everything returns to default
            if (searchInput) searchInput.value = "";
            
            Object.values(vaults).forEach(vault => {
                if (vault) vault.style.display = "none";
            });
            if (categoryView) categoryView.style.display = "flex";
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // ==========================================
    // 1. PRODUCT PAGE: LIVE SEARCH ENGINE & LIGHTBOX
    // ==========================================
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            const dynamicComicCards = document.querySelectorAll(".vault-block .product-card");
            // Find all the back buttons embedded in your vaults
            const vaultBackButtons = document.querySelectorAll(".back-to-categories-btn");

            if (query !== "") {
                // User is searching: Hide category triggers, show all vault wrapper boxes
                if (categoryView) categoryView.style.display = "none";
                Object.values(vaults).forEach(vault => {
                    if (vault) vault.style.display = "flex";
                });

                // HIDE the inner vault back buttons while a search is happening
                vaultBackButtons.forEach(btn => btn.style.display = "none");

            } else {
                // Search field cleared: Return back to standard Category landing grid
                if (categoryView) categoryView.style.display = "flex";
                Object.values(vaults).forEach(vault => {
                    if (vault) vault.style.display = "none";
                });

                // RESTORE back buttons to standard display when search is cleared
                vaultBackButtons.forEach(btn => btn.style.display = "");
            }

            // Filter individual comic items dynamically
            dynamicComicCards.forEach(card => {
                const textContent = card.innerText.toLowerCase();
                if (textContent.includes(query)) {
                    card.style.display = ""; // Standard display
                } else {
                    card.style.display = "none"; // Hide card
                }
            });
        });
    }

    // ==========================================
    // 2. ENQUIRY FORM LOGIC
    // ==========================================
    const enquiryForm = document.getElementById("enquiryForm");
    if (enquiryForm) {
        const bookCountInput = document.getElementById("bookCount");
        const conditionSelect = document.getElementById("comicCondition");
        const calculationResult = document.getElementById("calculationResult");

        const calculatePoints = () => {
            const count = parseInt(bookCountInput.value) || 0;
            let multiplier = 0;
            if (conditionSelect.value === "mint") multiplier = 50;
            else if (conditionSelect.value === "good") multiplier = 30;
            else if (conditionSelect.value === "fair") multiplier = 15;

            const totalPoints = count * multiplier;
            if (totalPoints > 0) {
                calculationResult.style.display = "block";
                calculationResult.innerHTML = `🔥 <strong>Estimated Reward:</strong> ${totalPoints} Ink Points!`;
            } else {
                calculationResult.style.display = "none";
            }
        };

        bookCountInput.addEventListener("input", calculatePoints);
        conditionSelect.addEventListener("change", calculatePoints);

        enquiryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            clearErrors();
            let isValid = true;
            if (document.getElementById("fullName").value.trim().length < 3) {
                showError("fullName", "Name must be at least 3 characters long.");
                isValid = false;
            }
            if (parseInt(bookCountInput.value) <= 0 || isNaN(parseInt(bookCountInput.value))) {
                showError("bookCount", "Please enter a valid number of comic books.");
                isValid = false;
            }
            if (conditionSelect.value === "") {
                showError("comicCondition", "Please select the condition tier.");
                isValid = false;
            }
            if (isValid) {
                processAsynchronousSubmit(enquiryForm, "🎉 Trade-In Enquiry Compiled Successfully!");
            }
        });
    }

    // ==========================================
    // 3. CONTACT FORM LOGIC
    // ==========================================
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            clearErrors();
            let isValid = true;
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^(\+27|0)[1-9][0-9]{8}$/;

            if (document.getElementById("contactName").value.trim().length < 3) {
                showError("contactName", "Name must be at least 3 characters long.");
                isValid = false;
            }
            if (!emailRegex.test(document.getElementById("contactEmail").value.trim())) {
                showError("contactEmail", "Please enter a valid electronic email address.");
                isValid = false;
            }
            if (!phoneRegex.test(document.getElementById("contactPhone").value.trim())) {
                showError("contactPhone", "Please enter a valid South African phone number.");
                isValid = false;
            }
            if (document.getElementById("messageText").value.trim().length < 10) {
                showError("messageText", "Your message must be at least 10 characters long.");
                isValid = false;
            }
            if (isValid) {
                processAsynchronousSubmit(contactForm, "✉️ Message Processed confirmation routing complete.");
            }
        });
    }
});

function showError(fieldId, message) {
    const inputElement = document.getElementById(fieldId);
    if (!inputElement) return;
    inputElement.classList.add("input-error");
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-bubble";
    errorDiv.innerText = message;
    inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
}

function clearErrors() {
    document.querySelectorAll(".error-bubble").forEach(err => err.remove());
    document.querySelectorAll(".input-error").forEach(input => input.classList.remove("input-error"));
}

function processAsynchronousSubmit(form, successMessage) {
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerText;
    submitBtn.disabled = true;
    submitBtn.innerText = "Processing Transmit...";
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
        form.innerHTML = `
            <div class="form-success-card">
                <h3>Compilation Complete!</h3>
                <p>${successMessage}</p>
                <button onclick="window.location.reload();" class="accent-btn" style="margin-top:15px; width:100%;">Submit Another Form</button>
            </div>
        `;
    }, 1500);
}

// ==========================================
// 4. INTERACTIVE LEAFLET MAP INJECTION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const mapElement = document.getElementById("map");
    
    if (mapElement) {
        const braamCoords = [-26.1929, 28.0373]; 
        const map = L.map('map').setView(braamCoords, 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.marker(braamCoords).addTo(map)
            .bindPopup(`
                <div style="font-family: sans-serif; font-weight: bold; text-align: center;">
                    💥 Ink & Panel HQ 💥<br>
                    <span style="font-weight: normal; font-size: 0.85rem;">Drop by our Braamfontein hub!</span>
                </div>
            `)
            .openPopup();
    }
});