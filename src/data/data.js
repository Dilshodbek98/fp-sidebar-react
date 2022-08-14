/** @format */

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { SiKnowledgebase } from "react-icons/si";
import { BsCalendarEvent } from "react-icons/bs";
import { AiOutlineContacts } from "react-icons/ai";
import { IoAddCircleSharp } from "react-icons/io5";
export const sidebarData = [
  {
    id: 1,
    title: "Home",
    open: false,
    icon: <AiOutlineHome />,
    arrow: null,
  },
  {
    id: 2,
    title: "About Us",
    open: false,
    icon: <AiOutlineInfoCircle />,
    arrow: null,
  },
  {
    id: 3,
    title: "Our Services",
    open: false,
    icon: <AiOutlineSetting />,
    arrow: <AiOutlineArrowDown />,
    inside: [
      {
        title: "Start up",
        icon: <IoAddCircleSharp />,
      },
      {
        title: "Advertisment",
        icon: <IoAddCircleSharp />,
      },
      {
        title: "Courses",
        icon: <IoAddCircleSharp />,
      },
      {
        title: "Internship",
        icon: <IoAddCircleSharp />,
      },
    ],
  },
  {
    id: 4,
    title: "Projects",
    open: false,
    icon: <AiOutlineProject />,
    arrow: <AiOutlineArrowDown />,
    inside: [
      {
        title: "Finished Projects",
        icon: <IoAddCircleSharp />,
      },
      {
        title: "In Process",
        icon: <IoAddCircleSharp />,
      },
      {
        title: "Planned Projects",
        icon: <IoAddCircleSharp />,
      },
    ],
  },
  {
    id: 5,
    title: "Knowledge",
    open: false,
    icon: <SiKnowledgebase />,
    arrow: <AiOutlineArrowDown />,
    inside: [
      {
        title: "Sources",
        icon: <IoAddCircleSharp />,
      },
      {
        title: "Database",
        icon: <IoAddCircleSharp />,
      },
    ],
  },
  {
    id: 6,
    title: "Events",
    open: false,
    icon: <BsCalendarEvent />,
    arrow: null,
  },
  {
    id: 7,
    title: "Contacts",
    open: false,
    icon: <AiOutlineContacts />,
    arrow: <AiOutlineArrowDown />,
    inside: [
      {
        title: "Social",
        icon: <IoAddCircleSharp />,
      },
      {
        title: "Telephone number",
        icon: <IoAddCircleSharp />,
      },
    ],
  },
];
