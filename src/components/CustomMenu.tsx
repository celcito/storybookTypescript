import React, { FC, createRef } from 'react';
import { addClass, verifyClass } from '../utils';
import { Container, ContainerMenu, Content } from './CustomMenu.styled';

export interface CustomMenuProps {
  objects: Array<CustomObjectsProps>;
  typeMenu: string;
  text: string;
}
export interface CustomObjectsProps {
  icon: string;
  text: string;
  customFunction: () => void;
  onMouseOver?: () => void;
  onClick: () => void;
  component: FC;
}

const containerUl = createRef<HTMLUListElement>();
const handleClick = (e: MouseEvent, index: number) => {
  changeClass(e, index, 'selected');
};

const handleOver = (e: MouseEvent, index: number) => {
  changeClass(e, index, 'hover');
  console.log(typeof index);
  console.log(index);
};

const changeClass = (e: MouseEvent, index: number, classChange: string) => {
  const containerUlCurrent = containerUl.current;
  const childNodes = containerUlCurrent.childNodes;
  const el = document.getElementById(`ele${index}`);

  verifyClass(childNodes, classChange);
  addClass(el, classChange);
  if (typeof e === 'function') e();
};

const CustomMenu: FC<CustomMenuProps> = ({ objects }) => {
  return (
    <Container>
      <ContainerMenu>
        <nav>
          <ul ref={containerUl}>
            {objects.map((cI, i) => {
              return (
                <li
                  key={i}
                  id={`ele${i}`}
                  onMouseOver={(e: MouseEvent) => handleOver(e, i)}
                  onClick={() => handleClick(cI.customFunction, i)}
                >
                  <span>{cI.text}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </ContainerMenu>
      <Content>
        {/* {objects.map((cI, i) => {
        return (
        <cI.component/>
        )
        })
        */}
      </Content>
    </Container>
  );
};

export default CustomMenu;
