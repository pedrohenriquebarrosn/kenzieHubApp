import * as yup from "yup";

export const ModalUpdateSchema = yup.object().shape({
  title: yup.string().trim().required("O nome da tecnologia é obrigatório"),
  status: yup.string().oneOf(["Iniciante", "Intermediário", "Avançado"], "Selecione um nível válido").required("Selecione um nível"),
});
