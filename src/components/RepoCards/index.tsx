import React from "react";
import { 
    Container,
    TopSide,
    RepoIcon,
    BotSide,
    StarIcon,
    ForkIcon
} from "./styles";
import {Link} from 'react-router-dom';


interface Props {
    login:string;
    reponame:string;
    description?:string;
    language?: string;
    stars:number;
    forks:number;

}
const RepoCards = ({
    login,
    reponame,
    description,
    language,
    stars,
    forks}: Props) =>{
    

    const languageClass = language ? language.toLowerCase() : 'other';

    return(
       <Container>
           
           <TopSide>
               <header>
                   <RepoIcon/>
                   <Link to = {`/${login}/${reponame}`}>{reponame}</Link>
               </header>
               <p>{description}</p>
           </TopSide>
           <BotSide>
               <ul>
                   <li>
                       <div className = {`language ${languageClass}`}/>
                        <span>{language}</span>
                   </li>
                   <li>
                       <StarIcon/>
                       <span>{stars}</span>
                   </li>
                   <li>
                       <ForkIcon/>
                       <span>{forks}</span>
                   </li>
               </ul>
           </BotSide>
       </Container>
    );
}
export default RepoCards;