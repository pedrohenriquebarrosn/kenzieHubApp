import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: #121214;
  padding: 10px;
`;

export const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 369px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 0 20px;
  gap: 30px;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 43px;

    color: #f8f9fa;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    padding-bottom: 40px;
  }

  /* Igual ao cadastro: ícone de visibilidade branco e alinhado ao campo. */
  fieldset button {
    top: 37px;
    color: #ffffff;
  }

  label {
    font-style: normal;
    font-weight: 400;
    font-size: 0.7614rem;
    line-height: 0rem;

    color: #f8f9fa;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    background: #343b41;

    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;

    font-style: normal;
    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;

    color: #f8f9fa;
  }

  /* Entrar: mesmo comportamento visual do botão de cadastro. */
  > button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    background: #59323f;

    border: 1.2182px solid #59323f;
    cursor: pointer;
    transition: background-color 160ms ease, border-color 160ms ease;
    border-radius: 4.06066px;

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.625rem;

    color: #ffffff;
  }

  > button:hover,
  > button:focus-visible {
    background: #ff577f;
    border-color: #ff577f;
  }

  > button:focus-visible,
  .demoEntry > button:focus-visible {
    outline: 2px solid #f8f9fa;
    outline-offset: 3px;
  }

  /* Guest demo belongs to the same dark login card and color system. */
  .demoEntry {
    padding: 22px 0 26px;
    gap: 14px;
    border-top: 1px solid #343b41;

    p {
      margin: 0;
      color: #f8f9fa;
      font-size: 0.875rem;
      line-height: 1.5;
      text-align: center;
    }

    p:last-child {
      color: #adb5bd;
      font-size: 0.75rem;
    }

    > button {
      width: 100%;
      height: 48px;
      border: 1.2182px solid #59323f;
      border-radius: 4px;
      background: #59323f;
      color: #ffffff;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 160ms ease, border-color 160ms ease;
    }

    > button:hover,
    > button:focus-visible {
      background: #ff577f;
      border-color: #ff577f;
    }
  }

  .divRegister {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 100%;

    p {
      font-style: normal;
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1.125rem;

      color: #868e96;
    }

    .goToRegister {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 22.3336px;
      gap: 10.15px;

      width: 100%;
      height: 48px;
      background: #868e96;

      border: 1.2182px solid #868e96;
      border-radius: 4px;

      font-style: normal;
      font-weight: 500;
      font-size: 12.8347px;
      line-height: 21px;

      color: #f8f9fa;
    }

    a {
      text-decoration: none;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.625rem;

      color: #f8f9fa;
    }
  }
`;
