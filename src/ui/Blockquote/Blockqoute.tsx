import { Blockquote } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import React, {FC} from 'react'
import { IBlockquote } from './IBlocquote';

const Blockq: FC<IBlockquote> = ({cite, text, color}) => {
  const icon = <IconInfoCircle />;
  return (
    <Blockquote color={color} cite={cite} icon={icon} mt="xl">
      {text}
    </Blockquote>
  );
}
export default Blockq