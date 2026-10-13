import { Button } from "../../components/Button";
import logo from "../../assets/Logo.svg";
import { StyledFormLogin, StyledMain } from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./loginSchema";
import { UserContext } from "../../providers/UserContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputPassword } from "../../components/InputPassword";
import { useLanguage, LanguageSwitcher } from "../../i18n";

export const Login = () => {
  const { userLogin, startDemo, user, loading } = useContext(UserContext);
  const { t } = useLanguage();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && user) navigate("/dashboard", { replace: true });
  }, [loading, user, navigate]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const submit = async (formData) => {
    if (await userLogin(formData)) reset();
  };

  return (
    <StyledMain>
      <LanguageSwitcher />
      <div className="imgLogo">
        <img src={logo} alt="Kenzie Hub" />
      </div>
      <StyledFormLogin onSubmit={handleSubmit(submit)}>
        <h3>{t("Login")}</h3>
        <Input
          label={"Email"}
          type={"email"}
          placeholder={"Digite aqui seu email"}
          register={register("email")}
          error={errors.email}
        />
        <InputPassword
          label={"Senha"}
          type={"password"}
          placeholder={"Digite aqui sua senha"}
          register={register("password")}
          error={errors.password}
        />
        <Button>{t("Entrar")}</Button>
        <div className="divRegister">
          <p>{t("Ainda não possui uma conta?")}</p>
          <div className="goToRegister">
            <Link to="/register">{t("Cadastre-se")}</Link>
          </div>
        </div>
        <div className="demoEntry">
          <p>{t("Ou explore o projeto sem criar uma conta real:")}</p>
          <Button type="button" action={startDemo}>{t("Acessar demonstração")}</Button>
          <p>{t("Os dados da demonstração ficam somente neste navegador.")}</p>
        </div>
      </StyledFormLogin>
    </StyledMain>
  );
};
