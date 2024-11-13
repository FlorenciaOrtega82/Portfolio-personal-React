import { useState } from "react";
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
            <div className="bg-violet-200  rounded-lg mt-12 text-zinc-900   ">
                <div className="text-zinc-900 pt-7 pl-4 text-xl pb-1 max-sm:pl-0">
                    <p className="max-md:px-6 max-sm:text-base">
                        <span className="text-violet-600">
                            ¿Quieres contactarme?
                        </span>
                        <br />
                        Complete el siguiente formulario y me pondré en contacto
                        con usted lo antes posible.
                    </p>
                </div>

                <div className="text-center mx-12 max-sm:mx-5">
                    {isSent && <p>¡Mensaje enviado exitosamente!</p>}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                for="name"
                                className="text-violet-500 flex mb-1 pt-5"
                            >
                                Nombre:
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent  border-b-[1px] text-xl outline-none text-zinc-800 border-b-solid border-violet-500 max-sm:text-base"
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

                        <div>
                            <label
                                for="email"
                                className="text-violet-500 flex mb-1 pt-5"
                            >
                                Email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent  border-b-[1px] text-xl outline-none text-zinc-800 border-b-solid border-violet-500 max-sm:text-base"
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

                        <div>
                            <label
                                for="message"
                                className="text-violet-500 flex mb-1 pt-5"
                            >
                                Mensaje:
                            </label>
                            <input
                                type="text"
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-transparent  border-b-[1px] text-xl outline-none text-zinc-800 border-b-solid border-violet-500 max-sm:text-base"
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
                            className="bg-violet-500 text-white border-none leading-10 text-lg tracking-widest cursor-pointer font-extrabold rounded-lg shadow-sm w-4/6 my-7 hover:bg-violet-600 max-sm:text-base max-sm:font-medium max-sm:tracking-widest max-sm:py-2 max-sm:px-1 max-sm:w-5/6 "
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
