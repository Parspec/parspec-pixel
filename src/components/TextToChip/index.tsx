// import { useEffect, useState } from 'react';
// import { Box } from '../Box';
// import { Chip } from '../Chip';
// import { TextField } from '../TextField';
// import { BodyXS } from '../Typography';

// export const TextToChip = (props: any) => {
//     const [emailList, setEmailList] = useState(['']);
//     const [value, setValue] = useState('');
//     const [error, setError] = useState<string | null>(null);
//     useEffect(() => {
//         props.onEnter(emailList);
//     }, [emailList]);
//     const keyDown = (evt: any) => {
//         if (['Enter', 'Tab', ','].includes(evt.key)) {
//             evt.preventDefault();

//             let typedValue = value.trim();

//             if (typedValue && isValid(typedValue)) {
//                 setEmailList([...emailList, value]);
//                 setValue('');
//             }
//         }
//     };

//     const isValid = (email: string) => {
//         let error = null;

//         if (isInList(email)) {
//             error = `${email} has already been added.`;
//         }

//         if (!isEmail(email)) {
//             error = `${email} is not a valid email address.`;
//         }

//         if (error) {
//             setError(error);
//             return false;
//         }

//         return true;
//     };

//     const isInList = (email: string) => {
//         return emailList.includes(email);
//     };

//     const isEmail = (email: string) => {
//         return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
//     };

//     const handleDelete = (item: string) => {
//         setEmailList(
//             emailList.filter((i: string) => {
//                 i !== item;
//             })
//         );
//         // const payload = {
//         //     id: getSharedLinkDetailsData.getSharedLinkDetailsData.data.id,
//         //     email_access_list: emailList
//         // };
//         // if (payload.email_access_list.length) {
//         //     payload.email_access_list = JSON.stringify(payload.email_access_list);
//         //     mutate(payload);
//         // } else {
//         //     payload.email_access_list = '[]';
//         //     mutate(payload);
//         // }
//     };

//     const handlePaste = (evt: any) => {
//         evt.preventDefault();

//         const paste = evt.clipboardData.getData('text');
//         const emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

//         if (emails) {
//             const toBeAdded = emails.filter((email: string) => !isInList(email));
//             setEmailList([emailList, ...toBeAdded]);
//         }
//     };

//     const handleChange = (evt: any) => {
//         setValue(evt.target.value);
//         setError(null);
//     };
//     <TextField value={value} label="Enter emails separated by commas" onKeyDown={(event: any) => keyDown(event)} onChange={handleChange} onPaste={handlePaste} error={Boolean(error)} />;
//     {
//         error && <BodyXS margin={0}>{error}</BodyXS>;
//     }

//     <Box display="flex" flexWrap="wrap" marginBottom={5}>
//         {emailList.map((item: string) => (
//             <Box mr={1} mb={1}>
//                 <Chip variant="filled" label={item} onDelete={() => handleDelete(item)}></Chip>
//             </Box>
//         ))}
//     </Box>;
// };
