import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "hashed_password_1",
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "hashed_password_2",
      },
    ],
  });

  await prisma.product.createMany({
    data: [
      {
        name: "Wireless Headphones",
        category: "Electronics",
        price: 59.99,
        imageUrl: "https://c1.neweggimages.com/ProductImage/B7S8S2210040JPJXZD5.jpg",
        rating: 4.5,
        reviews: 120,
        stock: 0
      },
      {
        name: "Smartwatch",
        category: "Wearables",
        price: 129.99,
        imageUrl: "https://c1.neweggimages.com/ProductImage/11-854-133-01.jpg",
        rating: 4.8,
        reviews: 89,
        stock: 0
      },
      {
        name: "Gaming Mouse",
        category: "Accessories",
        price: 39.99,
        imageUrl: "https://c1.neweggimages.com/ProductImage/68-105-274-V01.jpg",
        rating: 4.3,
        reviews: 150,
        stock: 0
      },
      {
        name: "Bluetooth Speaker",
        category: "Audio",
        price: 79.99,
        imageUrl: "https://c1.neweggimages.com/ProductImage/19-113-845-01.jpg",
        rating: 4.7,
        reviews: 75,
        stock: 0
      },
      {
        name: "Bluetooth Speaker",
        category: "Audio",
        price: 79.99,
        imageUrl:
          "https://c1.neweggimages.com/ProductImageCompressAll1280/74-103-752-05.jpg",
        rating: 4.7,
        reviews: 75,
        stock: 0
      },
      {
        name: "Bluetooth Speaker",
        category: "Audio",
        price: 79.99,
        imageUrl: "https://c1.neweggimages.com/ProductImage/26-627-147-02.png",
        rating: 4.7,
        reviews: 75,
        stock: 0
      },
    ],
  });

  console.log("Seeding completed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });