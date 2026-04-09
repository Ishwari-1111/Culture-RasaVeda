export const streetFood = [
  {
    id: 1, name: "Vada Pav", icon: "🥘",
    city: "Mumbai", region: "Maharashtra",
    description: "Spicy potato fritter in a soft bun — the Mumbai burger.",
    price: "₹15", tag: "Vegan",
    featured: true, seasonal: false,
    photoGrad: ["#7c3811","#e06c2b"],
    ingredients: ["Potato", "Bread bun", "Green chutney", "Tamarind chutney", "Gram flour batter", "Dried garlic chutney"],
    bestPlaces: ["Ashok Vada Pav – Dadar", "Samrat – Andheri", "Any railway station stall"],
    funFacts: ["Named after 'vada' (fritter) and 'pav' (Portuguese bread).", "Maharashtra declared it the state's official street food.", "Over 1 crore vada pavs are sold in Mumbai every day."]
  },
  {
    id: 2, name: "Pani Puri", icon: "🥗",
    city: "Pan India", region: "Pan India",
    description: "Hollow fried balls filled with tangy tamarind water and chickpeas.",
    price: "₹20", tag: "Vegan",
    featured: true, seasonal: false,
    photoGrad: ["#1a5c2e","#3db870"],
    ingredients: ["Semolina shells", "Spiced water (jaljeera)", "Tamarind chutney", "Boiled chickpeas", "Mashed potato", "Black salt"],
    bestPlaces: ["Elco Market – Mumbai", "Chandni Chowk stalls – Delhi", "New Market – Kolkata"],
    funFacts: ["Known as Golgappa in North India and Phuchka in West Bengal.", "The shells are made of suji (semolina) or whole wheat.", "Eating pani puri is considered a social ritual across India."]
  },
  {
    id: 3, name: "Kathi Roll", icon: "🌯",
    city: "Kolkata", region: "West Bengal",
    description: "Spiced egg or chicken wrapped in a flaky paratha.",
    price: "₹40", tag: "Non-Veg",
    featured: false, seasonal: false,
    photoGrad: ["#5c3511","#c97a2e"],
    ingredients: ["Whole wheat paratha", "Egg / Chicken", "Onion rings", "Green chutney", "Kali mirch", "Lemon juice"],
    bestPlaces: ["Nizam's – Kolkata (the originator)", "Calcutta Kathi Roll – Multiple cities", "Bedwin – Park Street, Kolkata"],
    funFacts: ["Invented at Nizam's restaurant in 1932.", "The egg coating on the paratha is the signature move.", "'Kathi' refers to the skewer used to cook the filling."]
  },
  {
    id: 4, name: "Chole Bhature", icon: "🍛",
    city: "Delhi", region: "Punjab",
    description: "Fluffy deep-fried bread with spiced chickpea curry.",
    price: "₹60", tag: "Veg",
    featured: true, seasonal: false,
    photoGrad: ["#5c4511","#c9a12e"],
    ingredients: ["Chickpeas", "Deep-fried bhatura dough", "Onion tomato gravy", "Anardana", "Ginger-garlic paste", "Pickle"],
    bestPlaces: ["Sita Ram Diwan Chand – Paharganj, Delhi", "Haldiram's", "Kake Di Hatti – Connaught Place"],
    funFacts: ["A classic Punjabi breakfast dish.", "The bhatura dough is fermented overnight for fluffiness.", "Chole bhature is so beloved it has its own national day on November 7."]
  },
  {
    id: 5, name: "Momos", icon: "🥟",
    city: "Delhi", region: "Sikkim",
    description: "Steamed dumplings stuffed with vegetables or meat.",
    price: "₹50", tag: "Non-Veg",
    featured: false, seasonal: false,
    photoGrad: ["#1a3a5c","#3d7ab8"],
    ingredients: ["Maida dough", "Minced chicken / vegetables", "Ginger", "Garlic", "Spring onion", "Spicy red chutney"],
    bestPlaces: ["Dolma aunty's Stall – Lajpat Nagar, Delhi", "Wangchuk's – Sikkim", "Any Delhi college canteen"],
    funFacts: ["Originated in Tibet and Nepal, popularised across India.", "Delhi alone has over 30,000 momo street stalls.", "Momos are the most searched Indian street food online."]
  },
  {
    id: 6, name: "Medu Vada", icon: "🧆",
    city: "Chennai", region: "Tamil Nadu",
    description: "Crispy savory lentil doughnuts served with coconut chutney.",
    price: "₹25", tag: "Vegan",
    featured: false, seasonal: false,
    photoGrad: ["#5c3811","#c97a30"],
    ingredients: ["Urad dal batter", "Curry leaves", "Ginger", "Green chilies", "Coconut chutney", "Sambar"],
    bestPlaces: ["Saravana Bhavan – Pan India", "Hotel Murugan Idli Shop – Chennai", "Annapoorna – Coimbatore"],
    funFacts: ["Medu means 'soft' in Kannada.", "It's traditionally eaten at breakfast with idli.", "The perfect medu vada has a crispy outside and soft inside."]
  },
  {
    id: 7, name: "Dabeli", icon: "🫓",
    city: "Ahmedabad", region: "Gujarat",
    description: "Sweet-spicy potato filling in a bun, topped with pomegranate.",
    price: "₹30", tag: "Veg",
    featured: false, seasonal: true,
    photoGrad: ["#5c2611","#c95a2e"],
    ingredients: ["Potato filling", "Dabeli masala", "Pav bun", "Pomegranate seeds", "Roasted peanuts", "Sweet chutney", "Sev"],
    bestPlaces: ["Raju Dabeli – Kutch", "Swati Snacks – Ahmedabad", "Manek Chowk stalls – Ahmedabad"],
    funFacts: ["Invented in the 1950s in Mandvi, Kutch by Keshavji Gabha Chudasama.", "Dabeli means 'pressed' in Kutchi.", "Pomegranate is what sets authentic dabeli apart."]
  },
  {
    id: 8, name: "Pav Bhaji", icon: "🍲",
    city: "Mumbai", region: "Maharashtra",
    description: "Buttery mashed vegetable curry served with toasted bread rolls.",
    price: "₹50", tag: "Veg",
    featured: true, seasonal: false,
    photoGrad: ["#6b1a1a","#d84040"],
    ingredients: ["Mixed vegetables", "Butter", "Pav bhaji masala", "Tomatoes", "Pav buns", "Lemon", "Onions"],
    bestPlaces: ["Sardar Pav Bhaji – Tardeo, Mumbai", "Cannon Pav Bhaji – CST, Mumbai", "Juhu Beach stalls"],
    funFacts: ["Invented in the 1850s as a quick meal for textile mill workers in Mumbai.", "The buttered pav is toasted on the same iron griddle as the bhaji.", "Pav bhaji masala is a unique spice blend exclusive to this dish."]
  },
  {
    id: 9, name: "Aloo Tikki", icon: "🥔",
    city: "Delhi", region: "Uttar Pradesh",
    description: "Crispy fried potato patties topped with chutneys and chaat.",
    price: "₹20", tag: "Vegan",
    featured: false, seasonal: false,
    photoGrad: ["#4a4a1a","#a0a02e"],
    ingredients: ["Boiled potatoes", "Spices", "Breadcrumbs", "Green chutney", "Tamarind chutney", "Yogurt", "Sev"],
    bestPlaces: ["Bengali Market – Delhi", "Haldiram's", "Vaishno Devi Aloo Tikki – Karol Bagh"],
    funFacts: ["A staple of North Indian street food for centuries.", "McDonald's India introduced an Aloo Tikki burger inspired by it.", "It's the base of the popular 'ragda patties' dish too."]
  },
  {
    id: 10, name: "Jalebi", icon: "🍩",
    city: "Pan India", region: "Pan India",
    description: "Deep-fried wheat batter spirals soaked in saffron-flavored syrup.",
    price: "₹25", tag: "Veg",
    featured: false, seasonal: true,
    photoGrad: ["#7a4a00","#f5a623"],
    ingredients: ["Maida batter", "Saffron syrup", "Ghee", "Cardamom", "Rose water", "Sugar"],
    bestPlaces: ["Old Famous Jalebi Wala – Chandni Chowk, Delhi", "Jalebi-Fafda stalls – Ahmedabad", "Sri Mithai – Hyderabad"],
    funFacts: ["India's love for jalebi dates back over 500 years.", "Jalebi is made fresh and served piping hot — never cold.", "Paired with rabri in Varanasi and fafda in Gujarat."]
  },
  {
    id: 11, name: "Bhelpuri", icon: "🥣",
    city: "Mumbai", region: "Maharashtra",
    description: "Crunchy mix of puffed rice, sev, tomatoes, and tangy chutneys.",
    price: "₹20", tag: "Vegan",
    featured: false, seasonal: false,
    photoGrad: ["#3a3a1a","#8a8a2e"],
    ingredients: ["Puffed rice", "Sev", "Tomatoes", "Onions", "Tamarind chutney", "Green chutney", "Peanuts"],
    bestPlaces: ["Chowpatty Beach – Mumbai", "Juhu Beach stalls", "Matunga Market – Mumbai"],
    funFacts: ["Bhel means a 'mixture' in Hindi/Marathi.", "There are over 50 regional variations across India.", "Eating bhelpuri on a Mumbai beach is a rite of passage."]
  },
  {
    id: 12, name: "Idli Sambar", icon: "🫙",
    city: "Bangalore", region: "Karnataka",
    description: "Steamed rice cakes served with lentil vegetable stew.",
    price: "₹30", tag: "Vegan",
    featured: false, seasonal: false,
    photoGrad: ["#1a3a1a","#2e8a3a"],
    ingredients: ["Rice", "Urad dal", "Toor dal", "Vegetables", "Tamarind", "Sambar powder", "Coconut chutney"],
    bestPlaces: ["CTR – Malleshwaram, Bangalore", "Vidyarthi Bhavan – Gandhi Bazaar", "Saravana Bhavan – Pan India"],
    funFacts: ["Idli is one of the healthiest street foods — steamed, no oil.", "Bangalore has over 6,000 idli stalls.", "The fermentation of batter takes 8–12 hours for authentic taste."]
  },
];

export const featuredStreetFood = streetFood.filter(f => f.featured);