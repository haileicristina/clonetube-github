import React from 'react';
import {
    Container,
    Flex,
    Avatar,
    Row,
    PeopleIcon,
    Column,
    CompanyIcon,
    LocationIcon,
    EmailIcon,
    BlogIcon
} from './styles';

interface Props{
    login: string;
    name?: string;
    avatar: string;
    followers: number;
    following: number;
    company?: string;
    blog: string;
    location?: string;
    email?: string;    
     
}

const ProfileData = ({
    login,
    name,
    avatar,
    followers,
    following,
    company,
    blog,
    location,
    email
} : Props) =>{  
   
    return (
        <Container>
            <Flex>
                <Avatar src={avatar} alt={name}/>

                <div>
                    <h1>Hailei Cristina</h1>
                    <h2>{login}</h2>
                </div>

            </Flex>

            <Row>
               
                <li>
                    <PeopleIcon/>
                    <b>{followers}</b>
                    <span>followers</span>
                    <span>.</span>
                </li>
               

              
                <li>
                    <b>{following}</b>
                    <span>following</span>
                </li>
              
            </Row>
               
                    <li>
                        <CompanyIcon/>
                        <span>Hailei Dev</span>
                        <span>{company}</span>
                    </li>
               

                 {location && (
                    <li>
                        <LocationIcon/>
                        <span>{location}</span>
                    </li>
                )}

                 {email && (
                    <li>
                        <EmailIcon/>
                        <span>{email}</span>
                    </li>
                )}
                 {blog && (
                    <li>
                        <BlogIcon/>
                        <span className='blog'>{blog}</span>
                    </li>
                )}

            <Column>
            </Column>
        </Container>
    );
    
}
export default ProfileData;