import React, { FC} from 'react';
import { addClass, verifyClass } from '../utils/';
import { Container, ContainerMenu, Content } from './CustomMenu.styled';

export interface CustomObjectProps {
  onMouseOver: MouseEvent;
  customFunction: () => void;
  id: string;
  text: string;
}

export interface CustomMenuProps {
  objects: Record<string, CustomObjectProps>;
  typeMenu: string;
  text: string;
}

const containerLi = React.createRef();
const handleClick = (e: () => void, index: number) => {
  changeClass(e, index, 'selected');
};

const handleOver = (e: () => void, index: number) => {
  changeClass(e, index, 'hover');
};

const changeClass = (e: () => void, index: number, classChange: string) => {
  const containerLiCurrent = containerLi.current.;
  const el = document.getElementById(`ele${index}`);

  verifyClass(containerLiCurrent.childNodes, classChange);

  addClass(el, classChange);
  if (typeof e === 'function') e();
};

const CustomMenu: FC<CustomMenuProps> = ({ objects }) => {
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
                  onMouseOver={(e: MouseEvent, index: number) =>
                    handleOver(e, index)
                  }
                  ref={containerLi}
                  onClick={(index: number) =>handleClick(cI.customFunction, index)
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
