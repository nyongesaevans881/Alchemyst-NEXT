// Utilities to manage adult consent in localStorage
const CONSENT_KEY = "adult_consent_ts"
const HOURS = 25

export function grantAdultConsent() {
  try {
    if (typeof window === 'undefined') return;
    const ts = Date.now()
    localStorage.setItem(CONSENT_KEY, String(ts))
  } catch {
    // ignore storage errors
  }
}

export function clearAdultConsent() {
  try {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(CONSENT_KEY)
  } catch {
    // ignore storage errors
  }
}

export function hasAdultConsent() {
  try {
    if (typeof window === 'undefined') return false;
    const v = localStorage.getItem(CONSENT_KEY)
    if (!v) return false
    const ts = Number(v)
    if (!ts) return false
    const age = Date.now() - ts
    return age < HOURS * 60 * 60 * 1000
  } catch {
    return false
  }
}

export default { grantAdultConsent, clearAdultConsent, hasAdultConsent }
