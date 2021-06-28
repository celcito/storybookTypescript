import styled from 'styled-components';
export const ContainerBurguer = styled.div`
  position: absolute;
  top: 4%;
  left: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 1rem;
  height: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

    > div {
    width: 1.1rem;
    height: 0.25rem;
    background: #000000;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${(props) => (props.open ? '0' : '1')};
      transform: ${(props) =>
        props.open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
