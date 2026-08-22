export const productCatalog = [
  {
    slug: "coffee-wood",

    name: "Coffee Wood",

    shortName: "Coffee Wood",

    eyebrow: "Natural Dog Chew",

    image: "/images/product-classic.webp",

    description:
      "Natural coffee wood chew products made from mature Vietnamese coffee wood, carefully processed, dried and hand-finished for international pet-product collections.",
  },

  {
    slug: "loofah",

    name: "Loofah",

    shortName: "Loofah",

    eyebrow: "Natural Pet Toy",

    image: "/images/product-loofah.webp",

    description:
      "Lightweight natural loofah products developed for pet play, enrichment and eco-conscious private-label collections.",
  },

  {
    slug: "hemp-ball-toy",

    name: "Hemp Ball Toy",

    shortName: "Hemp Ball Toy",

    eyebrow: "Natural Fiber Toy",

    image: "/images/product-hemp-ball.webp",

    description:
      "Natural-fiber ball toys designed for interactive pet play and suitable for OEM, ODM and private-label development.",
  },

  {
    slug: "cat-scratcher",

    name: "Cat Scratcher",

    shortName: "Cat Scratcher",

    eyebrow: "Cat Collection",

    image: "/images/product-cat-scratcher.webp",

    description:
      "Natural-material scratching products developed for cats, private-label collections and modern pet brands.",
  },

  {
    slug: "coco-coir",

    name: "Coco Coir",

    shortName: "Coco Coir",

    eyebrow: "Natural Fiber",

    image: "/images/product-coco-coir.webp",

    description:
      "Coconut coir materials and pet-product concepts developed for durable, natural and environmentally conscious collections.",
  },

  {
    slug: "pet-bed",

    name: "Pet Bed",

    shortName: "Pet Bed",

    eyebrow: "Pet Comfort",

    image: "/images/product-pet-bed.webp",

    description:
      "Pet bedding concepts developed with suitable natural materials for OEM, ODM and private-label product collections.",
  },
];

export function findProductBySlug(slug) {
  return productCatalog.find(
    (product) => product.slug === slug
  );
}