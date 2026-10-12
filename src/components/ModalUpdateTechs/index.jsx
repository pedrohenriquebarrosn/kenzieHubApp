import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../providers/TechsContext";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledDashboardDiv } from "../ModalCreateTechs/style";
import { Select } from "../Select";
import { ModalUpdateSchema } from "./ModalUpdateSchema";
import { StyledModalUpdateForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";

export const ModalUpdateTechs = () => {
  const {
    techsRemove,
    techsUpdate,
    updateModal,
    setUpdateModal,
    editingTechs,
    setEditingTechs,
  } = useContext(TechsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: updateModal.title,
      status: updateModal.status,
    },
    resolver: yupResolver(ModalUpdateSchema),
  });

  const submit = async (formData) => {
    if (await techsUpdate(formData, updateModal.id)) {
      setUpdateModal(null);
      reset();
    }
  };

  return (
    <StyledDashboardDiv>
      <StyledModalUpdateForm onSubmit={handleSubmit(submit)}>
        <div className="divClose">
          <h2>Tecnologia Detalhes</h2>
          <Button action={() => setUpdateModal(null)} className={"closeButton"}>
            X
          </Button>
        </div>
        <Input
          label={"Nome da tecnologia"}
          type={"text"}
          placeholder={"Material UI"}
          register={register("title")}
          error={errors.title}
        />
        <Select
          label={"Status"}
          register={register("status")}
          error={errors.status}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </Select>
        <div className="divButtons">
          <Button className={"saveButton"} type={"submit"}>
            Salvar alterações
          </Button>
          <Button
            className={"excludeButton"}
            type={"button"}
            action={async () => {
              if (await techsRemove(updateModal.id)) setUpdateModal(null);
            }}
          >
            Excluir
          </Button>
        </div>
      </StyledModalUpdateForm>
    </StyledDashboardDiv>
  );
};
