import React, { FC, Children, Ref, ReactNode } from 'react';
import { addClass, verifyClass } from '../utils/';
import { Container, ContainerMenu, Content } from './CustomMenu.styled';

export interface CustomMenuProps {
  objects: Array<object>;
  typeMenu: string;
  text: string;
}

const containerLi = React.createRef<HTMLDivElement>();
const handleClick = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  changeClass(e, index, 'selected');
};

const handleOver = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  changeClass(e, index, 'hover');
};

const changeClass = (
  e: React.ChangeEvent<HTMLInputElement>,
  index: number,
  classChange: string
) => {
  const containerLiCurrent = containerLi.current;
  const el = document.getElementById(`ele${index}`);

  verifyClass(containerLiCurrent.childNodes, classChange);

  addClass(el, classChange);
  if (typeof e === 'function') e:();
};

const CustomMenu: FC<CustomMenuProps> = ({ objects, typeMenu }) => {
  return (
    <Container>
      <ContainerMenu>
        <nav>
          <ul ref={containerLi}>
            {objects.map((cI, i) => {
              return (
                <li
                  key={i}
                  id={`ele${i}`}
                  onMouseOver={(e:React.ChangeEvent<HTMLInputElement>, index: number) =>
                    handleOver(e, index)
                  }
                  ref={containerLi}
                  onClick={(e: undefined, index: number) =>
                    handleClick(cI.customFunction, i)
                  }
                >
                  <span>{cI.text}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </ContainerMenu>
      <Content>
        {/* {props.children} */}
        {Children}
        {/* {objects.map((cI, i) => {
                            return (
                                <cI.component/>
                            )
                            })
                        }  */}
      </Content>
    </Container>
  );
};

export default CustomMenu;
