import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '../Box';
import { BodyXS } from '../Typography';
import { Pagination } from './Pagination';

export default {
    component: Pagination,
    argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof Pagination>;

export const Basic: ComponentStory<typeof Pagination> = (args) => {
    const [page, setPage] = React.useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, pageValue: number) => {
        setPage(pageValue);
        console.log(pageValue);
    };
    return (
        <Box width={500}>
            <BodyXS mb={4}>Page number: {page}</BodyXS>
            <Pagination {...args} onChange={handleChange} page={page} />
        </Box>
    );
};

Basic.args = {
    count: 20,
    size: 'small'
};
