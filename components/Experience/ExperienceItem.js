import Image from "next/image"
import styles from './ExperienceItem.module.scss'
import { m } from 'framer-motion'


const ExperienceItem = ({ data }) => {
    console.log(data)
    return (
        <m.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{
                opacity: 1, x: "0"

            }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className={styles.container}>
            <div className={styles.logo}>
                <Image src={data.image} alt="logo" />
            </div>
            <div className={styles.description}>
                <h3>{data.job}</h3>
                <h4>{data.company}</h4>
                <p>{data.year}</p>
                <p>{data.location}</p>
            </div>
            <div className={styles.tasks}>
                <ul>
                    {data.tasks.map(task => (
                        <li key={task.id}>{task.task}</li>
                    ))}
                </ul>
            </div>
        </m.div>
    )
}

export default ExperienceItem