# VYTT App — Exact Drop-in Updates
Every file here is a direct replacement for a file already in your project.
No new folders. No new dependencies. Just copy each file to its path.

## Step 1 — Backend files (run these first)

| File in this folder                          | Copy to in your project                        |
|----------------------------------------------|------------------------------------------------|
| backend/models/menuModel.js                  | vytt/backend/models/menuModel.js               |
| backend/data/menuData.js                     | vytt/backend/data/menuData.js                  |

Then re-seed the database:
```
cd vytt/backend
npm run data:import
```

---

## Step 2 — Frontend files

| File in this folder                                   | Copy to in your project                                      |
|-------------------------------------------------------|--------------------------------------------------------------|
| frontend/src/components/Navbar.css                    | vytt/frontend/src/components/Navbar.css                      |
| frontend/src/components/MenuCard.js                   | vytt/frontend/src/components/MenuCard.js                     |
| frontend/src/pages/MenuPage.js                        | vytt/frontend/src/pages/MenuPage.js                          |
| frontend/src/pages/MenuPage.css                       | vytt/frontend/src/pages/MenuPage.css                         |
| frontend/src/pages/HomePage.css                       | vytt/frontend/src/pages/HomePage.css                         |
| frontend/src/pages/BookingPage.js                     | vytt/frontend/src/pages/BookingPage.js                       |
| frontend/src/pages/BookingPage.css                    | vytt/frontend/src/pages/BookingPage.css                      |
| frontend/src/pages/ContactPage.css                    | vytt/frontend/src/pages/ContactPage.css                      |

---

## Files NOT changed (leave as-is)
- vytt/frontend/src/App.js          ✅ unchanged
- vytt/frontend/src/api.js          ✅ unchanged
- vytt/frontend/src/context/CartContext.js  ✅ unchanged
- vytt/frontend/src/index.css       ✅ unchanged
- vytt/frontend/src/components/Footer.js   ✅ unchanged
- vytt/backend/server.js            ✅ unchanged
- vytt/backend/routes/*.js          ✅ unchanged
- vytt/backend/models/orderModel.js ✅ unchanged
- vytt/backend/models/bookingModel.js ✅ unchanged
- vytt/backend/data/seeder.js       ✅ unchanged

---

## What changed and why

### Navbar.css
- Background changed from `var(--dark)` (black) to forest green gradient
  `#0d4f29 → #166016 → #1a6b3c`
- Logo "V" changed from red to `#7de3a0` (mint green)
- Cart badge changed from green to mint `#7de3a0` with dark green text
- Active/hover link uses green glow instead of red glow
- Mobile dropdown uses same green

### menuModel.js
- Added all 14 real Vittony Holdings categories to the `enum` array
- Old 8 categories kept for backward compatibility with existing DB records

### menuData.js
- Replaced old 37 generic items with 91 real items transcribed from
  the physical Vittony Holdings menu (both images)
- All items use the new real category names
- `isFeatured: true` set on key signature items for the home page

### MenuCard.js
- Added `categoryEmojis` entries for all 14 new categories
- Handles `price === 0` (Tribes Treat) showing "Price varies" instead of "$0.00"

### MenuPage.js
- `CATEGORIES` and `CATEGORY_ICONS` updated to all 16 real categories
- `STATIC_MENU` fallback replaced with all 91 real items
- **Carousel/slideshow added** — cycles featured items every 10 seconds
  with manual prev/next arrows and dot indicators
- Carousel resets timer on manual navigation

### MenuPage.css
- Hero changed to green gradient (matches Navbar)
- New `.menu-page__carousel` styles — full-width slideshow
- Category tab `.active` state now green instead of red

### HomePage.css
- `.hero__title--accent` changed from `var(--red)` to `#7de3a0` (mint)
- `specials__eyebrow` / `featured__eyebrow` changed to green
- Services section background changed from `var(--dark)` to green gradient
- Contact strip changed from red to green gradient
- `hero__scroll-line` uses green tint
- `.services-preview__card` hover uses green border instead of red

### BookingPage.js + BookingPage.css
- Hero background changed to green
- Three new large animated venue cards added above the form
  (Conference Room, Outdoor Catering, Table Reservation)
- Each card slides up with a staggered animation on page load
- Each card has a 📷 "Add photo" button to upload a custom image
- Clicking a card auto-selects the matching event type in the form
  and scrolls to the form
- Green theme throughout

### ContactPage.css
- Hero background changed to green gradient
- `.contact-page__hero-bg` div supports an embossed background image
- Contact cards get green left-border on hover
- Call/WhatsApp/map buttons use green gradients
