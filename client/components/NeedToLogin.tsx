import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Flex } from "reflexbox/styled-components";

import { Button } from "./Button";
import { fadeIn } from "../helpers/animations";
import { Col } from "./Layout";
import { resources } from "../consts";

const Wrapper = styled(Flex).attrs({
  width: 1200,
  maxWidth: "98%",
  alignItems: "center",
  margin: "150px 0 0",
  flexDirection: ["column", "column", "row"]
})`
  animation: ${fadeIn} 0.8s ease-out;
  box-sizing: border-box;

  a {
    text-decoration: none;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 300;
  padding-right: 32px;
  margin-bottom: 48px;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
    text-align: center;
    padding-right: 0;
    margin-bottom: 32px;
    padding: 0 40px;
  }

  @media only screen and (max-width: 448px) {
    font-size: 18px;
    text-align: center;
    margin-bottom: 24px;
  }
`;

const Image = styled.img`
  flex: 0 0 60%;
  width: 60%;
  max-width: 100%;
  height: auto;

  @media only screen and (max-width: 768px) {
    flex-basis: 100%;
    width: 100%;
  }
`;

const NeedToLogin = () => (
  <Wrapper>
    <Col
      alignItems={["center", "center", "flex-start"]}
      mt={-32}
      mb={[32, 32, 0]}
    >
      <Title>
        Manage links, set custom <b>domains</b> and view <b>stats</b>.
      </Title>
      <Link href="/login">
        <a href="/login" title="Login / Sign up">
          <Button>Login / Sign up</Button>
        </a>
      </Link>
    </Col>
    <Image src={resources.png.callout} />
  </Wrapper>
);

export default NeedToLogin;
