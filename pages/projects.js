
const Projects = ({ lang }) => {
    const fr = {
        title: "Projets de développement web",
        coding: "Developpement en cours ...",
        description: (
            <h3>Revenez visiter cette section régulièrement, ou suivez la progression sur mon <a href="https://github.com/ClementCOUTAREL" target="blank">profil Github</a></h3>
        )
    }

    const en = {
        title: "Web development projects",
        coding: "Coding in progress ...",
        description: (
            <h3>Please come back later to see them, or follow the updates on my <a href="https://github.com/ClementCOUTAREL" target="blank">Github profile</a></h3>
        )
    }

    const es = {
        title: "Proyectos de desarollo web",
        coding: "Desarollo en progreso ...",
        description: (
            <h3>Vuelve más tarde para verlos o sigue las actualizaciones en mi <a href="https://github.com/ClementCOUTAREL" target="blank">pagina Github</a></h3>
        )
    }

    let data = null

    switch (lang) {
        case 'fr':
            data = fr
            break
        case 'en':
            data = en
            break
        case 'es':
            data = es
            break
        default:
            return
    }

    return (
        <>
            <div className="projects-container">
                <h1>{data.title}</h1>
                <section>
                    <h2>{data.coding}</h2>
                    {data.description}
                </section>
            </div>
        </>
    )
}

export default Projects