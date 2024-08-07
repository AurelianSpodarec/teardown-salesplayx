export interface IMenuItem {
  name: string;
  url: string;
  isActive?: boolean;
}

const dataMenu: IMenuItem[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Solutions",
    url: "/solutions",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Blog",
    url: "/blog",
  },
]

export default dataMenu;
