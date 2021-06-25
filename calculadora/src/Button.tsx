import React from 'react'
import styles from './Button.module.css'
import './other-css.css'
import styled from 'styled-components'

interface ButtonProps{
    disable?:boolean;
    children:React.ReactNode
}

export const Button:React.FC<ButtonProps> = ({children, disable = false}) =>{
    return <StyleButton isDisable={disable}>{children}</StyleButton>
}

const StyleButton = styled.button<{isDisable:boolean}>`
    border-radius: 6px;
    padding: 10px 12px;
    background: ${props => props.isDisable ? `#c4c4c4` : `#417841`};
    color:#333;
    font-size:12px;
    line-height:  16px;
    margin-top: 20px;
`;