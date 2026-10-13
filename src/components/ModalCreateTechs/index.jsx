import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../providers/TechsContext";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { ModalCreateSchema } from "./ModalCreateSchema";
import { StyledDashboardDiv, StyledModalCreateForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLanguage } from "../../i18n";

export const ModalCreateTechs = () => {
  const { techsCreate, setCreateModal } = useContext(TechsContext);
  const { t } = useLanguage();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ModalCreateSchema),
  });

  const submit = async (formData) => {
    if (await techsCreate(formData)) {
      setCreateModal(false);
      reset();
    }
  };

  return (
    <StyledDashboardDiv>
      <StyledModalCreateForm onSubmit={handleSubmit(submit)}>
        <div>
          <h2>{t("Cadastrar Tecnologia")}</h2>
          <Button type="button" action={() => setCreateModal(false)}>X</Button>
        </div>
        <Input
          label={"Nome"}
          type={"text"}
          placeholder={"Digite aqui o nome da tecnologia"}
          register={register("title")}
          error={errors.title}
        />
        <Select
          label={"Selecionar módulo"}
          register={register("status")}
          error={errors.status}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </Select>
        <Button>{t("Cadastrar Tecnologia")}</Button>
      </StyledModalCreateForm>
    </StyledDashboardDiv>
  );
};
