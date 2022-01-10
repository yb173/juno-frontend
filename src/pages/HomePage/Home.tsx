import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import './Home.css';

type Menu = {
  id: number;
  title: string;
  url: string;
};

export const HomePage: VFC = () => {
  const menus: Menu[] = [
    {
      id: 1,
      title: 'ユーザ',
      url: '/users',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Juno | Home</title>
      </Helmet>
      <header>
        <h1>Juno</h1>
      </header>
      <ul>
        {menus.map((menu) => (
          <li key={menu.id}>
            <Link to={menu.url}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
