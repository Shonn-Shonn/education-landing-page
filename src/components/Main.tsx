import styled from "styled-components";
import {VscArrowSmallRight} from 'react-icons/vsc';
import MainPhoto from '../imgs/main.jpg';

const Wrapper = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content : center;
  align-items: center;
  width:100%;

  @media (max-width: 768px) {
   flex-direction: column;
 }
`;


const SectionOne = styled.section`
   width: 40%;
   padding: .5rem;
   margin-left: 4rem;

   @media (max-width: 768px) {
      width: 100%;
    }
`;

const OneTitle = styled.h5`
   font-weight: bold;
   margin: 0 !important;
   letter-spacing: -1px;
   color: pink;

`;

const OneTitleSub = styled.h1`
   font-weight: bold;
   font-size: 2.7rem;
   margin:0 !important;
   letter-spacing:-1px;
   width:40%;

   @media (max-width: 768px) {
      width: 90%;
    }
`;

const SectionSub = styled.p`
   font-size: 1.2rem;
   width:70%;
   color: grey;
`;


const SectionTwo = styled.section`
   width: 40%;
   padding: .5rem;
   margin-right: 4rem;

   @media (max-width: 768px) {
      display: none;
    }

`;

const Button = styled.button`
   font-size: 1.2rem;
   padding: .5rem 2.8rem;
   border-radius: 1rem;
   display: flex;
   border: none;
   background-color: black;
   color: white;
   cursor:pointer;
   margin-top: 1rem;
`;

const HeroImage = styled.div`
  background-image: url(${MainPhoto});
  width: 40vw;
  height: 56vh;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: .5rem;

  &:after {
    content: " Say Hi to your teacher👋";
    width: 12rem;
    height: 2rem;
    background-color: orange;
    position: absolute;
    bottom:-1rem;
    left: -3rem;
    padding: .4rem 1.5rem;
    font-weight: bold;
    border-radius: .4rem;
    background-color: white;
    box-shadow: 1px 3px 6px 3px rgba(3,52,5,0.5);
  }
`;



export const Main = () => {
  return (
    <div>
        <Wrapper>
               <SectionOne>
                    <OneTitle>MEET COURSE</OneTitle>
                    <OneTitleSub>Effective Online Way</OneTitleSub>
                    <SectionSub>
                          Affordable and flexible way to learn new skills ans study new and emerging topics.
                    </SectionSub>
                    <Button>
                          Start
                          <VscArrowSmallRight/>
                    </Button>
               </SectionOne>

               <SectionTwo>
                   <HeroImage>
                   </HeroImage>
               
               </SectionTwo>
        </Wrapper> 
    </div>
  )
}
