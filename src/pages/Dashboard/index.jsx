import { useContext } from "react";
import { Button } from "../../components/Button";
import { UserContext } from "../../providers/UserContext";
import { StyledDashboardHeader, StyledDashboardMain } from "./style";
import logo from "../../assets/Logo.svg";
import plus from "../../assets/+.svg";
import { TechsContext } from "../../providers/TechsContext";
import { ModalCreateTechs } from "../../components/ModalCreateTechs";
import { ModalUpdateTechs } from "../../components/ModalUpdateTechs";

export const Dashboard = () => {
  const { user, userLogout, isDemo } = useContext(UserContext);

  const { techs, createModal, setCreateModal, updateModal, setUpdateModal } =
    useContext(TechsContext);

  return (
    <>
      <StyledDashboardHeader>
        <nav>
          <img src={logo} alt="Kenzie Hub" />
          <Button action={() => userLogout()}>Sair</Button>
        </nav>
      </StyledDashboardHeader>
      <StyledDashboardMain>
        {isDemo && <p role="status" style={{
            color: "#b8f5cf",
            background: "#182820",
            border: "1px solid #2c7a4b",
            borderRadius: "6px",
            padding: "12px 16px",
            margin: "8px auto 20px",
            width: "min(100%, 980px)",
            lineHeight: 1.5,
          }}>Demonstração local: não representa autenticação real nem dados sincronizados.</p>}
        <section className="sectionBio">
          <div>
            <h2>Olá, {user.name}</h2>
            <p>{user.course_module}</p>
          </div>
        </section>
        <section className="sectionInfos">
          <div className="titleTechs">
            <h2>Tecnologias</h2>
            <Button action={() => setCreateModal(true)}>
              <img src={plus} alt="+" />
            </Button>
          </div>
          <div>
            {techs.length > 0 ? (
              <ul>
                {techs.map((tech) => (
                  <Button
                    className={"openModalButton"}
                    action={() => setUpdateModal(tech)}
                    key={tech.id}
                  >
                    <li>
                      <h3>{tech.title}</h3>
                      <h4>{tech.status}</h4>
                    </li>
                  </Button>
                ))}
              </ul>
            ) : (
              <h1>Você não tem tecnologias cadastradas</h1>
            )}
          </div>
        </section>
      </StyledDashboardMain>
      {createModal ? <ModalCreateTechs /> : null}
      {updateModal ? <ModalUpdateTechs /> : null}
    </>
  );
};
