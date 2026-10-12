import { createContext, useContext, useState } from "react";
import { db } from "../services/supabase";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({});
export const TechsProvider = ({ children }) => {
  const { techs, setTechs, isDemo, user } = useContext(UserContext);
  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(null);
  const techsCreate = async (formData) => {
    if (isDemo) {
      setTechs(current => [...current, { ...formData, id: `demo-${Date.now()}` }]);
      return true;
    }
    if (!user?.id) { toast.error("Faça login novamente."); return false; }
    try {
      const result = await db("kenziehub_technologies", "POST", [{
        user_id: user.id, title: formData.title, status: formData.status
      }]);
      setTechs(current => [...current, result[0]]);
      toast.success("Tecnologia criada com sucesso!");
      return true;
    } catch(e) { toast.error(e.message || "Não foi possível criar."); return false; }
  };
  const techsRemove = async (techId) => {
    if (isDemo) {
      setTechs(current => current.filter(t => t.id !== techId));
      return true;
    }
    try {
      const result = await db(`kenziehub_technologies?id=eq.${encodeURIComponent(techId)}&select=id`, "DELETE");
      if (!result?.length) throw new Error("Tecnologia não encontrada ou sem permissão.");
      setTechs(current => current.filter(t => t.id !== techId));
      toast.success("Tecnologia removida!");
      return true;
    } catch(e) { toast.error(e.message || "Não foi possível excluir."); return false; }
  };
  const techsUpdate = async (formData, techId) => {
    if (isDemo) {
      setTechs(current => current.map(t => t.id === techId ? {...t, ...formData} : t));
      return true;
    }
    try {
      const result = await db(`kenziehub_technologies?id=eq.${encodeURIComponent(techId)}&select=id,title,status`, "PATCH", {
        title: formData.title, status: formData.status
      });
      if (!result?.length) throw new Error("Tecnologia não encontrada ou sem permissão.");
      setTechs(current => current.map(t => t.id === techId ? result[0] : t));
      toast.success("Tecnologia atualizada!");
      return true;
    } catch(e) { toast.error(e.message || "Não foi possível atualizar."); return false; }
  };
  return (
    <TechsContext.Provider value={{
      techs, techsCreate, techsRemove, techsUpdate, createModal, setCreateModal,
      updateModal, setUpdateModal
    }}>{children}</TechsContext.Provider>
  );
};
