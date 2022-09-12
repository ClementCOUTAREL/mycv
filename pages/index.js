
import Presentation from '../components/Presentation/Presentation'
import Formations from "../components/Formations/Formations"
import Experience from "../components/Experience/Experience"
import Skills from "../components/Skills/Skills"

export default function Home({ lang }) {
  return (
    <>
      <Presentation lang={lang} />
      <Formations lang={lang} />
      <Experience lang={lang} />
      <Skills lang={lang} />
    </>
  )
}
