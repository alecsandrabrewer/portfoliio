import React from 'react';
import styled from 'styled-components';
import './App.css';
import beard from './img/beard.jpeg';
import commitment from './img/commitment.jpeg';
import exit from './img/exit.jpeg';
import greene from './img/greene.png';
import kind from './img/kind.jpeg';
import likeChrist from './img/likeChrist.jpeg';
import schedule from './img/schedule.png';
import Vacaville from './img/Vacaville.png';
import us from './img/us.jpeg';
import floral from './img/floral.jpeg';
import yellow from './img/yellow.jpeg';
import treasure from './img/treasure.jpeg';


function App() {
  return (
    <div className="App">
      <Container>
        <img className='headerPhoto' src={us}/>
        <Head>
          <h1>Alecsandra Brewer</h1>
        </Head>
        <Background>
        <AboutMe className='About'>
          <h2>About Me</h2>
          <p>I'm 24 years old and am looking for more ways to be involved in the work of the Church. I'm married to Ryan Brewer, current minister for Vacaville Church of Christ and a future student of the Southwest School of Bible Studies. I am currently a full stack web development student of Lambda School. Before I got into web development, I would create flyers and design websites for local congregations in northern California. Growing up, I always took an interest in styling and aesthetics as a 'hobby.' I would offer to help our home congregation in making advertisements for gospel meetings, singings, and fellowships. I'd also make invitations for events such as weddings, bridal and baby showers. Now it's become my absolute passion! Outside of school for web development, I try and study up on design to create a better user interface and experience.</p>
        </AboutMe>
      </Background>
      </Container>

      <Experience className='Experience'>
        <h3>Education and Work Experience</h3>
        <p>Lambda School - Full Stack Web Development Program</p>
        <p>I also am taking extra courses in Udemy and studying up on books about design such as Color Theory and Typography. </p>
        <h4>A small compilation of designs I've made:</h4>
        <Photos className = 'Photos'>
          <img className='sample' src={Vacaville} width='31%'height='100%'/>
          <img className='sample' src={commitment} width='33%' height='100%'/>
          <img className='sample' src={likeChrist} width='31%' height='100%'/>
          <img className='sample' src={kind} width='30%' height='100%'/>
          <img className='sample' src={greene} width='30%' height='100%'/>
          <img className='sample' src={beard} width='36%' height='100%'/>
          <img className='sample' src={exit} width='35%' height='100%'/>
          <img className='sample' src={schedule} width='30%' height='100%'/>
          <img className='sample' src={treasure} width='30%' height='100%'/> 
        </Photos>
        </Experience>
          <Websites className='Websites'>
            <h4>Links to a couple of websites I designed:</h4>
            <Button target='_blank' href='https://plantlove.netlify.app/'>Plant Project</Button>
            <Button target='_blank' href='https://www.frenchcampchurchofchrist.com/'>Church of Christ</Button>
          </Websites>
    </div>
  );
}

export default App;


// styling 
const Head = styled.div`
  background-color: #F5EACB;
  padding: 0% 10%;
  display:flex;
  font-size:2rem;
`
const Background = styled.div`
  background-image: url(${floral});
  padding:8% 0%;
`
const Container = styled.div`
  background-color: #F5EACB;
`
const AboutMe = styled.div`
  background-color: #F5EACB;
  margin: 0% 0% 0% 2%;
  padding: 1% 4%;
  display:flex;
  text-align:right;
  flex-direction: column;
  width: 80%;
  `
const Experience = styled.div`
  background-color:#CBD69E;
  border:20px solid #929C6B;
  padding: 4%2%;
  margin: 0%;
`
const Photos = styled.div`
  background-color: #DECCB3;
  border: 7px solid black;
  padding: 2%3%;
  margin: 0% 4%;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`
const Websites = styled.div`
  padding: 15%;
  background-image: url(${yellow});
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`
const Button = styled.a`
  display: inline-block;
  text-decoration:none;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: #DECCB3;
  color: black;
  border: 2px solid black;
  `