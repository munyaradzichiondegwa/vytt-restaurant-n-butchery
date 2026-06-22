const menuItems = [
  // ── Traditional Starches ──
  { name: 'White Sadza', price: 0.50, category: 'Traditional Starches', description: 'Smooth white maize meal sadza — the heart of every Zimbabwean meal.', tags: ['traditional', 'vegetarian'] },
  { name: 'Sadza Rezviyo', price: 1.00, category: 'Traditional Starches', description: 'Traditional finger millet sadza with a rich earthy flavour.', tags: ['traditional'] },
  { name: 'Sadza Remhunga', price: 1.00, category: 'Traditional Starches', description: 'Nutritious sorghum sadza — bold and wholesome.', tags: ['traditional'] },
  { name: 'Sadza Remafunde', price: 1.00, category: 'Traditional Starches', description: 'Classic sadza remafunde — a Zimbabwean favourite.', tags: ['traditional'] },
  { name: 'Rice rine Dovi', price: 1.00, category: 'Traditional Starches', description: 'Fragrant rice served with a rich peanut butter sauce.', tags: ['traditional', 'vegetarian'] },
  { name: 'Mupunga une Dovi', price: 1.00, category: 'Traditional Starches', description: 'Plain rice accompanied by a generous peanut butter relish.', tags: ['traditional', 'vegetarian'] },

  // ── Contemporary Starches ──
  { name: 'White Rice', price: 1.00, category: 'Contemporary Starches', description: 'Steamed long-grain white rice, light and fluffy.', tags: [] },
  { name: 'French Fries', price: 2.00, category: 'Contemporary Starches', description: 'Golden crispy French fries, lightly salted and perfectly fried.', tags: ['popular'] },
  { name: 'Mashed Potatoes', price: 1.00, category: 'Contemporary Starches', description: 'Creamy buttery mashed potatoes — smooth and comforting.', tags: [] },
  { name: 'Potatoes & Butternut Wedges', price: 2.00, category: 'Contemporary Starches', description: 'Oven-roasted potato and butternut wedges seasoned with herbs.', tags: [] },
  { name: 'Fried Rice', price: 2.00, category: 'Contemporary Starches', description: 'Wok-tossed fried rice with vegetables and seasoning.', tags: [] },

  // ── Traditional Usavi ──
  { name: 'Road Runners', price: 4.00, category: 'Traditional Usavi', description: 'Free-range road runner chicken, slow-cooked with traditional herbs and spices.', tags: ['popular', 'chicken'], isFeatured: true },
  { name: 'Goat Stew', price: 4.00, category: 'Traditional Usavi', description: 'Traditional goat stew simmered in a rich tomato and onion sauce.', tags: ['goat'] },
  { name: 'Oxtail', price: 5.00, category: 'Traditional Usavi', description: 'Tender slow-cooked oxtail in a hearty, deeply flavourful sauce.', tags: ['beef', 'premium'], isFeatured: true },
  { name: 'Mazondo', price: 4.00, category: 'Traditional Usavi', description: 'Slow-cooked cow trotters seasoned with traditional spices.', tags: ['traditional'] },
  { name: 'Musoro Wembudzi / Mombe', price: 4.00, category: 'Traditional Usavi', description: 'Goat or beef head, slow-cooked to perfection with aromatic vegetables.', tags: ['traditional'] },
  { name: 'Zvinyenze', price: 4.00, category: 'Traditional Usavi', description: 'Traditional wild mushrooms prepared with onions and tomatoes.', tags: ['vegetarian', 'traditional'] },
  { name: 'Beef Bones', price: 4.00, category: 'Traditional Usavi', description: 'Marrow-rich beef bones slow-cooked in a thick savoury broth.', tags: ['beef'] },
  { name: 'Pork Bones', price: 4.00, category: 'Traditional Usavi', description: 'Tender pork bones simmered in a rich traditional sauce.', tags: ['pork'] },
  { name: 'Hairifidzi', price: 3.00, category: 'Traditional Usavi', description: 'Classic Zimbabwean dried meat relish, packed with traditional flavour.', tags: ['traditional'] },
  { name: 'Kariba Bream', price: 7.00, category: 'Traditional Usavi', description: 'Fresh Kariba bream cooked in a traditional tomato and onion sauce.', tags: ['fish', 'fresh'] },
  { name: 'Broiler Chicken Stew', price: 4.00, category: 'Traditional Usavi', description: 'Tender broiler chicken in a rich traditional stew.', tags: ['chicken'] },
  { name: 'Guinea Fowl', price: 5.00, category: 'Traditional Usavi', description: 'Free-range guinea fowl slow-cooked with traditional herbs.', tags: ['specialty'] },
  { name: 'Livers & Kidneys', price: 3.00, category: 'Traditional Usavi', description: 'Pan-fried chicken livers and kidneys in a spiced sauce.', tags: ['chicken'] },
  { name: 'Madora', price: 3.00, category: 'Traditional Usavi', description: 'Dried mopane worms — a cherished Zimbabwean traditional delicacy.', tags: ['traditional', 'delicacy'] },
  { name: 'Mukaka Wakakora', price: 4.00, category: 'Traditional Usavi', description: 'Fermented sour milk — a beloved Zimbabwean cultural staple.', tags: ['traditional'] },

  // ── Contemporary Delicacies ──
  { name: 'Bream', price: 7.00, category: 'Contemporary Delicacies', description: 'Whole bream grilled over open flame, seasoned with lemon and herbs.', tags: ['fish', 'fresh'], isFeatured: true },
  { name: 'Quarter Chicken', price: 4.00, category: 'Contemporary Delicacies', description: 'Crispy fried or grilled quarter chicken, seasoned to perfection.', tags: ['chicken', 'popular'] },
  { name: 'Half Chicken', price: 7.00, category: 'Contemporary Delicacies', description: 'Generous half chicken — grilled or fried with our house seasoning.', tags: ['chicken', 'popular'] },
  { name: 'Chicken Wings', price: 4.50, category: 'Contemporary Delicacies', description: 'Crispy golden chicken wings with your choice of sauce.', tags: ['chicken'] },
  { name: '400g Pork Chop', price: 11.00, category: 'Contemporary Delicacies', description: 'Thick-cut 400g pork chop, grilled and seasoned with our house blend.', tags: ['pork', 'premium'] },
  { name: 'Grilled Sausage', price: 5.00, category: 'Contemporary Delicacies', description: 'Juicy grilled beef sausage served with a side of your choice.', tags: ['beef'] },
  { name: 'T-Bone Steak', price: 5.00, category: 'Contemporary Delicacies', description: 'Classic T-bone steak grilled to your preferred doneness.', tags: ['beef', 'grill'], isFeatured: true },
  { name: 'Rump Steak', price: 5.00, category: 'Contemporary Delicacies', description: 'Tender rump steak grilled and served with chips or sadza.', tags: ['beef', 'grill'] },
  { name: 'Pork Ribs', price: 6.00, category: 'Contemporary Delicacies', description: 'Slow-cooked pork ribs glazed with a rich BBQ-style sauce.', tags: ['pork'] },
  { name: 'Russians', price: 1.00, category: 'Contemporary Delicacies', description: 'Grilled Russian sausage — quick, tasty and satisfying.', tags: ['popular'] },

  // ── Platters ──
  { name: 'Assorted Meat Platter for 4', price: 40.00, category: 'Platters', description: 'Generous sharing platter of assorted grilled meats for 4 people.', tags: ['sharing', 'popular'], isFeatured: true },
  { name: 'Assorted Meat Platter for 2', price: 25.00, category: 'Platters', description: 'Hearty sharing platter of assorted grilled meats for 2 people.', tags: ['sharing'] },

  // ── Tribes Treat ──
  { name: 'Tribes Treat', price: 0.00, category: 'Tribes Treat', description: '3 meats of your choice — mix traditional and contemporary selections.', tags: ['build your own', 'popular'] },

  // ── Contemporary Bites ──
  { name: 'Burger (Chicken/Beef)', price: 3.00, category: 'Contemporary Bites', description: 'Juicy patty in a toasted bun with lettuce, tomato and sauce. Choose chicken or beef.', tags: ['popular', 'weekend deal'] },
  { name: 'Hotdog', price: 2.00, category: 'Contemporary Bites', description: 'Classic hotdog in a soft bun with mustard and relish.', tags: ['weekend deal'] },
  { name: 'Shawarma', price: 3.00, category: 'Contemporary Bites', description: 'Spiced meat wrapped in flatbread with fresh salad and sauce.', tags: ['popular', 'signature'], isFeatured: true },

  // ── Starters ──
  { name: 'Bite & Go', price: 2.00, category: 'Starters', description: 'A quick and tasty starter bite — perfect to kick off your meal.', tags: [] },
  { name: 'Chibage', price: 1.00, category: 'Starters', description: 'Grilled or boiled maize cob — a simple and satisfying starter.', tags: ['vegetarian'] },
  { name: 'Roasted Nuts', price: 1.00, category: 'Starters', description: 'Freshly roasted mixed nuts, lightly salted.', tags: ['vegetarian'] },
  { name: 'Chilli Chicken Feet', price: 1.00, category: 'Starters', description: 'Spicy marinated chicken feet — bold and flavourful.', tags: ['spicy'] },
  { name: 'Chilli Chicken Livers', price: 2.00, category: 'Starters', description: 'Pan-fried chicken livers in a spicy chilli sauce.', tags: ['spicy'] },

  // ── Salads ──
  { name: 'Creamed Spinach', price: 2.00, category: 'Salads', description: 'Rich and creamy spinach — a perfect vegetable side.', tags: ['vegetarian'] },
  { name: 'Roasted Vegetables', price: 1.00, category: 'Salads', description: 'Seasonal vegetables oven-roasted with olive oil and herbs.', tags: ['vegetarian'] },
  { name: 'Garden Salad', price: 3.00, category: 'Salads', description: 'Fresh crisp garden salad with a light vinaigrette dressing.', tags: ['vegetarian'] },
  { name: 'Chicken Salad', price: 4.00, category: 'Salads', description: 'Grilled chicken strips over fresh greens with dressing.', tags: ['chicken', 'popular'] },
  { name: 'Coleslaw', price: 1.00, category: 'Salads', description: 'Creamy homemade coleslaw — crisp and refreshing.', tags: ['vegetarian'] },

  // ── Breakfast ──
  { name: 'Tea & Bread', price: 2.00, category: 'Breakfast', description: 'Hot tea with freshly baked bread — a simple morning classic.', tags: [] },
  { name: 'Mini Breakfast', price: 5.00, category: 'Breakfast', description: 'Eggs, sausage and toast — a light start to your day.', tags: [] },
  { name: 'Traditional Farm Breakfast', price: 6.00, category: 'Breakfast', description: 'Sadza, traditional relish and a boiled egg — the authentic Zimbabwean morning meal.', tags: ['traditional'] },
  { name: 'Full English Breakfast', price: 10.00, category: 'Breakfast', description: 'Eggs, bacon, sausage, baked beans, grilled tomato, mushrooms and toast.', tags: ['popular'], isFeatured: true },

  // ── Desserts ──
  { name: 'Fruit Platter (Seasonal Fruit)', price: 6.00, category: 'Desserts', description: 'A colourful selection of fresh seasonal fruits.', tags: ['vegetarian'] },
  { name: 'Cake Slice (Cake of the Day)', price: 3.00, category: 'Desserts', description: 'A generous slice of our freshly baked cake of the day.', tags: [] },
  { name: 'Ice Cream', price: 2.50, category: 'Desserts', description: 'Creamy scoops of ice cream — classic flavours available.', tags: [] },
  { name: 'Smoothies', price: 3.00, category: 'Desserts', description: 'Fresh blended fruit smoothies — refreshing and nutritious.', tags: ['vegetarian'] },
  { name: 'Custard Cream', price: 2.00, category: 'Desserts', description: 'Smooth velvety custard cream — a comforting classic dessert.', tags: [] },

  // ── Hot Beverages ──
  { name: 'Tea', price: 1.00, category: 'Hot Beverages', description: 'Hot brewed tea — black, green, or herbal on request.', tags: [] },
  { name: 'Coffee', price: 1.00, category: 'Hot Beverages', description: 'Rich hot coffee — americano or white coffee available.', tags: [] },
  { name: 'Hot Chocolate', price: 2.00, category: 'Hot Beverages', description: 'Warm creamy hot chocolate — perfect for a cold day.', tags: [] },

  // ── Cold Beverages ──
  { name: 'Juice Glass', price: 1.50, category: 'Cold Beverages', description: 'Fresh fruit juice by the glass — ask about today\'s flavours.', tags: [] },
  { name: 'Soft Drinks 440ml', price: 1.00, category: 'Cold Beverages', description: 'Chilled 440ml can — Coke, Fanta, Sprite and more.', tags: [] },
  { name: 'Soft Drinks 300ml', price: 0.50, category: 'Cold Beverages', description: 'Chilled 300ml soft drink.', tags: [] },
  { name: 'Shumba Maheu', price: 1.00, category: 'Cold Beverages', description: 'Traditional Zimbabwean maheu — fermented maize drink, refreshing and filling.', tags: ['traditional'] },
  { name: 'Water', price: 0.50, category: 'Cold Beverages', description: 'Still bottled water — chilled.', tags: [] },
  { name: 'Maheu Akavira', price: 2.00, category: 'Cold Beverages', description: 'Premium chilled maheu — smooth and satisfying.', tags: ['traditional'] },
  { name: 'Energy Drinks', price: 2.00, category: 'Cold Beverages', description: 'Chilled energy drink — boost your afternoon.', tags: [] },

  // ── Ciders ──
  { name: 'Hunters Dry', price: 2.00, category: 'Ciders', description: 'Crisp dry apple cider — refreshing and light.', tags: ['alcoholic'] },
  { name: 'Hunters Gold', price: 2.00, category: 'Ciders', description: 'Golden apple cider with a smooth, slightly sweet finish.', tags: ['alcoholic'] },
  { name: 'Savannah', price: 2.00, category: 'Ciders', description: 'South Africa\'s favourite dry lemon cider.', tags: ['alcoholic', 'popular'] },
  { name: 'Zambezi', price: 1.50, category: 'Ciders', description: 'Zimbabwe\'s own lager — light and refreshing.', tags: ['alcoholic', 'local'] },
  { name: 'Flying Fish', price: 2.00, category: 'Ciders', description: 'Flavoured cider with a citrus twist — light and crisp.', tags: ['alcoholic'] },
  { name: 'Brutal Fruit', price: 2.00, category: 'Ciders', description: 'Fruity sparkling cider — bold flavour, easy drinking.', tags: ['alcoholic'] },
  { name: 'Belgravia', price: 2.00, category: 'Ciders', description: 'Premium spirit cooler — smooth and sophisticated.', tags: ['alcoholic'] },

  // ── Mocktails ──
  { name: 'Orange Lemon Mojito', price: 3.00, category: 'Mocktails', description: 'Zesty blend of orange and lemon with fresh mint and soda.', tags: ['non-alcoholic'] },
  { name: 'Double Fizz', price: 3.00, category: 'Mocktails', description: 'Double the fizz — a bubbly mixed fruit mocktail.', tags: ['non-alcoholic'] },
  { name: 'Virgin Mojito', price: 3.00, category: 'Mocktails', description: 'Classic mint and lime mocktail — refreshing and alcohol-free.', tags: ['non-alcoholic'] },
  { name: 'Sprite Splash', price: 3.00, category: 'Mocktails', description: 'Light Sprite-based mocktail with tropical fruit flavours.', tags: ['non-alcoholic'] },

  // ── Cocktails ──
  { name: 'Bar Surprise', price: 5.00, category: 'Cocktails', description: 'The bartender\'s secret mix — a different surprise every time.', tags: ['alcoholic', 'popular'] },
  { name: 'Blue Lagoon', price: 5.00, category: 'Cocktails', description: 'A stunning blue cocktail — sweet, tropical and ice cold.', tags: ['alcoholic'] },
  { name: 'Electric Screwdriver', price: 5.00, category: 'Cocktails', description: 'Classic screwdriver cocktail with a vibrant twist.', tags: ['alcoholic'] },
  { name: 'Nein Rush', price: 4.00, category: 'Cocktails', description: 'A bold energising cocktail — smooth with a kick.', tags: ['alcoholic'] },
  { name: 'Tequila Sunrise', price: 5.00, category: 'Cocktails', description: 'Tequila, orange juice and grenadine — beautiful gradient, beautiful taste.', tags: ['alcoholic', 'popular'] },
  { name: 'Margarita', price: 4.00, category: 'Cocktails', description: 'Classic margarita — tequila, lime and triple sec with a salted rim.', tags: ['alcoholic'] },
  { name: 'Long Island', price: 5.00, category: 'Cocktails', description: 'Long Island Iced Tea — vodka, rum, gin, tequila, triple sec and cola.', tags: ['alcoholic', 'strong'] },
  { name: 'Madras', price: 4.00, category: 'Cocktails', description: 'Vodka, orange juice and cranberry — light, fruity and easy drinking.', tags: ['alcoholic'] },
  { name: 'Tropical Midori Sunrise', price: 5.00, category: 'Cocktails', description: 'Midori melon liqueur with tropical juices — vivid, sweet and refreshing.', tags: ['alcoholic', 'signature'], isFeatured: true },
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