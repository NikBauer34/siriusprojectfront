import React, {FC} from "react";
import { AppShell, Burger, Group, Skeleton, Text } from "@mantine/core";
import {MantineLogo} from '@mantinex/mantine-logo'
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import { Nav } from "../../public/constants/Nav";

const MainPanel: FC = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60}}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {Nav.map(({title}) => 
          <Text size="xl" 
          fw={900} variant="gradient" 
          gradient={{ from: 'blue', to: 'cyan', deg: 90}}
          >
            {title}
          </Text>
        )}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet/>
      </AppShell.Main>
    </AppShell>
  )
}
export default MainPanel