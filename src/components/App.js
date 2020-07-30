import React from "react"

import { Helmet } from "react-helmet"
import styled from "styled-components"

import "./global.css"

export default function App({children}) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Vonage Conversation API</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <link rel="icon" type="image/x-icon" href="https://www.vonage.co.uk/etc.clientlibs/vonage/clientlibs/clientlib-base/resources/favicon.ico"></link>
                <link rel="shortcut icon" type="image/x-icon" href="https://www.vonage.co.uk/etc.clientlibs/vonage/clientlibs/clientlib-base/resources/favicon.ico"></link>
            </Helmet>
            <VonageHeader />
            {children}
        </div>
    )
}



const Title = styled.h1`
  font-family: Spezia, Spezia_SemiMono, Arial, Helvetica, sans-serif;
  font-size: 26px;
  font-weight: 540;
`
const HeaderContent = styled.div`
  margin: 0 180px;
`
function VonageTitle() {
    return (<Title ><svg style={{ display: "inline-block" }}  width="50px" height="39px" viewBox="0 0 230 200" version="1.1" xmlns="http://www.w3.org/2000/svg" data-di-res-id="7b327473-5faf2f03" data-di-rand="1596037447142">
        <path fill="currentColor" d="M45.3408,0 L-0.0002,0 L64.6808,146.958 C65.1748,148.081 66.7718,148.07 67.2508,146.942 L88.7628,96.337 L45.3408,0 Z"></path>
        <path fill="currentColor" d="M183.4502,0 C183.4502,0 113.9562,159.156 104.6482,173.833 C93.8292,190.896 86.6592,197.409 73.3912,199.496 C73.2682,199.515 73.1772,199.621 73.1772,199.746 C73.1772,199.886 73.2912,200 73.4312,200 L114.9552,200 C132.9432,200 145.9152,184.979 153.1042,171.714 C161.2742,156.637 229.5902,0 229.5902,0 L183.4502,0 Z"></path>
    </svg> VONAGE CONVERSATION API</Title>)
}

function VonageHeader() {
    return (
        <header>
            <HeaderContent>
                <VonageTitle />
            </HeaderContent>
        </header>
    )
}


//https://www.agora.io/en/
//https://dashboard.nexmo.com/conversation