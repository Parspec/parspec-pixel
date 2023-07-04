/// <reference types="react" />
import { GroupedOptionType } from './GroupedAutoComplete';
export declare const ListboxComponent: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLElement> & import("react").RefAttributes<HTMLDivElement>>;
export declare function sortOptions<T extends GroupedOptionType, MultiSelectOptionType>(options: readonly T[], optionlabelkeyname: string, values?: T[]): T[];
