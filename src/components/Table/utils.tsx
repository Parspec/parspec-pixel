import { useEffect, useRef } from 'react';
import { Checkbox } from '../Checkbox';

export type Person = {
    select: boolean;
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
};

export const defaultData: Person[] = [
    {
        select: false,
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50
    },
    {
        select: false,
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80
    },
    {
        select: false,
        firstName: 'joe2',
        lastName: 'dirte2',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10
    },
    {
        select: false,
        firstName: 'joe3',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10
    },
    {
        select: false,
        firstName: 'joe4',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10
    },
    {
        select: false,
        firstName: 'joe5',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10
    }
];

export function IndeterminateCheckbox({ indeterminate, ...rest }: { indeterminate?: boolean } & React.HTMLProps<HTMLInputElement>) {
    const ref = useRef<HTMLInputElement>(null!);
    useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    }, [ref, indeterminate]);

    return <input type={'checkbox'} ref={ref} {...rest} />;
}
