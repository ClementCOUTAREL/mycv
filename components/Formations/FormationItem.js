import Image from "next/image"
import styles from './FormationItem.module.scss'

import { m } from 'framer-motion'




const FormationItem = ({ data }) => {
    console.log(data)
    return (
        <m.div
            className={styles.container}
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{
                opacity: 1, x: "0"

            }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
        >
            <div className={styles.logo}>
                <div>
                    <Image src={data.image} height="80px" width="100px" alt="logo" />
                </div>
            </div>
            <div className="formation-description">
                <h3>{data.university}</h3>
                <h4>{data.title}</h4>
                <p>{data.year}</p>
                <p>Mention : {data.mention}</p>
            </div>
        </m.div>
    )
}

export default FormationItem