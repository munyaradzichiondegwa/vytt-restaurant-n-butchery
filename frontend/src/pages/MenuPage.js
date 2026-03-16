// frontend/src/pages/MenuPage.js
import React, { useEffect, useState, useRef } from 'react';
import { fetchMenuItems } from '../api';
import MenuCard from '../components/MenuCard';
import { menuHeroImg, MENU_IMAGES } from '../assets';
import './MenuPage.css';

const CATEGORIES = [
  'All',
  'Traditional Starches', 'Contemporary Starches',
  'Traditional Usavi', 'Contemporary Delicacies',
  'Platters', 'Tribes Treat', 'Contemporary Bites',
  'Starters', 'Salads', 'Breakfast', 'Desserts',
  'Hot Beverages', 'Cold Beverages', 'Ciders', 'Mocktails', 'Cocktails',
];

const CATEGORY_ICONS = {
  All: '🍽️',
  'Traditional Starches': '🌾', 'Contemporary Starches': '🍟',
  'Traditional Usavi': '🍲',    'Contemporary Delicacies': '🥩',
  'Platters': '🍽️',            'Tribes Treat': '🏆',
  'Contemporary Bites': '🌯',   'Starters': '🥨',
  'Salads': '🥗',               'Breakfast': '🍳',
  'Desserts': '🍦',             'Hot Beverages': '☕',
  'Cold Beverages': '🥤',       'Ciders': '🍺',
  'Mocktails': '🌿',            'Cocktails': '🍸',
};

// Full static fallback menu — all 91 Vittony Holdings items
const STATIC_MENU = [
  { _id: 'ts1',  name: 'White Sadza',                    description: 'Smooth white maize meal sadza — the heart of every Zimbabwean meal.',          price: 0.50,  category: 'Traditional Starches',    tags: ['traditional','vegetarian'] },
  { _id: 'ts2',  name: 'Sadza Rezviyo',                  description: 'Traditional finger millet sadza with a rich earthy flavour.',                   price: 1.00,  category: 'Traditional Starches',    tags: ['traditional'] },
  { _id: 'ts3',  name: 'Sadza Remhunga',                 description: 'Nutritious sorghum sadza — bold and wholesome.',                                price: 1.00,  category: 'Traditional Starches',    tags: ['traditional'] },
  { _id: 'ts4',  name: 'Sadza Remafunde',                description: 'Classic sadza remafunde — a Zimbabwean favourite.',                             price: 1.00,  category: 'Traditional Starches',    tags: ['traditional'] },
  { _id: 'ts5',  name: 'Rice rine Dovi',                 description: 'Fragrant rice with a rich peanut butter (dovi) sauce.',                         price: 1.00,  category: 'Traditional Starches',    tags: ['traditional','vegetarian'] },
  { _id: 'ts6',  name: 'Mupunga une Dovi',               description: 'Plain rice with a generous peanut butter relish.',                              price: 1.00,  category: 'Traditional Starches',    tags: ['traditional','vegetarian'] },
  { _id: 'cs1',  name: 'White Rice',                     description: 'Steamed long-grain white rice, light and fluffy.',                              price: 1.00,  category: 'Contemporary Starches',   tags: [] },
  { _id: 'cs2',  name: 'French Fries',                   description: 'Golden crispy French fries, lightly salted.',                                   price: 2.00,  category: 'Contemporary Starches',   tags: ['popular'] },
  { _id: 'cs3',  name: 'Mashed Potatoes',                description: 'Creamy buttery mashed potatoes.',                                               price: 1.00,  category: 'Contemporary Starches',   tags: [] },
  { _id: 'cs4',  name: 'Potatoes & Butternut Wedges',    description: 'Oven-roasted potato and butternut wedges with herbs.',                          price: 2.00,  category: 'Contemporary Starches',   tags: [] },
  { _id: 'cs5',  name: 'Fried Rice',                     description: 'Wok-tossed fried rice with vegetables and seasoning.',                          price: 2.00,  category: 'Contemporary Starches',   tags: [] },
  { _id: 'tu1',  name: 'Road Runners',                   description: 'Free-range road runner chicken, slow-cooked with traditional herbs.',            price: 4.00,  category: 'Traditional Usavi',       tags: ['popular','chicken'],       isFeatured: true },
  { _id: 'tu2',  name: 'Goat Stew',                      description: 'Traditional goat stew simmered in a rich tomato and onion sauce.',              price: 4.00,  category: 'Traditional Usavi',       tags: ['goat'] },
  { _id: 'tu3',  name: 'Oxtail',                         description: 'Tender slow-cooked oxtail in a hearty, deeply flavourful sauce.',               price: 5.00,  category: 'Traditional Usavi',       tags: ['beef','premium'],          isFeatured: true },
  { _id: 'tu4',  name: 'Mazondo',                        description: 'Slow-cooked cow trotters seasoned with traditional spices.',                    price: 4.00,  category: 'Traditional Usavi',       tags: ['traditional'] },
  { _id: 'tu5',  name: 'Musoro Wembudzi / Mombe',        description: 'Goat or beef head, slow-cooked to perfection.',                                 price: 4.00,  category: 'Traditional Usavi',       tags: ['traditional'] },
  { _id: 'tu6',  name: 'Zvinyenze',                      description: 'Traditional wild mushrooms with onions and tomatoes.',                          price: 4.00,  category: 'Traditional Usavi',       tags: ['vegetarian'] },
  { _id: 'tu7',  name: 'Beef Bones',                     description: 'Marrow-rich beef bones slow-cooked in a thick savoury broth.',                  price: 4.00,  category: 'Traditional Usavi',       tags: ['beef'] },
  { _id: 'tu8',  name: 'Pork Bones',                     description: 'Tender pork bones simmered in a rich traditional sauce.',                      price: 4.00,  category: 'Traditional Usavi',       tags: ['pork'] },
  { _id: 'tu9',  name: 'Hairifidzi',                     description: 'Classic Zimbabwean dried meat relish.',                                         price: 3.00,  category: 'Traditional Usavi',       tags: ['traditional'] },
  { _id: 'tu10', name: 'Kariba Bream',                   description: 'Fresh Kariba bream in a traditional tomato and onion sauce.',                   price: 7.00,  category: 'Traditional Usavi',       tags: ['fish','fresh'] },
  { _id: 'tu11', name: 'Broiler Chicken Stew',           description: 'Tender broiler chicken in a rich traditional stew.',                            price: 4.00,  category: 'Traditional Usavi',       tags: ['chicken'] },
  { _id: 'tu12', name: 'Guinea Fowl',                    description: 'Free-range guinea fowl slow-cooked with traditional herbs.',                    price: 5.00,  category: 'Traditional Usavi',       tags: ['specialty'] },
  { _id: 'tu13', name: 'Livers & Kidneys',               description: 'Pan-fried chicken livers and kidneys in a spiced sauce.',                      price: 3.00,  category: 'Traditional Usavi',       tags: ['chicken'] },
  { _id: 'tu14', name: 'Madora',                         description: 'Dried mopane worms — a cherished Zimbabwean traditional delicacy.',             price: 3.00,  category: 'Traditional Usavi',       tags: ['traditional','delicacy'] },
  { _id: 'tu15', name: 'Mukaka Wakakora',                description: 'Fermented sour milk — a beloved Zimbabwean cultural staple.',                   price: 4.00,  category: 'Traditional Usavi',       tags: ['traditional'] },
  { _id: 'cd1',  name: 'Bream',                          description: 'Whole bream grilled over open flame, with lemon and herbs.',                    price: 7.00,  category: 'Contemporary Delicacies', tags: ['fish','fresh'],            isFeatured: true },
  { _id: 'cd2',  name: 'Quarter Chicken',                description: 'Crispy fried or grilled quarter chicken.',                                      price: 4.00,  category: 'Contemporary Delicacies', tags: ['chicken','popular'] },
  { _id: 'cd3',  name: 'Half Chicken',                   description: 'Generous half chicken — grilled or fried.',                                     price: 7.00,  category: 'Contemporary Delicacies', tags: ['chicken','popular'] },
  { _id: 'cd4',  name: 'Chicken Wings',                  description: 'Crispy golden chicken wings with your choice of sauce.',                        price: 4.50,  category: 'Contemporary Delicacies', tags: ['chicken'] },
  { _id: 'cd5',  name: '400g Pork Chop',                 description: 'Thick-cut 400g pork chop, grilled and seasoned.',                               price: 11.00, category: 'Contemporary Delicacies', tags: ['pork','premium'] },
  { _id: 'cd6',  name: 'Grilled Sausage',                description: 'Juicy grilled beef sausage.',                                                   price: 5.00,  category: 'Contemporary Delicacies', tags: ['beef'] },
  { _id: 'cd7',  name: 'T-Bone Steak',                   description: 'Classic T-bone steak grilled to your preferred doneness.',                      price: 5.00,  category: 'Contemporary Delicacies', tags: ['beef','grill'],            isFeatured: true },
  { _id: 'cd8',  name: 'Rump Steak',                     description: 'Tender rump steak with chips or sadza.',                                        price: 5.00,  category: 'Contemporary Delicacies', tags: ['beef','grill'] },
  { _id: 'cd9',  name: 'Pork Ribs',                      description: 'Slow-cooked pork ribs with a rich BBQ-style glaze.',                            price: 6.00,  category: 'Contemporary Delicacies', tags: ['pork'] },
  { _id: 'cd10', name: 'Russians',                       description: 'Grilled Russian sausage — quick, tasty and satisfying.',                        price: 1.00,  category: 'Contemporary Delicacies', tags: ['popular'] },
  { _id: 'pl1',  name: 'Assorted Meat Platter for 4',    description: 'Generous sharing platter of assorted grilled meats for 4.',                     price: 40.00, category: 'Platters',                tags: ['sharing','popular'],       isFeatured: true },
  { _id: 'pl2',  name: 'Assorted Meat Platter for 2',    description: 'Hearty sharing platter of assorted grilled meats for 2.',                       price: 25.00, category: 'Platters',                tags: ['sharing'] },
  // Tribes Treat — has two options (price varies by selection)
  { _id: 'tt1',  name: 'Tribes Treat',                   description: '3 meats of your choice — mix traditional and contemporary.',
    price: 12.00, priceMax: 18.00,
    priceOptions: [
      { label: 'Traditional Selection', price: 12.00 },
      { label: 'Contemporary Selection', price: 15.00 },
      { label: 'Mixed Selection', price: 18.00 },
    ],
    category: 'Tribes Treat', tags: ['build your own','popular'] },
  { _id: 'cb1',  name: 'Burger (Chicken/Beef)',
    description: 'Juicy patty in a toasted bun. Choose chicken or beef.',
    price: 3.00,
    priceOptions: [
      { label: 'Chicken Burger', price: 3.00 },
      { label: 'Beef Burger',    price: 3.00 },
    ],
    category: 'Contemporary Bites', tags: ['popular','weekend deal'] },
  { _id: 'cb2',  name: 'Hotdog',                         description: 'Classic hotdog in a soft bun with mustard and relish.',                         price: 2.00,  category: 'Contemporary Bites',      tags: ['weekend deal'] },
  { _id: 'cb3',  name: 'Shawarma',                       description: 'Spiced meat wrapped in flatbread with fresh salad and sauce.',                  price: 3.00,  category: 'Contemporary Bites',      tags: ['popular','signature'],     isFeatured: true },
  { _id: 'st1',  name: 'Bite & Go',                      description: 'A quick and tasty starter bite.',                                               price: 2.00,  category: 'Starters',                tags: [] },
  { _id: 'st2',  name: 'Chibage',                        description: 'Grilled or boiled maize cob.',                                                  price: 1.00,  category: 'Starters',                tags: ['vegetarian'] },
  { _id: 'st3',  name: 'Roasted Nuts',                   description: 'Freshly roasted mixed nuts, lightly salted.',                                   price: 1.00,  category: 'Starters',                tags: ['vegetarian'] },
  { _id: 'st4',  name: 'Chilli Chicken Feet',            description: 'Spicy marinated chicken feet — bold and flavourful.',                           price: 1.00,  category: 'Starters',                tags: ['spicy'] },
  { _id: 'st5',  name: 'Chilli Chicken Livers',          description: 'Pan-fried chicken livers in a spicy chilli sauce.',                            price: 2.00,  category: 'Starters',                tags: ['spicy'] },
  { _id: 'sa1',  name: 'Creamed Spinach',                description: 'Rich and creamy spinach — a perfect vegetable side.',                          price: 2.00,  category: 'Salads',                  tags: ['vegetarian'] },
  { _id: 'sa2',  name: 'Roasted Vegetables',             description: 'Seasonal vegetables oven-roasted with herbs.',                                  price: 1.00,  category: 'Salads',                  tags: ['vegetarian'] },
  { _id: 'sa3',  name: 'Garden Salad',                   description: 'Fresh crisp garden salad with vinaigrette.',                                    price: 3.00,  category: 'Salads',                  tags: ['vegetarian'] },
  { _id: 'sa4',  name: 'Chicken Salad',                  description: 'Grilled chicken strips over fresh greens.',                                     price: 4.00,  category: 'Salads',                  tags: ['chicken','popular'] },
  { _id: 'sa5',  name: 'Coleslaw',                       description: 'Creamy homemade coleslaw.',                                                     price: 1.00,  category: 'Salads',                  tags: ['vegetarian'] },
  { _id: 'br1',  name: 'Tea & Bread',                    description: 'Hot tea with freshly baked bread.',                                             price: 2.00,  category: 'Breakfast',               tags: [] },
  { _id: 'br2',  name: 'Mini Breakfast',                 description: 'Eggs, sausage and toast.',                                                      price: 5.00,  category: 'Breakfast',               tags: [] },
  { _id: 'br3',  name: 'Traditional Farm Breakfast',     description: 'Sadza, traditional relish and a boiled egg.',                                   price: 6.00,  category: 'Breakfast',               tags: ['traditional'] },
  { _id: 'br4',  name: 'Full English Breakfast',         description: 'Eggs, bacon, sausage, baked beans, grilled tomato, mushrooms and toast.',       price: 10.00, category: 'Breakfast',               tags: ['popular'],                 isFeatured: true },
  { _id: 'ds1',  name: 'Fruit Platter (Seasonal Fruit)', description: 'A colourful selection of fresh seasonal fruits.',                               price: 6.00,  category: 'Desserts',                tags: ['vegetarian'] },
  { _id: 'ds2',  name: 'Cake Slice (Cake of the Day)',   description: 'A generous slice of our freshly baked cake of the day.',                        price: 3.00,  category: 'Desserts',                tags: [] },
  { _id: 'ds3',  name: 'Ice Cream',                      description: 'Creamy scoops of ice cream.',                                                   price: 2.50,  category: 'Desserts',                tags: [] },
  { _id: 'ds4',  name: 'Smoothies',                      description: 'Fresh blended fruit smoothies.',                                                price: 3.00,  category: 'Desserts',                tags: ['vegetarian'] },
  { _id: 'ds5',  name: 'Custard Cream',                  description: 'Smooth velvety custard cream.',                                                 price: 2.00,  category: 'Desserts',                tags: [] },
  { _id: 'hb1',  name: 'Tea',                            description: 'Hot brewed tea — black, green, or herbal.',                                     price: 1.00,  category: 'Hot Beverages',           tags: [] },
  { _id: 'hb2',  name: 'Coffee',                         description: 'Rich hot coffee — americano or white coffee.',                                  price: 1.00,  category: 'Hot Beverages',           tags: [] },
  { _id: 'hb3',  name: 'Hot Chocolate',                  description: 'Warm creamy hot chocolate.',                                                    price: 2.00,  category: 'Hot Beverages',           tags: [] },
  { _id: 'cv1',  name: 'Juice Glass',                    description: 'Fresh fruit juice by the glass.',                                               price: 1.50,  category: 'Cold Beverages',          tags: [] },
  { _id: 'cv2',  name: 'Soft Drinks 440ml',              description: 'Chilled 440ml can — Coke, Fanta, Sprite and more.',                             price: 1.00,  category: 'Cold Beverages',          tags: [] },
  { _id: 'cv3',  name: 'Soft Drinks 300ml',              description: 'Chilled 300ml soft drink.',                                                     price: 0.50,  category: 'Cold Beverages',          tags: [] },
  { _id: 'cv4',  name: 'Shumba Maheu',                   description: 'Traditional Zimbabwean maheu — refreshing and filling.',                        price: 1.00,  category: 'Cold Beverages',          tags: ['traditional'] },
  { _id: 'cv5',  name: 'Water',                          description: 'Still bottled water — chilled.',                                                price: 0.50,  category: 'Cold Beverages',          tags: [] },
  { _id: 'cv6',  name: 'Maheu Akavira',                  description: 'Premium chilled maheu — smooth and satisfying.',                                price: 2.00,  category: 'Cold Beverages',          tags: ['traditional'] },
  { _id: 'cv7',  name: 'Energy Drinks',                  description: 'Chilled energy drink.',                                                         price: 2.00,  category: 'Cold Beverages',          tags: [] },
  // Ciders — priceOptions used for size/variant
  { _id: 'ci1',  name: 'Hunters Dry',                    description: 'Crisp dry apple cider.',                                                        price: 2.00,  category: 'Ciders',                  tags: ['alcoholic'] },
  { _id: 'ci2',  name: 'Hunters Gold',                   description: 'Golden apple cider — smooth, slightly sweet.',                                  price: 2.00,  category: 'Ciders',                  tags: ['alcoholic'] },
  { _id: 'ci3',  name: 'Savannah',                       description: "South Africa's favourite dry lemon cider.",                                     price: 2.00,  category: 'Ciders',                  tags: ['alcoholic','popular'] },
  { _id: 'ci4',  name: 'Zambezi',                        description: "Zimbabwe's own lager — light and refreshing.",                                  price: 1.50,  category: 'Ciders',                  tags: ['alcoholic','local'] },
  { _id: 'ci5',  name: 'Flying Fish',                    description: 'Flavoured cider with a citrus twist.',                                          price: 2.00,  category: 'Ciders',                  tags: ['alcoholic'] },
  { _id: 'ci6',  name: 'Brutal Fruit',                   description: 'Fruity sparkling cider — bold flavour.',                                        price: 2.00,  category: 'Ciders',                  tags: ['alcoholic'] },
  { _id: 'ci7',  name: 'Belgravia',                      description: 'Premium spirit cooler — smooth and sophisticated.',                             price: 2.00,  category: 'Ciders',                  tags: ['alcoholic'] },
  { _id: 'mo1',  name: 'Orange Lemon Mojito',            description: 'Zesty orange and lemon with fresh mint and soda.',                              price: 3.00,  category: 'Mocktails',               tags: ['non-alcoholic'] },
  { _id: 'mo2',  name: 'Double Fizz',                    description: 'Bubbly mixed fruit mocktail.',                                                  price: 3.00,  category: 'Mocktails',               tags: ['non-alcoholic'] },
  { _id: 'mo3',  name: 'Virgin Mojito',                  description: 'Classic mint and lime mocktail — alcohol-free.',                                price: 3.00,  category: 'Mocktails',               tags: ['non-alcoholic'] },
  { _id: 'mo4',  name: 'Sprite Splash',                  description: 'Light Sprite-based mocktail with tropical fruit flavours.',                     price: 3.00,  category: 'Mocktails',               tags: ['non-alcoholic'] },
  { _id: 'co1',  name: 'Bar Surprise',                   description: "The bartender's secret mix — a different surprise every time.",                 price: 5.00,  category: 'Cocktails',               tags: ['alcoholic','popular'] },
  { _id: 'co2',  name: 'Blue Lagoon',                    description: 'A stunning blue cocktail — sweet, tropical and ice cold.',                      price: 5.00,  category: 'Cocktails',               tags: ['alcoholic'] },
  { _id: 'co3',  name: 'Electric Screwdriver',           description: 'Classic screwdriver with a vibrant twist.',                                     price: 5.00,  category: 'Cocktails',               tags: ['alcoholic'] },
  { _id: 'co4',  name: 'Nein Rush',                      description: 'A bold energising cocktail — smooth with a kick.',                              price: 4.00,  category: 'Cocktails',               tags: ['alcoholic'] },
  { _id: 'co5',  name: 'Tequila Sunrise',                description: 'Tequila, orange juice and grenadine.',                                          price: 5.00,  category: 'Cocktails',               tags: ['alcoholic','popular'] },
  { _id: 'co6',  name: 'Margarita',                      description: 'Tequila, lime and triple sec with a salted rim.',                               price: 4.00,  category: 'Cocktails',               tags: ['alcoholic'] },
  { _id: 'co7',  name: 'Long Island',                    description: 'Vodka, rum, gin, tequila, triple sec and cola.',                                price: 5.00,  category: 'Cocktails',               tags: ['alcoholic','strong'] },
  { _id: 'co8',  name: 'Madras',                         description: 'Vodka, orange juice and cranberry — light and fruity.',                         price: 4.00,  category: 'Cocktails',               tags: ['alcoholic'] },
  { _id: 'co9',  name: 'Tropical Midori Sunrise',        description: 'Midori melon liqueur with tropical juices.',                                    price: 5.00,  category: 'Cocktails',               tags: ['alcoholic','signature'],   isFeatured: true },
];

const CAROUSEL_ITEMS = STATIC_MENU.filter((i) => i.isFeatured);

export default function MenuPage() {
  const [items, setItems]               = useState(STATIC_MENU);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading]           = useState(true);
  const [search, setSearch]             = useState('');
  const [carouselIdx, setCarouselIdx]   = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    fetchMenuItems()
      .then((res) => { if (res.data.length > 0) setItems(res.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Auto-advance every 10 s
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCarouselIdx((i) => (i + 1) % CAROUSEL_ITEMS.length);
    }, 10000);
    return () => clearInterval(timerRef.current);
  }, []);

  const goCarousel = (dir) => {
    clearInterval(timerRef.current);
    setCarouselIdx((i) => (i + dir + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
    timerRef.current = setInterval(() => {
      setCarouselIdx((i) => (i + 1) % CAROUSEL_ITEMS.length);
    }, 10000);
  };

  const filtered = items.filter((item) => {
    const matchCat    = activeCategory === 'All' || item.category === activeCategory;
    const matchSearch = !search || item.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const current = CAROUSEL_ITEMS[carouselIdx] || {};
  const currentImg = MENU_IMAGES[current.name] || null;

  return (
    <div className="menu-page">

      {/* ── HERO ── */}
      <div
        className="menu-page__hero"
        style={menuHeroImg ? { backgroundImage: `url(${menuHeroImg})` } : {}}
      >
        <div className={menuHeroImg ? 'menu-page__hero-overlay' : ''} />
        <div className="container menu-page__hero-content">
          <h1>Our Menu</h1>
          <p>Farm-fresh ingredients. Traditional flavours. Every dish made with care.</p>
        </div>
      </div>

      {/* ── CAROUSEL ── */}
      {CAROUSEL_ITEMS.length > 0 && (
        <div className="menu-page__carousel">
          <div
            className="menu-page__carousel-track"
            style={{ transform: `translateX(-${carouselIdx * 100}%)` }}
          >
            {CAROUSEL_ITEMS.map((item, idx) => {
              const img = MENU_IMAGES[item.name] || null;
              return (
                <div key={item._id || idx} className="menu-page__carousel-slide">
                  {img ? (
                    <div className="menu-page__carousel-img" style={{ backgroundImage: `url(${img})` }} />
                  ) : (
                    <div className="menu-page__carousel-emoji">{CATEGORY_ICONS[item.category] || '🍽️'}</div>
                  )}
                  <div className="menu-page__carousel-info">
                    <span className="menu-page__carousel-cat">{item.category}</span>
                    <h2 className="menu-page__carousel-name">{item.name}</h2>
                    <p className="menu-page__carousel-desc">{item.description}</p>
                    <span className="menu-page__carousel-price">
                      {item.price === 0 ? 'Price varies' : `$${item.price.toFixed(2)}`}
                      {item.priceMax ? ` – $${item.priceMax.toFixed(2)}` : ''}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="menu-page__carousel-btn menu-page__carousel-btn--prev" onClick={() => goCarousel(-1)}>‹</button>
          <button className="menu-page__carousel-btn menu-page__carousel-btn--next" onClick={() => goCarousel(1)}>›</button>
          <div className="menu-page__carousel-dots">
            {CAROUSEL_ITEMS.map((_, i) => (
              <button
                key={i}
                className={`menu-page__carousel-dot${i === carouselIdx ? ' active' : ''}`}
                onClick={() => setCarouselIdx(i)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="container menu-page__body">

        {/* ── SEARCH ── */}
        <div className="menu-page__search">
          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && <button onClick={() => setSearch('')} className="menu-page__search-clear">✕</button>}
        </div>

        {/* ── CATEGORY TABS ── */}
        <div className="menu-page__tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`menu-page__tab${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {CATEGORY_ICONS[cat]} {cat}
            </button>
          ))}
        </div>

        {/* ── GRID ── */}
        {loading ? (
          <div className="menu-page__loading"><div className="spinner" /></div>
        ) : filtered.length === 0 ? (
          <div className="menu-page__empty">
            <span>🍽️</span>
            <p>No dishes found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="menu-page__grid">
            {filtered.map((item) => (
              <MenuCard key={item._id} item={item} itemImage={MENU_IMAGES[item.name] || null} />
            ))}
          </div>
        )}

        {/* ── WHATSAPP CTA ── */}
        <div className="menu-page__wa">
          <p>Want to place a WhatsApp order or see the full printed menu?</p>
          <a href="https://wa.me/263787902521" target="_blank" rel="noopener noreferrer" className="btn-primary">
            💬 Order via WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}