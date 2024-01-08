import React, { useRef, useState, useCallback } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button';
import { TableHeaderMenuIcon } from '../Icons';
import { Box } from '../Box';
import { BodyXS, BodySmall } from '../Typography';
import { Tooltip } from '../Tooltip';
import { Menu } from '../Menu';
import { Switch } from '../Switch';

import { AgGridTable } from './Table';
import { data } from './data';
import { ToolBarT } from './CustomToolbarPanel';

export default {
    title: 'AgGridTable',
    component: AgGridTable
} as ComponentMeta<typeof AgGridTable>;

export const Basic: ComponentStory<typeof AgGridTable> = (props) => {
    const [searchText, setSearchText] = useState('');

    const getRowId = (params: any) => {
        return params?.data?.user_details.id;
    };

    const emailTemplate = useCallback((props: any) => {
        const { data } = props;
        return (
            <BodySmall
                color={'primary.main'}
                sx={{ cursor: 'pointer' }}
                onClick={(event) => {
                    event.preventDefault();
                    alert('clicked');
                }}
            >
                {data.user_details.email}
            </BodySmall>
        );
    }, []);

    const lastActiveTemplate = useCallback((props: any) => {
        const { data } = props;
        const newDateFormat = data.user_details?.last_activity?.split('T')[0];
        return (
            <Box>
                <BodySmall>{newDateFormat ? newDateFormat : ''}</BodySmall>
            </Box>
        );
    }, []);

    const permissionTemplate = useCallback((props: any) => {
        const { data } = props;
        let rawRole = data.roles[0]?.role;
        let role;
        if (rawRole === 'admin') {
            role = 'Admin';
        } else if (rawRole === 'user') {
            role = 'User';
        }
        return (
            <Box>
                <BodySmall>{role}</BodySmall>
            </Box>
        );
    }, []);

    const locationTemplate = useCallback((props: any) => {
        const { data } = props;
        const all_company_details = data.company_details;
        const totalLocationCount = all_company_details.reduce((acc: number, curr: any) => {
            return curr.company_name ? acc + 1 : acc;
        }, 0);
        let minLength;
        if (totalLocationCount === 1) {
            minLength = 12;
        } else {
            minLength = 7;
        }
        // To add space after each location ---> "abc, def" and not "abc,def"
        const commaSpacedLocations = data?.company_locations_str.replace(/,/g, ', ');
        return (
            <Box display="flex" justifyContent="flex-start">
                <Tooltip placement="right" title={commaSpacedLocations}>
                    <Box>
                        <BodyXS py={0.5} px={1.5} mx={0.5} borderRadius={0.5} bgcolor={'neutral.main'}>
                            {all_company_details[0].company_name.length > minLength ? all_company_details[0].company_name.slice(0, minLength) + '...' : all_company_details[0].company_name}
                        </BodyXS>
                    </Box>
                </Tooltip>

                {totalLocationCount > 1 && (
                    <Tooltip placement="right" title="This user is part of multiple locations. Edit Details to view and edit the locations this user is assigned to.">
                        <Box>
                            <BodyXS py={0.5} px={1.5} mx={0.5} borderRadius={0.5} bgcolor={'secondary.dark'} color={'neutral.light'} maxWidth={'max-content'}>
                                +{totalLocationCount - 1}
                            </BodyXS>
                        </Box>
                    </Tooltip>
                )}
            </Box>
        );
    }, []);

    const quotingAccessTemplate = useCallback((props: any) => {
        const { data } = props;
        return (
            <Box display="flex">
                <Box margin="auto">
                    <Switch color="primary" onChange={(e: React.ChangeEvent<HTMLInputElement>) => alert('Toggled')} checked={data.user_details.quoting_enabled} />
                </Box>
            </Box>
        );
    }, []);

    function menuTemplate(props: any) {
        const { data } = props;

        const options = [
            {
                label: 'Edit Details',
                onClick: () => {
                    alert(`Edit details clicked for user: ${data.user_details.id}`);
                }
            },
            {
                label: 'Remove User',
                onClick: () => {
                    alert(`Removed user: ${data.user_details.id} `);
                }
            }
        ];
        return (
            <Box display="flex" justifyContent="center">
                <Menu options={options} />
            </Box>
        );
    }

    const toolbarRightSection = (
        <>
            <Box width={'100px'} marginLeft={'auto'} my={4}>
                <Button
                    onClick={() => {
                        alert('Clicked right section button');
                    }}
                >
                    Invite Users
                </Button>
            </Box>
        </>
    );

    const columnDefs = [
        {
            field: 'user_details.id',
            hide: true
        },

        {
            field: 'user_details.name',
            headerName: 'Name',
            editable: false,
            minWidth: 80,
            width: 150
        },
        {
            field: 'user_details.email',
            headerName: 'Email',
            editable: false,
            minWidth: 80,
            width: 150,
            cellRenderer: emailTemplate
        },
        {
            field: 'user_details.last_activity',
            headerName: 'Last Active',
            editable: false,
            minWidth: 80,
            width: 150,

            cellRenderer: lastActiveTemplate
        },
        {
            field: 'roles.0.role',
            headerName: 'Permission',
            editable: false,
            minWidth: 80,
            width: 150,
            cellRenderer: permissionTemplate
        },
        {
            field: 'user_details.quoting_enabled',
            headerName: 'Quoting Access',
            editable: false,
            minWidth: 80,
            width: 160,
            cellRenderer: quotingAccessTemplate
        },
        {
            field: 'company_locations_str',
            headerName: 'Branch Location',
            editable: false,
            minWidth: 80,
            width: 150,
            cellRenderer: locationTemplate
        },
        {
            headerComponent: () => (
                <Box mt={1}>
                    <TableHeaderMenuIcon color="secondary" fontSize="medium" />
                </Box>
            ),
            cellRenderer: menuTemplate,
            pinned: 'right' as 'right',
            minWidth: 50,
            maxWidth: 50,
            resizable: false,
            cellStyle: { backgroundColor: 'unset' }
        }
    ];
    const gridRef = useRef<any>(null);

    const toolbarOptions = ['search'];

    return (
        <Box width={'100%'} height={'500px'} my={4}>
            <AgGridTable
                ref={gridRef}
                tableData={data || []}
                getRowId={getRowId}
                rowHeight={40}
                columnDefs={columnDefs}
                quickFilterText={searchText}
                isTableLoading={false}
                tableHeight={'300px'}
                showToolbarPanel={true}
                toolBarPanelOptions={toolbarOptions as ToolBarT[]}
                selectedRowCount={0}
                disabledToolBarButton={true}
                onTextSearch={(value) => setSearchText(value)}
                toolbarRightSection={toolbarRightSection}
            />
        </Box>
    );
};
