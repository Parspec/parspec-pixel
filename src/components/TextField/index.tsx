import { Chip } from '@mui/material';
import { default as MUITextField, TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';
import { forwardRef, useState } from 'react';
import { Box } from '../Box';

export interface TextFieldProps extends Omit<MUITextFieldProps, 'margin' | 'classes'> {
    label: string;
    variant?: 'standard' | 'outlined' | 'filled';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    error?: boolean;
    size?: 'small' | 'medium';
    showChips: boolean;
    chipsItem?: string[];
}

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(({ variant, color, error, size, label, showChips, chipsItem, ...rest }, ref) => {
    const [emailList, setEmailList] = useState(chipsItem);
    const [value, setValue] = useState('');
    // const [error, setError] = useState<string | null>(null);
    const keyDown = (evt: any) => {
        if (typeof emailList === 'object' && emailList.length) {
            console.log('Yoloooooo');
            if (['Enter', 'Tab', ','].includes(evt.key)) {
                evt.preventDefault();

                let typedValue = value.trim();

                if (typedValue && isValid(typedValue)) {
                    setEmailList([...emailList, value]);
                    console.log('29 lineeee===>', value);
                    setValue('');
                }
            }
        }
    };

    const isValid = (email: string) => {
        let error = null;

        if (isInList(email)) {
            error = `${email} has already been added.`;
        }

        if (!isEmail(email)) {
            error = `${email} is not a valid email address.`;
        }

        if (error) {
            // setError(error);
            return false;
        }

        return true;
    };

    const isInList = (email: string) => {
        return emailList?.includes(email);
    };

    const isEmail = (email: string) => {
        return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
    };

    const handleDelete = (item: string) => {
        console.log('Itemmm====>', item);
        setEmailList(emailList?.filter((i: string) => i !== item));
        // const payload = {
        //     id: getSharedLinkDetailsData.getSharedLinkDetailsData.data.id,
        //     email_access_list: emailList
        // };
        // if (payload.email_access_list.length) {
        //     payload.email_access_list = JSON.stringify(payload.email_access_list);
        //     mutate(payload);
        // } else {
        //     payload.email_access_list = '[]';
        //     mutate(payload);
        // }
    };

    const handlePaste = (evt: any) => {
        evt.preventDefault();

        const paste = evt.clipboardData.getData('text');
        const emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

        if (emails) {
            const toBeAdded = emails.filter((email: string) => !isInList(email));
            setEmailList([emailList, ...toBeAdded]);
        }
    };

    const handleChange = (evt: any) => {
        console.log(evt);
        setValue(evt.target.value);
        // setError(null);
    };
    return (
        <>
            <MUITextField
                value={value}
                fullWidth
                label={label}
                ref={ref}
                size={size}
                variant={variant}
                color={color}
                error={error}
                {...rest}
                onKeyDown={(event: any) => keyDown(event)}
                onChange={handleChange}
                onPaste={handlePaste}
            />

            {showChips && (
                <Box display="flex" flexWrap="wrap" marginBottom={5}>
                    {emailList?.map((item: string, index) => (
                        <Box mr={1} mb={1} key={index}>
                            <Chip variant="filled" label={item} onDelete={() => handleDelete(item)}></Chip>
                        </Box>
                    ))}
                </Box>
            )}
        </>
    );
});

TextField.defaultProps = {
    variant: 'outlined',
    color: 'primary',
    error: false,
    size: 'small',
    showChips: false
};
