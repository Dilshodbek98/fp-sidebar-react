import styled from "styled-components";
import photo from '../accets/images/background.jpg'

export const Main = styled.div`
  display: flex;
  font-family: sans-serif;
`
export const SidebarWrapper = styled.div`
  width: ${({ open }) => open ? "270px" : "60px"};
`

export const ContentWrapper = styled.div`
  flex-basis: 100%;
  height: 97vh;
  background-color: #f4f4f4;
  background-image: url(${photo});
`;

export const SidebarLogo = styled.div`
  display: flex;
  padding: 20px 10px;
  width: 100%;
  height: 30px;
  align-items: center;
  cursor: pointer;
  .logo {
    width: 25px;
    height: 30px;
  }
  .logo-title {
    width: 130px;
    height: 30px;
    margin-left: 10px;
  }
  .logo-arrow {
    position: ${({ open }) => (open ? "" : "absolute")};
    left: 70px;
    transform: ${({ open }) => (open ? "" : "rotate(180deg)")};
    margin-left: 15px;
    font-size: 25px;
    transition: all 0.3s;
  }
  .logo-arrow path {
    fill: black;
  }
`;
export const ListItem = styled.li`
  list-style-type: none;
  width: 100%;
  display: flex;
  height: 30px;
  align-items: center;
  margin-left: 10px;
  :hover {
    background-color: #ccc;
    width: 100%;
    max-width: 220px
  }
  span {
    display: flex;
    width: 70%;
    justify-content: space-between;
    margin-left: 10px;
  }
  .logo {
    font-size: 25px;
  }
  .logo path {
    fill: #494a4a;
  }
  .logo-title {
    font-size: 18px;
    text-decoration: none;
    color: #494a4a;
  }
  .logo-arrow {
    font-size: 18px;
    transform: ${({sub})=> sub && "rotate(180deg)"};
  }
  .logo-arrow path {
    fill: #494a4a;
  }
`;

export const SubmenuBox = styled.div`
  position: ${({ open }) => !open && "absolute"};
  left: 70px;
  background-color: ${({ open }) => !open && "#fff"};
  border: ${({ open }) => !open && "1px solid #fff"};
  white-space: nowrap;
  box-shadow: ${({ open }) => !open && "2px 2px 12px 1px rgba(0,0,0,0.72);"};
  border-radius: ${({ open }) => !open && "10px"};
  padding: ${({ open }) => !open && "10px 0 0 10px"};
  max-width: ${({ open }) => !open && "200px"};
  min-width: ${({ open }) => !open && "170px"};
  min-height: ${({ open }) => !open && "120px"};
  margin-top: ${({ open }) => !open && "-20px"};
  margin-left: ${({open})=> open && '30px'};
  a {
    text-decoration: none;
    color: #494a4a;
  }
  .submenu-icon {
    font-size: 22px;
  }
  .submenu-title{
    font-size: 16px;
    margin-left: 5px;
  }
`;