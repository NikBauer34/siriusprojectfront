import React, { FC } from "react";
import AuthFormMod from "../../modules/AuthFormMod/AuthFormMod";
import { Box, Card, Center, Flex } from "@mantine/core";
import { observer } from "mobx-react-lite";
import Blockq from "../../ui/Blockquote/Blockqoute";
const AuthFormComp: FC = () => {
  return (
    <Flex align="center" justify="center" w="100%">
      <Box maw={340} mx="auto" display="-ms-flexbox" w="100%">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <AuthFormMod/>
        </Card>
        {/* <Blockq cite="Кто-то важный" color="blue" text="Что-то важное"/> */}
      </Box>
      
    </Flex>
    
  )
}
export default observer(AuthFormComp);