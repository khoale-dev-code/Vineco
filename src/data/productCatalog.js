export const productCatalog = [
  {
    slug: "coffee-wood",
    name: "Coffee Wood",
    shortName: "Coffee Wood",
    eyebrow: "Natural Dog Chew",
    image: "/images/product-classic.webp",
    description:
      "Natural coffee wood chew products made from mature Vietnamese coffee trees, carefully dried and hand-finished.",
  },
  {
    slug: "loofah",
    name: "Loofah",
    shortName: "Loofah",
    eyebrow: "Natural Pet Toy",
    image: "/images/product-loofah.webp",
    description:
      "Lightweight natural loofah products designed for pet play and eco-conscious collections.",
  },
  {
    slug: "hemp-ball-toy",
    name: "Hemp Ball Toy",
    shortName: "Hemp Ball Toy",
    eyebrow: "Natural Rope Toy",
    image: "/images/product-hemp-ball.webp",
    description:
      "Natural-fiber ball toys suitable for interactive pet play and private-label collections.",
  },
  {
    slug: "cat-scratcher",
    name: "Cat Scratcher",
    shortName: "Cat Scratcher",
    eyebrow: "Cat Collection",
    image: "/images/product-cat-scratcher.webp",
    description:
      "Natural-material scratching products developed for cats and modern pet brands.",
  },
  {
    slug: "coco-coir",
    name: "Coco Coir",
    shortName: "Coco Coir",
    eyebrow: "Natural Fiber",
    image: "/images/product-coco-coir.webp",
    description:
      "Coconut coir components and pet products made for durable, natural product collections.",
  },
  {
    slug: "pet-bed",
    name: "Pet Bed",
    shortName: "Pet Bed",
    eyebrow: "Pet Comfort",
    image: "/images/product-pet-bed.webp",
    description:
      "Natural-material pet bedding concepts suitable for OEM, ODM and private-label development.",
  },
];

export function findProductBySlug(slug) {
  return productCatalog.find((product) => product.slug === slug);
}