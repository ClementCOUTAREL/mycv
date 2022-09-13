import validators from '../helpers/validators'
import { useState } from "react"
import useDownloader from 'react-use-downloader'

import { m } from 'framer-motion'

const Contact = ({ lang }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [errorMessages, setErrorMessages] = useState({
        name: "", email: "", message: ""
    })
    const [errors, setErrors] = useState(false)
    const [success, setSuccess] = useState(false)

    const onSubmitHandler = async (e) => {
        try {
            setErrors(false)
            setErrorMessages({
                name: "", email: "", message: ""
            })
            e.preventDefault()
            const data = {
                name: name,
                email: email,
                message: message
            }
            const checkErrors = validators(data)
            if (checkErrors.length > 0) {
                return checkErrors.map(error => {
                    console.log(error);
                    setErrors(true)
                    return setErrorMessages(prev => {
                        return {
                            ...prev,
                            [error.field]: error.message
                        }
                    })
                })
            }
            const JSONData = JSON.stringify(data)
            const endpoint = '/api/hello'
            const options = {
                method: 'post',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSONData
            }
            const response = await fetch(endpoint, options)
            console.log(response);
            if (response.ok) {
                console.log("OK")
                setSuccess(true)
            }
        } catch (error) {
            console.log(error)
            return
        }
    }

    const fr = {
        title: "Contactez-moi",
        description: (
            <m.p
                initial={{ opacity: 0, x: "100%" }}
                animate={{
                    opacity: 1, x: "0"

                }}
                transition={{ duration: 1, delay: 0.5 }}
            >Vous pouvez me contacter sur <a href="https://github.com/ClementCOUTAREL" target='blank'>Github</a> et <a href="https://www.linkedin.com/in/cl%C3%A9ment-coutarel-01a47a113/" target='blank'>LinkedIn</a>, ou envoyez-moi un mail en remplissant le formulaire ci-dessous:</m.p>

        ),
        resume: (<m.p
            initial={{ opacity: 0, x: "100%" }}
            animate={{
                opacity: 1, x: "0"

            }}
            transition={{ duration: 1, delay: 0.5 }}>
            Vous trouverez ci-joint les liens de téléchargement de mon CV : <a download href="resume/Resume-Fr.pdf">CV-Français</a> - <a download href="resume/Resume-En.pdf">CV-Anglais</a> - <a download href="resume/Resume-Es.pdf">CV-Espagnol</a>
        </m.p>),
        name: "Nom",
        email: "Email",
        message: "Laissez-moi votre message",
        button: "Envoyer",
        success: "Email envoyé"
    }

    const en = {
        title: "Contact me",
        description: (
            <m.p
                initial={{ opacity: 0, x: "100%" }}
                animate={{
                    opacity: 1, x: "0"

                }}
                transition={{ duration: 1, delay: 0.5 }}
            >You may contact me on my <a href="https://github.com/ClementCOUTAREL" target='blank'>Github</a> and <a href="https://www.linkedin.com/in/cl%C3%A9ment-coutarel-01a47a113/" target='blank'>LinkedIn</a>  profiles, or you may sent me an email by fulfilling the form below :</m.p>

        ),
        resume: (<m.p
            initial={{ opacity: 0, x: "100%" }}
            animate={{
                opacity: 1, x: "0"

            }}
            transition={{ duration: 1, delay: 0.5 }}>
            You can find here the links to download my resume : <a download href="resume/Resume-Fr.pdf">CV-Français</a> - <a download href="resume/Resume-En.pdf">CV-Anglais</a> - <a download href="resume/Resume-Es.pdf">CV-Espagnol</a>
        </m.p>),
        name: "Name",
        email: "Email",
        message: "Let me your message",
        button: "Send",
        success: "Email sent"
    }

    const es = {
        title: "Contacto",
        description: (
            <m.p
                initial={{ opacity: 0, x: "100%" }}
                animate={{
                    opacity: 1, x: "0"

                }}
                transition={{ duration: 1, delay: 0.5 }}
            >Puede contactarme en <a href="https://github.com/ClementCOUTAREL" target='blank'>Github</a> y <a href="https://www.linkedin.com/in/cl%C3%A9ment-coutarel-01a47a113/" target='blank'>LinkedIn</a>, puede enviarme un correo llenando el formulario abajo:</m.p>

        ),
        resume: (<m.p
            initial={{ opacity: 0, x: "100%" }}
            animate={{
                opacity: 1, x: "0"

            }}
            transition={{ duration: 1, delay: 0.5 }}>
            Encontrarás adjunto los enlaces de descarga de mi CV : <a download href="resume/Resume-Fr.pdf">CV-Francés</a> - <a download href="resume/Resume-En.pdf">CV-Inglés</a> - <a download href="resume/Resume-Es.pdf">CV-Español</a>
        </m.p>),
        name: "Nombre",
        email: "Correo",
        message: "Su mensaje",
        button: "Enviar",
        success: "Correo enviado"
    }

    let data = null

    switch (lang) {
        case 'fr':
            data = fr
            break
        case 'es':
            data = es
            break
        case 'en':
            data = en
            break
        default:
            return
    }

    return (
        <>
            <div className="contact-container">
                <m.h1
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{
                        opacity: 1, x: "0"

                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                >{data.title}</m.h1>
                {data.resume}
                {data.description}
                <m.form
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{
                        opacity: 1, y: "0"

                    }}
                    transition={{ duration: 1, delay: 1 }}
                    id="contact-form"
                    onSubmit={(event) => onSubmitHandler(event)}
                >
                    <div className="form-group">
                        <label htmlFor="name">{data.name} :</label>
                        <input minLength={3} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                        {errors && errorMessages.name !== "" ? <p className="error">{errorMessages.name}</p> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">{data.email} :</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errors && errorMessages.email !== "" ? <p className="error">{errorMessages.email}</p> : null}
                    </div>
                    <div className="form-group">
                        <label id="textarea-label" htmlFor="message">{data.message} :</label>
                        <textarea minLength={10} className="text-area" wrap="hard" type="textarea" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                        {errors && errorMessages.message !== "" ? <p className="error">{errorMessages.message}</p> : null}
                    </div>
                    <button type="submit"><span>{data.button}</span></button>
                    {success ? <p className="success">{data.success}</p> : null}
                </m.form>
            </div>
        </>
    )
}

export default Contact