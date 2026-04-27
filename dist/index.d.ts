import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ReactNode, ComponentPropsWithoutRef, AnchorHTMLAttributes } from 'react';

interface RootProps$i {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    orientation?: 'horizontal' | 'vertical';
    activationMode?: 'automatic' | 'manual';
    children: ReactNode;
    className?: string;
}
declare function Root$i({ defaultValue, value: controlledValue, onValueChange, orientation, activationMode, children, className, }: RootProps$i): react_jsx_runtime.JSX.Element;
interface ListProps$1 extends ComponentPropsWithoutRef<'div'> {
    loop?: boolean;
    children: ReactNode;
}
declare function List$1({ loop, children, className, ...props }: ListProps$1): react_jsx_runtime.JSX.Element;
interface TabProps extends ComponentPropsWithoutRef<'button'> {
    value: string;
    disabled?: boolean;
    children: ReactNode;
}
declare function Tab({ value: tabValue, disabled, children, className, ...props }: TabProps): react_jsx_runtime.JSX.Element;
interface PanelProps extends ComponentPropsWithoutRef<'div'> {
    value: string;
    forceMount?: boolean;
    children: ReactNode;
}
declare function Panel({ value: panelValue, forceMount, children, className, ...props }: PanelProps): react_jsx_runtime.JSX.Element | null;
declare const Tabs: {
    Root: typeof Root$i;
    List: typeof List$1;
    Tab: typeof Tab;
    Panel: typeof Panel;
};

interface RootProps$h {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: ReactNode;
}
declare function Root$h({ defaultOpen, open: controlledOpen, onOpenChange, children }: RootProps$h): react_jsx_runtime.JSX.Element;
interface TriggerProps$6 extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode;
}
declare function Trigger$6({ children, className, ...props }: TriggerProps$6): react_jsx_runtime.JSX.Element;
interface PortalProps$2 {
    children: ReactNode;
    container?: HTMLElement;
}
declare function Portal$2({ children, container }: PortalProps$2): react.ReactPortal | null;
interface OverlayProps$2 extends ComponentPropsWithoutRef<'div'> {
}
declare function Overlay$2({ className, onClick, ...props }: OverlayProps$2): react_jsx_runtime.JSX.Element;
interface ContentProps$6 extends ComponentPropsWithoutRef<'div'> {
    onEscapeKeyDown?: (event: globalThis.KeyboardEvent) => void;
    children: ReactNode;
}
declare function Content$6({ onEscapeKeyDown, children, className, ...props }: ContentProps$6): react_jsx_runtime.JSX.Element | null;
interface TitleProps$3 extends ComponentPropsWithoutRef<'h2'> {
    children: ReactNode;
}
declare function Title$3({ children, className, ...props }: TitleProps$3): react_jsx_runtime.JSX.Element;
interface DescriptionProps$2 extends ComponentPropsWithoutRef<'p'> {
    children: ReactNode;
}
declare function Description$2({ children, className, ...props }: DescriptionProps$2): react_jsx_runtime.JSX.Element;
interface CloseProps$3 extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode;
}
declare function Close$3({ children, className, ...props }: CloseProps$3): react_jsx_runtime.JSX.Element;
declare const Dialog: {
    Root: typeof Root$h;
    Trigger: typeof Trigger$6;
    Portal: typeof Portal$2;
    Overlay: typeof Overlay$2;
    Content: typeof Content$6;
    Title: typeof Title$3;
    Description: typeof Description$2;
    Close: typeof Close$3;
};

interface RootProps$g {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: ReactNode;
}
declare function Root$g({ defaultOpen, open: controlledOpen, onOpenChange, children }: RootProps$g): react_jsx_runtime.JSX.Element;
interface TriggerProps$5 extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode;
}
declare function Trigger$5({ children, className, ...props }: TriggerProps$5): react_jsx_runtime.JSX.Element;
interface PortalProps$1 {
    children: ReactNode;
    container?: HTMLElement;
}
declare function Portal$1({ children, container }: PortalProps$1): react.ReactPortal | null;
interface OverlayProps$1 extends ComponentPropsWithoutRef<'div'> {
}
declare function Overlay$1({ className, ...props }: OverlayProps$1): react_jsx_runtime.JSX.Element;
interface ContentProps$5 extends ComponentPropsWithoutRef<'div'> {
    children: ReactNode;
}
declare function Content$5({ children, className, ...props }: ContentProps$5): react_jsx_runtime.JSX.Element | null;
interface TitleProps$2 extends ComponentPropsWithoutRef<'h2'> {
    children: ReactNode;
}
declare function Title$2({ children, className, ...props }: TitleProps$2): react_jsx_runtime.JSX.Element;
interface DescriptionProps$1 extends ComponentPropsWithoutRef<'p'> {
    children: ReactNode;
}
declare function Description$1({ children, className, ...props }: DescriptionProps$1): react_jsx_runtime.JSX.Element;
interface ActionProps extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode;
}
declare function Action({ children, className, ...props }: ActionProps): react_jsx_runtime.JSX.Element;
interface CancelProps extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode;
}
declare function Cancel({ children, className, ...props }: CancelProps): react_jsx_runtime.JSX.Element;
declare const AlertDialog: {
    Root: typeof Root$g;
    Trigger: typeof Trigger$5;
    Portal: typeof Portal$1;
    Overlay: typeof Overlay$1;
    Content: typeof Content$5;
    Title: typeof Title$2;
    Description: typeof Description$1;
    Action: typeof Action;
    Cancel: typeof Cancel;
};

interface RootProps$f {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    children: ReactNode;
}
declare function Root$f({ defaultValue, value: controlledValue, onValueChange, children }: RootProps$f): react_jsx_runtime.JSX.Element;
interface TriggerProps$4 extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode;
}
declare function Trigger$4({ children, className, ...props }: TriggerProps$4): react_jsx_runtime.JSX.Element;
interface ValueProps {
    placeholder?: string;
    children?: ReactNode;
}
declare function Value({ placeholder, children }: ValueProps): react_jsx_runtime.JSX.Element;
interface ContentProps$4 extends ComponentPropsWithoutRef<'div'> {
    children: ReactNode;
}
declare function Content$4({ children, className, ...props }: ContentProps$4): react.ReactPortal | null;
interface OptionProps$2 extends ComponentPropsWithoutRef<'div'> {
    value: string;
    disabled?: boolean;
    children: ReactNode;
}
declare function Option$2({ value: optionValue, disabled, children, className, ...props }: OptionProps$2): react_jsx_runtime.JSX.Element;
declare const Select: {
    Root: typeof Root$f;
    Trigger: typeof Trigger$4;
    Value: typeof Value;
    Content: typeof Content$4;
    Option: typeof Option$2;
};

interface SingleRootProps {
    type: 'single';
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    collapsible?: boolean;
}
interface MultipleRootProps {
    type: 'multiple';
    defaultValue?: string[];
    value?: string[];
    onValueChange?: (value: string[]) => void;
    collapsible?: never;
}
type RootProps$e = (SingleRootProps | MultipleRootProps) & {
    orientation?: 'horizontal' | 'vertical';
    disabled?: boolean;
    children: ReactNode;
    className?: string;
};
declare function Root$e(props: RootProps$e): react_jsx_runtime.JSX.Element;
interface ItemProps$3 extends ComponentPropsWithoutRef<'div'> {
    value: string;
    disabled?: boolean;
    children: ReactNode;
}
declare function Item$3({ value: itemValue, disabled, children, className, ...itemProps }: ItemProps$3): react_jsx_runtime.JSX.Element;
interface HeaderProps extends ComponentPropsWithoutRef<'h3'> {
    children: ReactNode;
}
declare function Header({ children, className, ...headerProps }: HeaderProps): react_jsx_runtime.JSX.Element;
interface TriggerProps$3 extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode;
}
declare function Trigger$3({ children, className, ...triggerProps }: TriggerProps$3): react_jsx_runtime.JSX.Element;
interface ContentProps$3 extends ComponentPropsWithoutRef<'div'> {
    forceMount?: boolean;
    children: ReactNode;
}
declare function Content$3({ forceMount, children, className, style, ...contentProps }: ContentProps$3): react_jsx_runtime.JSX.Element;
declare const Accordion: {
    Root: typeof Root$e;
    Item: typeof Item$3;
    Header: typeof Header;
    Trigger: typeof Trigger$3;
    Content: typeof Content$3;
};

interface RootProps$d extends ComponentPropsWithoutRef<'button'> {
    defaultPressed?: boolean;
    pressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
    disabled?: boolean;
}
/**
 * Headless Toggle (Switch) component.
 *
 * Uses role="switch" and aria-checked to communicate
 * on/off state to screen readers.
 */
declare function Root$d({ defaultPressed, pressed: controlledPressed, onPressedChange, disabled, children, className, ...props }: RootProps$d): react_jsx_runtime.JSX.Element;
declare const Toggle: {
    Root: typeof Root$d;
};

type ToastVariant = 'success' | 'error' | 'warning' | 'info';
interface ToastItem {
    id: string;
    title?: string;
    description?: string;
    variant?: ToastVariant;
    duration?: number;
}
declare function useToast(): {
    addToast: (toast: Omit<ToastItem, "id">) => string;
    removeToast: (id: string) => void;
    toasts: ToastItem[];
};
interface ProviderProps {
    children: ReactNode;
    /** Maximum number of toasts to display at once */
    maxToasts?: number;
}
declare function Provider({ children, maxToasts }: ProviderProps): react_jsx_runtime.JSX.Element;
interface RootProps$c extends ComponentPropsWithoutRef<'li'> {
    /** Toast id — used to auto-dismiss */
    toastId: string;
    /** Auto-dismiss duration in ms. 0 = no auto-dismiss */
    duration?: number;
    children: ReactNode;
}
declare function Root$c({ toastId, duration, children, className, ...props }: RootProps$c): react_jsx_runtime.JSX.Element;
interface TitleProps$1 extends ComponentPropsWithoutRef<'p'> {
    children: ReactNode;
}
declare function Title$1({ children, className, ...props }: TitleProps$1): react_jsx_runtime.JSX.Element;
interface DescriptionProps extends ComponentPropsWithoutRef<'p'> {
    children: ReactNode;
}
declare function Description({ children, className, ...props }: DescriptionProps): react_jsx_runtime.JSX.Element;
interface CloseProps$2 extends ComponentPropsWithoutRef<'button'> {
    toastId: string;
    children?: ReactNode;
}
declare function Close$2({ toastId, children, className, ...props }: CloseProps$2): react_jsx_runtime.JSX.Element;
interface ViewportProps extends ComponentPropsWithoutRef<'ol'> {
    /** Where to portal. Defaults to document.body */
    container?: HTMLElement;
}
declare function Viewport({ container, className, ...props }: ViewportProps): react.ReactPortal;
declare const Toast: {
    Provider: typeof Provider;
    Viewport: typeof Viewport;
    Root: typeof Root$c;
    Title: typeof Title$1;
    Description: typeof Description;
    Close: typeof Close$2;
};

interface RootProps$b {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: ReactNode;
}
declare function Root$b({ defaultOpen, open: controlledOpen, onOpenChange, children }: RootProps$b): react_jsx_runtime.JSX.Element;
interface TriggerProps$2 extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode;
}
declare function Trigger$2({ children, className, ...props }: TriggerProps$2): react_jsx_runtime.JSX.Element;
interface OverlayProps extends ComponentPropsWithoutRef<'div'> {
}
declare function Overlay({ className, onClick, ...props }: OverlayProps): react_jsx_runtime.JSX.Element | null;
type DrawerSide = 'left' | 'right' | 'top' | 'bottom';
interface ContentProps$2 extends ComponentPropsWithoutRef<'div'> {
    side?: DrawerSide;
    onEscapeKeyDown?: (event: globalThis.KeyboardEvent) => void;
    children: ReactNode;
}
declare function Content$2({ side, onEscapeKeyDown, children, className, ...props }: ContentProps$2): react_jsx_runtime.JSX.Element | null;
interface TitleProps extends ComponentPropsWithoutRef<'h2'> {
    children: ReactNode;
}
declare function Title({ children, className, ...props }: TitleProps): react_jsx_runtime.JSX.Element;
interface CloseProps$1 extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode;
}
declare function Close$1({ children, className, ...props }: CloseProps$1): react_jsx_runtime.JSX.Element;
interface PortalProps {
    children: ReactNode;
    container?: HTMLElement;
}
declare function Portal({ children, container }: PortalProps): react.ReactPortal;
declare const Drawer: {
    Root: typeof Root$b;
    Trigger: typeof Trigger$2;
    Portal: typeof Portal;
    Overlay: typeof Overlay;
    Content: typeof Content$2;
    Title: typeof Title;
    Close: typeof Close$1;
};

interface RootProps$a {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: ReactNode;
}
declare function Root$a({ defaultOpen, open: controlledOpen, onOpenChange, children }: RootProps$a): react_jsx_runtime.JSX.Element;
interface TriggerProps$1 extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode;
}
declare function Trigger$1({ children, className, ...props }: TriggerProps$1): react_jsx_runtime.JSX.Element;
interface ContentProps$1 extends ComponentPropsWithoutRef<'div'> {
    onEscapeKeyDown?: (event: globalThis.KeyboardEvent) => void;
    children: ReactNode;
}
declare function Content$1({ onEscapeKeyDown, children, className, ...props }: ContentProps$1): react.ReactPortal | null;
interface CloseProps extends ComponentPropsWithoutRef<'button'> {
    children?: ReactNode;
}
declare function Close({ children, className, ...props }: CloseProps): react_jsx_runtime.JSX.Element;
declare const Popover: {
    Root: typeof Root$a;
    Trigger: typeof Trigger$1;
    Content: typeof Content$1;
    Close: typeof Close;
};

interface RootProps$9 extends ComponentPropsWithoutRef<'div'> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    name?: string;
    disabled?: boolean;
    orientation?: 'horizontal' | 'vertical';
    children: ReactNode;
}
declare function Root$9({ defaultValue, value: controlledValue, onValueChange, name, disabled, orientation, children, className, ...props }: RootProps$9): react_jsx_runtime.JSX.Element;
interface OptionProps$1 extends ComponentPropsWithoutRef<'button'> {
    value: string;
    disabled?: boolean;
    children: ReactNode;
}
declare function Option$1({ value: optionValue, disabled: optionDisabled, children, className, ...props }: OptionProps$1): react_jsx_runtime.JSX.Element;
interface IndicatorProps$2 extends ComponentPropsWithoutRef<'span'> {
    children?: ReactNode;
}
declare function Indicator$2({ children, className, ...props }: IndicatorProps$2): react_jsx_runtime.JSX.Element;
declare const RadioGroup: {
    Root: typeof Root$9;
    Option: typeof Option$1;
    Indicator: typeof Indicator$2;
};

interface RootProps$8 {
    defaultValue?: string[];
    value?: string[];
    onValueChange?: (value: string[]) => void;
    maxTags?: number;
    disabled?: boolean;
    children: ReactNode;
    className?: string;
}
declare function Root$8({ defaultValue, value: controlledValue, onValueChange, maxTags, disabled, children, className, }: RootProps$8): react_jsx_runtime.JSX.Element;
interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'value' | 'defaultValue'> {
    placeholder?: string;
}
declare function Input({ placeholder, className, ...props }: InputProps): react_jsx_runtime.JSX.Element;
interface TagProps extends ComponentPropsWithoutRef<'span'> {
    value: string;
    index: number;
    children: ReactNode;
}
declare function Tag({ value, index, children, className, ...props }: TagProps): react_jsx_runtime.JSX.Element;
interface RemoveProps extends ComponentPropsWithoutRef<'button'> {
    index: number;
    children?: ReactNode;
}
declare function Remove({ index, children, className, ...props }: RemoveProps): react_jsx_runtime.JSX.Element;
declare const TagInput: {
    Root: typeof Root$8;
    Input: typeof Input;
    Tag: typeof Tag;
    Remove: typeof Remove;
};

interface RootProps$7 extends ComponentPropsWithoutRef<'div'> {
    defaultValue?: string[];
    value?: string[];
    onValueChange?: (value: string[]) => void;
    disabled?: boolean;
    children: ReactNode;
}
declare function Root$7({ defaultValue, value: controlledValue, onValueChange, disabled, children, className, ...props }: RootProps$7): react_jsx_runtime.JSX.Element;
interface OptionProps extends ComponentPropsWithoutRef<'button'> {
    value: string;
    disabled?: boolean;
    children: ReactNode;
}
declare function Option({ value: optionValue, disabled: optionDisabled, children, className, ...props }: OptionProps): react_jsx_runtime.JSX.Element;
interface IndicatorProps$1 extends ComponentPropsWithoutRef<'span'> {
    children?: ReactNode;
}
declare function Indicator$1({ children, className, ...props }: IndicatorProps$1): react_jsx_runtime.JSX.Element;
declare const CheckboxGroup: {
    Root: typeof Root$7;
    Option: typeof Option;
    Indicator: typeof Indicator$1;
};

interface RootProps$6 extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
    /** Current progress value. Pass null for indeterminate state. */
    value?: number | null;
    /** Maximum value (default: 100). */
    max?: number;
    children: ReactNode;
}
declare function Root$6({ value, max, children, className, ...props }: RootProps$6): react_jsx_runtime.JSX.Element;
interface IndicatorProps extends ComponentPropsWithoutRef<'div'> {
    children?: ReactNode;
}
declare function Indicator({ children, className, style, ...props }: IndicatorProps): react_jsx_runtime.JSX.Element;
declare const Progress: {
    Root: typeof Root$6;
    Indicator: typeof Indicator;
};

interface RootProps$5 {
    children: ReactNode;
}
declare function Root$5({ children }: RootProps$5): react_jsx_runtime.JSX.Element;
interface TriggerProps extends ComponentPropsWithoutRef<'button'> {
    children: ReactNode;
}
declare function Trigger({ children, className, ...props }: TriggerProps): react_jsx_runtime.JSX.Element;
interface ContentProps extends ComponentPropsWithoutRef<'div'> {
    children: ReactNode;
}
declare function Content({ children, className, ...props }: ContentProps): react.ReactPortal | null;
interface ItemProps$2 extends ComponentPropsWithoutRef<'div'> {
    disabled?: boolean;
    onSelect?: () => void;
    children: ReactNode;
}
declare function Item$2({ disabled, onSelect, children, className, onClick, ...props }: ItemProps$2): react_jsx_runtime.JSX.Element;
interface SeparatorProps$1 extends ComponentPropsWithoutRef<'div'> {
}
declare function Separator$1({ className, ...props }: SeparatorProps$1): react_jsx_runtime.JSX.Element;
declare const Menu: {
    Root: typeof Root$5;
    Trigger: typeof Trigger;
    Content: typeof Content;
    Item: typeof Item$2;
    Separator: typeof Separator$1;
};

interface UploadedFile {
    file: File;
    previewUrl: string | null;
    id: string;
}
interface UseFileUploadOptions {
    multiple?: boolean;
    accept?: string[];
    maxSize?: number;
    maxFiles?: number;
}
declare function useFileUpload(options?: UseFileUploadOptions): {
    files: UploadedFile[];
    errors: string[];
    addFiles: (incoming: File[]) => void;
    removeFile: (id: string) => void;
    clearFiles: () => void;
};
interface RootProps$4 {
    files: UploadedFile[];
    addFiles: (files: File[]) => void;
    removeFile: (id: string) => void;
    multiple?: boolean;
    accept?: string;
    disabled?: boolean;
    children: ReactNode;
    className?: string;
}
declare function Root$4({ files, addFiles, removeFile, multiple, accept, disabled, children, className, }: RootProps$4): react_jsx_runtime.JSX.Element;
interface DropzoneProps extends ComponentPropsWithoutRef<'div'> {
    children: ReactNode;
}
declare function Dropzone({ children, className, ...props }: DropzoneProps): react_jsx_runtime.JSX.Element;
interface FileInputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'onChange' | 'multiple' | 'accept' | 'id'> {
}
declare function FileUploadInput({ className, ...props }: FileInputProps): react_jsx_runtime.JSX.Element;
interface PreviewProps extends ComponentPropsWithoutRef<'ul'> {
    children: ReactNode;
}
declare function Preview({ children, className, ...props }: PreviewProps): react_jsx_runtime.JSX.Element;
interface ItemProps$1 extends ComponentPropsWithoutRef<'li'> {
    file: UploadedFile;
    children: ReactNode;
}
declare function Item$1({ file, children, className, ...props }: ItemProps$1): react_jsx_runtime.JSX.Element;
declare const FileUpload: {
    Root: typeof Root$4;
    Dropzone: typeof Dropzone;
    Input: typeof FileUploadInput;
    Preview: typeof Preview;
    Item: typeof Item$1;
};

interface RootProps$3 extends ComponentPropsWithoutRef<'span'> {
    children: ReactNode;
}
declare function Root$3({ children, className, ...props }: RootProps$3): react_jsx_runtime.JSX.Element;
interface ImageProps extends Omit<ComponentPropsWithoutRef<'img'>, 'onLoad' | 'onError'> {
    alt: string;
}
declare function Image({ alt, src, className, ...props }: ImageProps): react_jsx_runtime.JSX.Element;
interface FallbackProps extends ComponentPropsWithoutRef<'span'> {
    /** Delay in ms before showing fallback to avoid flash on fast loads (default: 0) */
    delayMs?: number;
    children: ReactNode;
}
declare function Fallback({ children, className, delayMs: _delayMs, ...props }: FallbackProps): react_jsx_runtime.JSX.Element | null;
declare const Avatar: {
    Root: typeof Root$3;
    Image: typeof Image;
    Fallback: typeof Fallback;
};

interface RootProps$2 extends ComponentPropsWithoutRef<'label'> {
    /** The id of the form element this label is associated with. */
    htmlFor: string;
    children: ReactNode;
}
declare function Root$2({ htmlFor, children, className, ...props }: RootProps$2): react_jsx_runtime.JSX.Element;
declare const Label: {
    Root: typeof Root$2;
};

interface RootProps$1 extends ComponentPropsWithoutRef<'div'> {
    orientation?: 'horizontal' | 'vertical';
    'aria-label'?: string;
    children: ReactNode;
}
declare function Root$1({ orientation, 'aria-label': ariaLabel, children, className, ...props }: RootProps$1): react_jsx_runtime.JSX.Element;
interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    disabled?: boolean;
    children: ReactNode;
}
declare function Button({ disabled, children, className, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;
interface SeparatorProps extends ComponentPropsWithoutRef<'div'> {
    orientation?: 'horizontal' | 'vertical';
}
declare function Separator({ orientation, className, ...props }: SeparatorProps): react_jsx_runtime.JSX.Element;
interface ToggleGroupProps extends ComponentPropsWithoutRef<'div'> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    'aria-label'?: string;
    children: ReactNode;
}
declare function ToggleGroup({ value: controlledValue, defaultValue, onValueChange, 'aria-label': ariaLabel, children, className, ...props }: ToggleGroupProps): react_jsx_runtime.JSX.Element;
interface ToggleItemProps extends ComponentPropsWithoutRef<'button'> {
    value: string;
    disabled?: boolean;
    children: ReactNode;
}
declare function ToggleItem({ value: itemValue, disabled, children, className, ...props }: ToggleItemProps): react_jsx_runtime.JSX.Element;
declare const Toolbar: {
    Root: typeof Root$1;
    Button: typeof Button;
    Separator: typeof Separator;
    ToggleGroup: typeof ToggleGroup;
    ToggleItem: typeof ToggleItem;
};

interface RootProps extends ComponentPropsWithoutRef<'nav'> {
    orientation?: 'horizontal' | 'vertical';
    'aria-label'?: string;
    children: ReactNode;
}
declare function Root({ orientation, 'aria-label': ariaLabel, children, className, ...props }: RootProps): react_jsx_runtime.JSX.Element;
interface ListProps extends ComponentPropsWithoutRef<'ul'> {
    children: ReactNode;
}
declare function List({ children, className, ...props }: ListProps): react_jsx_runtime.JSX.Element;
interface ItemProps extends ComponentPropsWithoutRef<'li'> {
    children: ReactNode;
}
declare function Item({ children, className, ...props }: ItemProps): react_jsx_runtime.JSX.Element;
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    active?: boolean;
    children: ReactNode;
}
declare function Link({ active, children, className, href, ...props }: LinkProps): react_jsx_runtime.JSX.Element;
declare const NavigationMenu: {
    Root: typeof Root;
    List: typeof List;
    Item: typeof Item;
    Link: typeof Link;
};

export { Accordion, AlertDialog, Avatar, CheckboxGroup, Dialog, Drawer, FileUpload, Label, Menu, NavigationMenu, Popover, Progress, RadioGroup, Select, Tabs, TagInput, Toast, Toggle, Toolbar, useFileUpload, useToast };
