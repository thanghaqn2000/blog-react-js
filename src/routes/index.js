import Home from "../components/Home";
import Header from "../components/Header";
import Content from "../components/Content";

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/Header', component: Header },
  { path: '/Content', component: Content},
  { path: '/Content', component: Content},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
