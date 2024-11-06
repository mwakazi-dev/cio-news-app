import { NavLink } from "../types/nav";

export const NAV_LINKS: NavLink[] = [
  { label: "HOME", path: "/" },
  { label: "NEWS", path: "/news", showDropdown: true },
  { label: "CXO SERIES", path: "/cxo-series" },
  { label: "PRODUCT REVIEWS", path: "/product-reviews" },
  { label: "WOMEN IN TECH", path: "/women-in-tech" },
  { label: "BLOG", path: "/blog" },
  { label: "EVENTS", path: "/events" },
];

export const SIDE_LINKS: NavLink[] = [
  { label: "News", path: "/news" },
  { label: "Subscriptions", path: "/subscriptions" },
  { label: "Event", path: "/event" },
  { label: "Video", path: "/video" },
  { label: "Magazine", path: "/magazine" },
  { label: "Opinions", path: "/opinions" },
  { label: "Features", path: "/features" },
  { label: "Popular stories", path: "/popular-stories" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Advertising", path: "/" },
  { label: "Services", path: "/" },
  { label: "About us", path: "/" },
  { label: "Contact us", path: "/" },
];
