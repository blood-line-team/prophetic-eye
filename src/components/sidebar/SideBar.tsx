import { useState } from 'react';
import {
  IconLogout,
  IconSwitchHorizontal,
  IconNotebook,
  IconUsers,
} from '@tabler/icons-react';
import { Code, Group } from '@mantine/core';
import classes from './sidebar.module.css';
import { Link } from 'react-router-dom';

const data = [
  { link: '/client-requirements', label: 'Client Requirements', icon: IconNotebook },
  { link: '', label: 'Team member experience', icon: IconUsers },
];

export function SideBar() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <img src='/logo/logo-sidebar.svg' height={60} width={150} />
          <Code fw={700}>v2.0</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}