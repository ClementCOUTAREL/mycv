import styles from './SkillItem.module.scss'

const SkillItem = ({ skill }) => {

    return (
        <div className={styles.container}>
            <h3>{skill.field}</h3>
            <ul>

                <div className={styles.grid}>
                    {skill.items.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </div>
            </ul>
        </div>
    )
}

export default SkillItem