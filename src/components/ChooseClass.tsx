import styled from "styled-components"
import ImageOne from "../imgs/knowledge.png";
import ImageTwo from "../imgs/library.png";
import ImageThree from "../imgs/notebook.png";
import SectionTwoImage from "../imgs/backtoschool.jpg";

const Wrapper = styled.section` 
    display: flex;
    flex-direction: column;
    margin-top: 6.5rem;

    @media (max-width: 1024px){
    
    }

    @media (max-width: 768px) {
      margin:0;
      margin-top: 2.5rem;
      width: 100%;
      height: auto;
      overflow: hidden;
    }
`;

const SectionOne = styled.div`
    margin:0 auto;
    text-align: center;
`;

const SectionTwo = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;
    margin-top: 2.8rem;


    @media (max-width: 768px) {
       flex-direction: column;
    }

`;

const ClassTitle = styled.h1`
    font-size: 2.5rem;
`;

const ClassSub  = styled.p`
    color: grey;
    width: 55%;
    margin: 0 auto;
    font-size: 1.1em;
`;

const PartOne = styled.div`
    box-shadow: 1px 3px 24px 2px rgba(3,52,5,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    margin: 2rem;
    height: 50vh;
    width: 38vw;
    border-radius: 1rem;

    & > * {
        margin: .5rem;
    }

    @media (max-width: 1024px){
        display: none;
    }

    @media (max-width: 768px) {
      display: block;
      width: 85%;
      height: 60%;
      margin: 0 auto;
      margin: 2rem;
    }

    
`;

const PartTwo = styled.div`
    box-shadow: 1px 3px 24px 2px rgba(3,52,5,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    margin: .8rem;
    height: 50vh;
    width: 38vw;
    border-radius: 1rem;

    & > * {
      margin: .5rem;
    }

    @media (max-width: 1024px){
        display: none;
    }


    @media (max-width: 768px) {
      display: block;
      width: 85%;
      height: 60%;
      margin: 0 auto;
      margin: 2rem;
  }
`;

const PartThree = styled.div`
    box-shadow: 1px 3px 24px 2px rgba(3,52,5,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    margin: 2rem;
    height: 50vh;
    width: 38vw;
    border-radius: 1rem;

    & > * {
      margin: .5rem;
    }

    @media (max-width: 1024px){
        display: none;
    }
    
    @media (max-width: 768px) {
     display: block;
     width: 85%;
     height: 60%;
     margin: 0 auto;
     margin: 2rem;
  }
`;

const PartOneImge = styled.div`
    background-image: url(${ImageOne});
    background-position: center;
    background-size: cover;
    width: 6rem;
    height: 6rem;
    margin-top: 1.8rem;

    @media (max-width: 768px) {
        margin: 0 auto;
     }
`;

const PartTwoImge = styled.div`   
    background-image: url(${ImageTwo});
    background-position: center;
    background-size: cover;
    width: 6rem;
    height: 6rem;

    @media (max-width: 768px) {
        margin: 0 auto;
     }
`;

const PartThreeImge = styled.div`
    background-image: url(${ImageThree});
    background-position: center;
    background-size: cover;
    width: 6rem;
    height: 6rem;

    @media (max-width: 768px) {
        margin: 0 auto;
     }
`;

const PartOneTitle = styled.h2`
    @media (max-width: 768px) {
       text-align: center;
    }
`;

const PartTwoTitle = styled.h2`
    @media (max-width: 768px) {
       text-align: center;
    }
`;

const PartThreeTitle = styled.h2`
    @media (max-width: 768px) {
       text-align: center;
    }
`;

const PartOneSub = styled.p`
    color: grey;
    text-align: center;
`;

const PartTwoSub = styled.p`
    color: grey;
    text-align: center;
`;

const PartThreeSub = styled.p`
    color: grey;
    text-align: center;
`;

const SpecialPinkSub = styled.p`
    color: pink;
    display: inline;
`;

const SectionTwoPart = styled.div`
    background-image: url(${SectionTwoImage});
    width: 100vw;
    height: 60vh;
    background-position: center;
    background-size: cover;
    position: relative;
    border-radius: .5rem;
    display: none;

    @media (max-width: 1024px){
        display: block;
    }

    @media (max-width: 768px) {
        display: none;
     }
`;

export const ChooseClass = () => {
  return (
    <div>
         <Wrapper>
               <SectionOne>
                    <ClassTitle>
                        Reasons to choose Class
                    </ClassTitle>
                    <ClassSub>
                        There are many features available here
                        <SpecialPinkSub> to help you </SpecialPinkSub>
                        archieve your goals.
                    </ClassSub> 
               </SectionOne>

               <SectionTwo>
                    
                    <PartOne>
                        <PartOneImge></PartOneImge>
                        <PartOneTitle>
                            Knowledge
                        </PartOneTitle>
                        <PartOneSub>
                             We Review Hundreds Of 
                             Online College Programs Each 
                             Year To Help Students. Find The 
                             Best Online Universities.
                        </PartOneSub>
                    </PartOne>
                
                    <PartTwo>
                        <PartTwoImge></PartTwoImge>
                        <PartTwoTitle>
                            Library
                        </PartTwoTitle>
                        <PartTwoSub>
                            Use Our Ranked List Of The Best Online Colleges And Universities To Begin Your Search For A Program That Works.
                        </PartTwoSub>
                    </PartTwo>

                    <PartThree>
                         <PartThreeImge></PartThreeImge>
                         <PartThreeTitle>
                            NoteBook
                         </PartThreeTitle>
                         <PartThreeSub>
                            Trucker Jacket incorporates the latest technology with one of the most new app. 
                         </PartThreeSub>
                    </PartThree>

                    <SectionTwoPart>
                         
                    </SectionTwoPart>
               </SectionTwo>
         </Wrapper>
    </div>
  )
}
