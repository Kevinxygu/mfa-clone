'use client';

import Image from "next/image";
import * as Styled from "./login.styles"
import { useState } from "react";
import Link from "next/link";

// Log in page for returning users.
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    return (
    <Styled.LoginContainer>
      <Styled.Form>
        <Styled.LoginBackButton><Styled.LoginBackLink href='/'>Back</Styled.LoginBackLink></Styled.LoginBackButton>
        <Styled.Label htmlFor="email">Email</Styled.Label>
        <Styled.Input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Styled.Label htmlFor="password">Password</Styled.Label>
        <Styled.Input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Styled.SignupButton>Login</Styled.SignupButton>
      </Styled.Form>
    </Styled.LoginContainer>
  );
}

export default Login;
