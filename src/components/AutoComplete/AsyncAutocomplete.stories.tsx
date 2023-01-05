import React, { useState, useEffect } from 'react';
import { topFilms } from './topfilm';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AsyncAutocomplete } from './index';

export default {
    title: 'Autocomplete/AsyncAutocomplete',
    component: AsyncAutocomplete,
    argTypes: {
        onChange: { action: 'onChange' },
        onClose: { action: 'onClose' },
        onHighlightChange: { action: 'onHighlightChange' },
        onInputChange: { action: 'onInputChange' }
    }
} as ComponentMeta<typeof AsyncAutocomplete>;

interface Film {
    title: string;
    year: number;
}

const sleep = (delay = 0) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
};

const Template: ComponentStory<typeof AsyncAutocomplete> = (args) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<readonly Film[]>([]);
    const loading = open && options.length === 0;

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            await sleep(1e3);

            if (active) {
                setOptions([...topFilms]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <AsyncAutocomplete
            {...args}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            options={options}
            loading={loading}
        />
    );
};

export const asyncAutoComplete = Template.bind({});

asyncAutoComplete.args = {
    options: topFilms.map((item) => item.title),
    id: 'asynchronous-demo',

    label: 'Asynchronous',
    color: 'secondary',
    variant: 'outlined',
    isOptionEqualToValue: (option: { title: string }, value: { title: string }) => option.title === value.title,

    getOptionLabel: (option: { title: string }) => option.title
};
