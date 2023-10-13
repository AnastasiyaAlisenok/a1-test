import React from "react";
import { Container } from "../Container/Container.styled";
import git from "../../assets/svg/git-icon.svg";
import linkedinImg from "../../assets/svg/ln-icon.svg";
import telegramImg from "../../assets/svg/telegram-icon.svg";
import { Contact } from "./Contact/Contact";

const contactsPath = {
  git: "https://github.com/AnastasiyaAlisenok",
  telegram: "https://t.me/anastasiya_alisenok",
  linkedin:
    "https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B0%D1%81%D0%B8%D1%8F-%D0%B0%D0%BB%D0%B8%D1%81%D0%B5%D0%BD%D0%BE%D0%BA-323108293/",
};

export const Contacts = (): JSX.Element => {
  return (
    <Container width="13%">
      <Contact path={contactsPath.git} image={git} alt="git-icon" />
      <Contact
        path={contactsPath.linkedin}
        image={linkedinImg}
        alt="linkedin-icon"
      />
      <Contact
        path={contactsPath.telegram}
        image={telegramImg}
        alt="telegram-icon"
      />
    </Container>
  );
};
