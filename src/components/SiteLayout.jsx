"use client"

import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import BackToTop from "./BackToTop"
import ScrollToTop from "./BackToTop"
import SnapToTop from "./SnapToTop"
import AdultConsentModal from "./AdultConsentModal"
import TelegramModal from "./TelegramModal"
import { hasAdultConsent } from "../utils/consent"

export default function SiteLayout({ children }) {
  const [consentGiven, setConsentGiven] = useState(false)

  // Check adult consent on client mount only
  useEffect(() => {
    setConsentGiven(hasAdultConsent())
  }, [])

  return (
    <div>

        <div>
          <Navbar />
          <ScrollToTop />
          <SnapToTop />
          {!consentGiven && (
            <AdultConsentModal onClose={() => setConsentGiven(true)} />
          )}
          <TelegramModal />
          {children}
          <BackToTop />
          <Footer />
        </div>
    </div>
  )
}
