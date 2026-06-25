// frontend/src/assets/index.js
// ─────────────────────────────────────────────────────────────────────────
// HOW TO USE:
// 1. Put your image in frontend/src/assets/images/
// 2. Uncomment its import line below
// 3. Save — the image appears automatically on the right page
// ─────────────────────────────────────────────────────────────────────────

// ── SECTION HERO BACKGROUNDS ─────────────────────────────────────────────
import heroImage from './images/hero.jpg';
// about-hero.jpg, menu-hero.jpg, contact-hero.jpg, booking-hero.jpg and
// about-story.jpg were removed — they were full page mockups (wrong
// placeholder logo + duplicate baked-in text) rather than plain photos,
// which doubled up against the real on-page text when used as CSS
// backgrounds. Drop a clean, text-free photo in as <name>.jpg and
// uncomment the matching line below to bring a hero image back.
// import aboutHeroImage    from './images/about-hero.jpg';
// import menuHeroImage     from './images/menu-hero.jpg';
// import bookingHeroImage  from './images/booking-hero.jpg';
// import contactHeroImage  from './images/contact-hero.jpg';
// import aboutStoryImage   from './images/about-story.jpg';

// ── BOOKING VENUE CARDS ───────────────────────────────────────────────────
// venue-conference.jpg removed for the same reason (flyer fragment with
// baked-in text/social icons). venue-catering.jpg and venue-table.jpg are
// genuine clean photos and are kept.
// import conferenceImage   from './images/venue-conference.jpg';
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
export const aboutHeroImg   = null;
export const menuHeroImg    = null;
export const bookingHeroImg = null;
export const contactHeroImg = null;
export const aboutStoryImg  = null;
export const conferenceImg  = null;
export const cateringImg    = cateringImage;
export const tableImg       = tableImage;


// ── MENU IMAGES MAP ───────────────────────────────────────────────────────
// Rule: only include a key if its import above is uncommented.
// Commented-out imports do not exist as variables — using them causes a crash.

export const MENU_IMAGES = {
  // 'Road Runners':           roadRunnersImage,
  'Shawarma':               shawarmaImage,
  // 'T-Bone Steak':           tBoneImage,
  // 'Full English Breakfast': fullEnglishImage,
};