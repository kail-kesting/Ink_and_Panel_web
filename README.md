# Ink & Panel Comic Exchange - Web Platform

Welcome to the official repository for the **Ink & Panel Comic Exchange** web platform, locally rooted in Braamfontein, Johannesburg. This project serves as a digital bridge between student sequential artists and structured comic book collectors, allowing users to browse indie collections, explore trade-in systems, and submit custom inventory enquiries.

---

## 🗂️ Project Structure

```text
InkAndPanel_Project/
│
├── css/
│   └── style.css            # Centralized master external stylesheet
├── images/
│   ├── ink&panel-logo.png   # Main vector branding asset
│   └── (Product thumbnails & local storefront imagery)
├── home page.html           # Core marketplace splash entry point
├── about page.html          # Local artist history & brand narrative
├── product page.html        # Multi-genre comic portfolio listing
├── enquiry page.html        # Interactive trade-in estimation tool
├── contact page.html        # Geolocation & physical contact interface
└── README.md                # Project documentation matrix
```


## 🛠️ Part 3 Implementation & Feature Matrix
The third phase of development introduced advanced Client-Side JavaScript validation engines, local search optimizations, custom UI components, dynamic text bounding containment patches, and semantic Search Engine Optimization (SEO).

### 1. Feature Specifications

* **Semantic SEO Optimization:** Integrated unique localized meta title frameworks, targeted comic storefront descriptors, and keyword mappings across all five core layout interfaces, accompanied by structural `robots.txt` routing maps and an automated XML sitemap engine.
* **Form Control & Interactive Validation Engines:**
    * **Enquiry Interface:** Features interactive event listeners monitoring incoming integers to compute live reward point estimations (`Mint Tier = 50pts`, `Good Tier = 30pts`, `Fair Tier = 15pts`) in real time.
    * **Contact Interface:** Enforces strict client-side verification metrics using specialized RegEx scripts validating electronic mail structures and localized South African mobile formats (`/^(\+27|0)[1-9][0-9]{8}$/`). Custom styled HTML DOM `.error-bubble` flags provide contextual input field warnings.
* **Advanced JS Interactivity Engines:**
    * **Interactive Geolocation Leaflet.js Mapping:** Injected an asynchronous third-party Leaflet API script rendering customized OpenStreetMap tile vectors centered explicitly over the Braamfontein storefront coordinates `[-26.1929, 28.0373]`.
    * **Responsive Spotlight Lightbox:** Engineered an event-driven modal popup layer capturing click targets on high-fidelity graphic panels to display zoomed focus-frames dynamically.
    * **Live Search & Filter Engine:** Built an interactive input filtration script matching user search terms against the text nodes of hidden category blocks to isolate relevant matching products instantly.

---

### 2. Post-Development Maintenance Log (Refinement Record)

During live iteration testing, layout bottlenecks and structural bugs were flagged and successfully resolved via the following targeted script updates:

| Component Target | Defect / Issue Identified | Optimization & Fix Applied | Resolution Result |
| :--- | :--- | :--- | :--- |
| **Search Engine Filtering Loop** | Active search queries caused the `.back-to-categories-btn` elements to duplicate down the page dynamically relative to category depth (e.g., repeating 4 times on "Shojo"). | Updated the `input` event listener in `script.js` to perform a `querySelectorAll` sweep. The back buttons are systematically configured to `display: none` while a query string exists and restored to standard rendering once cleared. | A single, clean, clutter-free grid layout during active live search filtering. |
| **Comic Layout Typography Containment** | Voluminous card description strings (specifically on the *Blue Spring Ride* item entry) overflowed past fixed card dimensions, causing bounding text layers to break into structural sections. | Replaced restrictive rigid block element heights with a flexible structural layout framework using `min-height: 160px;` and `flex-grow: 1` properties inside `style.css`. | Seamless card layout uniformity where content panels gracefully scale collectively to safely hold typography. |

## 📚 Academic References

* Leaflet (2026) *Leaflet - an open-source JavaScript library for mobile-friendly interactive maps*. Available at: https://leafletjs.com/ (Accessed: 19 June 2026).
* Mozilla Developer Network (MDN) Web Docs (2026) *Regular expressions*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions (Accessed: 19 June 2026).
* Mozilla Developer Network (MDN) Web Docs (2026) *Using files from web applications (Lightbox architecture)*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications (Accessed: 19 June 2026).
* OpenStreetMap Foundation (OSMF) (2026) *OpenStreetMap tile vectors framework*. Available at: https://www.openstreetmap.org/ (Accessed: 19 June 2026).