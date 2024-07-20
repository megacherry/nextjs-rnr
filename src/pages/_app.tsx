import type { AppProps } from "next/app"
import { PortalHost } from "@rn-primitives/portal"
import "~/lib/global.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <PortalHost />
    </>
  )
}
