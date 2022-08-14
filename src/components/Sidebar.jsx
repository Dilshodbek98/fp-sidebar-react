/** @format */

import React, { useState } from "react";
import { sidebarData } from "../data/data";
import Logo from "../accets/icons-logo/logo.svg";
import LogoTitle from "../accets/icons-logo/Adrasteia.svg";
import { BsArrowLeftSquare } from "react-icons/bs";
import {
  SidebarWrapper,
  SidebarLogo,
  ListItem,
  SubmenuBox,
} from "./styled-component";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [openSub, setOpenSub] = useState([])

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };

  const openSubbmenu = (id) => {
    if (openSub.includes(id)) {
      let res = openSub.filter(val => val !== id)
      setOpenSub(res)
    }
    else {
      setOpenSub([...openSub, id])
    }
  };

  return (
    <SidebarWrapper open={isOpen}>
      <SidebarLogo onClick={() => openSidebar()} open={isOpen}>
        <img src={Logo} alt='title' className='logo' />
        {isOpen && (
          <>
            <img src={LogoTitle} alt='logo' className='logo-title' />
          </>
        )}
        <a href='#' className='logo-arrow'>
          <BsArrowLeftSquare />
        </a>
      </SidebarLogo>
      <ul>
        {sidebarData.map((value, ind) => {
          return value.inside?.length ? (
            <>
              <ListItem
                sub={openSub.includes(value.id)}
                open={isOpen}
                key={ind}
                onClick={() => openSubbmenu(value.id)}>
                <a href='#' className='logo'>
                  {value.icon}
                </a>
                {isOpen && (
                  <span>
                    <a href='#' className='logo-title'>
                      {value.title}
                    </a>
                    <a
                      href='#'
                      className='logo-arrow'
                      onClick={() => openSubbmenu(value)}>
                      {value.arrow}
                    </a>
                  </span>
                )}
              </ListItem>
              {openSub.includes(value.id) && (
                <SubmenuBox open={isOpen}>
                  {!isOpen && (
                    <a href='#' className='logo-title'>
                      {value.title}
                    </a>
                  )}
                  {value.inside.map((vl, ind) => {
                    return (
                      <>
                        <ListItem key={ind} child>
                          <a href='#' className='submenu-icon'>
                            {vl.icon}
                          </a>
                          <a href='#' className='submenu-title'>
                            {vl.title}
                          </a>
                        </ListItem>
                      </>
                    );
                  })}
                </SubmenuBox>
              )}
            </>
          ) : (
            <span>
              <ListItem open={isOpen}>
                <a href='#' className='logo'>
                  {value.icon}
                </a>
                {isOpen && (
                  <span>
                    <a href='#' className='logo-title'>
                      {value.title}
                    </a>
                    <a
                      href='#'
                      className='logo-arrow'
                      onClick={() => openSubbmenu(value)}>
                      {value.arrow}
                    </a>
                  </span>
                )}
              </ListItem>
            </span>
          );
        })}
      </ul>
    </SidebarWrapper>
  );
};
