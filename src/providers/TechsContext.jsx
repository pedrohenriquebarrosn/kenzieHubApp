import { createContext, useContext, useState } from "react";
import { Api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const { techs, setTechs, isDemo } = useContext(UserContext);
  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(null);

  const authorization = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("@TOKEN")}` },
  });

  const techsCreate = async (formData) => {
    if (isDemo) {
      setTechs((current) => [...current, { ...formData, id: `demo-${Date.now()}` }]);
      toast.success("Tecnologia adicionada à demonstração!");
      return true;
    }
    try {
      const response = await Api.post("/users/techs", formData, authorization());
      setTechs((current) => [...current, response.data]);
      toast.success("Tecnologia criada com sucesso!");
      return true;
    } catch {
      toast.error("Não foi possível criar a tecnologia.");
      return false;
    }
  };

  const techsRemove = async (techId) => {
    if (isDemo) {
      setTechs((current) => current.filter((tech) => tech.id !== techId));
      toast.success("Tecnologia removida da demonstração!");
      return true;
    }
    try {
      await Api.delete(`/users/techs/${techId}`, authorization());
      setTechs((current) => current.filter((tech) => tech.id !== techId));
      toast.success("Tecnologia deletada com sucesso!");
      return true;
    } catch {
      toast.error("Não foi possível excluir a tecnologia.");
      return false;
    }
  };

  const techsUpdate = async (formData, techId) => {
    if (isDemo) {
      setTechs((current) => current.map((tech) =>
        tech.id === techId ? { ...tech, ...formData } : tech
      ));
      toast.success("Tecnologia atualizada na demonstração!");
      return true;
    }
    try {
      const response = await Api.put(`/users/techs/${techId}`, formData, authorization());
      setTechs((current) => current.map((tech) =>
        tech.id === techId ? { ...tech, ...(response.data || formData) } : tech
      ));
      toast.success("Tecnologia atualizada com sucesso!");
      return true;
    } catch {
      toast.error("Não foi possível atualizar a tecnologia.");
      return false;
    }
  };

  return (
    <TechsContext.Provider value={{
      techs, techsCreate, techsRemove, createModal, setCreateModal,
      updateModal, setUpdateModal, techsUpdate
    }}>
      {children}
    </TechsContext.Provider>
  );
};
