import { useEffect, useRef } from "react";

import { projectData } from "../../data/projectData";
import { productCatalog } from "../../data/productCatalog";

import SiteIcon from "../../components/ui/SiteIcon";
import SmartImage from "../../components/ui/SmartImage";

import { useSampleModal } from "./SampleModalContext";


export default function SampleModal() {
  const {
    isOpen,
    closeSampleModal,
  } = useSampleModal();

  const dialogRef = useRef(null);


  useEffect(() => {
    if (!isOpen) return undefined;

    const previousBodyOverflow =
      document.body.style.overflow;

    const previousHtmlOverflow =
      document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";


    function handleEscape(event) {
      if (event.key === "Escape") {
        closeSampleModal();
      }
    }


    document.addEventListener(
      "keydown",
      handleEscape,
    );


    const focusTimer =
      window.setTimeout(() => {
        dialogRef.current
          ?.querySelector("input")
          ?.focus();
      }, 80);


    return () => {
      window.clearTimeout(focusTimer);

      document.body.style.overflow =
        previousBodyOverflow;

      document.documentElement.style.overflow =
        previousHtmlOverflow;

      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, [
    isOpen,
    closeSampleModal,
  ]);


  if (!isOpen) {
    return null;
  }


  function handleSubmit(event) {
    event.preventDefault();

    const data =
      new FormData(event.currentTarget);

    const name =
      data.get("name") || "";

    const email =
      data.get("email") || "";

    const product =
      data.get("product") || "";

    const buyerType =
      data.get("buyerType") || "";

    const message =
      data.get("message") || "";


    const subject =
      encodeURIComponent(
        `[VinEco Free Sample] ${product} - ${name}`,
      );


    const body =
      encodeURIComponent(
        [
          "FREE SAMPLE REQUEST",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Product: ${product}`,
          `Buyer type: ${buyerType}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      );


    window.location.href =
      `mailto:${projectData.contact.salesEmail}` +
      `?subject=${subject}&body=${body}`;
  }


  return (
    <div
      className="sample-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          closeSampleModal();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sample-modal-title"
        className="sample-modal"
      >

        {/* ==================================================
            CLOSE
        ================================================== */}

        <button
          type="button"
          onClick={closeSampleModal}
          className="sample-modal-close"
          aria-label="Close free sample form"
        >
          <SiteIcon
            name="close"
            size={24}
          />
        </button>


        {/* ==================================================
            LEFT VISUAL
        ================================================== */}

        <div className="sample-modal-visual">

          <div className="relative z-10">

            <span
              className="
                inline-flex
                rounded-md
                bg-brand-500
                px-4
                py-2
                text-sm
                font-extrabold
                uppercase
                tracking-[0.08em]
                text-ink

                sm:text-base
              "
            >
              Free Sample
            </span>


            <h2
              id="sample-modal-title"
              className="
                mt-4
                max-w-md
                text-3xl
                font-extrabold
                leading-[1.02]
                tracking-[-0.04em]
                text-ink

                sm:text-4xl
              "
            >
              Test VinEco quality
              before your first order.
            </h2>


            <p
              className="
                mt-4
                max-w-md
                text-sm
                leading-7
                text-ink/65
              "
            >
              Request a product sample
              for quality, packaging and
              material evaluation.
            </p>

          </div>


          {/* FULL BLEED IMAGE */}

          <div className="sample-modal-media">
            <SmartImage
              src="/images/product-classic.webp"
              alt="VinEco coffee wood sample"
              loading="eager"
              className="sample-modal-media__image"
            />
          </div>


          {/* BADGES */}

          <div
            className="
              mt-5
              flex
              flex-wrap
              gap-2
            "
          >
            <span
              className="
                rounded-full
                bg-white/70
                px-3
                py-2
                text-[10px]
                font-bold
                text-ink
              "
            >
              100% Natural
            </span>

            <span
              className="
                rounded-full
                bg-white/70
                px-3
                py-2
                text-[10px]
                font-bold
                text-ink
              "
            >
              OEM / ODM
            </span>

            <span
              className="
                rounded-full
                bg-white/70
                px-3
                py-2
                text-[10px]
                font-bold
                text-ink
              "
            >
              Private Label
            </span>
          </div>

        </div>


        {/* ==================================================
            FORM
        ================================================== */}

        <form
          onSubmit={handleSubmit}
          className="sample-modal-form"
        >

          {/* SCROLLABLE CONTENT */}

          <div className="sample-modal-form__scroll">

            <div>

              <p
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.22em]
                  text-brand-600
                "
              >
                B2B Sample Request
              </p>


              <h3
                className="
                  mt-2
                  pr-12
                  text-2xl
                  font-extrabold
                  tracking-[-0.035em]
                  text-ink
                "
              >
                Tell us what you need.
              </h3>


              <p
                className="
                  mt-2
                  max-w-lg
                  text-sm
                  leading-6
                  text-ink/50
                "
              >
                Complete the form and our
                sales team can continue the
                conversation by email.
              </p>

            </div>


            <div className="mt-6 space-y-3.5">

              {/* NAME */}

              <label className="block">

                <span className="sample-field-label">
                  Name *
                </span>

                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  className="sample-field"
                />

              </label>


              {/* EMAIL */}

              <label className="block">

                <span className="sample-field-label">
                  Email *
                </span>

                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  className="sample-field"
                />

              </label>


              {/* PRODUCT */}

              <label className="block">

                <span className="sample-field-label">
                  Product *
                </span>

                <select
                  required
                  name="product"
                  defaultValue=""
                  className="sample-field"
                >
                  <option
                    value=""
                    disabled
                  >
                    Select a product
                  </option>

                  {productCatalog.map(
                    (product) => (
                      <option
                        key={product.slug}
                        value={product.name}
                      >
                        {product.name}
                      </option>
                    ),
                  )}
                </select>

              </label>


              {/* BUYER TYPE */}

              <fieldset>

                <legend className="sample-field-label">
                  Buyer type
                </legend>

                <div
                  className="
                    mt-2
                    grid
                    grid-cols-1
                    gap-2

                    min-[420px]:grid-cols-2
                  "
                >

                  <label className="sample-radio-card">

                    <input
                      type="radio"
                      name="buyerType"
                      value="Retailer"
                      defaultChecked
                    />

                    <span>
                      Retailer
                    </span>

                  </label>


                  <label className="sample-radio-card">

                    <input
                      type="radio"
                      name="buyerType"
                      value="Wholesaler"
                    />

                    <span>
                      Wholesaler
                    </span>

                  </label>

                </div>
              </fieldset>


              {/* MESSAGE */}

              <label className="block">

                <span className="sample-field-label">
                  Note
                </span>

                <textarea
                  name="message"
                  rows="3"
                  placeholder="Target quantity, market, packaging..."
                  className="
                    sample-field
                    min-h-[96px]
                    resize-y
                    py-3
                  "
                />

              </label>

            </div>

          </div>


          {/* ==================================================
              FIXED ACTION AREA ON DESKTOP
          ================================================== */}

          <div className="sample-modal-form__footer">

            <button
              type="submit"
              className="
                flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-brand-500
                px-5
                text-sm
                font-extrabold
                text-ink
                shadow-[0_12px_30px_rgba(245,158,11,0.22)]

                transition

                hover:bg-brand-600
              "
            >
              Send sample request

              <SiteIcon
                name="send"
                size={16}
              />
            </button>


            <p
              className="
                mt-2
                text-center
                text-[10px]
                leading-5
                text-ink/40
              "
            >
              By submitting, you agree
              that VinEco may contact you
              regarding this enquiry.
            </p>

          </div>

        </form>

      </div>
    </div>
  );
}