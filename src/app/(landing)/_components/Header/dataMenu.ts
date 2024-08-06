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
    name: "About",
    url: "/about",
  },
  {
    name: "Process",
    url: "/process",
  },
  {
    name: "Blog",
    url: "aurelianspodarec.co.uk/blog",
  },
]

export default dataMenu;
