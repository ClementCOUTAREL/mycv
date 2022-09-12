import FormationItem from './FormationItem'
import blaise from '../../public/images/blaise.jpg'
import styles from "./Formations.module.scss"

import { m } from 'framer-motion'

const Formations = ({ lang }) => {
    const formationsFr = [{
        id: 1,
        university: "Université Blaise Pascal - Clermont-Ferrand, France",
        title: "Master 2 Professionel - Géologie de l'Aménagement",
        year: "2014 - 2015",
        mention: "Bien - Major de promotion",
        image: blaise
    },
    {
        id: 2,
        university: "Université Blaise Pascal - Clermont-Ferrand, France",
        title: "Licence - Géologie de l'environnement",
        year: "2010 - 2013",
        mention: "Bien",
        image: blaise
    }]

    const formationsEn = [{
        id: 1,
        university: "University Blaise Pascal - Clermont-Ferrand, France",
        title: "Master 2 Professional - Development geology",
        year: "2014 - 2015",
        mention: "Good - Major of promotion",
        image: blaise
    },
    {
        id: 2,
        university: "University Blaise Pascal - Clermont-Ferrand, France",
        title: "Bachelor - Environmental geology",
        year: "2010 - 2013",
        mention: "Good",
        image: blaise
    }]

    const formationsEs = [{
        id: 1,
        university: "Universidad Blaise Pascal - Clermont-Ferrand, France",
        title: "Maestria 2 Professional - Geología del desarrollo",
        year: "2014 - 2015",
        mention: "Bueno - Primero de promocion",
        image: blaise
    },
    {
        id: 2,
        university: "Universidad Blaise Pascal - Clermont-Ferrand, France",
        title: "Licencia - Geologia ambiental",
        year: "2010 - 2013",
        mention: "Bueno",
        image: blaise
    }]

    let formations = null

    switch (lang) {
        case "fr":
            formations = formationsFr
            break
        case "es":
            formations = formationsEs
            break
        case "en":
            formations = formationsEn
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
                transition={{ duration: 1 }}>Formations</m.h2>

            {formations.map(formation => (
                <FormationItem data={formation} key={formation.id} />
            ))}
        </section>
    )
}

export default Formations