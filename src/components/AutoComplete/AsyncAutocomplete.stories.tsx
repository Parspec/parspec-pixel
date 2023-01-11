import React, { useState, useEffect } from 'react';
import { topFilms } from './topfilm';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AsyncAutocomplete } from './index';

export default {
    title: 'Autocomplete/AsyncAutocomplete',
    component: AsyncAutocomplete,
    argTypes: {
        onChange: { action: 'onChange' },
        onOpen: { action: 'onClose' },
        onClose: { action: 'onHighlightChange' }
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
    const [options, setOptions] = useState<Film[]>([]);
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
            onChange={(event, value) => {
                console.log('This is the value selected', value);
            }}
            options={options}
            loading={loading}
        />
    );
};

export const asyncAutoComplete = Template.bind({});

asyncAutoComplete.args = {
    options: topFilms,
    id: 'asynchronous-demo',
    label: 'Asynchronous',
    color: 'secondary',
    variant: 'outlined',
    loadersize: 20
};
