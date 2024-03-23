import styled from 'styled-components'

export const BgContainer = styled.div`
    background-color:#223a5f;
    min-height:100vh;
    height:100%;
    padding:20px;
    display:flex;
    flex-direction:column;

    @media screen and (min-width:768px){
       padding-left:100px;
       padding-right:100px;
    }

    @media screen and (min-width:992px){
       padding-left:150px;
       padding-right:150px;
    }

    @media screen and (min-width:1200px){
        padding-left:200px;
        padding-right:200px;
    }
`

export const NavContainer = styled.nav`
    border:2px solid #ffffff;
    border-radius:10px;
    padding:15px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const Container = styled.div`
    background-color:#ffffff;
    width:90%;
    margin:auto;
    display:flex;
    flex-direction:column;
    padding:5px;
    padding-bottom:30px;

    @media screen and (min-width:768px){
        width:60%;
    }
`

export const ScoreContainer = styled.div`
    background-color:#ffffff;
    width:100px;
    height:110px;
    padding:10px;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const Heading = styled.h1`
    color:${props => (props.score ? '#223a5f' : '#ffffff')};
    font-size:${props => (props.fontSize ? props.fontSize : '25px')};
    font-weight:normal;
    font-family:${props => (props.result ? 'Roboto' : 'Bree Serif')};
    margin:0;
    text-align:${props => (props.result ? 'center' : 'normal')};
    padding-bottom:${props => props.result && '10px'};
    
`

export const ScoreHeading = styled(Heading)`
    color:#223a5f;
    font-size:40px;
    font-weight:bold;
    font-family:"Roboto";
`

export const UlList = styled.ul`
    list-style-type:none;
    padding-left:0px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    gap:10px;
    width:100%;
    align-self:center;
    margin-top:80px;
    margin-bottom:40px;

    @media screen and (min-width:768px){
        width:70%;
    }

    @media screen and (min-width:992px){
        width:50%;
    }
`

export const RulesBtn = styled.button`
    background-color:#ffffff;
    width:100px;
    height:45px;
    color:#223a5f;
    border:0px;
    border-radius:5px;
    outline:none;
    cursor:pointer;
    font-size:16px;
    align-self:flex-end;
    margin-top:auto;
`

export const PlayAgainBtn = styled(RulesBtn)`
    width:150px;
    border-radius:10px;
`

export const CloseBtn = styled.button`
    border:0px;
    outline:none;
    cursor:pointer;
    align-self:flex-end;
    width:40px;
    height:40px;
    margin-bottom:10px;

`

export const RulesImg = styled.img`
    width:80%;
    align-self:center;
`
