const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Sample products array
const products = [
  {
    id: "4",
    name: "Keyboard",
    description: "Keyboard",
    category: "keyboard",
    price: 20,
    stock: 9,
    imageURL: "https://keychron.com.es/cdn/shop/products/KV1-Custom-Mechanical-Keyboard-frosted-black-K-Pro-brown.jpg?v=1665215460&width=1214"
  },
  {
    id: "2",
    name: "Gaming Mouse",
    description: "High-Precision Gaming Mouse",
    category: "mouse",
    price: 35,
    stock: 15,
    imageURL: "https://example.com/gaming-mouse.jpg"
  },
  {
    id: "3",
    name: "Mechanical Keyboard",
    description: "RGB Mechanical Keyboard",
    category: "keyboard",
    price: 50,
    stock: 5,
    imageURL: "https://example.com/mechanical-keyboard.jpg"
  }
];

// Function to add multiple products
async function addProducts() {
  const batch = db.batch(); // Create a batch write operation

  products.forEach((product) => {
    const productRef = db.collection("product").doc(); // Auto-generate ID
    batch.set(productRef, product);
  });

  try {
    await batch.commit(); // Commit the batch operation
    console.log("All products added successfully!");
  } catch (error) {
    console.error("Error adding products:", error);
  }
}

addProducts();
