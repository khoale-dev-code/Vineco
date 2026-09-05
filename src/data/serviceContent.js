export const serviceContent = {
  hero: {
    eyebrow: "VinEco Services",
    description:
      "From custom packaging and branding to laser engraving, flexible packing and quality control, VinEco supports global pet brands with practical OEM, ODM and Private Label solutions.",

    images: [
      "/images/service-v3/02-retail-box-window.jpg",
      "/images/service-v3/01-vacuum-bulk.jpg",
    ],
  },

  services: [
    {
      id: "packaging-design",
      number: "01",
      eyebrow: "Product Packaging Design",
      title: "Custom Packaging Solutions",

      intro:
        "VinEco provides custom paper and kraft boxes designed around your brand, product dimensions and retail requirements.",

      points: [
        "Custom Designs — Made to your exact size, shape and branding style.",
        "Artwork Support — Support with dielines and print files. Use your own artwork or let VinEco assist with the design.",
        "Low MOQ — Custom printed boxes can start from around 200 pieces.",
        "Retail Ready — Suitable for retail shelves, private-label products and gift sets.",
        "Variable Printing — Add barcodes, QR codes, product information and custom brand elements.",
        "Extra Protection — Retail packaging can be combined with inner vacuum sealing.",
      ],

      // đã bỏ ảnh box lớn theo yêu cầu "xóa hình này", giữ lại 2 ảnh còn lại (phóng to bằng CSS)
      images: [
        "/images/service-v3/03-retail-box-closed.jpg",
        "/images/service-v3/06-individual-vacuum-pack.jpg",
      ],
    },

    {
      id: "labels",
      number: "02",
      eyebrow: "Brand Details",
      title: "Custom Stickers & Tags on Request",

      intro:
        "VinEco provides custom tags and stickers designed to match your brand identity. You can freely choose the design, color, size, and where to place them.",

      // thay toàn bộ đoạn mô tả + bullet cũ bằng 2 nhóm theo đúng nội dung khách yêu cầu
      groups: [
        {
          heading: "Label Options:",
          items: [
            "Size: 5 x 8 cm available (or customized to your needs)",
            "Material: Kraft paper or eco-friendly cardboard",
            "Colors: Natural brown, full-color printing, or custom brand tones",
          ],
        },
        {
          heading: "Placement Options:",
          items: [
            "Placed inside vacuum-sealed bags",
            "Tied directly to the chew stick",
            "Stapled onto the outer packaging",
          ],
        },
      ],

      // đã bỏ ảnh bag nhỏ (X), giữ 2 ảnh còn lại
      images: [
        "/images/service-v3/05-kraft-hang-tag.jpg",
        "/images/service-v3/07-rope-tags.jpg",
      ],
    },

    {
      id: "engraving",
      number: "03",
      eyebrow: "Customization",
      title: "Laser Engraving",

      intro:
        "VinEco offers laser engraving directly on suitable coffee wood surfaces using your custom logo or message.",

      body:
        "Laser engraving creates a permanent brand detail on the product itself and is suitable for Private Label, small-batch testing and customized collections.",

      // copy đúng nội dung khách đưa trong khung đỏ
      points: [
        "Low MOQ: Start with only 50 pieces, ideal for small businesses and niche markets.",
        "Custom Branding: VinEco offers laser engraving on wooden surfaces with your custom logo or message.",
        "Made to Order: We can engrave your logo directly onto each wooden stick based on your exact design and requirements.",
      ],

      images: [
        "/images/service-v3/08-laser-logo.jpg",
        "/images/service-v3/09-laser-engraving.jpg", // ảnh này sẽ được phóng to (xem CSS .service-v2-collage__secondary)
      ],
    },

    {
      id: "custom-packaging",
      number: "04",
      eyebrow: "Packing",
      title: "Custom Packaging & Fulfillment",

      intro:
        "Different products, order quantities and destination markets can require different packing configurations.",

      // copy đúng nội dung khách đưa trong khung đỏ, bỏ đoạn body + bullet cũ
      points: [
        "Vacuum Sealing Protection: Products are carefully vacuum-sealed to reduce shipping volume, block moisture, keep items clean, maintain high quality, and extend shelf life.",
        "Standard Bulk Packing: Our default packing method includes 9 to 15 toys per bag to optimize shipping space.",
        "Custom Options: Flexible packaging choices are available, including individual bags, shrink wrap, or custom retail boxes. Just share your requirements, and we will handle the rest.",
      ],

      // 4 ảnh -> ServiceChapter tự chuyển sang layout grid 2x2, giữ nguyên tỉ lệ không crop
      images: [
        "/images/service-v3/05-export-boxes.png",
        "/images/service-v3/11-export-container.jpg",
        "/images/service-v3/04-export-vacuum-order.jpg",
        "/images/service-v3/12-packed-cartons.jpg",
      ],
    },

    {
      id: "quality-control",
      number: "05",
      eyebrow: "Quality Control",
      title: "A 4-Step Quality Control Process",

      intro:
        "Every VinEco coffee wood dog chew goes through a strict 4-step quality process.",

      body:
        "From sustainable wood selection and careful hand finishing to controlled heat drying and final moisture inspection, each product is checked before packing and shipment.",

      steps: [
        {
          number: "01",
          eyebrow: "Wood Selection",
          title: "Sustainable Wood Selection",
          text: "We harvest only dense, solid wood from mature coffee trees (20–25 years old).",
          images: [
            "/images/service-v3/13-coffee-wood-source.jpg",
            "/images/service-v3/16-coffee-tree-selection.jpg",
          ],
        },
        {
          number: "02",
          eyebrow: "Safety Finishing",
          title: "Hand-Sanded for Safety",
          text: "Every piece is shaped and sanded by hand to ensure edges are smooth, splinter-free, and safe for dogs to chew.",
          images: [
            "/images/service-v3/17-wood-cutting.jpg",
            "/images/service-v3/18-hand-sanding.jpg",
          ],
        },
        {
          number: "03",
          eyebrow: "Heat Treatment",
          title: "Heat Drying & Sterilization",
          text: "The wood is baked in industrial kilns to kill bacteria and lock in a safe, long-lasting moisture level (12%–14%).",
          images: [
            "/images/service-v3/19-heat-drying-kiln.jpg",
            "/images/service-v3/20-finished-wood-check.jpg",
          ],
        },
        {
          number: "04",
          eyebrow: "Final Control",
          title: "Final Check & Moisture-Proof Packing",
          text: "Each batch is tested for quality, then sealed with natural moisture absorbers to stay fresh during shipping.",
          images: [
            "/images/service-v3/21-moisture-check.jpg",
            "/images/service-v3/22-moisture-check-gorilla.jpg",
          ],
        },
      ],
    },
  ],

  overview: [
    { service: "Packaging design", availability: "Available", note: "MOQ around 200 pcs" },
    { service: "Stickers & tags", availability: "Available", note: "Custom by request" },
    { service: "Laser engraving", availability: "Available", note: "From 50 pcs" },
    { service: "Custom packaging", availability: "Available", note: "Wholesale / Private Label" },
    { service: "Quality control", availability: "Standard", note: "4-step process" },
  ],
};