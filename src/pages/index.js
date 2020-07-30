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


function Intro(){
 return <HeroFirst>
    <div style={{ width: "40%" }}>
      <HeroTitle>Enable RealTime comunication with your customers. In every possible channel</HeroTitle>
      <HeroSubTitle>The most flexible comunication api in the world.</HeroSubTitle>
      <HeroText>Comunication is the key for the success of your business. But today comunication must be: <br /><br />
       <b>Multichannel: </b>Comunication can happen in every possible way.With Conversation API you can manage with just one api Telephone Calls, Video Call, Whatsapp, viber, facebook messages, push notification, In App Message and Audio, Mails. <br /><br />
       <b>Context Aware: </b>Keep the comunication context. Multichannel is not enough, your customer need to be able to switch between channels effortless. <br /><br />
       <b>History Aware: </b>Keep track of every comunication.In Conversation API all your comunication datas are stored allowing you to use them in a flexible way. Give your customer a conversation history. Keep track or their past. Save every events.<br /><br />
       <b>Give advenced functionality: </b>Conversation API is far more then this.Record your calls.use text to speech.Take advandtage of the speech to text. Transcribe every audio in a different text.<br /><br />
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
    <img  style={{width: "30px"}} src={image} />
    {text}
  </Card>
}

function Functionalities(){
  const functionalities = [
    {
      title: "Programable Voice Calls",
      text:"",
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


function IntroPage(){
  
  return (<div>
    <Intro/>
    <Functionalities />
    <p>
      
    </p>
    <p>
      Create it with Conversation API
      Create your own slack, with audio and chat
      Build your own twitch with our video solution
      Do your own call Center (mix ivr and human agents)
      Create your real time chess app
      create your social network

    </p>
  </div>)
}