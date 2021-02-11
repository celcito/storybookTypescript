import React, { FC, createRef, useState } from 'react';
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
const handleClick = (e: any, index: number) => {
  changeClass(e, index, 'selected');
};

const handleOver = (e: any, index: number) => {
  changeClass(e, index, 'hover');
  console.log(typeof index);
  console.log(index);
};

const changeClass = (e: any, index: number, classChange: string) => {
  const containerUlCurrent = containerUl?.current;
  const childNodes: any = containerUlCurrent?.childNodes;
  const el: any = document.getElementById(`ele${index}`);

  verifyClass(childNodes, classChange);
  addClass(el, classChange);
  if (typeof e === 'function') e();
};

const CustomMenu: FC<CustomMenuProps> = ({ objects }) => {
  const [index, setIndex] = useState(0);
  const ObjectChildren: FC = objects[index].component;
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
                  onMouseOver={(e: any) => handleOver(e, i)}
                  onClick={() => {
                    handleClick(cI.customFunction, i);
                    setIndex(i);
                  }}
                >
                  <span>{cI.text}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </ContainerMenu>
      <Content>{<ObjectChildren />}</Content>
    </Container>
  );
};

export default CustomMenu;
