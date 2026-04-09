export const cuisines = {
  name: "Indian Cuisine",
  emoji: "🇮🇳",
  desc: "One of the world's oldest and most diverse culinary traditions, shaped by geography, religion, trade routes, and thousands of years of cultural exchange.",
  dishes: ["Biryani", "Dal", "Roti", "Khichdi"],
  children: [
    {
      name: "North Indian",
      emoji: "🏔️",
      desc: "Characterised by wheat-based breads, rich dairy-heavy gravies, and bold spicing influenced by Mughal and Punjabi traditions.",
      dishes: ["Butter Chicken", "Naan", "Chole Bhature", "Dal Makhani"],
      children: [
        {
          name: "Punjabi",
          emoji: "🌾",
          desc: "Hearty, rustic cuisine centred on tandoor cooking, generous ghee, and dairy. Strongly tied to agricultural festivals.",
          dishes: ["Sarson da Saag", "Makki di Roti", "Amritsari Fish", "Lassi"],
          children: []
        },
        {
          name: "Mughlai",
          emoji: "👑",
          desc: "A royal cuisine born in Mughal courts, defined by dum cooking, saffron, dried fruits, and intricate spice blends.",
          dishes: ["Biryani", "Nihari", "Shahi Tukda", "Seekh Kebab"],
          children: []
        },
        {
          name: "Kashmiri",
          emoji: "❄️",
          desc: "Subtly spiced with Kashmiri chilli and dried ginger, Wazwan — a multi-course feast — is the pinnacle of this tradition.",
          dishes: ["Rogan Josh", "Dum Aloo", "Yakhni", "Sheer Chai"],
          children: []
        },
        {
          name: "Rajasthani",
          emoji: "🏜️",
          desc: "Forged in arid desert conditions — minimal water, sun-dried ingredients, and long-preserving techniques define this cuisine.",
          dishes: ["Dal Baati Churma", "Ker Sangri", "Laal Maas", "Ghevar"],
          children: []
        }
      ]
    },
    {
      name: "South Indian",
      emoji: "🌴",
      desc: "Rice-dominant, coconut-rich, and fermented-batter-based cuisines with deep Dravidian roots and diverse regional identities.",
      dishes: ["Idli", "Dosa", "Sambar", "Rasam"],
      children: [
        {
          name: "Tamil",
          emoji: "🌞",
          desc: "One of the oldest living cuisines — Sangam literature documents Tamil food. Rice, tamarind, and black pepper define it.",
          dishes: ["Chettinad Chicken", "Pongal", "Kuzhambu", "Appam"],
          children: []
        },
        {
          name: "Kerala",
          emoji: "🥥",
          desc: "The Spice Coast's cuisine — coconut milk, curry leaves, and fish cooked in banana leaves over wood fire.",
          dishes: ["Fish Molee", "Sadya", "Puttu & Kadala", "Avial"],
          children: []
        },
        {
          name: "Andhra",
          emoji: "🌶️",
          desc: "Among the spiciest regional cuisines in the world — Guntur chilli is central, and rice anchors every meal.",
          dishes: ["Gongura Mutton", "Pesarattu", "Pulihora", "Gutti Vankaya"],
          children: []
        },
        {
          name: "Karnataka",
          emoji: "🫙",
          desc: "A mosaic of Udupi vegetarian, Kodava non-veg, and Dharwadi robust flavours — united by rice and lentil.",
          dishes: ["Bisi Bele Bath", "Ragi Mudde", "Coorg Pork Curry", "Mysore Pak"],
          children: []
        }
      ]
    },
    {
      name: "East Indian",
      emoji: "🌊",
      desc: "Defined by mustard oil, panch phoron (five-spice), freshwater fish, and a love of fermented and pickled ingredients.",
      dishes: ["Macher Jhol", "Litti Chokha", "Rasgulla", "Pithas"],
      children: [
        {
          name: "Bengali",
          emoji: "🐟",
          desc: "Fish, mustard, and mishti (sweets) — Bengali cuisine is poetic and nuanced, with a six-season philosophy of eating.",
          dishes: ["Kosha Mangsho", "Shorshe Ilish", "Mishti Doi", "Chingri Malai Curry"],
          children: []
        },
        {
          name: "Odia",
          emoji: "🛕",
          desc: "One of India's oldest temple cuisines — Mahaprasad at Jagannath temple is cooked in 752 earthen pots daily.",
          dishes: ["Dalma", "Pakhala Bhata", "Chhena Poda", "Macha Ghanta"],
          children: []
        },
        {
          name: "Assamese",
          emoji: "🍃",
          desc: "Light, low-oil cuisine with a strong reliance on fermentation, bamboo shoots, and black sesame.",
          dishes: ["Masor Tenga", "Khar", "Pitha", "Aloo Pitika"],
          children: []
        }
      ]
    },
    {
      name: "West Indian",
      emoji: "🌅",
      desc: "A vibrant mix of Jain vegetarianism, coastal seafood, and spice-trade-influenced recipes across three distinct states.",
      dishes: ["Dhokla", "Vada Pav", "Fish Curry", "Puran Poli"],
      children: [
        {
          name: "Gujarati",
          emoji: "🫘",
          desc: "Primarily vegetarian, with a sweet-salty-spicy balance. Thali culture is central — a full meal in one plate.",
          dishes: ["Dhokla", "Undhiyu", "Khandvi", "Shrikhand"],
          children: []
        },
        {
          name: "Maharashtrian",
          emoji: "🏙️",
          desc: "From coastal Konkan to dry Vidarbha, the cuisine spans fiery curries, coconut chutneys, and festive sweets.",
          dishes: ["Pav Bhaji", "Misal Pav", "Puran Poli", "Kombdi Vade"],
          children: []
        },
        {
          name: "Goan",
          emoji: "🎸",
          desc: "Portuguese-influenced coastal cuisine — vinegar, coconut, pork, and seafood create a uniquely syncretic kitchen.",
          dishes: ["Vindaloo", "Xacuti", "Bebinca", "Sorpotel"],
          children: []
        }
      ]
    },
    {
      name: "Northeast Indian",
      emoji: "🌿",
      desc: "Seven sisters, seven distinct culinary worlds — bamboo shoots, fermented fish, black sesame, and minimal spice.",
      dishes: ["Jadoh", "Thukpa", "Eromba", "Bamboo Shoot Curry"],
      children: [
        {
          name: "Manipuri",
          emoji: "🏵️",
          desc: "Subtly spiced with Manipuri black rice and raja mircha (bhut jolokia) — one of the world's hottest chillies.",
          dishes: ["Eromba", "Singju", "Chamthong", "Kangshoi"],
          children: []
        },
        {
          name: "Meghalayan",
          emoji: "☁️",
          desc: "Khasi and Jaintia traditions feature smoked pork, black sesame, and fermented soybean — bold umami flavours.",
          dishes: ["Jadoh", "Dohkhlieh", "Nakham Bitchi", "Tungrymbai"],
          children: []
        },
        {
          name: "Sikkimese",
          emoji: "🏔️",
          desc: "Tibetan and Nepali influences blend with local herbs — millet, buckwheat, and fermented vegetables are staples.",
          dishes: ["Thukpa", "Momos", "Gundruk", "Sel Roti"],
          children: []
        }
      ]
    }
  ]
};
