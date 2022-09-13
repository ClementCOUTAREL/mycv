import ExperienceItem from './ExperienceItem'
import qualys from '../../public/images/qualys.jpg'
import ginger from '../../public/images/ginger.png'
import styles from './Experience.module.scss'

import { m } from 'framer-motion'


const Formations = ({ lang }) => {
    const experiencesFr = [{
        id: 1,
        job: "Ingenieur chargé d'affaires",
        company: "Ginger CEBTP",
        year: "Décembre 2017 - Août 2020",
        location: "Aix-en-Provence",
        image: ginger,
        tasks: [{
            id: 1,
            task: "Diagnostic de chaussées"
        }, {
            id: 2,
            task: "Dimensionnement de structures de renforcement et chaussées neuves"
        },
        {
            id: 3,
            task: "Diagnostic de présence d'amiante/HAP dans les enrobés"
        },
        {
            id: 4,
            task: "Missions de contrôle extérieur et suivi de travaux de réfection de chaussées"
        }]
    },
    {
        id: 2,
        job: "Ingenieur routier",
        company: "Qualys TPI",
        year: "Février 2016 - Décembre 2016",
        location: "Dijon",
        image: qualys,
        tasks: [{
            id: 1,
            task: "Diagnostic de chaussées"
        }, {
            id: 2,
            task: "Dimensionnement de structures de renforcement et chaussées neuves"
        },
        {
            id: 3,
            task: "Missions de contrôle extérieur et suivi de travaux de réfection de chaussées"
        }]
    },
    {
        id: 3,
        job: "Master Internship",
        company: "Qualys TPI",
        year: "Avril 2015 - Novembre 2015",
        location: "Menetrol",
        image: qualys,
        tasks: [{
            id: 1,
            task: "Réalisation d'essais en laboratoire (granulométrie, essai au bleu de méthylène...) et sur chantier (essais de plaque, dynapolaque légère ...)"
        }, {
            id: 2,
            task: "Suivi des travaux de terrassement et de chaussées sur la mise à 2x2 voies de la RN7 entre Saint-Pierre-le-Moutier et Moiry"
        }]
    }]

    const experiencesEn = [{
        id: 1,
        job: "Business Engineer",
        company: "Ginger CEBTP",
        year: "December 2017 - August 2020",
        location: "Aix-en-Provence",
        image: ginger,
        tasks: [{
            id: 1,
            task: "Pavement diagnosis"
        }, {
            id: 2,
            task: "Dimensioning of reinforcement structures and new pavements"
        },
        {
            id: 3,
            task: "Diagnosis of the presence of asbestos/HAP in asphalt"
        },
        {
            id: 4,
            task: "External control missions and follow-up of road repair works"
        }]
    },
    {
        id: 2,
        job: "Road Engineer",
        company: "Qualys TPI",
        year: "February 2016 - December 2016",
        location: "Dijon",
        image: qualys,
        tasks: [{
            id: 1,
            task: "Pavement diagnosis"
        }, {
            id: 2,
            task: "Dimensioning of reinforcement structures and new pavements"
        },
        {
            id: 3,
            task: "External control missions and follow-up of road repair works"
        }]
    },
    {
        id: 3,
        job: "Master's Internship",
        company: "Qualys TPI",
        year: "April 2015 - November 2015",
        location: "Menetrol",
        image: qualys,
        tasks: [
            {
                id: 1,
                task: "Carrying out laboratory tests (particle size, methylene blue test, etc.) and on site (plate tests, light dynaplate, etc.)"
            }, {
                id: 2,
                task: "Follow-up of earthworks and pavement works on the 2x2 lane upgrade of the RN7 between Saint-Pierre-le-Moutier and Moiry"
            }]
    }]

    const experiencesEs = [{
        id: 1,
        job: "Ingeniero comercial",
        company: "Ginger CEBTP",
        year: "Diciembre 2017 - Agosto 2020",
        location: "Aix-en-Provence",
        image: ginger,
        tasks: [{
            id: 1,
            task: "Diagnóstico de pavimentos"
        }, {
            id: 2,
            task: "Dimensionamiento de estructuras de refuerzo y nuevos pavimentos"
        },
        {
            id: 3,
            task: "Diagnóstico de la presencia de asbesto/HAP en asfalto"
        },
        {
            id: 4,
            task: "Misiones de control externo y seguimiento de obras de reparación de carreteras"
        }]
    },
    {
        id: 2,
        job: "Ingeniero de pavimentos",
        company: "Qualys TPI",
        year: "Febrero 2016 - Diciembre 2016",
        location: "Dijon",
        image: qualys,
        tasks: [{
            id: 1,
            task: "Diagnóstico de pavimentos"
        }, {
            id: 2,
            task: "Dimensionamiento de estructuras de refuerzo y nuevos pavimentos"
        }]
    },
    {
        id: 3,
        job: "Pasantía de maestría",
        company: "Qualys TPI",
        year: "Abril 2015 - Noviembre 2015",
        location: "Menetrol",
        image: qualys,
        tasks: [{
            id: 1,
            task: "Realización de ensayos de laboratorio (tamaño de partícula, ensayo de azul de metileno, etc.) e in situ (ensayos en placa, dynaplate ligero, etc.)"
        }, {
            id: 2,
            task: "Seguimiento de los trabajos de movimiento de tierras y pavimentación de la mejora del carril 2x2 de la RN7 entre Saint-Pierre-le-Moutier y Moiry"
        }]
    }]

    let title = "Experience"
    let experiences = null

    switch (lang) {
        case "fr":
            title = "Experience"
            experiences = experiencesFr
            break
        case "en":
            title = "Experience"
            experiences = experiencesEn
            break
        case "es":
            title = "Experiencia"
            experiences = experiencesEs
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
            >{title}</m.h2>
            {
                experiences.map(experience => (
                    <ExperienceItem data={experience} key={experience.id} />
                ))
            }
        </section >
    )
}

export default Formations