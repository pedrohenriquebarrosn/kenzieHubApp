import { useEffect, useState, createContext } from "react";
import { Api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    let active = true;
    const token = localStorage.getItem("@TOKEN");
    if (!token) {
      setLoading(false);
      return;
    }

    const userAutoLogin = async () => {
      try {
        const response = await Api.get("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (active) {
          setUser(response.data);
          setTechs(Array.isArray(response.data.techs) ? response.data.techs : []);
          navigate("/dashboard");
        }
      } catch (error) {
        if (active) {
          // Only discard an existing token when the server rejects it.
          if ([401, 403].includes(error.response?.status)) {
            localStorage.removeItem("@TOKEN");
          }
          setUser(null);
          setTechs([]);
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    userAutoLogin();
    return () => { active = false; };
  }, [navigate]);

  const userRegister = async (formData) => {
    try {
      await Api.post("/users", formData);
      toast.success("Conta criada com sucesso!");
      navigate("/");
      return true;
    } catch (error) {
      const unavailable = !error.response || error.response.status >= 500;
      toast.error(unavailable
        ? "Serviço de cadastro indisponível. Tente novamente mais tarde."
        : "Não foi possível criar a conta. Confira os dados informados.");
      return false;
    }
  };

  const userLogin = async (formData) => {
    setLoading(true);
    try {
      const response = await Api.post("/sessions", formData);
      const { user: authenticatedUser, token } = response.data;
      if (!authenticatedUser || !token) throw new Error("Resposta de autenticação incompleta");
      localStorage.setItem("@TOKEN", token);
      setUser(authenticatedUser);
      setTechs(Array.isArray(authenticatedUser.techs) ? authenticatedUser.techs : []);
      toast.success("Login feito com sucesso!");
      navigate("/dashboard");
      return true;
    } catch (error) {
      const badCredentials = [400, 401, 403].includes(error.response?.status);
      toast.error(badCredentials
        ? "Confira seu email e senha."
        : "Não foi possível acessar o serviço de login.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    setTechs([]);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{
      user, userRegister, userLogin, userLogout, loading, techs, setTechs
    }}>
      {children}
    </UserContext.Provider>
  );
};
