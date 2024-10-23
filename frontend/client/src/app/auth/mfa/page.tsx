'use client';

import * as Styled from "./mfa.styles";
import { useState } from "react";

// 2FA input page
const Mfa = () => {
    const [code, setCode] = useState('');

    return (
        <Styled.MfaContainer>
            <Styled.Header>
                A code was sent to your MFA app. Please enter it below.
            </Styled.Header>
                <Styled.MFAInput 
                    type="text" 
                    id="code" 
                    name="code" 
                    value={code} 
                    onChange={(e) => setCode(e.target.value)} 
                />
                <Styled.MFAButton>Enter</Styled.MFAButton>
            </Styled.MfaContainer>
    )
};

export default Mfa;