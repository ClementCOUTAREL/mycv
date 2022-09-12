import styles from "./Presentation.module.scss"
import avatar from '../../public/images/avatar.jpg'
import Image from "next/image"

import { m } from 'framer-motion'


const Presentation = ({ lang }) => {
    const titleAnimation = {
        initial: {
            opacity: 0,
            scale: 0.4
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.4
        },
        transition: { duration: 2, delay: 0.5 }
    }

    const photoAnimation = {
        initial: {
            opacity: 0,
            scale: 0.4
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.4
        },
        transition: { duration: 2, delay: 2.3 }
    }

    const textAnimation = {
        initial: {
            opacity: 0,
            scale: 0.4
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.4
        },
        transition: { duration: 1.5, delay: 1.3 }
    }

    const fr = {
        title: "Bienvenue sur mon profil",
        description: (
            <h2>Mon nom est <span className={styles.name}>Clement COUTAREL</span>, je suis ingénieur routier et fan de développement web</h2>
        )
    }

    const en = {
        title: "Welcome on my profile",
        description: (
            <h2>My name is <span className={styles.name}>Clement COUTAREL</span>, I am a road engineer and a web development addict</h2>
        )
    }

    const es = {
        title: "Bienvenido en mi perfil",
        description: (
            <h2>Mi nombre es <span className={styles.name}>Clement COUTAREL</span>, soy un ingeniero civil especialisado en pavimientos y fan de desarollo web</h2>
        )
    }

    let content = {
        title: "", decription: (
            <h2>My name is <span className={styles.name}>Clement COUTAREL</span>, I am a road engineer and a web development addict </h2>
        )
    }

    switch (lang) {
        case "fr":
            content = fr
            break
        case "es":
            content = es
            break
        case "en":
            content = en
            break
        default:
            return
    }

    return (
        <section className={styles.presentation} >
            <m.h1
                initial="initial"
                animate="animate"
                exit="exit"
                variants={titleAnimation}
                transition={titleAnimation.transition}>{content.title}</m.h1>

            <div className={styles.text}>
                <m.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={photoAnimation}
                    transition={photoAnimation.transition}
                    className={styles.avatar}>
                    <Image src={avatar} alt="My profile picture" />
                </m.div>
                <m.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={textAnimation}
                    transition={textAnimation.transition}
                    className={styles.description}>
                    {content.description}
                </m.div>
            </div>

        </section>
    )
}

export default Presentation