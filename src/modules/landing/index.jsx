import React from 'react'
import Madera from '../../assets/imgs/Madera.png'
import styled from 'styled-components'

const ScreenWrapper = styled.div`
    height:calc(100vh - 50px);
`
const MetalicStyle = styled.span`

    font-size: 4rem;
    margin:1rem;
	text-align: center;
    position:absolute;
    color: Blue;
    text-shadow: 1px 1px 2px #eee, 2px 2px 2px #Blue;

    animation: color-change 5s linear infinite alternate;

    @keyframes color-change {
        from {color: #Blue;}
        to {color: White;}
      }
    
`
export default function LandingPage() {
    return (


        <ScreenWrapper className='text-light position-relative d-flex justify-content-center'>
            <MetalicStyle>
                GITHUB API
                <h1>By: María Alejandra Rocha Ortega</h1>
            </MetalicStyle>
            
            <img alt='' src={Madera} className='w-100' style={{ objectFit: 'cover' }} />
        </ScreenWrapper>
    )
}
