const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1623251606108-512c7c4a3507?w=500&h=500&fit=crop",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1616578273577-5d54546f4dec?w=500&h=500&fit=crop",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1646771032500-27b440b2d947?w=500&h=500&fit=crop",
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1623949556303-b0d17d198863?w=500&h=500&fit=crop",
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
  {
    id: 9,
    name: "Noise Cancelling Earbuds",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
    description:
      "True wireless earbuds with active noise cancellation, 8-hour battery life, and wireless charging case.",
  },

  {
    id: 11,
    name: "Gaming Mouse Pad XXL",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=500&h=500&fit=crop",
    description:
      "Extra-large non-slip gaming mouse pad with stitched edges and smooth surface for precise control.",
  },
  {
    id: 12,
    name: "USB-C Fast Charger 65W",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&h=500&fit=crop",
    description:
      "GaN technology 65W USB-C charger that powers laptops, phones, and tablets. Compact and travel-friendly.",
  },
  {
    id: 13,
    name: "Wireless Charging Pad",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1633381638729-27f730955c23?w=500&h=500&fit=crop",
    description:
      "15W fast wireless charging pad compatible with all Qi-enabled devices. Sleek LED indicator design.",
  },
  {
    id: 14,
    name: "4K Action Camera",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
    description:
      "Waterproof 4K action camera with image stabilization, 60fps recording, and voice control.",
  },
  {
    id: 15,
    name: "Smart Home Hub",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=500&fit=crop",
    description:
      "Central smart home hub that connects lights, thermostats, and security devices. Works with Alexa and Google.",
  },

  {
    id: 17,
    name: "LED Desk Lamp",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    description:
      "Adjustable LED desk lamp with 5 brightness levels, USB charging port, and eye-care mode.",
  },
  {
    id: 18,
    name: "Mechanical Gaming Keyboard",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&h=500&fit=crop",
    description:
      "Full-size mechanical keyboard with hot-swappable switches, per-key RGB, and programmable macros.",
  },
  {
    id: 19,
    name: "Noise Isolating Earphones",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop",
    description:
      "In-ear earphones with dual drivers, noise isolation, and tangle-free cable. Great for daily commute.",
  },
  {
    id: 20,
    name: "Laptop Cooling Pad",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1707549998956-b7e88b90652e?w=500&h=500&fit=crop",
    description:
      "Quiet dual-fan cooling pad with adjustable height and USB-powered design for better laptop thermals.",
  },
  {
    id: 21,
    name: "Smart Doorbell Camera",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=500&fit=crop",
    description:
      "1080p video doorbell with motion detection, two-way audio, and night vision. Works with major smart platforms.",
  },
  {
    id: 22,
    name: "Wireless Presenter Remote",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description:
      "2.4GHz wireless presenter with laser pointer and intuitive controls. Perfect for meetings and lectures.",
  },
  {
    id: 23,
    name: "USB Microphone",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&h=500&fit=crop",
    description:
      "Cardioid USB condenser microphone with mute button and headphone monitoring. Ideal for podcasting and streaming.",
  },

  {
    id: 25,
    name: "RGB Gaming Headset",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=500&fit=crop",
    description:
      "7.1 surround sound gaming headset with detachable mic, RGB lighting, and memory foam ear cups.",
  },
  {
    id: 26,
    name: "Tablet Stand Adjustable",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
    description:
      "Multi-angle aluminum tablet stand compatible with phones and tablets up to 13 inches.",
  },
  {
    id: 27,
    name: "Smart Plug 4-Pack",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=500&fit=crop",
    description:
      "Wi-Fi smart plugs that let you control devices remotely via app or voice assistants. Energy monitoring included.",
  },
  {
    id: 28,
    name: "Wireless Keyboard & Mouse Combo",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
    description:
      "Slim wireless keyboard and mouse set with silent keys and long battery life. Plug-and-play USB receiver.",
  },
  {
    id: 29,
    name: "4K Ultra HD Webcam",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description:
      "4K UHD webcam with autofocus, dual stereo mics, and privacy shutter. Excellent for professional video calls.",
  },
  {
    id: 30,
    name: "Cable Management Kit",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    description:
      "Complete cable management set with clips, sleeves, and ties to keep your desk clean and organized.",
  },
  {
    id: 31,
    name: 'Portable Monitor 15.6"',
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description:
      "Full HD portable USB-C monitor with thin bezels and built-in speakers. Perfect for dual-screen setups on the go.",
  },
  {
    id: 33,
    name: "Smart LED Light Strip",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    description:
      "16.4ft RGB LED light strip with app control, music sync, and millions of color options.",
  },
  {
    id: 37,
    name: "USB Desk Fan",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    description:
      "Quiet USB-powered desk fan with 3 speed settings and adjustable tilt. Perfect for summer workdays.",
  },
  {
    id: 38,
    name: "Laptop Sleeve 15-inch",
    price: 27.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    description:
      "Water-resistant neoprene laptop sleeve with extra pocket for charger and accessories. Soft interior lining.",
  },
  {
    id: 39,
    name: "Wireless Charging Stand",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop",
    description:
      "2-in-1 wireless charging stand for phone and earbuds. 15W fast charging with LED status light.",
  },
  {
    id: 40,
    name: "Streaming Microphone Kit",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&h=500&fit=crop",
    description:
      "Complete streaming mic kit with boom arm, pop filter, and shock mount. Studio-quality audio.",
  },
  {
    id: 41,
    name: "Smart Thermostat",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=500&fit=crop",
    description:
      "Learning smart thermostat that saves energy and can be controlled from anywhere via smartphone.",
  },
  {
    id: 42,
    name: "HDMI Switch 5-Port",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop",
    description:
      "5-port HDMI switch with remote control. Supports 4K@60Hz and HDR for seamless device switching.",
  },
  {
    id: 43,
    name: "Wireless Earhooks Sport",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
    description:
      "Secure-fit wireless earbuds designed for sports with IPX7 water resistance and 12-hour playtime.",
  },
  {
    id: 44,
    name: "Desk Organizer with Wireless Charger",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description:
      "Bamboo desk organizer featuring built-in wireless charging, pen holders, and phone stand.",
  },
  {
    id: 46,
    name: "RGB Mouse Bungee",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&h=500&fit=crop",
    description:
      "Mouse cable management bungee with RGB lighting and solid weighted base for smooth gaming.",
  },
  {
    id: 48,
    name: "Smart Scale Body Composition",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    description:
      "Bluetooth smart scale that measures weight, body fat, muscle mass, and more. Syncs with fitness apps.",
  },
  {
    id: 50,
    name: "Laptop Privacy Screen Filter",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description:
      "Magnetic privacy screen filter that blocks side views while reducing blue light and glare.",
  },
  {
    id: 51,
    name: "Wireless Charging Mouse Pad",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&h=500&fit=crop",
    description:
      "Large mouse pad with integrated 15W wireless charging zone. Smooth tracking surface and non-slip base.",
  },
  {
    id: 53,
    name: "Smart Air Purifier Mini",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    description:
      "Compact HEPA air purifier with app control, air quality sensor, and quiet night mode.",
  },
  {
    id: 54,
    name: "Gaming Chair Cushion Set",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    description:
      "Memory foam lumbar and seat cushion set designed for long gaming or office sessions.",
  },
  {
    id: 55,
    name: "USB Desk Lamp with Clock",
    price: 32.99,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    description:
      "Multi-function LED desk lamp featuring digital clock, temperature display, and USB charging port.",
  },
  {
    id: 56,
    name: "Wireless Presenter with Laser",
    price: 27.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description:
      "Professional wireless presenter with red laser pointer, volume control, and 100ft range.",
  },
  {
    id: 57,
    name: "Magnetic Phone Mount",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop",
    description:
      "Strong magnetic car phone mount with 360° rotation. Compatible with all smartphones using metal plates.",
  },
];

export function getProducts() {
  return products;
}
