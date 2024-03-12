import React, { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../Button';
import { Box } from '../Box';
import { BodySmall, BodyMedium } from '../Typography';
import { Modal, ModalHeader, ModalFooter } from './';

export default {
    title: 'Modal',
    component: Modal
} as ComponentMeta<typeof Modal>;

import RichTextEditor from '../RichTextEditor';

export const DefaultModal: ComponentStory<typeof Modal> = ({ open }) => {
    const [openModal, setOpenModal] = useState(open);
    useEffect(() => {
        setOpenModal(open);
    }, [open]);

    const onClose = () => setOpenModal(false);
    const openModalFunction = () => setOpenModal(true);
    const header = <ModalHeader title="New BOM" onClose={onClose}></ModalHeader>;

    const footer = <ModalFooter onReject={onClose} onAccept={onClose} isLoading helperText={<BodySmall color="error">Invalid username</BodySmall>} />;
    return (
        <>
            <Button variant="contained" onClick={openModalFunction}>
                Open Modal
            </Button>
            <Modal onClose={onClose} header={header} footer={footer} open={openModal}>
                <Box display={'flex'} maxWidth={800} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <BodySmall>
                        Size of Modal Body is flexible, set height and width of children prop element, passing isLoading prop to footer will disable the buttons with an added spinner icon
                    </BodySmall>
                    <RichTextEditor
                        onChange={(html: string) => console.log(html)}
                        initialHtml=""
                        editorBgColor="#fff"
                        contentEditableHeight="300px"
                        contentEditablePaddingLeft="16px"
                        placeholderPositionBottomLeft="20px"
                        placeholderPositionTop="70px"
                    />
                </Box>
            </Modal>
        </>
    );
};

DefaultModal.args = {
    open: false
};

export const CustomHeaderFooterModal: ComponentStory<typeof Modal> = ({ open }) => {
    const [openModal, setOpenModal] = useState(open);
    useEffect(() => {
        setOpenModal(open);
    }, [open]);

    const onClose = () => setOpenModal(false);
    const openModalFunction = () => setOpenModal(true);
    const header = (
        <Box textAlign={'center'}>
            <BodyMedium>Custom Modal</BodyMedium>
        </Box>
    );

    const footer = (
        <Box textAlign={'right'}>
            <Button variant="contained">Ok</Button>
        </Box>
    );

    return (
        <>
            <Button variant="contained" onClick={openModalFunction}>
                Open Modal
            </Button>
            <Modal onClose={onClose} header={header} footer={footer} open={openModal}>
                <Box height={'120px'} width={'400px'}>
                    <BodySmall>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio aspernatur culpa quis nihil laudantium atque at perspiciatis, dignissimos alias est ab nemo dolorem, nobis
                        temporibus? Nemo vero consequuntur ab iure soluta, beatae veniam? Voluptate, explicabo cumque architecto, harum aut nisi vero nemo quisquam est ratione inventore! Molestiae,
                        doloribus dolore.
                    </BodySmall>
                </Box>
            </Modal>
        </>
    );
};

CustomHeaderFooterModal.args = {
    open: false
};
