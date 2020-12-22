import styled from 'styled-components';
import { customDropShadow } from '../assets/styles/mixins';

export const fontFamily = "'Rubik', sans-serif";

export const Container = styled.div`
  display: flex;
  width: 900px;
  max-width: 1000px;
`;
export const ContainerMenu = styled.div`
  width: 212px;
  height: 250px;
  display: flex;
  background: #fff;
  font-family: 'rubikregular', sans-serif;

  ${customDropShadow('1px 4px 11px 6px #c2c2c2')}
  ul {
    margin: 0;
    padding-top: 10px;
  }

  ul li {
    display: flex;
    margin-left: 10px;
    width: 200px;
    height: 37px;
    margin-bottom: 2px;
    background: #fff;
    align-items: center;
    font-family: ${fontFamily};
    font-size: 14px;
    color: #6b7786;
    cursor: pointer;
  }

  ul li span {
    padding-left: 10px;
  }

  .selected {
    background: #f1f4f6;
    font-family: 'Rubik', sans-serif;
    color: #2e384d;
    font-weight: bold;
    color: #2e384d;
  }

  .hover {
    transition: opacity 0.3s;
    opacity: 0.8;
  }
`;
export const Content = styled.section`
  background: aliceblue;
  margin-left: 30px;
`;
