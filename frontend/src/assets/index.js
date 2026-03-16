// frontend/src/assets/index.js
// ─────────────────────────────────────────────────────────────────────────
// HOW TO USE:
// 1. Put your image in frontend/src/assets/images/
// 2. Uncomment its import line below
// 3. Save — the image appears automatically on the right page
// ─────────────────────────────────────────────────────────────────────────

// ── SECTION HERO BACKGROUNDS ─────────────────────────────────────────────
import heroImage from './images/hero.jpg';
import aboutHeroImage    from './images/about-hero.jpg';
import menuHeroImage     from './images/menu-hero.jpg';
import bookingHeroImage  from './images/booking-hero.jpg';
import contactHeroImage  from './images/contact-hero.jpg';
import aboutStoryImage   from './images/about-story.jpg';

// ── BOOKING VENUE CARDS ───────────────────────────────────────────────────
import conferenceImage   from './images/venue-conference.jpg';
import cateringImage     from './images/venue-catering.jpg';
import tableImage        from './images/venue-table.jpg';

// ── MENU ITEM IMAGES ──────────────────────────────────────────────────────
// import roadRunnersImage  from './images/road-runners.jpg';
import shawarmaImage     from './images/shawarma.jpg';
// import tBoneImage        from './images/tbone.jpg';
// import fullEnglishImage  from './images/full-english.jpg';


// ── EXPORTS ──────────────────────────────────────────────────────────────
// Rule: if the import above is commented out, the export must be null.
// If you uncomment an import, replace null with the image variable.

export const heroImg        = heroImage;
export const aboutHeroImg   = aboutHeroImage;       // replace null with: aboutHeroImage
export const menuHeroImg    = menuHeroImage;       // replace null with: menuHeroImage
export const bookingHeroImg = bookingHeroImage;       // replace null with: bookingHeroImage
export const contactHeroImg = contactHeroImage;       // replace null with: contactHeroImage
export const aboutStoryImg  = aboutStoryImage;       // replace null with: aboutStoryImage
export const conferenceImg  = conferenceImage;       // replace null with: conferenceImage
export const cateringImg    = cateringImage;       // replace null with: cateringImage
export const tableImg       = tableImage;       // replace null with: tableImage


// ── MENU IMAGES MAP ───────────────────────────────────────────────────────
// Rule: only include a key if its import above is uncommented.
// Commented-out imports do not exist as variables — using them causes a crash.

export const MENU_IMAGES = {
  // 'Road Runners':           roadRunnersImage,
  'Shawarma':               shawarmaImage,
  // 'T-Bone Steak':           tBoneImage,
  // 'Full English Breakfast': fullEnglishImage,
};