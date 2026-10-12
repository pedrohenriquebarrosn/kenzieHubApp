import { Button } from "../../components/Button";
import logo from "../../assets/Logo.svg";
import { StyledFormLogin, StyledMain } from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./loginSchema";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";
import { InputPassword } from "../../components/InputPassword";

export const Login = () => {
  const { userLogin } = useContext(UserContext);

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
      <div className="imgLogo">
        <img src={logo} alt="Kenzie Hub" />
      </div>
      <StyledFormLogin onSubmit={handleSubmit(submit)}>
        <h3>Login</h3>
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
        <Button>Entrar</Button>
        <div className="divRegister">
          <p>Ainda não possui uma conta?</p>
          <div className="goToRegister">
            <Link to="/register">Cadastre-se</Link>
          </div>
        </div>
      </StyledFormLogin>
    </StyledMain>
  );
};
