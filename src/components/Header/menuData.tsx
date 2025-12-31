import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: " Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Survey Programming",
        path: "/survey-programming",
        newTab: false,
      },
      {
        id: 32,
        title: "Data Processing",
        path: "/data-processing",
        newTab: false,
      },
      {
        id: 33,
        title: "Verbatim Coding",
        path: "/verbatim-coding",
        newTab: false
      },
      {
        id: 34,
        title: "Charting",
        path: "/charting",
        newTab: false
      }
    ]
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Support",
    path: "/contact",
    newTab: false,
  },

];
export default menuData;
