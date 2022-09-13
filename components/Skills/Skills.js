import SkillItem from "./SkillItem"
import styles from "./Skills.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { m } from "framer-motion"

const Skills = ({ lang }) => {
    const skillsFr = [
        {
            id: 1,
            field: "Ingénierie routière",
            items: ["Diagnostic de chaussées", "Dimensionnement de structures de chaussées", "Diagnostic de présence d'amiante/HAP dans les enrobés", "Suivi de refection de chaussées"],
            supp: ["Alize LCPC"],
            suppLabel: "Logiciels"
        },
        {
            id: 3,
            field: "Developpement web",
            items: ["HTLM5/CSS3", "Javascript : NodeJS, ExpressJS, React", "Python : Django"],

        },
        {
            id: 2,
            field: "Logiciels",
            items: ["Microsoft Word", "Microsoft Powerpoint", "Microsoft Excel"],

        },
        {
            id: 4,
            field: "Langues",
            items: ["Francais - Maternelle", "Anglais - Intermédiaire", "Espagnol - Intermédiaire"],

        }]

    const skillsEn = [
        {
            id: 1,
            field: "Road Enginnering",
            items: ["Pavement diagnosis ", "Dimensioning of reinforcement and new structures", "Diagnosis of the presence of asbesto/HAP in asphalt", "Road repair follow-up"],
            supp: ["Alize LCPC"],
            suppLabel: "Softwares"
        },
        {
            id: 3,
            field: "Web Development",
            items: ["HTLM5/CSS3", "Javascript : NodeJS, ExpressJS, React", "Python : Django"],

        },
        {
            id: 2,
            field: "Softwares",
            items: ["Microsoft Word", "Microsoft Powerpoint", "Microsoft Excel"],

        },
        {
            id: 4,
            field: "Languages",
            items: ["French - Native", "English - Intermediate", "Spanish - Intermediate"],

        }]

    const skillsEs = [
        {
            id: 1,
            field: "Ingenieria de pavimientos",
            items: ["Diagnosticos de pavimientos", "Dimensionamiento de estructuras de pavimentos", "Diagnostico de la presencia de asbesto/HAP en asfalto", "Seguimiento de reparacion de carreteras"],
            supp: ["Alize LCPC"],
            suppLabel: "Softwares"
        },
        {
            id: 3,
            field: "Desarollo web",
            items: ["HTLM5/CSS3", "Javascript : NodeJS, ExpressJS, React", "Python : Django"],

        },
        {
            id: 2,
            field: "Softwares",
            items: ["Microsoft Word", "Microsoft Powerpoint", "Microsoft Excel"],

        },
        {
            id: 4,
            field: "Idiomas",
            items: ["Frances - Materna", "Ingles - Intermedio", "Espanol - Intermedio"],

        }]

    let skills = []

    switch (lang) {
        case "fr":
            skills = skillsFr
            break
        case "en":
            skills = skillsEn
            break
        case "es":
            skills = skillsEs
            break
        default:
            return
    }

    return (
        <section className={styles.container}>
            <m.h2
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{
                    opacity: 1, x: "0"

                }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >Skills</m.h2>

            <m.div
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{
                    opacity: 1, y: "0"

                }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
                    effect="cards"
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {
                        skills.map(skill => (
                            <SwiperSlide key={skill.id}>
                                <SkillItem skill={skill} />
                            </SwiperSlide>
                        ))}
                </Swiper>

            </m.div>


        </section>
    )
}

export default Skills