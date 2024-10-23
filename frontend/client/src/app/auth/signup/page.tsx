'use client';

import Image from "next/image";
import * as Styled from "./signup.styles"
import { useState } from "react";

// Sign up page, simply use name and email address
// TODO: Needs to be extended to have more functionality, to make sure the right person has the right access.
// I know a lot of MFA uses QR codes. Explore and learn this.
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
