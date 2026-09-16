import fs from "node:fs";
import path from "node:path";

import sharp from "sharp";


const ROOT =
  process.cwd();

const PUBLIC =
  path.join(
    ROOT,
    "public",
  );

const OUTPUT_ROOT =
  path.join(
    PUBLIC,
    "generated",
    "service",
  );

const MANIFEST_PATH =
  path.join(
    ROOT,
    "src",
    "generated",
    "service-image-manifest.js",
  );


const SOURCE_DIRECTORIES = [
  path.join(
    PUBLIC,
    "images",
    "service-v3",
  ),

  path.join(
    PUBLIC,
    "images",
    "service-mobile",
  ),

  path.join(
    PUBLIC,
    "images",
    "service",
  ),
];


const TARGET_WIDTHS = [
  480,
  768,
  1024,
  1440,
  1920,
  2560,
  3200,
  3840,
];


const RASTER_EXTENSIONS =
  new Set([
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
  ]);


function toPosix(value) {
  return value.replace(
    /\\/g,
    "/",
  );
}


function walk(directory) {
  if (
    !fs.existsSync(directory)
  ) {
    return [];
  }

  const result = [];

  for (
    const entry of
      fs.readdirSync(
        directory,
        {
          withFileTypes: true,
        },
      )
  ) {

    const absolute =
      path.join(
        directory,
        entry.name,
      );

    if (entry.isDirectory()) {
      result.push(
        ...walk(absolute)
      );
      continue;
    }

    result.push(absolute);
  }

  return result;
}


function getDisplayDimensions(
  metadata,
) {
  let width =
    metadata.width || 0;

  let height =
    metadata.height || 0;

  const orientation =
    metadata.orientation || 1;

  if (
    orientation >= 5 &&
    orientation <= 8
  ) {
    [width, height] =
      [height, width];
  }

  return {
    width,
    height,
  };
}


function getWidths(
  sourceWidth,
) {
  if (!sourceWidth) {
    return [];
  }

  const widths =
    TARGET_WIDTHS.filter(
      (width) =>
        width <= sourceWidth
    );

  const maxAllowed =
    Math.min(
      sourceWidth,
      3840,
    );

  if (
    maxAllowed > 0 &&
    !widths.includes(
      maxAllowed
    )
  ) {
    widths.push(
      maxAllowed
    );
  }

  if (
    widths.length === 0
  ) {
    widths.push(
      sourceWidth
    );
  }

  return [
    ...new Set(widths),
  ].sort(
    (a, b) => a - b
  );
}


async function generate() {
  console.log("");
  console.log(
    "=============================================="
  );

  console.log(
    " VINECO SERVICE RESPONSIVE IMAGE GENERATOR"
  );

  console.log(
    "=============================================="
  );

  console.log("");


  /*
   * Clean only our generated Service directory.
   * Original images are never touched.
   */
  fs.rmSync(
    OUTPUT_ROOT,
    {
      recursive: true,
      force: true,
    },
  );

  fs.mkdirSync(
    OUTPUT_ROOT,
    {
      recursive: true,
    },
  );


  const files =
    SOURCE_DIRECTORIES
      .flatMap(walk)
      .filter(
        (file) =>
          RASTER_EXTENSIONS.has(
            path.extname(file)
              .toLowerCase()
          )
      );


  const manifest = {};

  let generatedCount = 0;
  let processedCount = 0;


  for (const input of files) {

    const extension =
      path.extname(input)
        .toLowerCase();

    const relativePublic =
      toPosix(
        path.relative(
          PUBLIC,
          input,
        )
      );

    const originalUrl =
      "/" + relativePublic;


    let metadata;

    try {
      metadata =
        await sharp(
          input,
          {
            failOn: "none",
          },
        ).metadata();
    }
    catch (error) {
      console.warn(
        "Skip unreadable image:",
        relativePublic,
        error.message,
      );

      continue;
    }


    const {
      width,
      height,
    } =
      getDisplayDimensions(
        metadata,
      );


    if (
      !width ||
      !height
    ) {
      console.warn(
        "Skip image without dimensions:",
        relativePublic,
      );

      continue;
    }


    const widths =
      getWidths(width);


    const relativeDirectory =
      path.dirname(
        relativePublic,
      );

    const outputDirectory =
      path.join(
        OUTPUT_ROOT,
        relativeDirectory,
      );


    fs.mkdirSync(
      outputDirectory,
      {
        recursive: true,
      },
    );


    const originalName =
      path.basename(input);

    const variants = [];


    for (const targetWidth of widths) {

      /*
       * Include original extension in filename
       * to avoid collisions between foo.jpg / foo.png.
       */
      const outputName =
        originalName +
        ".w" +
        targetWidth +
        ".webp";

      const outputPath =
        path.join(
          outputDirectory,
          outputName,
        );


      await sharp(
        input,
        {
          failOn: "none",
        },
      )
        .rotate()
        .resize({
          width: targetWidth,

          withoutEnlargement:
            true,

          fit:
            "inside",
        })
        .toColourspace(
          "srgb"
        )
        .webp({
          quality: 95,

          effort: 4,

          smartSubsample:
            true,
        })
        .toFile(
          outputPath
        );


      const outputUrl =
        "/" +
        toPosix(
          path.relative(
            PUBLIC,
            outputPath,
          )
        );


      variants.push({
        width:
          targetWidth,

        src:
          outputUrl,
      });


      generatedCount += 1;
    }


    manifest[originalUrl] = {
      width,
      height,

      format:
        extension.replace(
          ".",
          "",
        ),

      variants,
    };


    processedCount += 1;

    console.log(
      "OK",
      relativePublic,
      width + "x" + height,
      "->",
      widths.join(", "),
    );
  }


  fs.mkdirSync(
    path.dirname(
      MANIFEST_PATH
    ),
    {
      recursive: true,
    },
  );


  const manifestCode =
    "/* AUTO-GENERATED. DO NOT EDIT BY HAND. */\n\n" +
    "const serviceImageManifest = " +
    JSON.stringify(
      manifest,
      null,
      2,
    ) +
    ";\n\n" +
    "export { serviceImageManifest };\n" +
    "export default serviceImageManifest;\n";


  const temporaryManifest =
    MANIFEST_PATH +
    ".tmp";


  fs.writeFileSync(
    temporaryManifest,
    manifestCode,
    "utf8",
  );


  fs.renameSync(
    temporaryManifest,
    MANIFEST_PATH,
  );


  console.log("");
  console.log(
    "Service source images:",
    processedCount,
  );

  console.log(
    "Responsive variants:",
    generatedCount,
  );

  console.log(
    "Manifest:",
    path.relative(
      ROOT,
      MANIFEST_PATH,
    ),
  );

  console.log("");


  if (processedCount === 0) {
    throw new Error(
      "No Service raster images were processed."
    );
  }


  if (generatedCount === 0) {
    throw new Error(
      "No responsive Service variants were generated."
    );
  }
}


generate().catch(
  (error) => {
    console.error("");
    console.error(
      "Service image generation failed:"
    );

    console.error(
      error
    );

    process.exit(1);
  },
);
