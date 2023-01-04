import { Box } from '../Box';
import { styled } from '@mui/system';

export const ModalContainerStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    backgroundColor: '#FFFFFF',
    border: '1px solid #000',
    boxShadow: 24,
    pl: 6,
    pr: 6
};

export const ModalHeaderStyle = styled(Box)`
    width: 100%;
    padding: 20px 0px 10px 0px;
`;
export const HeaderContentStyle = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const IconStyle = styled(Box)`
    font-size: inherit;
    color: secondary;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: all 0.1s ease-in;
    }
`;

export const ModalBodyStyle = styled(Box)`
    width: 100%;
    padding: 5px 0px;
`;

export const ModalFooterStyle = styled(Box)`
    width: 100%;
    margin-top: auto;
    padding-top: 20px;
    padding-bottom: 10px;
`;

export const FooterContentStyle = styled(Box)`
    display: flex;
    justify-content: end;
    gap: 5px;
`;
