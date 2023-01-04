import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Modal} from './';
import {Header} from './Header';
import {Footer} from './Footer';
import { Button } from '../Button';
import { Box } from '../Box';
import { BodyBig } from '../Typography';
import { Typography } from '../Typography';

export default {
    title: 'Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [openModal, setOpenModal] = useState(false);  
  const onClose = () => setOpenModal(false); 
  const openModalFunction = () => setOpenModal(true);

  return (
          <>
            <Button color='primary' variant='contained' onClick={openModalFunction}>
              Open Modal
            </Button>
            <Modal  
              onClose={onClose}
              header={args.header}
              footer={args.footer}
              open={openModal || args.open}
              children={args.children}
            />
          </>
  )
};

export const defaultModal = Template.bind({});
defaultModal.args = {
    open: true,
    children: 'Size of Modal Body is flexible, set height and width of children prop element',
    header: <Header title="New BOM" onClose={()=>{}} />,
    footer: <Footer onReject={()=>{}} onAccept={()=>{}}/>
};

export const customFooter = Template.bind({});
customFooter.args = {
    open: true,
    children: 
      <Box height={"220px"} width={"400px"}>
        <BodyBig>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio aspernatur culpa quis nihil laudantium atque at perspiciatis, dignissimos alias est ab nemo dolorem, nobis temporibus? Nemo vero consequuntur ab iure soluta, beatae veniam? Voluptate, explicabo cumque architecto, harum aut nisi vero nemo quisquam est ratione inventore! Molestiae, doloribus dolore.
        </BodyBig>
      </Box>,
    header:
      <Box textAlign={"center"} >
      <Typography.BodyBig fontWeight={1000}>Custom Modal</Typography.BodyBig>
      </Box>,
    footer: 
    <Box textAlign={"right"}>
      <Button 
        variant='contained' 
        color='primary'
      >
        Ok
      </Button>
    </Box>
};
