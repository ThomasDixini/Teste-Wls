import styled from 'styled-components';


interface ButtonProps {
    isActive: boolean;
}

interface StatusProps {
    isVisible: boolean;
}


export const Status = styled.div<StatusProps>`

    display: ${props => props.isVisible ? "visible" : "none !important"};

`


export const Button = styled.button<ButtonProps>`


    background-color: ${props => props.isActive ? "#FFFFFF" : "transparent"};
    color: ${props => props.isActive ? "#000000" : "rgba(0,0,0, 0.5)"}




`