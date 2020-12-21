import styled, { css } from 'styled-components';

export const Container = styled.div<{ menuIsOpen: boolean }>`

    -webkit-box-shadow: 0px 3px 15px -1px rgba(0,0,0,0.36);
    -moz-box-shadow: 0px 3px 15px -1px rgba(0,0,0,0.36);
    box-shadow: 0px 3px 15px -1px rgba(0,0,0,0.36);

    height: 1000px;

    ${(props) =>
      !props.menuIsOpen &&
      css`
        transition: left 0.3s;
        position: relative;
        left: -100px;
      `};
    
    ${(props) =>
      props.menuIsOpen &&
      css`
        transition: left 0.3s;
        position: relative;
        left: 0px;
      `};
   
    width:82px;
    justify-content: center;
    align-items: center;    
    }ul li {
        justify-content: center;
        align-items: center;
        display:flex;
        width: 82px;
        height:56px;
    }
    ul li a:active{
        background:#2699FB;
        height:56px;
     }

     ul li a:hover{
        justify-content: center;
        align-items: center;
        display: flex;
        width: 82px;
        transition: opacity .3s;
        background:#2699FB;
        height:56px;
        
        >svg{
            stroke:#fff;
        }
     }

      ul li a svg{
          stroke:#a7abb2;
       }

    .default-logo{
        display:flex;
        justify-content: center;
        height:80px;
        background:#fff;
    }
`;
export const ContainerHamburguer = styled.div<{ menuIsOpen: boolean }>`
  display: none;
  ${(props) =>
    props.menuIsOpen &&
    css`
      display: none;
    `}

  ${(props) =>
    !props.menuIsOpen &&
    css`
      display: block;
    `}
    width: 35px;
  cursor: pointer;
  img {
    width: 30px;
  }
  @media (max-width: 601px) {
    display: block;
  }
`;
