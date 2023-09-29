import React from "react";
import {
  ModalCard,
  ModalButton,
  Form,
  FormButton,
  Title,
} from "./modal.styles";
import { Trans } from "gatsby-plugin-react-i18next";
import { useState } from "react";
import { useForm } from "../../../utils/form.hook";
import { validate } from "../../../utils/form.validators";
import NewsLetterInput from "./news-letter-input.component";
import { motion } from "framer-motion";

const ContactFormModal = ({ show, handleClose }) => {
  const [sent, setSent] = useState(false);
  const { handleChange, fields, handleSubmit, errors } = useForm(
    validate,
    setSent
  );
  const contactForm = [
    { id: 1, type: "text", placeHolder: "Nom", name: "name" },
    { id: 1, type: "email", placeHolder: "Email", name: "email" },
  ];

  const go = "G O";
  return (
    <ModalCard show={show} onHide={handleClose} centered>
      <ModalCard.Body>
        {!sent && (
          <>
            <div className="py-4 ">
              <Title className="text-center">Restez Informé!</Title>
              <Form
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                  type: "linear",
                }}
                viewport={{ once: true }}
              >
                {contactForm &&
                  contactForm.map((field) => (
                    <NewsLetterInput
                      key={field.id}
                      field={field}
                      handleChange={handleChange}
                      fields={fields}
                      errors={errors}
                    />
                  ))}

                <FormButton
                  onClick={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                >
                  {go.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, filter: "blur(1)" }}
                      animate={{ opacity: 1, filter: "blur(0)" }}
                      transition={{
                        duration: 1,
                        delay: index / 10 + 0.5,
                        ease: [0.11, 0, 0.5, 0],
                      }}
                    >
                      *{word}
                    </motion.span>
                  ))}
                </FormButton>
              </Form>
            </div>
          </>
        )}
        {sent && (
          <div className="py-4 ">
            <h1 className="text-center">
              <Trans>title</Trans>
            </h1>
            <p className="px-3 text-center pt-4 mb-0">
              <Trans>messageEmail</Trans>
            </p>
          </div>
        )}
        {sent && (
          <ModalButton className="pe-3" onClick={handleClose}>
            <Trans>closeEmail</Trans>
          </ModalButton>
        )}
      </ModalCard.Body>
    </ModalCard>
  );
};

export default ContactFormModal;
