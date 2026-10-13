import * as yup from "yup";

// Normalize spaces, parentheses and hyphens before storing the contact number.
// A Brazilian mobile number has 11 digits: two-digit DDD followed by 9 and eight digits.
const phoneNumber = /^[1-9]{2}9\d{8}$/;

export const RegisterSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("O email digitado é inválido"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "Use pelo menos 8 caracteres.")
    .max(64, "Use no máximo 64 caracteres.")
    .matches(/^\S+$/, "A senha não pode conter espaços.")
    .matches(/[a-z]/, "Inclua pelo menos 1 letra minúscula.")
    .matches(/[A-Z]/, "Inclua pelo menos 1 letra maiúscula.")
    .matches(/\d/, "Inclua pelo menos 1 número.")
    .matches(/[^A-Za-z0-9\s]/, "Inclua pelo menos 1 caractere especial, como !, @ ou #."),
  confirmPassword: yup
    .string()
    .required("Confirmar a senha é obrigatório")
    .oneOf([yup.ref("password"), null], "As senhas não correspondem"),
  bio: yup.string().required("A bio é obrigatória"),
  contact: yup
    .string()
    .transform((value) => typeof value === "string" ? value.replace(/\D/g, "") : value)
    .required("O contato é obrigatório")
    .matches(phoneNumber, "Digite 11 números: DDD + celular. Ex.: 81999998888."),
  course_module: yup.string().required("O módulo do curso é obrigatório"),
});
