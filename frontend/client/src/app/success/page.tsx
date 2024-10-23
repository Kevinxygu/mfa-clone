'use client'

import Image from 'next/image'
import * as Styled from './success.styles'

// Successful stage for getting past MFA
const Success = () => {
    return (
        <Styled.SuccessContainer>
            {/* <Image src='/success.gif' alt='Success' width={350} height={300} unoptimized={true} /> */}
            Success
        </Styled.SuccessContainer>
    );
};

export default Success;