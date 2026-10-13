import styled from "styled-components";

export const StyledDashboardHeader = styled.header`
  background: #121214;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
    padding-bottom: 30px;
    padding-top: 30px;

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 16.2426px;
      gap: 10.15px;

      background: #212529;
      border: none;
      border-radius: 4px;

      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 28px;

      text-align: center;

      color: #f8f9fa;
    }
  }
`;

export const StyledDashboardMain = styled.main`
  display: flex;
  flex-direction: column;
  background: #121214;
  min-height: 100vh;
  .sectionBio {
    border-bottom: 1px solid #343b41;
    border-top: 1px solid #343b41;
    background: #121214;
    width: 100%;
    padding-bottom: 30px;
    padding-top: 30px;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      padding: 10px;
      background: #121214;

      @media (max-width: 570px) {
        flex-direction: column;
        gap: 10px;
      }
    }

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.75rem;

      color: #f8f9fa;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.375rem;

      color: #868e96;
    }
  }

  .sectionInfos {
    margin-top: 30px;
    width: 100%;
    padding: 10px;
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.75rem;
      padding-top: 30px;
      color: #f8f9fa;
    }
    .titleTechs {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-top: 5px;
      gap: 30px;
      max-width: 1000px;
      margin: 0 auto;
      background: #121214;
    }

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.125rem;

      color: #f8f9fa;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32.49px;
      height: 32px;

      border-radius: 4px;
      border: none;
      background: #212529;
    }

    img {
      width: 10.72px;
      height: 10.56px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: 35px;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 33px 23px;

    background: #212529;
    border-radius: 4px;
    margin-bottom: 30px;

    .openModalButton {
      width: 100%;
      min-width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 22px;
      text-align: left;
      background: transparent;
      border: none;
      color: #f8f9fa;
      font-size: .875rem;
      font-weight: 600;
    }
    .openModalButton > span:last-child {
      font-weight: 400;
      color: #a3abb2;
    }
    .openModalButton:focus-visible { outline: 2px solid #ff577f; outline-offset: -2px; }

    @media (max-width: 426px) {
      padding: 20px 10px;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 49px;
      width: 100%;
      gap: 30px;
      max-width: 1000px;
      margin: 0 auto;
      padding: 10px;
      padding-left: 30px;
      padding-right: 30px;

      :hover {
        background: #343b41;
      }

      background: #121214;
      border-radius: 4px;
      h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 0.8881rem;
        line-height: 1.375rem;

        color: #ffffff;
      }

      h4 {
        font-style: normal;
        font-weight: 400;
        font-size: 0.7614rem;
        line-height: 1.375rem;

        color: #868e96;
      }
    }
  }
`;
