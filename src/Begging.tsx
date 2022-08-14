import classNames from "classnames"
import { useState } from "react"
import classes from "./bootstrap.module.scss"

const IBAN_INPUT_ID = "iban-input"
const DURATION = 5000

function BeggingPage() {
  const [isIBANCopied, setIsIBANCopied] = useState(false)

  function copyToClipboard() {
    /* Get the text field */
    const copyText: any = document.getElementById(IBAN_INPUT_ID)

    /* Select the text field */
    copyText.select()
    copyText.setSelectionRange(0, 99999) /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value)

    setIsIBANCopied(true)

    setTimeout(() => {
      setIsIBANCopied(false)
    }, DURATION)
  }

  return (
    <>
      <div className="container-fluid px-4 py-5 " id="featured-3">
        <h2 className="pb-2 border-bottom">Select a payment method</h2>

        <div className="row g-4 py-4 row-cols-1 row-cols-lg-3">
          <div className="col mb-4">
            <div className="pb-lg-4">
              <img
                className="col-6"
                src="/images/satispay_logo.svg"
                alt="Satispay logo"
              ></img>
            </div>

            <div className="row d-flex justify-content-center">
              <img
                src="images/satispay_qr.png"
                className="col-10 col-sm-8 pb-2"
                alt="Satispay QR"
              ></img>
            </div>
            <div>
              <button
                type="button"
                className={classNames("btn btn-primary", classes.satispayBtn)}
              >
                <a
                  href="https://www.satispay.com/app/match/link/user/S6Y-CON--3D5F0318-0A4B-4DF5-9017-876799B46124"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apri l'app
                </a>
              </button>
            </div>
          </div>

          <hr className="d-lg-none " />

          <div className="col mb-4">
            <div className="pb-lg-4">
              <img
                className="col-6"
                src="/images/paypal_logo.svg"
                alt="PayPal logo"
              ></img>
            </div>

            <div className="row d-flex justify-content-center">
              <img
                src="images/paypal_qr.png"
                className="col-10 col-sm-8 pb-2"
                alt="PayPal QR"
              ></img>
            </div>
            <div>
              <button
                type="button"
                className={classNames("btn btn-primary", classes.paypalBtn)}
              >
                <a
                  href="https://paypal.me/atrogolo?country.x=IT&locale.x=it_IT"
                  target="_blank"
                  rel="noreferrer"
                >
                  Invia tramite link
                </a>
              </button>
            </div>
          </div>

          <hr className="d-lg-none " />

          <div className="col mb-4">
            <div className="pb-lg-4">
              <img
                className="col-6"
                src="/images/ing_logo.svg"
                alt="ING logo"
              ></img>
            </div>

            <div className="text-start mt-4">
              <label htmlFor={IBAN_INPUT_ID}>IBAN</label>

              <input
                id={IBAN_INPUT_ID}
                type="text"
                className={classNames("form-control fs-5", classes.ibanInput)}
                readOnly
                value="IT04T0347501605CC0010654343"
                onClick={copyToClipboard}
              />

              {isIBANCopied && (
                <div className={classNames("mt-2", classes.tooltip)}>
                  IBAN copied to clipboard
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BeggingPage
