import Link from "next/link"
import styles from './Header.module.scss'

const Header = ({ lang, setLang }) => {

    const en = {
        home: "Home",
        project: "Web dev",
        contact: "Contact",
        select: "Language",
        buttonEn: "Eng",
        buttonEs: "Span",
        buttonFr: "Fr",
    }

    const es = {
        home: "Inicio",
        project: "Desarollo web",
        contact: "Contacto",
        select: "Idioma",
        buttonEn: "Ing",
        buttonEs: "Esp",
        buttonFr: "Fr",
    }

    const fr = {
        home: "Accueil",
        project: "Dev web",
        contact: "Contact",
        select: "Langue",
        buttonEn: "Ang",
        buttonEs: "Esp",
        buttonFr: "Fr",
    }


    let langNav = {
        home: "", project: "", contact: "", buttonEn: "", buttonFr: "", buttonEs: ""
    }

    switch (lang) {
        case "es":
            langNav = es
            break
        case "fr":
            langNav = fr
            break
        case "en":
            langNav = en
            break
        default:
            langNav = langEn
    }

    const langHandler = (e) => {
        const newLang = e.target.name
        switch (newLang) {
            case 'fr':
                setLang('fr')
                break
            case 'en':
                setLang('en')
                break
            case 'es':
                setLang('es')
                break
            default:
                return
        }
    }

    return (
        <header id='header' className={styles.header}>
            <div className={styles.nav}>
                <ul className={styles.list}>
                    <li><Link href="/" className={styles.link}>{langNav.home}</Link></li>
                    <li><Link href="/projects" className={styles.link}>{langNav.project}</Link></li>
                    <li><Link href="/contact" className={styles.link}>{langNav.contact}</Link></li>
                </ul>
            </div>
            <div className={styles.lang}>
                <p>{langNav.select} :</p>
                <button className={styles.btn} name="en" onClick={(e) => langHandler(e)}>{langNav.buttonEn}</button>
                <button className={styles.btn} name="es" onClick={(e) => langHandler(e)}>{langNav.buttonEs}</button>
                <button className={styles.btn} name="fr" onClick={(e) => langHandler(e)}>{langNav.buttonFr}</button>
            </div>
        </header>
    )
}

export default Header