import Link from "next/link"
import styles from './Footer.module.scss'

const Footer = ({ lang }) => {
    const fr = {
        text1: "Créé par Clément COUTAREL avec Nextjs",
        text2: (
            <p>Vous pouvez me contacter sur mes profils <a href="https://www.linkedin.com/in/cl%C3%A9ment-coutarel-01a47a113/" target="blank">LinkedIn</a>, <a href="https://github.com/ClementCOUTAREL" target="blank"> Github</a>, ou par email: <Link href="/contact">voir formulaire</Link> </p>
        )
    }

    const es = {
        text1: "Hecho por Clément COUTAREL con Nextjs",
        text2: (
            <p>Puede contactarme en mis perfiles <a href="https://www.linkedin.com/in/cl%C3%A9ment-coutarel-01a47a113/" target="blank">LinkedIn</a>, <a href="https://github.com/ClementCOUTAREL" target="blank"> Github</a>, o por correo: <Link href="/contact">ver formulario</Link> </p>
        )
    }

    const en = {
        text1: "Created by Clément COUTAREL with Nextjs",
        text2: (
            <p> You can contact on my <a href="https://www.linkedin.com/in/cl%C3%A9ment-coutarel-01a47a113/" target="blank">LinkedIn</a>, <a href="https://github.com/ClementCOUTAREL" target="blank"> Github</a> profiles, or by email: <Link href="/contact">see form</Link> </p>
        )
    }

    let langText = { text1: "", text2: null }

    switch (lang) {
        case "fr":
            langText = fr
            break
        case "es":
            langText = es
            break
        case "en":
            langText = en
            break
        default:
            return
    }



    return (
        <footer className={styles.footer}>
            <p>{langText.text1}</p>
            {langText.text2}
        </footer>
    )

}

export default Footer