import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import { useRouter } from 'next/router'
import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer'
import '../styles/index.scss'
import '../styles/_colors.scss'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [lang, setLang] = useState("en")

  return (
    <div>
      <Header lang={lang} setLang={setLang} />
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <main >
            <Component key={router.asPath} {...pageProps} lang={lang} />
          </main>
        </AnimatePresence>
      </LazyMotion >
      <Footer lang={lang} />
    </div>
  )
}

export default MyApp
