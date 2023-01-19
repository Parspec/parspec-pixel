import { StepButton, Stepper } from '@mui/material';
import Step from '@mui/material/Step';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import EditOutlinedIcon from '@mui/icons-material/Edit';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { grey } from '@mui/material/colors';
import React, { PropsWithChildren } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
const CustomisedConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            display: 'none'
        }
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            display: 'none'
        }
    },
    [`& .${stepConnectorClasses.line}`]: {
        display: 'none'
    }
}));
declare module '@mui/material/styles' {
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
        tertiary: PaletteOptions['primary'];
    }
}

const theme = createTheme({
    spacing: 4,
    typography: {
        fontFamily: 'Inter',
        button: {
            textTransform: 'none'
        }
    },
    palette: {
        action: {},
        primary: {
            main: grey[50],
            dark: '#6467f2'
        },
        secondary: {
            main: '#6467f2'
        },
        tertiary: {
            main: '#6467f2'
        },
        neutral: {
            main: '#5E667D'
        }
    }
});

export const ThemeProvider: React.FC<PropsWithChildren<{}>> = (props) => {
    return <MUIThemeProvider theme={theme}>{props.children}</MUIThemeProvider>;
};

type Project = {
    name: string;
    description: string;
};
type StepperLabel = [];

interface StepperProps {
    project?: Project;
    stepLabels?: StepperLabel;
    onClose: () => void;
    onStepSelect: (step: number) => void;
    onEdit: () => void;
    active: any;
}
export const Header = ({ project, stepLabels, onClose, onStepSelect, onEdit, active }: StepperProps) => {
    const [activeStep, setActiveStep] = useState(active);
    function handleStepper(i: any) {
        setActiveStep(i);
    }
    const handleStep = (step: any) => () => {
        onStepSelect(step);
        handleStepper(step);
    };
    return (
        <MUIThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    background: '#6467f2',
                    color: 'primary.main',
                    fontSize: '18px',
                    height: '68px'
                }}
            >
                <Box
                    sx={{
                        padding: '20px',
                        textOverflow: 'ellipsis'
                    }}
                >
                    {project?.name}
                    <EditOutlinedIcon sx={{ fontSize: '19px' }} onClick={onEdit} />

                    <Box
                        sx={{
                            fontSize: '14px',
                            color: '#CFD0FB'
                        }}
                    >
                        {project?.description}
                    </Box>
                </Box>

                <Box
                    sx={{
                        fontSize: '40px',
                        background: '#5B5EDC',
                        borderRadius: '40px',
                        margin: '15px',
                        height: '40px',
                        padding: '6px, 8px, 6px, 8px',
                        width: '595px',
                        float: 'left',
                        marginLeft: '300px'
                    }}
                >
                    <Stepper
                        nonLinear
                        activeStep={activeStep}
                        connector={<CustomisedConnector />}
                        sx={{
                            '& .MuiStepLabel-root .Mui-active': {
                                color: '#5B5EDC',
                                backgroundColor: 'primary.main',
                                borderRadius: '10px',
                                float: 'left'
                            },
                            '& .MuiStep-root .Mui-active': {
                                '& p': {
                                    color: 'white',
                                    float: 'left',
                                    backgroundColor: '#5B5EDC',
                                    marginLeft: '6px',
                                    marginRight: '10px',
                                    width: '20px',
                                    textAlign: 'center'
                                },
                                backgroundColor: 'primary.main',
                                borderRadius: '40px',
                                height: '25px',
                                marginBottom: '30px'
                            },
                            '& .MuiStep-root': {
                                '& p': {
                                    color: '#5B5EDC',
                                    float: 'left',
                                    backgroundColor: 'white',
                                    borderRadius: '40px',
                                    marginTop: '0px',
                                    marginRight: '10px',
                                    width: '20px',
                                    textAlign: 'center'
                                },
                                margin: '6px',
                                height: '25px'
                            },
                            '& .MuiStep-root .Mui-disabled': {
                            },
                            cursor: 'pointer',
                            margin: '0px'
                        }}
                    >
                        {stepLabels?.map((label: any, index) => (
                            <Step key={label.step}>
                                <StepButton
                                    disabled={label.disable}
                                    sx={{
                                        justifyContent: 'space-between',
                                        '& .MuiStepLabel-iconContainer': {
                                            display: 'none'
                                        },
                                        '& .MuiStepLabel-label': {
                                            color: 'white',
                                            paddingRight: '8px',
                                            marginBottom: '30px'
                                        },
                                        marginRight: '4px'
                                    }}
                                    onClick={handleStep(index)}
                                >
                                    <p>{index + 1}</p>
                                    {label.step}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <CloseOutlinedIcon sx={{ fontSize: '30px', marginTop: '15px' }} onClick={onClose} />
            </Box>
        </MUIThemeProvider>
    );
};
