import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from './';
import { BodyBig, BodySmall, H5 } from '../Typography/';
import { Switch } from '../Switch';
import { Box } from '../Box';

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
    const [switchState1, setWitchState1] = useState<boolean>(false);
    const [switchState2, setWitchState2] = useState<boolean>(false);
    const [expanded, setExpanded] = useState<string | false>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const handleSwitchOne = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWitchState1(event.target.checked);
    };

    const handleSwitchTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWitchState2(event.target.checked);
    };

    const handleAccordionOnChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        console.log(`[switchState1]`, switchState1);
        if (!switchState1) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [switchState1]);

    useEffect(() => {
        console.log(`[switchState2]`, switchState2);
        if (!switchState2) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [switchState2]);

    return (
        <>
            <Accordion {...args} details={'Body 1'} summary={'title1'} expanded={expanded === 'panel1'} onChange={handleAccordionOnChange('panel1')} />
            <Accordion
                {...args}
                details={
                    isDisabled ? (
                        <Box
                            sx={{
                                pointerEvents: 'none',
                                opacity: '0.4'
                            }}
                        >
                            <BodyBig>
                                Dolor duis quis laboris consequat minim officia do ad minim Lorem ut excepteur. Quis consectetur consequat occaecat pariatur culpa excepteur laborum labore exercitation
                                esse reprehenderit sint. Non nulla fugiat ipsum sunt aliquip eu et. Culpa qui quis nulla reprehenderit ad tempor incididunt qui reprehenderit veniam. Duis fugiat
                                aliquip ex minim ullamco excepteur eiusmod proident sunt anim labore irure quis. Labore pariatur consequat proident sit nulla amet sint quis officia fugiat sit
                                exercitation id eu.
                            </BodyBig>
                            <Switch label={<BodySmall>settings 1</BodySmall>} />
                            <Switch label={<BodySmall>settings 2</BodySmall>} />
                        </Box>
                    ) : (
                        <Box>
                            <BodyBig>
                                Dolor duis quis laboris consequat minim officia do ad minim Lorem ut excepteur. Quis consectetur consequat occaecat pariatur culpa excepteur laborum labore exercitation
                                esse reprehenderit sint. Non nulla fugiat ipsum sunt aliquip eu et. Culpa qui quis nulla reprehenderit ad tempor incididunt qui reprehenderit veniam. Duis fugiat
                                aliquip ex minim ullamco excepteur eiusmod proident sunt anim labore irure quis. Labore pariatur consequat proident sit nulla amet sint quis officia fugiat sit
                                exercitation id eu.
                            </BodyBig>
                            <Switch label={<BodySmall>settings 1</BodySmall>} />
                            <Switch label={<BodySmall>settings 2</BodySmall>} />
                        </Box>
                    )
                }
                expanded={expanded === 'panel2'}
                onChange={handleAccordionOnChange('panel2')}
                summary={
                    <Box>
                        <Switch checked={switchState1} sx={{ marginLeft: '10px' }} label="title 2" onChange={handleSwitchOne} />
                    </Box>
                }
            />
            <Accordion
                {...args}
                details={
                    isDisabled ? (
                        <Box
                            sx={{
                                pointerEvents: 'none',
                                opacity: '0.4'
                            }}
                        >
                            I am awesome
                        </Box>
                    ) : (
                        <Box>I am awesome</Box>
                    )
                }
                expanded={expanded === 'panel3'}
                onChange={handleAccordionOnChange('panel3')}
                summary={
                    <Box>
                        <Switch sx={{ marginLeft: '10px' }} checked={switchState2} onChange={handleSwitchTwo} label="title 3" />
                    </Box>
                }
            />
        </>
    );
};

export const Basic = Template.bind({});
