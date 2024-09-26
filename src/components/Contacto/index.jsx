import { useState } from "react";
import styles from "./Contacto.module.css";
import emailjs from "emailjs-com";

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const validate = () => {
        let errors = {};

        if (!formData.name) {
            errors.name = "El nombre es requerido";
        }

        if (!formData.email) {
            errors.email = "El email es requerido";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "El email no es válido";
        }

        if (!formData.message) {
            errors.message = "El mensaje es requerido";
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validate();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            emailjs
                .sendForm(
                    "service_ujkp5k9",
                    "template_kvzivjg",
                    e.target,
                    "Ck7NQTHS1E7wfln_J"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setIsSent(true);
                        setIsSubmitting(false);
                    },
                    (error) => {
                        console.log(error.text);
                        setIsSubmitting(false);
                    }
                );

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
    };

    return (
        <section id="contacto">
            <div className={styles.container__presentacion}>
                <div className={styles.text__container}>
                    <h2>Contacto</h2>
                    <p>
                        <span>¿Quieres contactarme?</span>
                        <br />
                        Complete el siguiente formulario y me pondré en contacto
                        con usted lo antes posible.
                    </p>
                </div>

                <div className={styles.form__container}>
                    {isSent && <p>¡Mensaje enviado exitosamente!</p>}
                    <form onSubmit={handleSubmit}>
                        <div className={styles.entrada}>
                            <label for="name">Nombre:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <p
                                    style={{
                                        color: "red",
                                        fontSize: "16px",
                                    }}
                                >
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className={styles.entrada}>
                            <label for="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <p
                                    style={{
                                        color: "red",
                                        fontSize: "16px",
                                    }}
                                >
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className={styles.entrada}>
                            <label for="message">Mensaje:</label>
                            <input
                                type="text"
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && (
                                <p style={{ color: "red", fontSize: "16px" }}>
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={styles.button__enviar}
                        >
                            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
