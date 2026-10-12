import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { Button } from "../../components/Button";
import { StyledDivTitle, StyledFormRegister } from "./style";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./registerSchema";
import { Select } from "../../components/Select";
import { StyledMain } from "../Login/style";
import { UserContext } from "../../providers/UserContext";
import { InputPassword } from "../../components/InputPassword";

export const Register = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(RegisterSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const submit = async (formData) => {
    if (await userRegister(formData)) reset();
  };

  return (
    <StyledMain>
      <StyledDivTitle>
        <img src={logo} alt="Kenzie Hub" />
        <div className="backToLogin">
          <Link to="/">Voltar</Link>
        </div>
      </StyledDivTitle>
      <StyledFormRegister onSubmit={handleSubmit(submit)} noValidate>
        <div className="divInfo">
          <h3>Crie sua conta</h3>
          <p>Rapido e grátis, vamos nessa</p>
        </div>
        <Input
          label={"Nome"}
          type={"text"}
          placeholder={"Digite aqui seu nome"}
          register={register("name")}
          error={errors.name}
        />
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
        <InputPassword
          label={"Confirmar Senha"}
          type={"password"}
          placeholder={"Digite novamente sua senha"}
          register={register("confirmPassword")}
          error={errors.confirmPassword}
        />
        <Input
          label={"Bio"}
          type={"text"}
          placeholder={"Fale sobre você"}
          register={register("bio")}
          error={errors.bio}
        />
        <Input
          label={"Contato"}
          type={"tel"}
          placeholder={"Ex.: 81999998888"}
          register={register("contact")}
          error={errors.contact}
        />
        <Select
          label={"Selecionar módulo"}
          register={register("course_module")}
          error={errors.course_module}
        >
          <option value="Primeiro Módulo">Primeiro Módulo</option>
          <option value="Segundo Módulo">Segundo Módulo</option>
          <option value="Terceiro Módulo">Terceiro Módulo</option>
          <option value="Quarto Módulo">Quarto Módulo</option>
          <option value="Quinto Módulo">Quinto Módulo</option>
          <option value="Sexto Módulo">Sexto Módulo</option>
        </Select>
        <Button className={"registerButton"}>Cadastrar</Button>
      </StyledFormRegister>
    </StyledMain>
  );
};
