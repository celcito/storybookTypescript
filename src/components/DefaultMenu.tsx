import React, { useState, useEffect, FC, createRef } from 'react';
import '../App.css';
import { Container, ContainerHamburguer, Content } from './DefaultMenu.styled';
import { BrowserRouter, Link } from 'react-router-dom';
//import { uuid } from 'uuidv4';
import Logo from '../assets/icons/logo-einsten.svg';
import Menu from '../assets/images/menu-hamburguer.png';

const handleClick = (e) => {
  console.log(e);
  console.log(refIcon.current);
};

const containerIcon = createRef<HTMLUListElement>();
const refIcon = createRef<HTMLImageElement>();

export interface ObjectsProps {
  path: string;
  name: string;
  icon: HTMLImageElement;
  alt: string;
}

export interface DefaultObjectsProps {
  objects: Array<ObjectsProps>;
  typeMenu: string;
}

const DefaultMenu: FC<DefaultObjectsProps> = ({ objects }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setMenuIsOpen(false);
        console.log('false');
      } else {
        setMenuIsOpen(true);
      }
    }
    window.addEventListener('resize', handleResize);
  });

  const togleMenu = () => {
    if (menuIsOpen) setMenuIsOpen(false);
    else setMenuIsOpen(true);
  };

  return (
    <>
      <ContainerHamburguer
        menuIsOpen={menuIsOpen}
        onClick={togleMenu}
        id="hamburguer"
      >
        <img src={Menu} alt="Menu hamburguer" />
      </ContainerHamburguer>
      <div style={{ display: 'flex' }}>
        <Container menuIsOpen={menuIsOpen} id="menu">
          <div className="default-logo">
            <img src={Logo} alt="Logo Einsten" />
          </div>
          <BrowserRouter>
            <nav>
              <ul ref={containerIcon}>
                {objects.map((el, i) => {
                  return (
                    <>
                      <li>
                        <Link key={i} to={el.path}>
                          <el.icon
                            key={i}
                            ref={refIcon}
                            onClick={(e: MouseEvent) => {
                              handleClick(e);
                            }}
                          />
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </nav>
          </BrowserRouter>
        </Container>

        <Content>awq</Content>
      </div>
    </>
  );
};

export default DefaultMenu;
