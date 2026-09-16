import {
  useMemo,
  useState,
} from "react";

import serviceImageManifest from "../../generated/service-image-manifest.js";


const DEFAULT_SERVICE_SIZES =
  "(max-width: 899px) calc(100vw - 32px), 50vw";


function normalizeSource(src) {
  if (
    typeof src !== "string" ||
    !src
  ) {
    return "";
  }

  const withoutQuery =
    src.split("?")[0].split("#")[0];

  if (
    withoutQuery.startsWith("/")
  ) {
    return withoutQuery;
  }

  return "/" + withoutQuery;
}


export default function ServiceResponsiveImage({
  src,
  alt,
  className = "",
  fallbackClassName = "",
  loading = "lazy",
  sizes = DEFAULT_SERVICE_SIZES,
  fetchPriority = "auto",
}) {
  const [failed, setFailed] =
    useState(false);


  const imageData =
    useMemo(() => {
      const key =
        normalizeSource(src);

      return (
        serviceImageManifest[key] ??
        null
      );
    }, [src]);


  const srcSet =
    useMemo(() => {
      if (
        !imageData ||
        !Array.isArray(
          imageData.variants
        )
      ) {
        return "";
      }

      return imageData.variants
        .map(
          (variant) =>
            variant.src +
            " " +
            variant.width +
            "w",
        )
        .join(", ");
    }, [imageData]);


  if (!src || failed) {
    return (
      <div
        className={
          "flex h-full w-full items-center justify-center " +
          "bg-brand-50 p-6 text-center " +
          fallbackClassName
        }
      >
        <div>
          <div
            className="
              mx-auto
              mb-3
              h-10
              w-10
              rounded-full
              bg-brand-500/15
            "
          />

          <p
            className="
              text-xs
              font-semibold
              text-ink/50
            "
          >
            Add image
          </p>

          <p
            className="
              mt-1
              break-all
              text-[10px]
              text-ink/35
            "
          >
            {src}
          </p>
        </div>
      </div>
    );
  }


  return (
    <img
      src={src}
      srcSet={
        srcSet ||
        undefined
      }
      sizes={
        srcSet
          ? sizes
          : undefined
      }
      width={
        imageData?.width ||
        undefined
      }
      height={
        imageData?.height ||
        undefined
      }
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      onError={() =>
        setFailed(true)
      }
      className={className}
    />
  );
}
