import styled from 'styled-components';


interface ButtonProps {
    isActive: boolean;
}

export const Button = styled.button<ButtonProps>`


    background-color: ${props => props.isActive ? "#FFFFFF" : "transparent"};
    color: ${props => props.isActive ? "#000000" : "rgba(0,0,0, 0.5)"}




`