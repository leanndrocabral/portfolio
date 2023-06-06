import React from "react";
import {
  ContactContainer,
  ContactContainerForm,
  ContactContainerFormButton,
  ContactContainerFormInput,
  ContactContainerFormTextArea,
  ContactOption,
  ContactOptionFirstText,
  ContactOptionLink,
  ContactOptions,
  ContactOptionSecondText,
  ContactWrapper,
  FirstText,
  SecondText,
} from "./styles";

import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {

  const sendEmail = (event) => {
    event.preventDefault();

    const { from_name, email, text } = event.target;

    toast.promise(async () => {
      try {
        await axios.post("https://leanndrocabral-api-email.vercel.app/sendemail", {
          from_name: from_name.value,
          email: email.value,
          text: text.value,
        });

      } catch (error) {
        console.error(error);
      }
    }, {
      pending: {
        render: "Enviando e-mail.",
        style: {
          color: "#4db5ff",
          backgroundColor: "#1f1f38",
          border: "1px solid #4db5ff"
        }
      },
      success: {
        render: "E-mail enviado com sucesso.",
        icon: "📩",
        style: {
          color: "#4db5ff",
          backgroundColor: "#1f1f38",
          border: "1px solid #4db5ff"
        }
      },
      error: {
        render: "Falha ao enviar email, tente mais tarde.",
        icon: "❌",
        style: {
          color: "#4db5ff",
          backgroundColor: "#1f1f38",
          border: "1px solid #4db5ff"
        }
      }
    });
  };

  return (
    <ContactWrapper>
      <FirstText>Me envie uma mensagem</FirstText>
      <SecondText>Entrar em contato</SecondText>

      <ContactContainer>
        <ContactOptions>
          <ContactOption>
            <MdOutlineEmail className="contact-option-icon" />
            <ContactOptionFirstText>E-mail</ContactOptionFirstText>
            <ContactOptionSecondText>
              leanndrocabral@gmail.com
            </ContactOptionSecondText>
            <ContactOptionLink href="https://mail.google.com/" target="_blank">
              Envie uma mensagem
            </ContactOptionLink>
          </ContactOption>
          <ContactOption>
            <BsWhatsapp className="contact-option-icon" />
            <ContactOptionFirstText>WhatsApp</ContactOptionFirstText>
            <ContactOptionSecondText>+55 12 99623-8196</ContactOptionSecondText>
            <ContactOptionLink
              href="https://wa.me/5512996238196"
              target="_blank"
            >
              Envie uma mensagem
            </ContactOptionLink>
          </ContactOption>
        </ContactOptions>

        <ContactContainerForm action="" onSubmit={sendEmail}>
          <ContactContainerFormInput
            id="from_name"
            type="text"
            name="from_name"
            placeholder="Seu nome completo"
            required
          />
          <ContactContainerFormInput
            id="email"
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
          />

          <ContactContainerFormTextArea
            id="text"
            name="message"
            rows="7"
            placeholder="Sua mensagem"
            required
          />
          <ContactContainerFormButton>
            Enviar mensagem
          </ContactContainerFormButton>
        </ContactContainerForm>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
