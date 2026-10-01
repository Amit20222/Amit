/* ==========================================================================
   ROOCO GAMING — Complete E-Commerce Application Architecture
   ========================================================================== */

// --- REALISTIC PRODUCT CATALOGUE DATABASE ---
const PRODUCTS_DB = [
  {
    id: "ps5-pro",
    sku: "RC-CON-PS5PRO-01",
    name: "Sony PlayStation 5 Pro Console",
    slug: "ps5-pro",
    platform: "PlayStation",
    category: "Consoles",
    brand: "Sony",
    price: 68990,
    mrp: 74990,
    discount: 8,
    rating: 4.9,
    reviewCount: 428,
    stock: 12,
    badge: "PRO",
    isFeatured: true,
    isTrending: true,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80"
    ],
    storage: "2TB SSD",
    resolution: "4K 120Hz / 8K Ready",
    hdr: "Supported",
    connectivity: "Wi-Fi 7 / Ethernet / Bluetooth 5.3",
    controller: "1x DualSense Wireless",
    warranty: "1 Year Sony Official Warranty",
    description: "Experience unprecedented graphical fidelity and blazing fast framerates with PlayStation Spectral Super Resolution (PSSR), advanced Ray Tracing, and 2TB custom SSD storage.",
    condition: "New",
    specs: {
      "GPU": "Advanced RDNA Ray Tracing Architecture",
      "CPU": "8-core / 16-thread Zen 2",
      "Memory": "16GB GDDR6 + 2GB DDR5",
      "Audio": "Tempest 3D AudioTech",
      "Disc Drive": "Digital Edition (Disc Drive Sold Separately)"
    }
  },
  {
    id: "ps5-slim-disc",
    sku: "RC-CON-PS5SLIM-02",
    name: "Sony PlayStation 5 Slim Disc Edition",
    slug: "ps5-slim-disc",
    platform: "PlayStation",
    category: "Consoles",
    brand: "Sony",
    price: 49990,
    mrp: 54990,
    discount: 9,
    rating: 4.8,
    reviewCount: 1284,
    stock: 35,
    badge: "BESTSELLER",
    isFeatured: true,
    isTrending: true,
    isDeal: false,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80"
    ],
    storage: "1TB SSD",
    resolution: "4K 120Hz",
    hdr: "Supported",
    connectivity: "Wi-Fi 6 / Ethernet",
    controller: "1x DualSense Wireless",
    warranty: "1 Year Official Warranty",
    description: "Sleek compact design packed with immense power, ultra-high speed SSD, haptic feedback, adaptive triggers, and Ultra HD Blu-ray disc player.",
    condition: "New",
    specs: {
      "GPU": "10.28 TFLOPs RDNA 2",
      "CPU": "AMD Zen 2 3.5GHz",
      "Memory": "16GB GDDR6",
      "Disc Drive": "Ultra HD Blu-ray Included"
    }
  },
  {
    id: "xbox-series-x",
    sku: "RC-CON-XBSX-01",
    name: "Microsoft Xbox Series X 1TB Console",
    slug: "xbox-series-x",
    platform: "Xbox",
    category: "Consoles",
    brand: "Microsoft",
    price: 52990,
    mrp: 55990,
    discount: 5,
    rating: 4.8,
    reviewCount: 940,
    stock: 18,
    badge: "POWERHOUSE",
    isFeatured: true,
    isTrending: true,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80"
    ],
    storage: "1TB Custom NVMe SSD",
    resolution: "True 4K Gaming / 120FPS",
    hdr: "Dolby Vision & Dolby Atmos",
    connectivity: "Wi-Fi 5 / Ethernet",
    controller: "1x Xbox Wireless Controller",
    warranty: "1 Year Microsoft Warranty",
    description: "The fastest, most powerful Xbox ever. Play thousands of titles across four generations of console with Quick Resume and 12 Teraflops of raw power.",
    condition: "New",
    specs: {
      "GPU": "12 TFLOPS 52 CUs RDNA 2",
      "CPU": "8X Cores @ 3.8 GHz Custom Zen 2",
      "Memory": "16GB GDDR6",
      "Disc Drive": "4K UHD Blu-ray"
    }
  },
  {
    id: "xbox-series-s",
    sku: "RC-CON-XBSS-02",
    name: "Microsoft Xbox Series S 512GB (Robot White)",
    slug: "xbox-series-s",
    platform: "Xbox",
    category: "Consoles",
    brand: "Microsoft",
    price: 32990,
    mrp: 37990,
    discount: 13,
    rating: 4.6,
    reviewCount: 1105,
    stock: 40,
    badge: "POPULAR",
    isFeatured: true,
    isTrending: false,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=800&q=80"
    ],
    storage: "512GB NVMe SSD",
    resolution: "1440p up to 120FPS",
    hdr: "Supported",
    connectivity: "Wi-Fi 5 / Ethernet",
    controller: "1x Xbox Controller",
    warranty: "1 Year Warranty",
    description: "Next-gen performance in the smallest Xbox ever. Pure digital speed with Xbox Game Pass integration.",
    condition: "New",
    specs: {
      "GPU": "4 TFLOPS RDNA 2",
      "CPU": "Custom Zen 2",
      "Memory": "10GB GDDR6"
    }
  },
  {
    id: "nintendo-switch-oled",
    sku: "RC-CON-NSW-OLED",
    name: "Nintendo Switch OLED Model (White)",
    slug: "nintendo-switch-oled",
    platform: "Nintendo",
    category: "Consoles",
    brand: "Nintendo",
    price: 31990,
    mrp: 35990,
    discount: 11,
    rating: 4.9,
    reviewCount: 760,
    stock: 22,
    badge: "OLED DISPLAY",
    isFeatured: true,
    isTrending: true,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80"
    ],
    storage: "64GB Internal + MicroSD Slot",
    resolution: "720p Handheld / 1080p TV",
    hdr: "Vibrant OLED",
    connectivity: "Wi-Fi / Wired LAN Dock",
    controller: "2x Joy-Con Controllers",
    warranty: "1 Year Seller Warranty",
    description: "7-inch vibrant OLED screen, wide adjustable stand, wired LAN port dock, and 64 GB internal storage.",
    condition: "New",
    specs: {
      "Screen": "7-inch OLED Touchscreen",
      "Battery Life": "4.5 to 9 hours",
      "Modes": "TV, Tabletop, Handheld"
    }
  },
  {
    id: "nintendo-switch-2",
    sku: "RC-CON-NSW-2",
    name: "Nintendo Switch 2 Next-Gen Console",
    slug: "nintendo-switch-2",
    platform: "Nintendo",
    category: "Consoles",
    brand: "Nintendo",
    price: 39990,
    mrp: 44990,
    discount: 11,
    rating: 5.0,
    reviewCount: 310,
    stock: 8,
    badge: "NEW ARRIVAL",
    isFeatured: true,
    isTrending: true,
    isDeal: false,
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80"
    ],
    storage: "256GB SSD",
    resolution: "1080p 120Hz Handheld / 4K DLSS TV",
    hdr: "OLED HDR",
    connectivity: "Wi-Fi 6E / LAN",
    controller: "Magnetic Joy-Con 2 Pro",
    warranty: "1 Year Official Warranty",
    description: "Next generation hybrid console featuring Nvidia DLSS 3.5 frame generation, backward compatibility, and magnetic attachment Joy-Cons.",
    condition: "New",
    specs: {
      "Screen": "8-inch 120Hz HDR",
      "GPU": "Nvidia Ampere Architecture with Ray Tracing",
      "DLSS": "Supported"
    }
  },
  {
    id: "dualsense-black",
    sku: "RC-CTR-DS-BLK",
    name: "Sony DualSense Wireless Controller (Midnight Black)",
    slug: "dualsense-midnight-black",
    platform: "PlayStation",
    category: "Controllers",
    brand: "Sony",
    price: 5990,
    mrp: 6390,
    discount: 6,
    rating: 4.8,
    reviewCount: 2150,
    stock: 50,
    badge: "MUST HAVE",
    isFeatured: false,
    isTrending: true,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"
    ],
    connectivity: "Bluetooth / USB-C",
    warranty: "6 Months Sony Warranty",
    description: "Discover a deeper, highly immersive gaming experience with innovative haptic feedback and dynamic trigger effects.",
    condition: "New",
    specs: {
      "Haptics": "Dual actuators replace traditional rumble",
      "Audio": "Built-in mic and 3.5mm jack",
      "Motion": "Built-in accelerometer and gyroscope"
    }
  },
  {
    id: "dualsense-edge",
    sku: "RC-CTR-DSEDGE",
    name: "Sony DualSense Edge Pro Wireless Controller",
    slug: "dualsense-edge-pro",
    platform: "PlayStation",
    category: "Controllers",
    brand: "Sony",
    price: 18990,
    mrp: 20990,
    discount: 10,
    rating: 4.9,
    reviewCount: 380,
    stock: 14,
    badge: "ELITE GEAR",
    isFeatured: true,
    isTrending: false,
    isDeal: false,
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80"
    ],
    connectivity: "Braided USB-C / Low latency Wireless",
    warranty: "1 Year Official Warranty",
    description: "Customizable controls, remappable buttons, swappable stick modules, back buttons, and adjustable trigger stops.",
    condition: "New",
    specs: {
      "Back Buttons": "2 Customizable Sets included",
      "Stick Modules": "Replaceable Module Design",
      "Carrying Case": "Included Premium Case"
    }
  },
  {
    id: "xbox-elite-series-2",
    sku: "RC-CTR-XBELITE",
    name: "Xbox Elite Wireless Controller Series 2",
    slug: "xbox-elite-series-2",
    platform: "Xbox",
    category: "Controllers",
    brand: "Microsoft",
    price: 15990,
    mrp: 17990,
    discount: 11,
    rating: 4.7,
    reviewCount: 890,
    stock: 19,
    badge: "PRO PICK",
    isFeatured: true,
    isTrending: true,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80"
    ],
    connectivity: "Xbox Wireless / Bluetooth / USB-C",
    warranty: "1 Year Microsoft Warranty",
    description: "Adjustable-tension thumbsticks, wrap-around rubberized grip, shorter hair trigger locks, and limitless customization in Xbox Accessories app.",
    condition: "New",
    specs: {
      "Battery": "Up to 40 hours rechargeable",
      "Paddles": "4 Interchangeable Paddles",
      "Compatibility": "Xbox Series X|S, One, Windows PC"
    }
  },
  {
    id: "nintendo-pro-controller",
    sku: "RC-CTR-NSWPRO",
    name: "Nintendo Switch Pro Controller",
    slug: "nintendo-switch-pro-controller",
    platform: "Nintendo",
    category: "Controllers",
    brand: "Nintendo",
    price: 5490,
    mrp: 5990,
    discount: 8,
    rating: 4.9,
    reviewCount: 1420,
    stock: 30,
    badge: "ESSENTIAL",
    isFeatured: false,
    isTrending: true,
    isDeal: false,
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80"
    ],
    connectivity: "Wireless / USB-C",
    warranty: "6 Months Warranty",
    description: "Premium grip controller with motion controls, HD rumble, built-in amiibo functionality, and long-lasting battery life.",
    condition: "New",
    specs: {
      "Amiibo": "NFC touchpoint included",
      "Rumble": "HD Rumble technology"
    }
  },
  {
    id: "gta-6-ps5",
    sku: "RC-GME-GTA6-PS5",
    name: "Grand Theft Auto VI (PS5 Physical Disc)",
    slug: "gta-6-ps5",
    platform: "PlayStation",
    category: "Games",
    genre: "Open World / Action",
    brand: "Rockstar Games",
    price: 5999,
    mrp: 6499,
    discount: 7,
    rating: 5.0,
    reviewCount: 4900,
    stock: 100,
    badge: "MOST WANTED",
    isFeatured: true,
    isTrending: true,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
    ],
    warranty: "Physical Disc Exchange Guarantee",
    description: "Welcome to Leonida. GTA VI sets the standard for open-world gaming immersion in Vice City and beyond.",
    condition: "New Physical Sealed Disc",
    specs: {
      "Publisher": "Rockstar Games",
      "Genre": "Action-Adventure / Open World",
      "Players": "1 Player (Multiplayer Mode Included)"
    }
  },
  {
    id: "elden-ring-shadow",
    sku: "RC-GME-ER-PS5",
    name: "Elden Ring: Shadow of the Erdtree Edition (PS5)",
    slug: "elden-ring-shadow-ps5",
    platform: "PlayStation",
    category: "Games",
    genre: "RPG / Action",
    brand: "Bandai Namco",
    price: 4499,
    mrp: 4999,
    discount: 10,
    rating: 4.9,
    reviewCount: 1650,
    stock: 45,
    badge: "GOTY CANDIDATE",
    isFeatured: true,
    isTrending: true,
    isDeal: false,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80"
    ],
    description: "The critically acclaimed action RPG expansion. Journey to the Realm of Shadow to uncover dark secrets.",
    condition: "New Physical Sealed Disc",
    specs: {
      "Developer": "FromSoftware",
      "Genre": "Action RPG / Souls-like"
    }
  },
  {
    id: "spider-man-2-ps5",
    sku: "RC-GME-SM2-PS5",
    name: "Marvel's Spider-Man 2 (PS5 Disc Edition)",
    slug: "spider-man-2-ps5",
    platform: "PlayStation",
    category: "Games",
    genre: "Action / Adventure",
    brand: "Sony Interactive Entertainment",
    price: 4299,
    mrp: 4999,
    discount: 14,
    rating: 4.9,
    reviewCount: 2310,
    stock: 60,
    badge: "BLOCKBUSTER",
    isFeatured: false,
    isTrending: true,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Spider-Men Peter Parker and Miles Morales return for an exciting new adventure in Marvel's New York.",
    condition: "New Physical Sealed Disc",
    specs: {
      "Developer": "Insomniac Games",
      "Genre": "Action / Adventure"
    }
  },
  {
    id: "zelda-totk-switch",
    sku: "RC-GME-TOTK-NSW",
    name: "The Legend of Zelda: Tears of the Kingdom (Nintendo Switch)",
    slug: "zelda-tears-of-the-kingdom",
    platform: "Nintendo",
    category: "Games",
    genre: "Adventure / Open World",
    brand: "Nintendo",
    price: 4199,
    mrp: 4799,
    discount: 12,
    rating: 5.0,
    reviewCount: 3800,
    stock: 32,
    badge: "MASTERPIECE",
    isFeatured: true,
    isTrending: true,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An epic adventure awaits across the land and skies of Hyrule in this masterpiece sequel to Breath of the Wild.",
    condition: "New Physical Game Card",
    specs: {
      "Developer": "Nintendo EPD",
      "Genre": "Action-Adventure"
    }
  },
  {
    id: "halo-infinite-xbox",
    sku: "RC-GME-HALO-XBSX",
    name: "Halo Infinite Steelbook Edition (Xbox Series X)",
    slug: "halo-infinite-xbox-series-x",
    platform: "Xbox",
    category: "Games",
    genre: "Shooter / Sci-Fi",
    brand: "Xbox Game Studios",
    price: 3499,
    mrp: 4499,
    discount: 22,
    rating: 4.6,
    reviewCount: 910,
    stock: 25,
    badge: "STEELBOOK",
    isFeatured: false,
    isTrending: false,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
    ],
    description: "When all hope is lost, Master Chief is ready to confront the most ruthless foe he has ever faced.",
    condition: "New Physical Sealed Disc",
    specs: {
      "Developer": "343 Industries",
      "Genre": "First Person Shooter"
    }
  },
  {
    id: "pulse-3d-headset",
    sku: "RC-ACC-PULSE3D",
    name: "Sony Pulse 3D Wireless Headset (PS5 / PC)",
    slug: "pulse-3d-wireless-headset",
    platform: "PlayStation",
    category: "Accessories",
    brand: "Sony",
    price: 8990,
    mrp: 9990,
    discount: 10,
    rating: 4.7,
    reviewCount: 1540,
    stock: 28,
    badge: "3D AUDIO",
    isFeatured: true,
    isTrending: true,
    isDeal: false,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
    ],
    connectivity: "Wireless Adapter / 3.5mm Jack",
    warranty: "1 Year Official Warranty",
    description: "Fine-tuned for 3D Audio on PS5 consoles. Features dual noise-cancelling microphones and USB Type-C charging.",
    condition: "New",
    specs: {
      "Battery": "Up to 12 hours wireless play",
      "Microphone": "Dual noise-cancelling mics"
    }
  },
  {
    id: "wd-black-2tb-ssd",
    sku: "RC-ACC-SSD-2TB",
    name: "WD_BLACK SN850X 2TB NVMe SSD with Heatsink for PS5",
    slug: "wd-black-2tb-nvme-ssd-ps5",
    platform: "PlayStation",
    category: "Accessories",
    brand: "Western Digital",
    price: 14990,
    mrp: 18990,
    discount: 21,
    rating: 4.9,
    reviewCount: 670,
    stock: 15,
    badge: "7300 MB/s",
    isFeatured: false,
    isTrending: true,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80"
    ],
    warranty: "5 Years Manufacturer Warranty",
    description: "Officially licensed M.2 NVMe SSD for PS5 consoles featuring integrated heatsink and speeds up to 7300 MB/s.",
    condition: "New",
    specs: {
      "Form Factor": "M.2 2280 with Heatsink",
      "Speed": "Up to 7300MB/s Read"
    }
  },
  {
    id: "bundle-ps5-spiderman",
    sku: "RC-BDL-PS5-SM2",
    name: "PS5 Slim + Extra Controller + Spider-Man 2 Bundle",
    slug: "ps5-slim-spiderman-bundle",
    platform: "PlayStation",
    category: "Bundles",
    brand: "Sony",
    price: 57990,
    mrp: 64990,
    discount: 10,
    rating: 5.0,
    reviewCount: 810,
    stock: 10,
    badge: "BEST VALUE",
    isFeatured: true,
    isTrending: true,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80"
    ],
    warranty: "1 Year Official Warranty",
    description: "The ultimate gaming package: PlayStation 5 Slim 1TB, 2x DualSense Controllers, and Marvel's Spider-Man 2 disc game.",
    condition: "New Bundle",
    specs: {
      "Includes": "PS5 Slim, 2x DualSense (White+Black), Spider-Man 2 Disc"
    }
  }
];

// --- APP GLOBAL STATE MANAGEMENT ---
class AppState {
  constructor() {
    this.products = JSON.parse(localStorage.getItem('rooco_products')) || PRODUCTS_DB;
    this.cart = JSON.parse(localStorage.getItem('rooco_cart')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('rooco_wishlist')) || [];
    this.orders = JSON.parse(localStorage.getItem('rooco_orders')) || [
      {
        id: "ROOCO-89421",
        date: "2026-09-28",
        status: "Out for Delivery",
        total: 57990,
        items: [
          { name: "PS5 Slim + Spider-Man 2 Bundle", qty: 1, price: 57990, image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80" }
        ],
        address: "702 Cyber City Towers, HSR Layout, Bengaluru, Karnataka - 560102"
      }
    ];
    this.user = JSON.parse(localStorage.getItem('rooco_user')) || {
      name: "Alex Mercer",
      email: "alex.gamer@rooco.in",
      phone: "+91 98765 43210",
      pincode: "560102"
    };
    this.appliedCoupon = null;
    this.compareList = [];
  }

  save() {
    localStorage.setItem('rooco_products', JSON.stringify(this.products));
    localStorage.setItem('rooco_cart', JSON.stringify(this.cart));
    localStorage.setItem('rooco_wishlist', JSON.stringify(this.wishlist));
    localStorage.setItem('rooco_orders', JSON.stringify(this.orders));
    localStorage.setItem('rooco_user', JSON.stringify(this.user));
  }

  addToCart(productId, qty = 1) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;
    const existing = this.cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({ ...product, qty });
    }
    this.save();
    showToast(`Added "${product.name}" to cart!`, 'cyan');
    updateHeaderCounts();
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.save();
    updateHeaderCounts();
    renderCartDrawer();
  }

  updateCartQty(productId, qty) {
    const item = this.cart.find(i => i.id === productId);
    if (item) {
      item.qty = Math.max(1, qty);
      this.save();
      updateHeaderCounts();
      renderCartDrawer();
    }
  }

  toggleWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    const product = this.products.find(p => p.id === productId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      showToast(`Removed "${product.name}" from wishlist`, 'muted');
    } else {
      this.wishlist.push(productId);
      showToast(`Added "${product.name}" to wishlist!`, 'purple');
    }
    this.save();
    updateHeaderCounts();
  }

  getCartTotals() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discountAmount = this.appliedCoupon ? Math.round(subtotal * this.appliedCoupon.rate) : 0;
    const shipping = subtotal >= 5000 || subtotal === 0 ? 0 : 250;
    const grandTotal = subtotal - discountAmount + shipping;
    return { subtotal, discountAmount, shipping, grandTotal };
  }
}

const state = new AppState();

// --- ROUTER ENGINE ---
function navigateTo(hash) {
  window.location.hash = hash;
}

function handleRoute() {
  const hash = window.location.hash || '#home';
  const appView = document.getElementById('app-view');
  window.scrollTo(0, 0);

  // Parse Hash
  if (hash === '#home' || hash === '') {
    renderHomeView(appView);
  } else if (hash.startsWith('#shop')) {
    const params = new URLSearchParams(hash.split('?')[1] || '');
    renderShopView(appView, params);
  } else if (hash.startsWith('#product/')) {
    const productId = hash.replace('#product/', '').split('?')[0];
    renderPdpView(appView, productId);
  } else if (hash === '#compare') {
    renderCompareView(appView);
  } else if (hash === '#finder') {
    renderFinderView(appView);
  } else if (hash === '#deals') {
    renderDealsView(appView);
  } else if (hash === '#games') {
    renderGamesView(appView);
  } else if (hash === '#cart') {
    renderCartView(appView);
  } else if (hash === '#checkout') {
    renderCheckoutView(appView);
  } else if (hash.startsWith('#order-success/')) {
    const orderId = hash.replace('#order-success/', '');
    renderOrderSuccessView(appView, orderId);
  } else if (hash.startsWith('#account')) {
    const tab = hash.split('/')[1] || 'overview';
    renderAccountView(appView, tab);
  } else if (hash === '#wishlist') {
    renderAccountView(appView, 'wishlist');
  } else if (hash.startsWith('#admin')) {
    const tab = hash.split('/')[1] || 'dashboard';
    renderAdminView(appView, tab);
  } else {
    renderNotFoundView(appView);
  }

  updateNavActiveStates(hash);
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', () => {
  updateHeaderCounts();
  handleRoute();
  setupSearchOverlay();
});

// --- HEADER COUNTS & NAV ---
function updateHeaderCounts() {
  const cartCountEl = document.getElementById('cart-badge-count');
  const wishlistCountEl = document.getElementById('wishlist-badge-count');
  const cartTotalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  
  if (cartCountEl) cartCountEl.textContent = cartTotalQty;
  if (wishlistCountEl) wishlistCountEl.textContent = state.wishlist.length;
}

function updateNavActiveStates(hash) {
  document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(el => {
    const href = el.getAttribute('href');
    if (href && hash.startsWith(href)) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

// --- UTILITY FORMATTERS ---
function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}

function showToast(message, type = 'cyan') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i data-lucide="${type === 'purple' ? 'heart' : 'check-circle'}" style="color: var(--accent-${type === 'purple' ? 'purple' : 'cyan'})"></i>
    <span style="font-size: 0.9rem; font-weight: 600;">${message}</span>
  `;
  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- VIEW RENDERERS ---

// 1. HOMEPAGE VIEW
function renderHomeView(container) {
  const featuredConsoles = state.products.filter(p => p.category === 'Consoles').slice(0, 4);
  const trendingGames = state.products.filter(p => p.category === 'Games').slice(0, 4);
  const hotDeals = state.products.filter(p => p.isDeal).slice(0, 4);
  const controllers = state.products.filter(p => p.category === 'Controllers').slice(0, 4);

  container.innerHTML = `
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="hero-backdrop-glow"></div>
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="hero-tag">
            <span class="badge badge-cyan"><i data-lucide="zap"></i> NEXT-GEN GAMING MARKETPLACE</span>
          </div>
          <h1 class="hero-headline">LEVEL UP<br><span class="gradient-text">YOUR PLAY.</span></h1>
          <p class="hero-subheading">Consoles, physical disc games, elite controllers and high-performance gaming gear delivered with authentic manufacturer warranty.</p>
          <div class="hero-actions">
            <a href="#shop?category=Consoles" class="btn btn-primary btn-lg">
              <i data-lucide="gamepad-2"></i> SHOP CONSOLES
            </a>
            <a href="#games" class="btn btn-secondary btn-lg">
              <i data-lucide="disc"></i> EXPLORE GAMES
            </a>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-value">100%</span>
              <span class="stat-label">Genuine Products</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">₹5,000+</span>
              <span class="stat-label">Free Express Shipping</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">4.9 ★</span>
              <span class="stat-label">Gamer Ratings</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-card-main">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80" alt="PS5 Pro">
            <div class="hero-floating-badge">
              <div>
                <span class="badge badge-purple">FEATURED RELEASE</span>
                <h4 class="font-heading" style="margin-top: 0.25rem;">Sony PlayStation 5 Pro</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted);">PSSR 4K 120FPS • 2TB Custom SSD</p>
              </div>
              <a href="#product/ps5-pro" class="btn btn-primary btn-sm">VIEW</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 1: FEATURED CONSOLES -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="section-subtitle">NEXT-GEN HARDWARE</span>
            <h2 class="section-title">FEATURED CONSOLES</h2>
          </div>
          <a href="#shop?category=Consoles" class="btn btn-outline btn-sm">SEE ALL CONSOLES <i data-lucide="chevron-right"></i></a>
        </div>
        <div class="products-grid">
          ${featuredConsoles.map(p => renderProductCardHTML(p)).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION 2: SHOP BY PLATFORM -->
    <section class="section" style="background: var(--bg-surface-0); border-y: 1px solid var(--border-subtle);">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="section-subtitle">CHOOSE YOUR ECOSYSTEM</span>
            <h2 class="section-title">SHOP BY PLATFORM</h2>
          </div>
        </div>
        <div class="platform-grid">
          <div class="platform-card platform-card-ps" onclick="navigateTo('#shop?platform=PlayStation')">
            <span class="badge badge-ps" style="width: fit-content;">PLAYSTATION</span>
            <h3 class="platform-card-title">PS5 & PS4</h3>
            <span class="platform-card-count">Consoles, DualSense & Games</span>
          </div>
          <div class="platform-card platform-card-xbox" onclick="navigateTo('#shop?platform=Xbox')">
            <span class="badge badge-xbox" style="width: fit-content;">XBOX</span>
            <h3 class="platform-card-title">Series X | S</h3>
            <span class="platform-card-count">Consoles, Controllers & Game Pass</span>
          </div>
          <div class="platform-card platform-card-nintendo" onclick="navigateTo('#shop?platform=Nintendo')">
            <span class="badge badge-nintendo" style="width: fit-content;">NINTENDO</span>
            <h3 class="platform-card-title">Switch 1 & 2</h3>
            <span class="platform-card-count">OLED, Handhelds & Exclusive Cards</span>
          </div>
          <div class="platform-card platform-card-pc" onclick="navigateTo('#shop?platform=PC')">
            <span class="badge badge-purple" style="width: fit-content;">PC GAMING</span>
            <h3 class="platform-card-title">Peripherals</h3>
            <span class="platform-card-count">Controllers, SSDs & Capture Cards</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: TRENDING GAMES -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="section-subtitle">ORIGINAL PHYSICAL DISCS</span>
            <h2 class="section-title">TRENDING GAMES</h2>
          </div>
          <a href="#games" class="btn btn-outline btn-sm">EXPLORE ALL GAMES <i data-lucide="chevron-right"></i></a>
        </div>
        <div class="products-grid">
          ${trendingGames.map(p => renderProductCardHTML(p)).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION 4: CONTROLLERS SHOWCASE -->
    <section class="section" style="background: var(--bg-surface-0);">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="section-subtitle">PRECISION INPUT</span>
            <h2 class="section-title">PRO CONTROLLERS</h2>
          </div>
          <a href="#finder" class="btn btn-purple btn-sm"><i data-lucide="sliders"></i> FIND YOUR CONTROLLER</a>
        </div>
        <div class="products-grid">
          ${controllers.map(p => renderProductCardHTML(p)).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION 5: GAMING DEALS -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="section-subtitle" style="color: var(--accent-orange);">LIMITED TIME SAVINGS</span>
            <h2 class="section-title">LEVEL UP FOR LESS</h2>
          </div>
          <a href="#deals" class="btn btn-outline btn-sm">VIEW ALL DEALS <i data-lucide="chevron-right"></i></a>
        </div>
        <div class="products-grid">
          ${hotDeals.map(p => renderProductCardHTML(p)).join('')}
        </div>
      </div>
    </section>

    <!-- SECTION 6: WHY ROOCO? -->
    <section class="section" style="background: var(--bg-surface-0); border-t: 1px solid var(--border-subtle);">
      <div class="container">
        <div class="section-header" style="justify-content: center; text-align: center;">
          <div class="section-title-wrap" style="align-items: center;">
            <span class="section-subtitle">THE ROOCO GUARANTEE</span>
            <h2 class="section-title">WHY GAMERS TRUST US</h2>
          </div>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon-box"><i data-lucide="shield-check"></i></div>
            <h4 class="feature-title">100% Genuine</h4>
            <p class="feature-desc">Sealed original console packages & authentic disc games.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon-box"><i data-lucide="truck"></i></div>
            <h4 class="feature-title">Fast Shipping</h4>
            <p class="feature-desc">Free express delivery across India on orders over ₹5,000.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon-box"><i data-lucide="lock"></i></div>
            <h4 class="feature-title">Secure Payments</h4>
            <p class="feature-desc">Encrypted UPI, Cards, NetBanking & COD options available.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon-box"><i data-lucide="refresh-cw"></i></div>
            <h4 class="feature-title">Easy Returns</h4>
            <p class="feature-desc">7-day replacement policy for damaged or transit issues.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon-box"><i data-lucide="headphones"></i></div>
            <h4 class="feature-title">Gamer Support</h4>
            <p class="feature-desc">Expert assistance for warranty, specs & setup guidance.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- NEWSLETTER SECTION -->
    <section class="section">
      <div class="container">
        <div class="newsletter-box">
          <span class="badge badge-purple">VIP DROP LIST</span>
          <h2 class="font-heading" style="font-size: 2.5rem; font-weight: 800;">GET THE DROP BEFORE EVERYONE ELSE.</h2>
          <p style="color: var(--text-secondary); max-width: 550px;">Subscribe to receive instant notifications on PS5 restocks, limited edition controller launches, and exclusive discount codes.</p>
          <form class="newsletter-form" onsubmit="event.preventDefault(); showToast('Subscribed to VIP drops!', 'cyan');">
            <input type="email" class="newsletter-input" placeholder="Enter your email address..." required>
            <button type="submit" class="btn btn-primary"><i data-lucide="send"></i> JOIN VIP</button>
          </form>
        </div>
      </div>
    </section>
  `;

  if (window.lucide) lucide.createIcons();
}

// 2. PRODUCT CARD REUSABLE HTML
function renderProductCardHTML(product) {
  const isWishlisted = state.wishlist.includes(product.id);
  const platformBadge = product.platform === 'PlayStation' ? 'badge-ps' : product.platform === 'Xbox' ? 'badge-xbox' : product.platform === 'Nintendo' ? 'badge-nintendo' : 'badge-purple';
  
  return `
    <div class="product-card">
      <div class="card-image-wrap" onclick="navigateTo('#product/${product.id}')" style="cursor: pointer;">
        <div class="card-badges">
          ${product.badge ? `<span class="badge badge-cyan">${product.badge}</span>` : ''}
          ${product.discount > 0 ? `<span class="badge badge-green">SAVE ${product.discount}%</span>` : ''}
        </div>
        <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); state.toggleWishlist('${product.id}'); this.classList.toggle('active');">
          <i data-lucide="heart"></i>
        </button>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-platform-bar">
          <span class="badge ${platformBadge}">${product.platform}</span>
          <div class="card-rating">
            <i data-lucide="star" style="fill: var(--accent-gold); width: 14px; height: 14px;"></i>
            <span>${product.rating}</span>
            <span style="color: var(--text-muted); font-size: 0.75rem;">(${product.reviewCount})</span>
          </div>
        </div>
        <h3 class="card-title" onclick="navigateTo('#product/${product.id}')" style="cursor: pointer;">${product.name}</h3>
        <div class="card-prices">
          <span class="price-current">${formatINR(product.price)}</span>
          ${product.mrp > product.price ? `<span class="price-mrp">${formatINR(product.mrp)}</span>` : ''}
        </div>
      </div>
      <div class="card-footer">
        <button class="btn btn-secondary btn-sm" onclick="state.addToCart('${product.id}')">
          <i data-lucide="shopping-cart"></i> ADD TO CART
        </button>
      </div>
    </div>
  `;
}

// 3. PRODUCT LISTING PAGE (PLP)
function renderShopView(container, params) {
  const selectedCategory = params.get('category') || '';
  const selectedPlatform = params.get('platform') || '';

  container.innerHTML = `
    <div class="container shop-layout">
      <!-- SIDEBAR FILTERS -->
      <aside class="filter-sidebar">
        <div class="filter-group-title">
          <span>FILTERS</span>
          <button class="btn btn-sm btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;" onclick="navigateTo('#shop')">RESET ALL</button>
        </div>

        <div class="filter-group">
          <div class="filter-group-title">PLATFORM</div>
          ${['PlayStation', 'Xbox', 'Nintendo', 'PC'].map(p => `
            <label class="checkbox-label">
              <input type="checkbox" name="platform" value="${p}" ${selectedPlatform === p ? 'checked' : ''} onchange="filterProducts()">
              <span class="checkbox-custom"><i data-lucide="check" style="width: 12px; height: 12px;"></i></span>
              ${p}
            </label>
          `).join('')}
        </div>

        <div class="filter-group">
          <div class="filter-group-title">CATEGORY</div>
          ${['Consoles', 'Games', 'Controllers', 'Accessories', 'Bundles'].map(c => `
            <label class="checkbox-label">
              <input type="checkbox" name="category" value="${c}" ${selectedCategory === c ? 'checked' : ''} onchange="filterProducts()">
              <span class="checkbox-custom"><i data-lucide="check" style="width: 12px; height: 12px;"></i></span>
              ${c}
            </label>
          `).join('')}
        </div>

        <div class="filter-group">
          <div class="filter-group-title">MAX PRICE</div>
          <input type="range" class="price-range-slider" min="1000" max="80000" step="1000" id="price-slider" value="80000" oninput="document.getElementById('price-val').textContent = formatINR(this.value); filterProducts()">
          <div style="font-size: 0.85rem; color: var(--text-secondary); text-align: right;" id="price-val">₹80,000</div>
        </div>

        <div class="filter-group">
          <div class="filter-group-title">STOCK STATUS</div>
          <label class="checkbox-label">
            <input type="checkbox" id="instock-only" onchange="filterProducts()">
            <span class="checkbox-custom"><i data-lucide="check" style="width: 12px; height: 12px;"></i></span>
            In Stock Only
          </label>
        </div>
      </aside>

      <!-- SHOP MAIN PRODUCTS -->
      <main class="shop-main">
        <div class="shop-top-bar">
          <span style="font-size: 0.9rem; font-weight: 600;" id="shop-results-count">Showing ${state.products.length} products</span>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <label style="font-size: 0.85rem; color: var(--text-muted);">Sort By:</label>
            <select class="sort-select" id="sort-select" onchange="filterProducts()">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        <div class="products-grid" id="plp-grid">
          <!-- Dynamic Filter Output -->
        </div>
      </main>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
  filterProducts();
}

function filterProducts() {
  const plpGrid = document.getElementById('plp-grid');
  const countEl = document.getElementById('shop-results-count');
  if (!plpGrid) return;

  const platforms = Array.from(document.querySelectorAll('input[name="platform"]:checked')).map(cb => cb.value);
  const categories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
  const maxPrice = Number(document.getElementById('price-slider')?.value || 100000);
  const inStock = document.getElementById('instock-only')?.checked;
  const sort = document.getElementById('sort-select')?.value || 'featured';

  let filtered = state.products.filter(p => {
    if (platforms.length && !platforms.includes(p.platform)) return false;
    if (categories.length && !categories.includes(p.category)) return false;
    if (p.price > maxPrice) return false;
    if (inStock && p.stock <= 0) return false;
    return true;
  });

  // Sort
  if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  if (countEl) countEl.textContent = `Showing ${filtered.length} products`;

  if (filtered.length === 0) {
    plpGrid.style.gridTemplateColumns = '1fr';
    plpGrid.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; background: var(--bg-surface-1); border-radius: var(--radius-lg); border: 1px dashed var(--border-medium);">
        <i data-lucide="package-search" style="width: 48px; height: 48px; color: var(--accent-cyan); margin-bottom: 1rem;"></i>
        <h3 class="font-heading" style="font-size: 1.5rem; margin-bottom: 0.5rem;">NO LOOT FOUND</h3>
        <p style="color: var(--text-muted); max-width: 400px; margin: 0 auto 1.5rem auto;">We couldn't find any products matching your specific filter criteria.</p>
        <button class="btn btn-primary" onclick="navigateTo('#shop')">CLEAR FILTERS</button>
      </div>
    `;
  } else {
    plpGrid.style.gridTemplateColumns = '';
    plpGrid.innerHTML = filtered.map(p => renderProductCardHTML(p)).join('');
  }
  if (window.lucide) lucide.createIcons();
}

// 4. PRODUCT DETAIL PAGE (PDP)
function renderPdpView(container, productId) {
  const product = state.products.find(p => p.id === productId || p.slug === productId);

  if (!product) {
    renderNotFoundView(container);
    return;
  }

  const emiMonthly = Math.round(product.price / 24);
  const relatedProducts = state.products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  container.innerHTML = `
    <div class="container pdp-layout">
      <!-- PDP GALLERY -->
      <div class="pdp-gallery">
        <div class="pdp-main-image">
          <img src="${product.image}" id="pdp-main-img" alt="${product.name}">
        </div>
        <div class="pdp-thumbnails">
          <div class="pdp-thumb active" onclick="document.getElementById('pdp-main-img').src='${product.image}'">
            <img src="${product.image}" alt="Thumb">
          </div>
          ${(product.gallery || []).map(img => `
            <div class="pdp-thumb" onclick="document.getElementById('pdp-main-img').src='${img}'">
              <img src="${img}" alt="Thumb">
            </div>
          `).join('')}
        </div>
      </div>

      <!-- PDP INFO -->
      <div class="pdp-info">
        <div>
          <span class="badge badge-cyan">${product.platform}</span>
          <span class="badge badge-purple" style="margin-left: 0.5rem;">${product.category}</span>
          <h1 class="pdp-title" style="margin-top: 0.75rem;">${product.name}</h1>
          <div style="display: flex; align-items: center; gap: 1rem; margin-top: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.25rem; color: var(--accent-gold); font-weight: 700;">
              <i data-lucide="star" style="fill: var(--accent-gold); width: 16px; height: 16px;"></i>
              <span>${product.rating}</span>
            </div>
            <span style="color: var(--text-muted); font-size: 0.9rem;">(${product.reviewCount} customer reviews)</span>
            <span style="color: var(--accent-neon-green); font-size: 0.85rem; font-weight: 700;">● IN STOCK (${product.stock} left)</span>
          </div>
        </div>

        <div class="pdp-pricing">
          <span class="pdp-price">${formatINR(product.price)}</span>
          ${product.mrp > product.price ? `
            <span class="pdp-mrp">${formatINR(product.mrp)}</span>
            <span class="pdp-save">Save ${formatINR(product.mrp - product.price)} (${product.discount}%)</span>
          ` : ''}
        </div>

        <div style="background: rgba(0, 240, 255, 0.05); border: 1px solid rgba(0, 240, 255, 0.2); border-radius: var(--radius-md); padding: 0.85rem 1.25rem; font-size: 0.88rem; display: flex; align-items: center; justify-content: space-between;">
          <span><i data-lucide="credit-card" style="color: var(--accent-cyan);"></i> No Cost EMI starts from <strong>${formatINR(emiMonthly)}/mo</strong></span>
          <a href="javascript:void(0)" onclick="alert('No Cost EMI available on HDFC, ICICI, Axis & SBI cards up to 24 months.')" style="color: var(--accent-cyan); font-weight: 700; text-decoration: underline;">Details</a>
        </div>

        <!-- PINCODE CHECKER -->
        <div class="pdp-pincode-box">
          <span style="font-size: 0.88rem; font-weight: 700; color: var(--text-secondary);"><i data-lucide="map-pin"></i> CHECK DELIVERY & COD AVAILABILITY</span>
          <form class="pdp-pincode-form" onsubmit="event.preventDefault(); verifyPincode();">
            <input type="text" class="pdp-pincode-input" id="pincode-input" value="${state.user.pincode}" placeholder="Enter 6-digit Pincode" maxlength="6">
            <button type="submit" class="btn btn-outline btn-sm">CHECK</button>
          </form>
          <span id="pincode-result" style="font-size: 0.8rem; color: var(--accent-neon-green);">● Express Delivery available by tomorrow, 2:00 PM</span>
        </div>

        <!-- ACTION BUTTONS -->
        <div class="pdp-action-btns">
          <button class="btn btn-primary btn-lg" onclick="state.addToCart('${product.id}'); renderCartDrawer();">
            <i data-lucide="shopping-cart"></i> ADD TO CART
          </button>
          <button class="btn btn-purple btn-lg" onclick="state.addToCart('${product.id}'); navigateTo('#checkout');">
            BUY NOW
          </button>
          <button class="btn btn-icon" onclick="state.toggleWishlist('${product.id}')" title="Wishlist">
            <i data-lucide="heart"></i>
          </button>
        </div>

        <p style="color: var(--text-secondary); line-height: 1.6; font-size: 0.95rem;">${product.description}</p>
      </div>
    </div>

    <!-- TABS SECTION -->
    <div class="container pdp-tabs">
      <div class="tabs-header">
        <div class="tab-item active" onclick="switchPdpTab('specs')">SPECIFICATIONS</div>
        <div class="tab-item" onclick="switchPdpTab('overview')">OVERVIEW</div>
        <div class="tab-item" onclick="switchPdpTab('reviews')">REVIEWS (${product.reviewCount})</div>
      </div>

      <div id="tab-specs">
        <table class="specs-table">
          <tbody>
            <tr><td>Warranty</td><td>${product.warranty}</td></tr>
            <tr><td>Condition</td><td>${product.condition}</td></tr>
            ${Object.entries(product.specs || {}).map(([k, v]) => `
              <tr><td>${k}</td><td>${v}</td></tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div id="tab-overview" style="display: none; line-height: 1.8; color: var(--text-secondary);">
        <p>${product.description}</p>
        <br>
        <p>All consoles and peripherals sold on ROOCO GAMING are 100% authentic, sealed in original factory packaging, and backed by manufacturer warranty programs across India.</p>
      </div>

      <div id="tab-reviews" style="display: none;">
        <div style="display: flex; gap: 2rem; align-items: center; margin-bottom: 2rem; background: var(--bg-surface-1); padding: 1.5rem; border-radius: var(--radius-md);">
          <div style="text-align: center; border-right: 1px solid var(--border-subtle); padding-right: 2rem;">
            <div style="font-family: var(--font-heading); font-size: 3rem; font-weight: 900; color: var(--accent-cyan);">${product.rating}</div>
            <div style="color: var(--accent-gold); margin: 0.25rem 0;">★★★★★</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Verified Buyer Rating</div>
          </div>
          <div>
            <h4 class="font-heading">Top Review from Verified Gamer</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.35rem;">"Super fast shipping! Delivered within 24 hours in Bangalore. Original Indian retail unit with official warranty card."</p>
            <span style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-top: 0.5rem;">— Rahul S., Verified Buyer</span>
          </div>
        </div>
      </div>
    </div>

    <!-- RELATED PRODUCTS -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-wrap">
            <span class="section-subtitle">COMPLETE YOUR SETUP</span>
            <h2 class="section-title">YOU MAY ALSO LIKE</h2>
          </div>
        </div>
        <div class="products-grid">
          ${relatedProducts.map(p => renderProductCardHTML(p)).join('')}
        </div>
      </div>
    </section>
  `;

  if (window.lucide) lucide.createIcons();
}

function switchPdpTab(tabName) {
  document.querySelectorAll('.tab-item').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');

  document.getElementById('tab-specs').style.display = tabName === 'specs' ? 'block' : 'none';
  document.getElementById('tab-overview').style.display = tabName === 'overview' ? 'block' : 'none';
  document.getElementById('tab-reviews').style.display = tabName === 'reviews' ? 'block' : 'none';
}

function verifyPincode() {
  const pin = document.getElementById('pincode-input')?.value;
  const res = document.getElementById('pincode-result');
  if (pin && pin.length === 6) {
    if (res) res.textContent = `● Verified! Express delivery available to ${pin} by tomorrow.`;
    showToast(`Pincode ${pin} verified for express delivery!`, 'cyan');
  } else {
    if (res) res.textContent = `⚠ Please enter a valid 6-digit Indian pincode.`;
  }
}

// 5. COMPARE CONSOLES VIEW
function renderCompareView(container) {
  const consoles = state.products.filter(p => p.category === 'Consoles');
  
  container.innerHTML = `
    <div class="container compare-container">
      <div style="text-align: center; margin-bottom: 3rem;">
        <span class="badge badge-cyan">BENCHMARK MATRIX</span>
        <h1 class="font-heading" style="font-size: 2.75rem; font-weight: 800; margin-top: 0.5rem;">CONSOLE SPEC COMPARISON</h1>
        <p style="color: var(--text-secondary);">Compare side-by-side technical specs of PlayStation 5 Pro, Xbox Series X, and Nintendo Switch 2.</p>
      </div>

      <div class="compare-grid">
        <div style="display: flex; flex-direction: column; justify-content: flex-end;">
          <div class="compare-row-header">SPECIFICATION</div>
          <div class="compare-row-header">Selling Price</div>
          <div class="compare-row-header">Storage</div>
          <div class="compare-row-header">Resolution</div>
          <div class="compare-row-header">Ray Tracing</div>
          <div class="compare-row-header">Connectivity</div>
          <div class="compare-row-header">Warranty</div>
        </div>

        ${consoles.slice(0, 3).map(c => `
          <div class="compare-card">
            <img src="${c.image}" alt="${c.name}" style="height: 120px; object-fit: contain;">
            <h4 class="font-heading" style="font-size: 1rem; font-weight: 700;">${c.name}</h4>
            <span class="badge badge-ps">${c.platform}</span>

            <div class="compare-row-cell" style="font-weight: 800; color: var(--accent-cyan); width: 100%;">${formatINR(c.price)}</div>
            <div class="compare-row-cell" style="width: 100%;">${c.storage}</div>
            <div class="compare-row-cell" style="width: 100%;">${c.resolution}</div>
            <div class="compare-row-cell" style="width: 100%;">${c.specs?.['GPU'] ? 'Hardware Accelerated' : 'Supported'}</div>
            <div class="compare-row-cell" style="width: 100%;">${c.connectivity}</div>
            <div class="compare-row-cell" style="width: 100%;">${c.warranty}</div>

            <button class="btn btn-primary btn-sm" style="width: 100%; margin-top: 1rem;" onclick="state.addToCart('${c.id}')">BUY NOW</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

// 6. CONTROLLER FINDER QUIZ VIEW
function renderFinderView(container) {
  container.innerHTML = `
    <div class="container">
      <div class="quiz-box">
        <div style="text-align: center;">
          <span class="badge badge-purple">INTERACTIVE MATCH</span>
          <h2 class="font-heading" style="font-size: 2.25rem; font-weight: 800; margin-top: 0.5rem;">FIND YOUR PERFECT CONTROLLER</h2>
          <p style="color: var(--text-secondary); margin-top: 0.25rem;">Answer 3 quick questions to discover your ideal gamepad.</p>
        </div>

        <div id="quiz-step-1">
          <h3 class="font-heading" style="font-size: 1.1rem; margin-bottom: 1rem;">1. Which platform do you play on most?</h3>
          <div class="quiz-options-grid">
            <div class="quiz-option-card" onclick="selectQuizOption(1, 'PlayStation')">
              <i data-lucide="gamepad-2" style="color: var(--ps-blue);"></i>
              <div><strong>PlayStation</strong><br><span style="font-size: 0.75rem; color: var(--text-muted);">PS5 / PS4</span></div>
            </div>
            <div class="quiz-option-card" onclick="selectQuizOption(1, 'Xbox')">
              <i data-lucide="gamepad" style="color: var(--xbox-green);"></i>
              <div><strong>Xbox / Windows PC</strong><br><span style="font-size: 0.75rem; color: var(--text-muted);">Series X|S / PC</span></div>
            </div>
          </div>
        </div>

        <div id="quiz-result" style="display: none; text-align: center;">
          <span class="badge badge-green">RECOMMENDED MATCH</span>
          <h3 class="font-heading" style="font-size: 1.5rem; margin-top: 0.5rem;" id="quiz-match-name">DualSense Edge Pro Controller</h3>
          <div style="margin: 1.5rem 0;" id="quiz-match-card"></div>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

function selectQuizOption(step, val) {
  const resultDiv = document.getElementById('quiz-result');
  const step1Div = document.getElementById('quiz-step-1');
  const matchCard = document.getElementById('quiz-match-card');
  const matchName = document.getElementById('quiz-match-name');

  const match = state.products.find(p => p.platform === val && p.category === 'Controllers') || state.products[7];

  if (step1Div) step1Div.style.display = 'none';
  if (resultDiv) resultDiv.style.display = 'block';
  if (matchName) matchName.textContent = match.name;
  if (matchCard) matchCard.innerHTML = renderProductCardHTML(match);
  if (window.lucide) lucide.createIcons();
}

// 7. DEALS VIEW
function renderDealsView(container) {
  const deals = state.products.filter(p => p.isDeal);
  container.innerHTML = `
    <div class="container section">
      <div class="section-header">
        <div class="section-title-wrap">
          <span class="section-subtitle" style="color: var(--accent-orange);">HOT DISCOUNTS</span>
          <h1 class="section-title">GAMING DEALS & BUNDLES</h1>
        </div>
      </div>
      <div class="products-grid">
        ${deals.map(p => renderProductCardHTML(p)).join('')}
      </div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

// 8. GAMES VIEW
function renderGamesView(container) {
  const games = state.products.filter(p => p.category === 'Games');
  container.innerHTML = `
    <div class="container section">
      <div class="section-header">
        <div class="section-title-wrap">
          <span class="section-subtitle">PHYSICAL CD DISCS & CARDS</span>
          <h1 class="section-title">ORIGINAL VIDEO GAMES CATALOGUE</h1>
        </div>
      </div>
      <div class="products-grid">
        ${games.map(p => renderProductCardHTML(p)).join('')}
      </div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

// 9. CART DRAWER & CART VIEW
function renderCartDrawer() {
  const drawerOverlay = document.getElementById('cart-drawer-overlay');
  const drawerList = document.getElementById('cart-drawer-items');
  const totals = state.getCartTotals();

  if (!drawerOverlay || !drawerList) return;

  if (state.cart.length === 0) {
    drawerList.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <i data-lucide="shopping-bag" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <p>Your shopping cart is empty.</p>
        <button class="btn btn-outline btn-sm" style="margin-top: 1rem;" onclick="toggleCartDrawer(false)">CONTINUE SHOPPING</button>
      </div>
    `;
  } else {
    drawerList.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <h4 style="font-size: 0.88rem; font-weight: 700; color: var(--text-primary); line-height: 1.3;">${item.name}</h4>
          <span style="font-size: 0.85rem; font-weight: 800; color: var(--accent-cyan);">${formatINR(item.price)}</span>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.25rem;">
            <button class="btn btn-icon btn-sm" onclick="state.updateCartQty('${item.id}', ${item.qty - 1})">-</button>
            <span style="font-size: 0.85rem; font-weight: 700;">${item.qty}</span>
            <button class="btn btn-icon btn-sm" onclick="state.updateCartQty('${item.id}', ${item.qty + 1})">+</button>
            <button class="btn btn-icon btn-sm" style="margin-left: auto; color: #FF4757;" onclick="state.removeFromCart('${item.id}')"><i data-lucide="trash-2"></i></button>
          </div>
        </div>
      </div>
    `).join('');
  }

  const subtotalEl = document.getElementById('cart-drawer-subtotal');
  const freeShipBar = document.getElementById('free-ship-progress');
  const freeShipText = document.getElementById('free-ship-text');

  if (subtotalEl) subtotalEl.textContent = formatINR(totals.subtotal);
  if (freeShipBar) {
    const pct = Math.min(100, (totals.subtotal / 5000) * 100);
    freeShipBar.style.width = `${pct}%`;
  }
  if (freeShipText) {
    if (totals.subtotal >= 5000) {
      freeShipText.textContent = "🎉 YOU UNLOCKED FREE EXPRESS SHIPPING!";
      freeShipText.style.color = "var(--accent-neon-green)";
    } else {
      freeShipText.textContent = `Add ${formatINR(5000 - totals.subtotal)} more to get FREE SHIPPING`;
      freeShipText.style.color = "var(--accent-cyan)";
    }
  }

  if (window.lucide) lucide.createIcons();
}

function toggleCartDrawer(open) {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) {
    if (open) {
      renderCartDrawer();
      overlay.classList.add('active');
    } else {
      overlay.classList.remove('active');
    }
  }
}

// 10. CHECKOUT STEP-BY-STEP VIEW
function renderCheckoutView(container) {
  const totals = state.getCartTotals();

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="container section" style="text-align: center;">
        <h2 class="font-heading">YOUR CART IS EMPTY</h2>
        <p style="color: var(--text-muted); margin: 1rem 0;">Add products to cart before proceeding to checkout.</p>
        <button class="btn btn-primary" onclick="navigateTo('#shop')">SHOP NOW</button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="container checkout-layout">
      <div>
        <span class="badge badge-cyan">SECURE ENCRYPTED CHECKOUT</span>
        <h1 class="font-heading" style="font-size: 2.25rem; font-weight: 800; margin: 0.5rem 0 2rem 0;">SHIPPING & PAYMENT</h1>

        <form onsubmit="event.preventDefault(); processOrderPlacement();">
          <!-- STEP 1: ADDRESS -->
          <div style="background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.75rem; margin-bottom: 2rem;">
            <h3 class="font-heading" style="font-size: 1.1rem; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
              <span class="badge badge-cyan">1</span> SHIPPING ADDRESS
            </h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-input" id="checkout-name" value="${state.user.name}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Phone Number</label>
                <input type="tel" class="form-input" id="checkout-phone" value="${state.user.phone}" required>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Street Address & Apartment</label>
              <input type="text" class="form-input" id="checkout-address" value="702 Cyber City Towers, HSR Layout" required>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">City</label>
                <input type="text" class="form-input" value="Bengaluru" required>
              </div>
              <div class="form-group">
                <label class="form-label">State</label>
                <input type="text" class="form-input" value="Karnataka" required>
              </div>
              <div class="form-group">
                <label class="form-label">Pincode</label>
                <input type="text" class="form-input" value="${state.user.pincode}" required>
              </div>
            </div>
          </div>

          <!-- STEP 2: PAYMENT METHOD -->
          <div style="background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.75rem; margin-bottom: 2rem;">
            <h3 class="font-heading" style="font-size: 1.1rem; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
              <span class="badge badge-purple">2</span> PAYMENT METHOD
            </h3>
            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
              <label class="quiz-option-card selected">
                <input type="radio" name="payment" value="UPI" checked style="accent-color: var(--accent-cyan);">
                <div><strong>Instant UPI / QR</strong><br><span style="font-size: 0.75rem; color: var(--text-muted);">GPay, PhonePe, Paytm, BHIM</span></div>
              </label>
              <label class="quiz-option-card">
                <input type="radio" name="payment" value="Card" style="accent-color: var(--accent-cyan);">
                <div><strong>Credit / Debit Card</strong><br><span style="font-size: 0.75rem; color: var(--text-muted);">Visa, Mastercard, RuPay, Amex</span></div>
              </label>
              <label class="quiz-option-card">
                <input type="radio" name="payment" value="COD" style="accent-color: var(--accent-cyan);">
                <div><strong>Cash on Delivery (COD)</strong><br><span style="font-size: 0.75rem; color: var(--text-muted);">Pay upon arrival</span></div>
              </label>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
            <i data-lucide="lock"></i> PLACE ORDER (${formatINR(totals.grandTotal)})
          </button>
        </form>
      </div>

      <!-- ORDER SUMMARY SIDEBAR -->
      <aside style="background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.75rem; height: fit-content;">
        <h3 class="font-heading" style="font-size: 1.25rem; margin-bottom: 1.25rem;">ORDER SUMMARY</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          ${state.cart.map(i => `
            <div style="display: flex; gap: 0.85rem; align-items: center;">
              <img src="${i.image}" style="width: 50px; height: 50px; object-fit: contain; background: var(--bg-surface-0); border-radius: var(--radius-sm); padding: 0.25rem;">
              <div style="flex: 1;">
                <div style="font-size: 0.85rem; font-weight: 700;">${i.name}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Qty: ${i.qty}</div>
              </div>
              <div style="font-weight: 800; font-size: 0.9rem;">${formatINR(i.price * i.qty)}</div>
            </div>
          `).join('')}
        </div>

        <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.9rem;">
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-muted);">Subtotal</span>
            <span>${formatINR(totals.subtotal)}</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-muted);">Express Shipping</span>
            <span style="color: var(--accent-neon-green);">${totals.shipping === 0 ? 'FREE' : formatINR(totals.shipping)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: 900; margin-top: 0.5rem; border-top: 1px solid var(--border-subtle); padding-top: 0.75rem; color: var(--accent-cyan);">
            <span>Total Payable</span>
            <span>${formatINR(totals.grandTotal)}</span>
          </div>
        </div>
      </aside>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

function processOrderPlacement() {
  const totals = state.getCartTotals();
  const orderId = `ROOCO-${Math.floor(10000 + Math.random() * 90000)}`;
  
  const newOrder = {
    id: orderId,
    date: new Date().toISOString().split('T')[0],
    status: "Processing",
    total: totals.grandTotal,
    items: state.cart.map(i => ({ name: i.name, qty: i.qty, price: i.price, image: i.image })),
    address: document.getElementById('checkout-address')?.value || '702 Cyber City Towers, HSR Layout'
  };

  state.orders.unshift(newOrder);
  state.cart = [];
  state.save();
  updateHeaderCounts();

  showToast(`Order #${orderId} Placed Successfully!`, 'cyan');
  navigateTo(`#order-success/${orderId}`);
}

// 11. ORDER SUCCESS CONFIRMATION VIEW
function renderOrderSuccessView(container, orderId) {
  const order = state.orders.find(o => o.id === orderId) || state.orders[0];

  container.innerHTML = `
    <div class="container section" style="text-align: center; max-width: 650px;">
      <div style="width: 80px; height: 80px; border-radius: 50%; background: rgba(0, 255, 135, 0.15); color: var(--accent-neon-green); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; border: 2px solid var(--accent-neon-green);">
        <i data-lucide="check-circle" style="width: 44px; height: 44px;"></i>
      </div>
      <span class="badge badge-green">CONFIRMED ORDER</span>
      <h1 class="font-heading" style="font-size: 2.5rem; font-weight: 900; margin-top: 0.5rem;">ORDER PLACED!</h1>
      <p style="color: var(--text-secondary); margin-top: 0.35rem;">Order reference <strong>#${order.id}</strong> has been logged in our system.</p>

      <div style="background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.5rem; margin: 2rem 0; text-align: left;">
        <h4 class="font-heading" style="margin-bottom: 1rem; color: var(--accent-cyan);">ESTIMATED DELIVERY TIMELINE</h4>
        <div style="display: flex; justify-content: space-between; position: relative; font-size: 0.8rem; text-align: center;">
          <div style="color: var(--accent-cyan); font-weight: 700;">● Processing</div>
          <div style="color: var(--text-muted);">Packed</div>
          <div style="color: var(--text-muted);">Shipped</div>
          <div style="color: var(--text-muted);">Delivered</div>
        </div>
      </div>

      <div style="display: flex; gap: 1rem; justify-content: center;">
        <a href="#account/orders" class="btn btn-primary"><i data-lucide="truck"></i> TRACK ORDER</a>
        <a href="#shop" class="btn btn-outline">CONTINUE SHOPPING</a>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

// 12. ACCOUNT DASHBOARD VIEW
function renderAccountView(container, tab = 'overview') {
  container.innerHTML = `
    <div class="container section">
      <h1 class="font-heading" style="font-size: 2.25rem; font-weight: 800; margin-bottom: 2rem;">MY ACCOUNT</h1>
      <div style="display: grid; grid-template-columns: 240px 1fr; gap: 2rem;">
        <aside style="background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <a href="#account/overview" class="admin-nav-item ${tab === 'overview' ? 'active' : ''}"><i data-lucide="user"></i> Profile Overview</a>
          <a href="#account/orders" class="admin-nav-item ${tab === 'orders' ? 'active' : ''}"><i data-lucide="package"></i> Order History (${state.orders.length})</a>
          <a href="#account/wishlist" class="admin-nav-item ${tab === 'wishlist' ? 'active' : ''}"><i data-lucide="heart"></i> Wishlist (${state.wishlist.length})</a>
        </aside>

        <main style="background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 2rem;">
          ${tab === 'orders' ? renderAccountOrdersHTML() : tab === 'wishlist' ? renderAccountWishlistHTML() : renderAccountOverviewHTML()}
        </main>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

function renderAccountOverviewHTML() {
  return `
    <h3 class="font-heading" style="font-size: 1.25rem; margin-bottom: 1.5rem;">GAMER PROFILE</h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
      <div>
        <label class="form-label">Full Name</label>
        <div style="font-size: 1.1rem; font-weight: 700; margin-top: 0.25rem;">${state.user.name}</div>
      </div>
      <div>
        <label class="form-label">Email Address</label>
        <div style="font-size: 1.1rem; font-weight: 700; margin-top: 0.25rem;">${state.user.email}</div>
      </div>
      <div>
        <label class="form-label">Phone Number</label>
        <div style="font-size: 1.1rem; font-weight: 700; margin-top: 0.25rem;">${state.user.phone}</div>
      </div>
      <div>
        <label class="form-label">Default Pincode</label>
        <div style="font-size: 1.1rem; font-weight: 700; margin-top: 0.25rem;">${state.user.pincode}</div>
      </div>
    </div>
  `;
}

function renderAccountOrdersHTML() {
  if (state.orders.length === 0) return `<p style="color: var(--text-muted);">No order history found.</p>`;
  return `
    <h3 class="font-heading" style="font-size: 1.25rem; margin-bottom: 1.5rem;">ORDER HISTORY</h3>
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      ${state.orders.map(o => `
        <div style="border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; background: var(--bg-surface-0);">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
            <div>
              <span style="font-weight: 800; color: var(--accent-cyan);">#${o.id}</span>
              <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 0.5rem;">Plated on ${o.date}</span>
            </div>
            <span class="badge badge-green">${o.status}</span>
          </div>
          <div style="font-size: 0.9rem; font-weight: 700;">Total: ${formatINR(o.total)}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderAccountWishlistHTML() {
  const wishProducts = state.products.filter(p => state.wishlist.includes(p.id));
  if (wishProducts.length === 0) return `<p style="color: var(--text-muted);">Your wishlist is empty.</p>`;
  return `
    <h3 class="font-heading" style="font-size: 1.25rem; margin-bottom: 1.5rem;">SAVED WISHLIST ITEMS</h3>
    <div class="products-grid">
      ${wishProducts.map(p => renderProductCardHTML(p)).join('')}
    </div>
  `;
}

// 13. ADMIN PORTAL VIEW
function renderAdminView(container, tab = 'dashboard') {
  const totalRev = state.orders.reduce((sum, o) => sum + o.total, 0);

  container.innerHTML = `
    <div class="container section">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <div>
          <span class="badge badge-purple">SYSTEM DASHBOARD</span>
          <h1 class="font-heading" style="font-size: 2.25rem; font-weight: 800; margin-top: 0.25rem;">ROOCO ADMIN PORTAL</h1>
        </div>
        <button class="btn btn-primary btn-sm" onclick="showAddProductModal()"><i data-lucide="plus"></i> ADD NEW PRODUCT</button>
      </div>

      <div class="admin-layout">
        <aside class="admin-sidebar">
          <a href="#admin/dashboard" class="admin-nav-item ${tab === 'dashboard' ? 'active' : ''}"><i data-lucide="layout-dashboard"></i> Overview Metrics</a>
          <a href="#admin/products" class="admin-nav-item ${tab === 'products' ? 'active' : ''}"><i data-lucide="box"></i> Product Catalogue</a>
          <a href="#admin/orders" class="admin-nav-item ${tab === 'orders' ? 'active' : ''}"><i data-lucide="shopping-cart"></i> Orders Management</a>
        </aside>

        <main>
          ${tab === 'products' ? renderAdminProductsHTML() : tab === 'orders' ? renderAdminOrdersHTML() : `
            <!-- DASHBOARD OVERVIEW -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
              <div style="background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.5rem;">
                <span style="font-size: 0.8rem; color: var(--text-muted);">TOTAL REVENUE</span>
                <div style="font-family: var(--font-heading); font-size: 2rem; font-weight: 800; color: var(--accent-cyan); margin-top: 0.25rem;">${formatINR(totalRev)}</div>
              </div>
              <div style="background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.5rem;">
                <span style="font-size: 0.8rem; color: var(--text-muted);">TOTAL ORDERS</span>
                <div style="font-family: var(--font-heading); font-size: 2rem; font-weight: 800; color: #FFFFFF; margin-top: 0.25rem;">${state.orders.length}</div>
              </div>
              <div style="background: var(--bg-surface-1); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.5rem;">
                <span style="font-size: 0.8rem; color: var(--text-muted);">ACTIVE CATALOGUE</span>
                <div style="font-family: var(--font-heading); font-size: 2rem; font-weight: 800; color: var(--accent-neon-green); margin-top: 0.25rem;">${state.products.length} Products</div>
              </div>
            </div>
            ${renderAdminProductsHTML()}
          `}
        </main>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

function renderAdminProductsHTML() {
  return `
    <div class="table-responsive">
      <table class="admin-table">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Product Name</th>
            <th>Platform</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${state.products.map(p => `
            <tr>
              <td><span style="font-family: monospace; font-size: 0.8rem;">${p.sku}</span></td>
              <td><strong>${p.name}</strong></td>
              <td><span class="badge badge-cyan">${p.platform}</span></td>
              <td><strong>${formatINR(p.price)}</strong></td>
              <td><span style="color: ${p.stock < 10 ? '#FF4757' : 'var(--accent-neon-green)'}; font-weight: 700;">${p.stock} units</span></td>
              <td>
                <button class="btn btn-outline btn-sm" onclick="quickEditStock('${p.id}')">Stock +5</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderAdminOrdersHTML() {
  return `
    <div class="table-responsive">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Address</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${state.orders.map(o => `
            <tr>
              <td><strong>#${o.id}</strong></td>
              <td>${o.date}</td>
              <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${o.address}</td>
              <td><strong>${formatINR(o.total)}</strong></td>
              <td><span class="badge badge-green">${o.status}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function quickEditStock(productId) {
  const p = state.products.find(prod => prod.id === productId);
  if (p) {
    p.stock += 5;
    state.save();
    showToast(`Updated stock for ${p.name} (+5)`, 'cyan');
    handleRoute();
  }
}

function showAddProductModal() {
  const name = prompt("Enter New Product Name:");
  if (!name) return;
  const price = Number(prompt("Enter Price in INR (e.g., 49990):") || 49990);
  const platform = prompt("Enter Platform (PlayStation, Xbox, Nintendo, PC):") || "PlayStation";

  const newProd = {
    id: `custom-${Date.now()}`,
    sku: `RC-NEW-${Math.floor(100+Math.random()*900)}`,
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    platform,
    category: "Consoles",
    brand: "Generic",
    price,
    mrp: price + 4000,
    discount: 8,
    rating: 5.0,
    reviewCount: 1,
    stock: 20,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    description: "New catalogue entry added via Admin Console."
  };

  state.products.unshift(newProd);
  state.save();
  showToast(`Added ${name} to catalogue!`, 'cyan');
  handleRoute();
}

// 14. SEARCH OVERLAY IMPLEMENTATION
function setupSearchOverlay() {
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');

  if (!input || !resultsContainer) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      resultsContainer.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 2rem;">Type to search consoles, games, controllers...</p>`;
      return;
    }

    const matches = state.products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.platform.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 2rem;">No matching gaming loot found.</p>`;
    } else {
      resultsContainer.innerHTML = matches.map(p => `
        <div style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem; background: var(--bg-surface-0); border-radius: var(--radius-md); cursor: pointer;" onclick="toggleSearchModal(false); navigateTo('#product/${p.id}');">
          <img src="${p.image}" style="width: 45px; height: 45px; object-fit: contain;">
          <div>
            <div style="font-weight: 700; font-size: 0.95rem;">${p.name}</div>
            <span class="badge badge-ps" style="font-size: 0.7rem;">${p.platform}</span>
          </div>
          <div style="margin-left: auto; font-weight: 800; color: var(--accent-cyan);">${formatINR(p.price)}</div>
        </div>
      `).join('');
    }
  });
}

function toggleSearchModal(open) {
  const modal = document.getElementById('search-modal');
  if (modal) {
    if (open) {
      modal.classList.add('active');
      document.getElementById('search-input')?.focus();
    } else {
      modal.classList.remove('active');
    }
  }
}

// 15. NOT FOUND 404 VIEW
function renderNotFoundView(container) {
  container.innerHTML = `
    <div class="container section" style="text-align: center; padding: 6rem 1rem;">
      <h1 class="font-heading" style="font-size: 4rem; font-weight: 900; color: var(--accent-cyan);">404</h1>
      <h2 class="font-heading" style="font-size: 2rem; margin-bottom: 1rem;">GAMEOVER — PAGE NOT FOUND</h2>
      <p style="color: var(--text-muted); margin-bottom: 2rem;">The loot page you are looking for has been moved or does not exist.</p>
      <a href="#home" class="btn btn-primary">RETURN TO HOMEPAGE</a>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}
