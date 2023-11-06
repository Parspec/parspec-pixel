import { createContext, forwardRef, useContext, useEffect, useRef } from 'react';
import { ListChildComponentProps, VariableSizeList } from 'react-window';

import { Typography, useMediaQuery, Checkbox } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import { theme } from '../../theme';
import { GroupedOptionType } from './GroupedAutoComplete';
import { GroupType } from './GroupedAutoComplete';
import { Box } from '../Box';
import { BodySmall, BodyXS } from '../Typography';

const LISTBOX_PADDING = 8;

function renderRow(props: ListChildComponentProps) {
    const { data, index, style } = props;
    const currentRowData = data[index];
    const { color, optionlabelkeyname, lastFilterIndex, selectedOptions, selectedGroup, optionsWithType, ...rowProp } = currentRowData[0];
    const option = currentRowData[1];

    const isSelectedOption = (option: GroupedOptionType) => {
        return Boolean(selectedOptions.find((selectedOption: GroupedOptionType) => selectedOption[optionlabelkeyname] === option[optionlabelkeyname]));
    };

    const isSelectedGroup = (group: GroupedOptionType) => {
        return Boolean(selectedGroup.find((selectedGroup: GroupType) => selectedGroup[String(group[optionlabelkeyname])]));
    };

    const getCheckedIcon = (option: GroupedOptionType): React.ReactNode => {
        const actualOptionCount = optionsWithType.filter((optionObj: GroupedOptionType) => Array.isArray(optionObj.group) && optionObj.group.includes(Number(option.value))).length;
        const currentGroup = selectedGroup.filter((group: GroupType) => String(option[optionlabelkeyname]) in group)[0];

        if (!currentGroup) return <CheckBoxOutlineBlankIcon />;

        if (currentGroup[String(option[optionlabelkeyname])] === 0) return <CheckBoxOutlineBlankIcon />;
        else if (currentGroup[String(option[optionlabelkeyname])] < actualOptionCount) return <IndeterminateCheckBoxIcon sx={{ color: '#6467F2 ' }} />;
        return <CheckBoxIcon sx={{ color: '#6467F2 ' }} />;
    };

    const getActualOptionCount = (option: GroupedOptionType) =>
        optionsWithType.filter((optionObj: GroupedOptionType) => Array.isArray(optionObj.group) && optionObj.group.includes(Number(option.value))).length;

    const getGroupOptionLabel = (option: GroupedOptionType): React.ReactNode => {
        return (
            <Box display={'flex'} gap={1} alignItems="center">
                <BodySmall>{String(option[optionlabelkeyname])}</BodySmall>
                <BodyXS color={theme.palette.neutral.dark}>{`(${getActualOptionCount(option)})`}</BodyXS>
            </Box>
        );
    };

    const inlineStyle = {
        ...style,
        top: (style.top as number) + LISTBOX_PADDING,
        borderBottom: option.type !== 'options' && index === lastFilterIndex ? `1px solid ${theme.palette.neutral.main}` : 'none'
    };

    return (
        <Typography
            component="li"
            {...rowProp}
            noWrap
            style={inlineStyle}
            fontSize="14px"
            sx={option.type === 'filters' && getActualOptionCount(option) === 0 && { pointerEvents: 'none', opacity: '0.5' }}
        >
            {option.type === 'options' ? (
                <>
                    <Checkbox size="small" sx={{ marginRight: 2 }} checked={isSelectedOption(option)} color={rowProp.color} icon={<CheckBoxOutlineBlankIcon />} checkedIcon={<CheckBoxIcon />} />
                    {String(option[optionlabelkeyname])}
                </>
            ) : (
                <>
                    <Checkbox
                        size="small"
                        sx={{ marginRight: 2 }}
                        disabled={getActualOptionCount(option) === 0}
                        checked={isSelectedGroup(option)}
                        checkedIcon={getCheckedIcon(option)}
                        color={rowProp.color}
                    />
                    {getGroupOptionLabel(option)}
                </>
            )}
        </Typography>
    );
}

const OuterElementContext = createContext({});

const OuterElementType = forwardRef<HTMLDivElement>((props, ref) => {
    const outerProps = useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: any) {
    const ref = useRef<VariableSizeList>(null);
    useEffect(() => {
        if (ref.current != null) {
            ref.current.resetAfterIndex(0, true);
        }
    }, [data]);
    return ref;
}

// Adapter for react-window
export const ListboxComponent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>(function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData: React.ReactChild[] = [];
    (children as React.ReactChild[]).forEach((item: React.ReactChild & { children?: React.ReactChild[] }) => {
        itemData.push(item);
        itemData.push(...(item.children || []));
    });

    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
        noSsr: true
    });
    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;

    const getChildSize = () => {
        return itemSize;
    };

    const getHeight = () => {
        if (itemCount > 8) {
            return 8 * itemSize;
        }
        return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridRef = useResetCache(itemCount);

    return (
        <div ref={ref}>
            <OuterElementContext.Provider value={other}>
                <VariableSizeList
                    itemData={itemData}
                    height={getHeight() + 2 * LISTBOX_PADDING}
                    width="100%"
                    ref={gridRef}
                    outerElementType={OuterElementType}
                    innerElementType="ul"
                    itemSize={getChildSize}
                    overscanCount={5}
                    itemCount={itemCount}
                >
                    {renderRow}
                </VariableSizeList>
            </OuterElementContext.Provider>
        </div>
    );
});

export function sortOptions<T extends GroupedOptionType, MultiSelectOptionType>(options: readonly T[], optionlabelkeyname: string, values?: T[]) {
    let selected = new Set();
    for (let value of values || []) {
        selected.add(value[optionlabelkeyname]);
    }

    return [...options].sort((option1, option2) => {
        const isOption1Selected = selected.has(option1[optionlabelkeyname]);
        const isOption2Selected = selected.has(option2[optionlabelkeyname]);

        if (isOption1Selected && !isOption2Selected) {
            return -1;
        } else if (!isOption1Selected && isOption2Selected) {
            return 1;
        }

        const option1Label = String(option1[optionlabelkeyname]).toLowerCase();
        const option2Label = String(option2[optionlabelkeyname]).toLowerCase();
        if (option1Label < option2Label) {
            return -1;
        } else if (option1Label > option2Label) {
            return 1;
        }

        return 0;
    });
}
