'use client';

import * as Styled from "./index.styles"

// Home page (Landing page)
const Home = () => {
  return (
    <Styled.Container>
      <Styled.Title>
        2FA App Clone
      </Styled.Title>
      <Styled.ButtonLink href='/auth/login'><Styled.LoginButton>Log in</Styled.LoginButton></Styled.ButtonLink>
      <Styled.ButtonLink href='auth/signup'><Styled.SignupButton>Sign up</Styled.SignupButton></Styled.ButtonLink>
    </Styled.Container>
  );
}

export default Home;
