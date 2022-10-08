import { FC, memo } from "react";
import Link from "next/link";

import { HeaderContainer, Nav, LinkItem } from "./styles";
import { Logo } from "../Logo";

export const Header: FC = memo(() => (
  <HeaderContainer>
    <Logo color="white" role="img" aria-label="Logo" />
    <Nav>
      <Link href="/">
        <LinkItem>About Me</LinkItem>
      </Link>
      <Link href="/">
        <LinkItem>Projects</LinkItem>
      </Link>
      <Link href="/">
        <LinkItem>Contact Me</LinkItem>
      </Link>
    </Nav>
  </HeaderContainer>
));
