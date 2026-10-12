import { useEffect, useState, createContext } from "react";
import { signUp, signIn, getSessionUser, signOut, db } from "../services/supabase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});
const DEMO_SESSION = "@KENZIEHUB_DEMO_SESSION";
const DEMO_TECHS = "@KENZIEHUB_DEMO_TECHS";
const DEMO_USER = { id: "demo", name: "Visitante", course_module: "Demonstração local" };
const asProfile = (u) => ({
  id: u.id, email: u.email,
  name: u.user_metadata?.name || u.email?.split("@")[0] || "Usuário",
  course_module: u.user_metadata?.course_module || "",
  bio: u.user_metadata?.bio || "",
  contact: u.user_metadata?.contact || "",
});
export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [techs, setTechs] = useState([]);
  const [isDemo, setIsDemo] = useState(false);

  useEffect(() => {
    if (isDemo) localStorage.setItem(DEMO_TECHS, JSON.stringify(techs));
  }, [isDemo, techs]);

  useEffect(() => {
    let active = true;
    (async () => {
      if (localStorage.getItem(DEMO_SESSION) === "true") {
        setIsDemo(true);
        setUser(DEMO_USER);
        try {
          const saved = JSON.parse(localStorage.getItem(DEMO_TECHS) || "[]");
          setTechs(Array.isArray(saved) ? saved : []);
        } catch { setTechs([]); }
        setLoading(false);
        return;
      }
      try {
        const authenticated = await getSessionUser();
        if (!active || !authenticated) return;
        const rows = await db("kenziehub_technologies?select=id,title,status&order=created_at.desc");
        if (!active) return;
        setUser(asProfile(authenticated));
        setTechs(Array.isArray(rows) ? rows : []);
      } catch (e) {
        if (active) toast.error("Não foi possível recuperar sua sessão. Tente novamente.");
      } finally { if (active) setLoading(false); }
    })();
    return () => { active = false; };
  }, []);

  const userRegister = async (formData) => {
    try {
      const { email, password, confirmPassword, ...metadata } = formData;
      const response = await signUp({ email, password, ...metadata, app: "kenziehub" });
      toast.success(response.access_token
        ? "Conta criada com sucesso! Faça login."
        : "Cadastro recebido! Confirme o email para ativar sua conta.");
      navigate("/");
      return true;
    } catch(e) {
      toast.error(e?.message || "Não foi possível criar a conta.");
      return false;
    }
  };
  const userLogin = async (formData) => {
    setLoading(true);
    try {
      const result = await signIn(formData);
      if (!result.user?.id) throw new Error("Resposta de login inválida");
      const rows = await db("kenziehub_technologies?select=id,title,status&order=created_at.desc");
      localStorage.removeItem(DEMO_SESSION);
      setIsDemo(false);
      setUser(asProfile(result.user));
      setTechs(Array.isArray(rows) ? rows : []);
      navigate("/dashboard");
      toast.success("Login feito com sucesso!");
      return true;
    } catch(e) {
      toast.error(e?.message || "Não foi possível entrar.");
      return false;
    } finally { setLoading(false); }
  };
  const startDemo = () => {
    localStorage.setItem(DEMO_SESSION, "true");
    setIsDemo(true);
    setUser(DEMO_USER);
    try {
      const parsed = JSON.parse(localStorage.getItem(DEMO_TECHS) || "[]");
      setTechs(Array.isArray(parsed) ? parsed : []);
    } catch { setTechs([]); }
    navigate("/dashboard");
  };
  const userLogout = async () => {
    localStorage.removeItem(DEMO_SESSION);
    setIsDemo(false); setUser(null); setTechs([]);
    await signOut(); navigate("/");
  };
  return (
    <UserContext.Provider value={{
      user, userRegister, userLogin, userLogout, startDemo, isDemo, loading, techs, setTechs
    }}>{children}</UserContext.Provider>
  );
};
