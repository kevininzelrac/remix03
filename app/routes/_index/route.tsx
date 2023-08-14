import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import styles from "./style.css";
export let links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function Index() {
  return (
    <main>
      <h2>Home</h2>
      <p>Hello World</p>
    </main>
  );
}
