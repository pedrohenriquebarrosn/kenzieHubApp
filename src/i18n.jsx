import { createContext, useContext, useEffect, useState } from "react";

const english = {
  "Login":"Sign in","Email":"Email","Senha":"Password","Nome":"Name","Bio":"Bio","Contato":"Phone number",
  "Digite aqui seu email":"Enter your email","Digite aqui sua senha":"Enter your password",
  "Entrar":"Sign in","Ainda não possui uma conta?":"Don't have an account?",
  "Cadastre-se":"Create an account","Ou explore o projeto sem criar uma conta real:":"Or explore without creating an account:",
  "Acessar demonstração":"Explore demo","Os dados da demonstração ficam somente neste navegador.":"Demo data stays in this browser.",
  "Voltar":"Back","Crie sua conta":"Create your account","Rapido e grátis, vamos nessa":"Quick and free. Let's get started.",
  "Digite aqui seu nome":"Enter your name","Confirmar Senha":"Confirm password","Digite novamente sua senha":"Enter your password again",
  "Fale sobre você":"Tell us about yourself","Selecionar módulo":"Select course module",
  "Primeiro Módulo":"First module","Segundo Módulo":"Second module","Terceiro Módulo":"Third module",
  "Quarto Módulo":"Fourth module","Quinto Módulo":"Fifth module","Sexto Módulo":"Sixth module",
  "Cadastrar":"Create account","Sair":"Sign out","Olá, ":"Hello, ","Tecnologias":"Technologies",
  "Você não tem tecnologias cadastradas":"You haven't added any technologies yet",
  "Demonstração local: não representa autenticação real nem dados sincronizados.":"Local demo: not a real sign-in and data is not synced.",
  "Demonstração local":"Local demo","Visitante":"Guest",
  "Cadastrar Tecnologia":"Add technology","Nome da tecnologia":"Technology name",
  "Digite aqui o nome da tecnologia":"Enter technology name","Iniciante":"Beginner",
  "Intermediário":"Intermediate","Avançado":"Advanced","Tecnologia Detalhes":"Technology details",
  "Status":"Level","Salvar alterações":"Save changes","Excluir":"Delete",
  "O nome é obrigatório":"Name is required","O email é obrigatório":"Email is required",
  "O email digitado é inválido":"Enter a valid email","A senha é obrigatória":"Password is required",
  "Use pelo menos 8 caracteres.":"Use at least 8 characters.",
  "Use no máximo 64 caracteres.":"Use no more than 64 characters.",
  "A senha não pode conter espaços.":"Password cannot contain spaces.",
  "Inclua pelo menos 1 letra minúscula.":"Include at least one lowercase letter.",
  "Inclua pelo menos 1 letra maiúscula.":"Include at least one uppercase letter.",
  "Inclua pelo menos 1 número.":"Include at least one number.",
  "Inclua pelo menos 1 caractere especial, como !, @ ou #.":"Include a special character such as !, @ or #.",
  "Confirmar a senha é obrigatório":"Confirm your password",
  "As senhas não correspondem":"Passwords do not match","A bio é obrigatória":"Bio is required",
  "O contato é obrigatório":"Phone is required","Digite 11 números: DDD + celular. Ex.: 81999998888.":"Enter a Brazilian mobile number (11 digits), e.g. 81999998888.",
  "O módulo do curso é obrigatório":"Select a course module",
  "O nome da tecnologia é o obrigatório":"Technology name is required",
  "O nome da tecnologia é obrigatório":"Technology name is required",
  "Selecione um nível":"Select a proficiency level",
  "Selecione um nível válido":"Select a valid proficiency level",
  "Editar tecnologia":"Edit technology",
  "Mostrar senha":"Show password",
  "Ocultar senha":"Hide password",
  "Não foi possível recuperar sua sessão. Tente novamente.":"Could not restore your session. Please try again.",
  "Conta criada com sucesso! Faça login.":"Account created! Please sign in.",
  "Cadastro recebido! Confirme o email para ativar sua conta.":"Signup received! Confirm your email to activate your account.",
  "Não foi possível criar a conta.":"Could not create the account.",
  "Resposta de login inválida":"Invalid sign-in response","Login feito com sucesso!":"Signed in successfully!",
  "Não foi possível entrar.":"Could not sign in.","Faça login novamente.":"Please sign in again.",
  "Tecnologia criada com sucesso!":"Technology added successfully!",
  "Não foi possível criar.":"Could not create the technology.",
  "Tecnologia não encontrada ou sem permissão.":"Technology not found or access denied.",
  "Tecnologia removida!":"Technology deleted!",
  "Não foi possível excluir.":"Could not delete the technology.",
  "Tecnologia atualizada!":"Technology updated!",
  "Não foi possível atualizar.":"Could not update the technology.",
};
const Context = createContext(null);
function initialLanguage() {
  const selected = new URLSearchParams(window.location.search).get("lang");
  if (selected === "en" || selected === "pt") return selected;
  try { const saved=localStorage.getItem("kenziehub_language"); if (saved==="pt" || saved==="en") return saved; } catch {}
  return "pt";
}
export function LanguageProvider({children}) {
  const [lang,setLang] = useState(initialLanguage);
  useEffect(()=>{
    document.documentElement.lang=lang==="pt"?"pt-BR":"en";
    const url=new URL(location.href); url.searchParams.set("lang",lang); history.replaceState(history.state,"",url);
    try {localStorage.setItem("kenziehub_language",lang);} catch {}
  },[lang]);
  const t=(value)=>lang==="en"?(english[value]??value):value;
  return <Context.Provider value={{lang,setLang,t}}>{children}</Context.Provider>;
}
export function useLanguage() {
  const c=useContext(Context);if(!c) throw new Error("LanguageProvider required");return c;
}
export function LanguageSwitcher() {
  const {lang,setLang}=useLanguage();
  return <div className="global-language-switch" role="group" aria-label={lang==="pt"?"Idioma":"Language"}>
    {["pt","en"].map(code=><button key={code} type="button" onClick={()=>setLang(code)}
      aria-pressed={lang===code} lang={code==="pt"?"pt-BR":"en"}
      aria-label={code==="pt"?"Português":"English"}>{code.toUpperCase()}</button>)}
  </div>;
}
