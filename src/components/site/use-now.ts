"use client";

import { useEffect, useState } from "react";

/**
 * The current time, available only after mount. Pages are prerendered at build time,
 * so anything that depends on "now" (e.g. past vs upcoming) waits for the browser.
 */
export function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => setNow(new Date()), []);
  return now;
}
