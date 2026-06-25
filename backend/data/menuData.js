// backend/data/menuData.js
// Full Vittony Holdings menu — transcribed from physical menu images.
// Drop-in replacement for the original menuData.js.
// Export style matches original: named exports { menuItems, users }

const menuItems = [

  // ── TRADITIONAL STARCHES ─────────────────────────────────
  { name: 'White Sadza',              description: 'Smooth white maize meal sadza — the heart of every Zimbabwean meal.',                    price: 0.50,  category: 'Traditional Starches',    tags: ['traditional', 'vegetarian'] },
  { name: 'Sadza Rezviyo',            description: 'Traditional finger millet sadza with a rich earthy flavour.',                             price: 1.00,  category: 'Traditional Starches',    tags: ['traditional'] },
  { name: 'Sadza Remhunga',           description: 'Nutritious sorghum sadza — bold and wholesome.',                                          price: 1.00,  category: 'Traditional Starches',    tags: ['traditional'] },
  { name: 'Sadza Remafunde',          description: 'Classic sadza remafunde — a Zimbabwean favourite.',                                       price: 1.00,  category: 'Traditional Starches',    tags: ['traditional'] },
  { name: 'Rice rine Dovi',           description: 'Fragrant rice served with a rich peanut butter (dovi) sauce.',                            price: 1.00,  category: 'Traditional Starches',    tags: ['traditional', 'vegetarian'] },
  { name: 'Mupunga une Dovi',         description: 'Plain rice accompanied by a generous peanut butter relish.',                              price: 1.00,  category: 'Traditional Starches',    tags: ['traditional', 'vegetarian'] },

  // ── CONTEMPORARY STARCHES ────────────────────────────────
  { name: 'White Rice',               description: 'Steamed long-grain white rice, light and fluffy.',                                        price: 1.00,  category: 'Contemporary Starches',   tags: [] },
  { name: 'French Fries',             description: 'Golden crispy French fries, lightly salted and perfectly fried.',                         price: 2.00,  category: 'Contemporary Starches',   tags: ['popular'] },
  { name: 'Mashed Potatoes',          description: 'Creamy buttery mashed potatoes — smooth and comforting.',                                 price: 1.00,  category: 'Contemporary Starches',   tags: [] },
  { name: 'Potatoes & Butternut Wedges', description: 'Oven-roasted potato and butternut wedges seasoned with herbs.',                       price: 2.00,  category: 'Contemporary Starches',   tags: [] },
  { name: 'Fried Rice',               description: 'Wok-tossed fried rice with vegetables and seasoning.',                                    price: 2.00,  category: 'Contemporary Starches',   tags: [] },

  // ── TRADITIONAL USAVI ────────────────────────────────────
  { name: 'Road Runners',             description: 'Free-range road runner chicken, slow-cooked with traditional herbs and spices.',           price: 4.00,  category: 'Traditional Usavi',       tags: ['popular', 'chicken'], isFeatured: true },
  { name: 'Goat Stew',                description: 'Traditional goat stew simmered in a rich tomato and onion sauce.',                        price: 4.00,  category: 'Traditional Usavi',       tags: ['goat'] },
  { name: 'Oxtail',                   description: 'Tender slow-cooked oxtail in a hearty, deeply flavourful sauce.',                         price: 5.00,  category: 'Traditional Usavi',       tags: ['beef', 'premium'], isFeatured: true },
  { name: 'Mazondo',                  description: 'Slow-cooked cow trotters seasoned with traditional spices.',                               price: 4.00,  category: 'Traditional Usavi',       tags: ['traditional'] },
  { name: 'Musoro Wembudzi / Mombe',  description: 'Goat or beef head, slow-cooked to perfection with aromatic vegetables.',                  price: 4.00,  category: 'Traditional Usavi',       tags: ['traditional'] },
  { name: 'Zvinyenze',                description: 'Traditional wild mushrooms prepared with onions and tomatoes.',                            price: 4.00,  category: 'Traditional Usavi',       tags: ['vegetarian', 'traditional'] },
  { name: 'Beef Bones',               description: 'Marrow-rich beef bones slow-cooked in a thick savoury broth.',                            price: 4.00,  category: 'Traditional Usavi',       tags: ['beef'] },
  { name: 'Pork Bones',               description: 'Tender pork bones simmered in a rich traditional sauce.',                                 price: 4.00,  category: 'Traditional Usavi',       tags: ['pork'] },
  { name: 'Hairifidzi',               description: 'Classic Zimbabwean dried meat relish, packed with traditional flavour.',                   price: 3.00,  category: 'Traditional Usavi',       tags: ['traditional'] },
  { name: 'Kariba Bream',             description: 'Fresh Kariba bream cooked in a traditional tomato and onion sauce.',                      price: 7.00,  category: 'Traditional Usavi',       tags: ['fish', 'fresh'] },
  { name: 'Broiler Chicken Stew',     description: 'Tender broiler chicken in a rich traditional stew.',                                      price: 4.00,  category: 'Traditional Usavi',       tags: ['chicken'] },
  { name: 'Guinea Fowl',              description: 'Free-range guinea fowl slow-cooked with traditional herbs.',                               price: 5.00,  category: 'Traditional Usavi',       tags: ['traditional', 'specialty'] },
  { name: 'Livers & Kidneys',         description: 'Pan-fried chicken livers and kidneys in a spiced sauce.',                                 price: 3.00,  category: 'Traditional Usavi',       tags: ['chicken'] },
  { name: 'Madora',                   description: 'Dried mopane worms — a cherished Zimbabwean traditional delicacy.',                       price: 3.00,  category: 'Traditional Usavi',       tags: ['traditional', 'delicacy'] },
  { name: 'Mukaka Wakakora',          description: 'Fermented sour milk — a beloved Zimbabwean cultural staple.',                             price: 4.00,  category: 'Traditional Usavi',       tags: ['traditional'] },

  // ── CONTEMPORARY DELICACIES ──────────────────────────────
  { name: 'Bream',                    description: 'Whole bream grilled over open flame, seasoned with lemon and herbs.',                     price: 7.00,  category: 'Contemporary Delicacies', tags: ['fish', 'fresh'], isFeatured: true },
  { name: 'Quarter Chicken',          description: 'Crispy fried or grilled quarter chicken, seasoned to perfection.',                        price: 4.00,  category: 'Contemporary Delicacies', tags: ['chicken', 'popular'] },
  { name: 'Half Chicken',             description: 'Generous half chicken — grilled or fried with our house seasoning.',                      price: 7.00,  category: 'Contemporary Delicacies', tags: ['chicken', 'popular'] },
  { name: 'Chicken Wings',            description: 'Crispy golden chicken wings with your choice of sauce.',                                  price: 4.50,  category: 'Contemporary Delicacies', tags: ['chicken'] },
  { name: '400g Pork Chop',           description: 'Thick-cut 400g pork chop, grilled and seasoned with our house blend.',                   price: 11.00, category: 'Contemporary Delicacies', tags: ['pork', 'premium'] },
  { name: 'Grilled Sausage',          description: 'Juicy grilled beef sausage served with a side of your choice.',                           price: 5.00,  category: 'Contemporary Delicacies', tags: ['beef'] },
  { name: 'T-Bone Steak',             description: 'Classic T-bone steak grilled to your preferred doneness.',                                price: 5.00,  category: 'Contemporary Delicacies', tags: ['beef', 'grill'], isFeatured: true },
  { name: 'Rump Steak',               description: 'Tender rump steak grilled and served with chips or sadza.',                               price: 5.00,  category: 'Contemporary Delicacies', tags: ['beef', 'grill'] },
  { name: 'Pork Ribs',                description: 'Slow-cooked pork ribs glazed with a rich BBQ-style sauce.',                               price: 6.00,  category: 'Contemporary Delicacies', tags: ['pork'] },
  { name: 'Russians',                 description: 'Grilled Russian sausage — quick, tasty and satisfying.',                                  price: 1.00,  category: 'Contemporary Delicacies', tags: ['popular'] },

  // ── PLATTERS ─────────────────────────────────────────────
  { name: 'Assorted Meat Platter for 4', description: 'Generous sharing platter of assorted grilled meats for 4 people. Perfect for celebrations.',  price: 40.00, category: 'Platters',              tags: ['sharing', 'popular'], isFeatured: true },
  { name: 'Assorted Meat Platter for 2', description: 'Hearty sharing platter of assorted grilled meats for 2 people.',                              price: 25.00, category: 'Platters',              tags: ['sharing'] },

  // ── TRIBES TREAT ─────────────────────────────────────────
  { name: 'Tribes Treat',             description: '3 meats of your choice — mix traditional and contemporary selections to build your perfect plate. Price varies by selection.', price: 0.00, category: 'Tribes Treat', tags: ['build your own', 'popular'] },

  // ── CONTEMPORARY BITES ───────────────────────────────────
  { name: 'Burger (Chicken/Beef)',    description: 'Juicy patty in a toasted bun with lettuce, tomato and sauce. Choose chicken or beef.',     price: 3.00,  category: 'Contemporary Bites',      tags: ['popular', 'weekend deal'] },
  { name: 'Hotdog',                   description: 'Classic hotdog in a soft bun with mustard and relish.',                                    price: 2.00,  category: 'Contemporary Bites',      tags: ['weekend deal'] },
  { name: 'Shawarma',                 description: 'Spiced meat wrapped in flatbread with fresh salad and sauce.',                             price: 3.00,  category: 'Contemporary Bites',      tags: ['popular', 'signature'], isFeatured: true },

  // ── STARTERS ─────────────────────────────────────────────
  { name: 'Bite & Go',                description: 'A quick and tasty starter bite — perfect to kick off your meal.',                          price: 2.00,  category: 'Starters',                tags: [] },
  { name: 'Chibage',                  description: 'Grilled or boiled maize cob — a simple and satisfying starter.',                           price: 1.00,  category: 'Starters',                tags: ['vegetarian'] },
  { name: 'Roasted Nuts',             description: 'Freshly roasted mixed nuts, lightly salted.',                                              price: 1.00,  category: 'Starters',                tags: ['vegetarian'] },
  { name: 'Chilli Chicken Feet',      description: 'Spicy marinated chicken feet — bold and flavourful.',                                      price: 1.00,  category: 'Starters',                tags: ['spicy', 'chicken'] },
  { name: 'Chilli Chicken Livers',    description: 'Pan-fried chicken livers in a spicy chilli sauce.',                                        price: 2.00,  category: 'Starters',                tags: ['spicy', 'chicken'] },

  // ── SALADS ───────────────────────────────────────────────
  { name: 'Creamed Spinach',          description: 'Rich and creamy spinach — a perfect vegetable side.',                                      price: 2.00,  category: 'Salads',                  tags: ['vegetarian'] },
  { name: 'Roasted Vegetables',       description: 'Seasonal vegetables oven-roasted with olive oil and herbs.',                               price: 1.00,  category: 'Salads',                  tags: ['vegetarian'] },
  { name: 'Garden Salad',             description: 'Fresh crisp garden salad with a light vinaigrette dressing.',                              price: 3.00,  category: 'Salads',                  tags: ['vegetarian'] },
  { name: 'Chicken Salad',            description: 'Grilled chicken strips over fresh greens with dressing.',                                  price: 4.00,  category: 'Salads',                  tags: ['chicken', 'popular'] },
  { name: 'Coleslaw',                 description: 'Creamy homemade coleslaw — crisp and refreshing.',                                         price: 1.00,  category: 'Salads',                  tags: ['vegetarian'] },

  // ── BREAKFAST ────────────────────────────────────────────
  { name: 'Tea & Bread',              description: 'Hot tea with freshly baked bread — a simple morning classic.',                             price: 2.00,  category: 'Breakfast',               tags: [] },
  { name: 'Mini Breakfast',           description: 'Eggs, sausage and toast — a light start to your day.',                                    price: 5.00,  category: 'Breakfast',               tags: [] },
  { name: 'Traditional Farm Breakfast', description: 'Sadza, traditional relish and a boiled egg — the authentic Zimbabwean morning meal.',   price: 6.00,  category: 'Breakfast',               tags: ['traditional'] },
  { name: 'Full English Breakfast',   description: 'Eggs, bacon, sausage, baked beans, grilled tomato, mushrooms and toast.',                 price: 10.00, category: 'Breakfast',               tags: ['popular', 'delivery available'], isFeatured: true },

  // ── DESSERTS ─────────────────────────────────────────────
  { name: 'Fruit Platter (Seasonal Fruit)', description: 'A colourful selection of fresh seasonal fruits.',                                   price: 6.00,  category: 'Desserts',                tags: ['vegetarian'] },
  { name: 'Cake Slice (Cake of the Day)',   description: 'A generous slice of our freshly baked cake of the day.',                            price: 3.00,  category: 'Desserts',                tags: [] },
  { name: 'Ice Cream',                description: 'Creamy scoops of ice cream — classic flavours available.',                                price: 2.50,  category: 'Desserts',                tags: [] },
  { name: 'Smoothies',                description: 'Fresh blended fruit smoothies — refreshing and nutritious.',                               price: 3.00,  category: 'Desserts',                tags: ['vegetarian'] },
  { name: 'Custard Cream',            description: 'Smooth velvety custard cream — a comforting classic dessert.',                            price: 2.00,  category: 'Desserts',                tags: [] },

  // ── HOT BEVERAGES ────────────────────────────────────────
  { name: 'Tea',                      description: 'Hot brewed tea — black, green, or herbal on request.',                                     price: 1.00,  category: 'Hot Beverages',           tags: [] },
  { name: 'Coffee',                   description: 'Rich hot coffee — americano or white coffee available.',                                   price: 1.00,  category: 'Hot Beverages',           tags: [] },
  { name: 'Hot Chocolate',            description: 'Warm creamy hot chocolate — perfect for a cold day.',                                      price: 2.00,  category: 'Hot Beverages',           tags: [] },

  // ── COLD BEVERAGES ───────────────────────────────────────
  { name: 'Juice Glass',              description: 'Fresh fruit juice by the glass — ask about today\'s flavours.',                            price: 1.50,  category: 'Cold Beverages',          tags: [] },
  { name: 'Soft Drinks 440ml',        description: 'Chilled 440ml can — Coke, Fanta, Sprite and more.',                                       price: 1.00,  category: 'Cold Beverages',          tags: [] },
  { name: 'Soft Drinks 300ml',        description: 'Chilled 300ml soft drink.',                                                                price: 0.50,  category: 'Cold Beverages',          tags: [] },
  { name: 'Shumba Maheu',             description: 'Traditional Zimbabwean maheu — fermented maize drink, refreshing and filling.',            price: 1.00,  category: 'Cold Beverages',          tags: ['traditional'] },
  { name: 'Water',                    description: 'Still bottled water — chilled.',                                                           price: 0.50,  category: 'Cold Beverages',          tags: [] },
  { name: 'Maheu Akavira',            description: 'Premium chilled maheu — smooth and satisfying.',                                           price: 2.00,  category: 'Cold Beverages',          tags: ['traditional'] },
  { name: 'Energy Drinks',            description: 'Chilled energy drink — boost your afternoon.',                                             price: 2.00,  category: 'Cold Beverages',          tags: [] },

  // ── CIDERS ───────────────────────────────────────────────
  { name: 'Hunters Dry',              description: 'Crisp dry apple cider — refreshing and light.',                                            price: 2.00,  category: 'Ciders',                  tags: ['alcoholic'] },
  { name: 'Hunters Gold',             description: 'Golden apple cider with a smooth, slightly sweet finish.',                                 price: 2.00,  category: 'Ciders',                  tags: ['alcoholic'] },
  { name: 'Savannah',                 description: 'South Africa\'s favourite dry lemon cider.',                                               price: 2.00,  category: 'Ciders',                  tags: ['alcoholic', 'popular'] },
  { name: 'Zambezi',                  description: 'Zimbabwe\'s own lager — light and refreshing.',                                            price: 1.50,  category: 'Ciders',                  tags: ['alcoholic', 'local'] },
  { name: 'Flying Fish',              description: 'Flavoured cider with a citrus twist — light and crisp.',                                   price: 2.00,  category: 'Ciders',                  tags: ['alcoholic'] },
  { name: 'Brutal Fruit',             description: 'Fruity sparkling cider — bold flavour, easy drinking.',                                    price: 2.00,  category: 'Ciders',                  tags: ['alcoholic'] },
  { name: 'Belgravia',                description: 'Premium spirit cooler — smooth and sophisticated.',                                        price: 2.00,  category: 'Ciders',                  tags: ['alcoholic'] },

  // ── MOCKTAILS ────────────────────────────────────────────
  { name: 'Orange Lemon Mojito',      description: 'Zesty blend of orange and lemon with fresh mint and soda.',                               price: 3.00,  category: 'Mocktails',               tags: ['non-alcoholic'] },
  { name: 'Double Fizz',              description: 'Double the fizz — a bubbly mixed fruit mocktail.',                                        price: 3.00,  category: 'Mocktails',               tags: ['non-alcoholic'] },
  { name: 'Virgin Mojito',            description: 'Classic mint and lime mocktail — refreshing and alcohol-free.',                            price: 3.00,  category: 'Mocktails',               tags: ['non-alcoholic'] },
  { name: 'Sprite Splash',            description: 'Light Sprite-based mocktail with tropical fruit flavours.',                                price: 3.00,  category: 'Mocktails',               tags: ['non-alcoholic'] },

  // ── COCKTAILS ────────────────────────────────────────────
  { name: 'Bar Surprise',             description: 'The bartender\'s secret mix — a different surprise every time.',                           price: 5.00,  category: 'Cocktails',               tags: ['alcoholic', 'popular'] },
  { name: 'Blue Lagoon',              description: 'A stunning blue cocktail — sweet, tropical and ice cold.',                                 price: 5.00,  category: 'Cocktails',               tags: ['alcoholic'] },
  { name: 'Electric Screwdriver',     description: 'Classic screwdriver cocktail with a vibrant twist.',                                      price: 5.00,  category: 'Cocktails',               tags: ['alcoholic'] },
  { name: 'Nein Rush',                description: 'A bold energising cocktail — smooth with a kick.',                                        price: 4.00,  category: 'Cocktails',               tags: ['alcoholic'] },
  { name: 'Tequila Sunrise',          description: 'Tequila, orange juice and grenadine — beautiful gradient, beautiful taste.',               price: 5.00,  category: 'Cocktails',               tags: ['alcoholic', 'popular'] },
  { name: 'Margarita',                description: 'Classic margarita — tequila, lime and triple sec with a salted rim.',                      price: 4.00,  category: 'Cocktails',               tags: ['alcoholic'] },
  { name: 'Long Island',              description: 'Long Island Iced Tea — vodka, rum, gin, tequila, triple sec and cola.',                    price: 5.00,  category: 'Cocktails',               tags: ['alcoholic', 'strong'] },
  { name: 'Madras',                   description: 'Vodka, orange juice and cranberry — light, fruity and easy drinking.',                     price: 4.00,  category: 'Cocktails',               tags: ['alcoholic'] },
  { name: 'Tropical Midori Sunrise',  description: 'Midori melon liqueur with tropical juices — vivid, sweet and refreshing.',                price: 5.00,  category: 'Cocktails',               tags: ['alcoholic', 'signature'], isFeatured: true },
];

const users = [
  {
    name: 'VYTT Admin',
    email: 'admin@vytt.co.zw',
    password: 'vytt2024admin',
    isAdmin: true,
  },
];

export { menuItems, users };