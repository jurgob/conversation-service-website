import React from "react"
import styled from "styled-components"
import App from "../components/App"


export default function Cane(){
  return (
    <App>
      <IntroPage />
    </App>
  )
}


const HeroFirst = styled.div`
  background-image:linear-gradient(90deg, rgb(136, 31, 255) 40%, rgb(130, 126, 249));
  background-size: 100%;
  padding: 20px;
  color: white;
  
`
// background: url("https://www.vonage.co.uk/content/dam/vonage/us-en/brand/imagery/vonage/placeholder/HeroBackground.svg") no - repeat fixed center;
const HeroTitle = styled.p`
  font-size: 22px
`
const HeroSubTitle = styled.p`
  font-size: 20px
`
const HeroText = styled.p`
  font-size: 16px
`


function Intro() {
  return <HeroFirst>
    <div style={{ width: "40%" }}>
      <HeroTitle>Enable Real Time comunication with your customers. In every possible channel</HeroTitle>
      <HeroSubTitle>The most flexible comunication api in the world.</HeroSubTitle>
      <HeroText>For businesses to succeed today they must communicate with their customers under their own terms. Your communication solution must be: <br /><br />
        <b>Multichannel: </b>Bring the conversation to where your customer feels most comfortable. With Vonage Conversations you can manage all your channels with just one API - Telephone Calls, Video Calls, Whatsapp, Viber, Facebook Messanger, Push notifications, In-App Messages and Audio, and email. <br /><br />
        <b>Context Aware: </b>Multichannel is not enough, your customers expect to be able to switch between channels and keep the conversation going. Vonage Conversations allow you to keep the context across all channels<br /><br />
        <b>Data Driven: </b>Learn from each customer interaction and continuously improve. Using Vonage Conversations you'll have all the each conversation's data and meta-data stored securely, allowing you to use them flexibly. Keep track of every event and get access to aggregate insights .<br /><br />
        <b>Advanced and Future Proof: </b>Vonage Conversations is far more powerful than your regular API. With call recording and segmented transcription, text to speech and speech to text bundled into the connection between channels, and WebSockets to connect to any third-party extension you can dream of.<br /><br />
      </HeroText>
    </div>
  </HeroFirst>
}

const Card = styled.div`
  padding: 10px;
  margin: 10px;
`

const FuncCard = ({title, image, text}) => {
  return <Card >
    <div>{title}</div>
    <img  style={{width: "30px"}} src={image} alt="" />
    {text}
  </Card>
}

function Functionalities() {
  const functionalities = [
    {
      title: "Programable Voice Calls",
      text: "Call whisper, text to speech, speech to text, audio recording and transcription, sip trunking",
      image: "https://www.vonage.co.uk/content/dam/vonage/us-en/brand/iconography/vonage/Volta-product-icons/Calling/call/glyph.svg"
    },
    {
      title: "Browser and Native App SDKs",
      text: "in-app calls, in-app chat, in-app video, customizable push notification",
      image: "https://www.vonage.co.uk/content/dam/vonage/us-en/brand/iconography/vonage/Volta-product-icons/Calling/call/glyph.svg"
    },
    {
      title: "Social channel messaging",
      text: "Whatsapp, Facebook Messanger, Viber",
      image: "https://www.vonage.co.uk/content/dam/vonage/us-en/brand/iconography/vonage/Volta-product-icons/Calling/call/glyph.svg"
    }
  ]

  // const functionalitiesOld = [
  //   { title: "programable telephone calls"},
  //   "in app call",
  //   "in app chat",
  //   "in app video",
  //   "customize your push notification",
  //   "Call  Whisper",
  //   "text to speech",
  //   "speech to text",
  //   "audio record",
  //   "sip trunk",
  //   "send/receive messanger api",
  //   "send/receive whatup message"]

  return <p>
    Functionality of conversations:
    <div>{functionalities.map((el, idx) => {
    return <FuncCard key={idx} {...el} />
  })}</div>

  </p>
}


function IntroPage() {

  return (<div>
    <Intro />
    <Functionalities />
    <p>
      <b>Create it with Vonage Conversations</b><br /><br />
      Create your own Contact Center (mix ivr, human agents, and AI bots across multiple channels) <br /><br />
      Build your own Slack, with audio and chat <br /><br />
      Build your own Twitch with our video solution <br /><br />
      Create your real time chess app <br /><br />
      create your social network <br /><br />

    </p>
  </div>)
}