'use client';

import Image from "next/image";
import * as Styled from "./signup.styles"
import { useState } from "react";

// Home page (Landing page)
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    return (
    <Styled.Container>
      <Styled.Form>
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
        <Styled.SignupButton>Sign up</Styled.SignupButton>
      </Styled.Form>
    </Styled.Container>
  );
}

export default Signup;
