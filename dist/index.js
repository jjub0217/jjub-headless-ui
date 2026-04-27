'use strict';

var react = require('react');
var jsxRuntime = require('react/jsx-runtime');
var reactDom = require('react-dom');

// src/tabs/index.tsx
var TabsContext = react.createContext(null);
function useTabsContext() {
  const context = react.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within Tabs.Root.");
  }
  return context;
}
function Root({
  defaultValue,
  value: controlledValue,
  onValueChange,
  orientation = "horizontal",
  activationMode = "automatic",
  children,
  className
}) {
  const [uncontrolledValue, setUncontrolledValue] = react.useState(defaultValue ?? "");
  const baseId = react.useId();
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : uncontrolledValue;
  const handleValueChange = react.useCallback(
    (newValue) => {
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [isControlled, onValueChange]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(TabsContext.Provider, { value: { value, onValueChange: handleValueChange, orientation, activationMode, baseId }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className, "data-orientation": orientation, children }) });
}
function List({ loop = true, children, className, ...props }) {
  const { orientation } = useTabsContext();
  const listRef = react.useRef(null);
  const handleKeyDown = (e) => {
    const tabs = listRef.current?.querySelectorAll('[role="tab"]:not([disabled])');
    if (!tabs || tabs.length === 0) return;
    const currentIndex = Array.from(tabs).findIndex((tab) => tab === document.activeElement);
    if (currentIndex === -1) return;
    const isHorizontal = orientation === "horizontal";
    const prevKey = isHorizontal ? "ArrowLeft" : "ArrowUp";
    const nextKey = isHorizontal ? "ArrowRight" : "ArrowDown";
    let nextIndex = null;
    switch (e.key) {
      case nextKey:
        nextIndex = loop ? (currentIndex + 1) % tabs.length : Math.min(currentIndex + 1, tabs.length - 1);
        break;
      case prevKey:
        nextIndex = loop ? (currentIndex - 1 + tabs.length) % tabs.length : Math.max(currentIndex - 1, 0);
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    tabs[nextIndex].focus();
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref: listRef,
      role: "tablist",
      "aria-orientation": orientation,
      onKeyDown: handleKeyDown,
      className,
      ...props,
      children
    }
  );
}
function Tab({ value: tabValue, disabled = false, children, className, ...props }) {
  const { value, onValueChange, activationMode, baseId } = useTabsContext();
  const isSelected = value === tabValue;
  const handleClick = () => {
    if (!disabled) {
      onValueChange(tabValue);
    }
  };
  const handleKeyDown = (e) => {
    if (activationMode === "manual" && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onValueChange(tabValue);
    }
  };
  const handleFocus = () => {
    if (activationMode === "automatic" && !disabled) {
      onValueChange(tabValue);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      role: "tab",
      type: "button",
      id: `${baseId}-tab-${tabValue}`,
      "aria-selected": isSelected,
      "aria-controls": `${baseId}-panel-${tabValue}`,
      tabIndex: isSelected ? 0 : -1,
      disabled,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      onFocus: handleFocus,
      className,
      "data-state": isSelected ? "active" : "inactive",
      "data-disabled": disabled ? "" : void 0,
      ...props,
      children
    }
  );
}
function Panel({ value: panelValue, forceMount = false, children, className, ...props }) {
  const { value, baseId } = useTabsContext();
  const isSelected = value === panelValue;
  if (!isSelected && !forceMount) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "tabpanel",
      id: `${baseId}-panel-${panelValue}`,
      "aria-labelledby": `${baseId}-tab-${panelValue}`,
      tabIndex: 0,
      hidden: !isSelected,
      className,
      "data-state": isSelected ? "active" : "inactive",
      ...props,
      children
    }
  );
}
var Tabs = {
  Root,
  List,
  Tab,
  Panel
};
function useFocusTrap(containerRef, active) {
  react.useEffect(() => {
    if (!active || !containerRef.current) return;
    const container = containerRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const firstFocusable = container.querySelector(focusableSelector);
    firstFocusable?.focus();
    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;
      const focusableElements = container.querySelectorAll(focusableSelector);
      if (focusableElements.length === 0) return;
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active, containerRef]);
}
function useBodyScrollLock(active) {
  react.useEffect(() => {
    if (!active) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [active]);
}
var DialogContext = react.createContext(null);
function useDialogContext() {
  const context = react.useContext(DialogContext);
  if (!context) {
    throw new Error("Dialog components must be used within Dialog.Root.");
  }
  return context;
}
function Root2({ defaultOpen = false, open: controlledOpen, onOpenChange, children }) {
  const [uncontrolledOpen, setUncontrolledOpen] = react.useState(defaultOpen);
  const baseId = react.useId();
  const triggerRef = react.useRef(null);
  const isControlled = controlledOpen !== void 0;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const handleOpenChange = react.useCallback(
    (newOpen) => {
      if (!isControlled) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogContext.Provider,
    {
      value: {
        open,
        onOpenChange: handleOpenChange,
        titleId: `${baseId}-dialog-title`,
        descriptionId: `${baseId}-dialog-description`,
        triggerRef
      },
      children
    }
  );
}
function Trigger({ children, className, ...props }) {
  const { open, onOpenChange, triggerRef } = useDialogContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      ref: triggerRef,
      type: "button",
      onClick: () => onOpenChange(true),
      "data-state": open ? "open" : "closed",
      className,
      ...props,
      children
    }
  );
}
function Portal({ children, container }) {
  const { open } = useDialogContext();
  if (!open) return null;
  return reactDom.createPortal(children, container ?? document.body);
}
function Overlay({ className, onClick, ...props }) {
  const { open, onOpenChange } = useDialogContext();
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onOpenChange(false);
    }
    onClick?.(e);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      onClick: handleClick,
      "data-state": open ? "open" : "closed",
      className,
      ...props
    }
  );
}
function Content({ onEscapeKeyDown, children, className, ...props }) {
  const { open, onOpenChange, titleId, descriptionId, triggerRef } = useDialogContext();
  const contentRef = react.useRef(null);
  useFocusTrap(contentRef, open);
  useBodyScrollLock(open);
  react.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onEscapeKeyDown?.(e);
        if (!e.defaultPrevented) {
          onOpenChange(false);
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange, onEscapeKeyDown]);
  const prevOpen = react.useRef(open);
  react.useEffect(() => {
    if (prevOpen.current && !open) {
      triggerRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open, triggerRef]);
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref: contentRef,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": titleId,
      "aria-describedby": descriptionId,
      "data-state": open ? "open" : "closed",
      className,
      ...props,
      children
    }
  );
}
function Title({ children, className, ...props }) {
  const { titleId } = useDialogContext();
  return /* @__PURE__ */ jsxRuntime.jsx("h2", { id: titleId, className, ...props, children });
}
function Description({ children, className, ...props }) {
  const { descriptionId } = useDialogContext();
  return /* @__PURE__ */ jsxRuntime.jsx("p", { id: descriptionId, className, ...props, children });
}
function Close({ children, className, ...props }) {
  const { onOpenChange } = useDialogContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      onClick: () => onOpenChange(false),
      className,
      ...props,
      children
    }
  );
}
var Dialog = {
  Root: Root2,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close
};
var AlertDialogContext = react.createContext(null);
function useAlertDialogContext() {
  const context = react.useContext(AlertDialogContext);
  if (!context) {
    throw new Error("AlertDialog components must be used within AlertDialog.Root.");
  }
  return context;
}
function Root3({ defaultOpen = false, open: controlledOpen, onOpenChange, children }) {
  const [uncontrolledOpen, setUncontrolledOpen] = react.useState(defaultOpen);
  const baseId = react.useId();
  const triggerRef = react.useRef(null);
  const isControlled = controlledOpen !== void 0;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const handleOpenChange = react.useCallback(
    (newOpen) => {
      if (!isControlled) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    AlertDialogContext.Provider,
    {
      value: {
        open,
        onOpenChange: handleOpenChange,
        titleId: `${baseId}-alert-dialog-title`,
        descriptionId: `${baseId}-alert-dialog-description`,
        triggerRef
      },
      children
    }
  );
}
function Trigger2({ children, className, ...props }) {
  const { open, onOpenChange, triggerRef } = useAlertDialogContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      ref: triggerRef,
      type: "button",
      onClick: () => onOpenChange(true),
      "data-state": open ? "open" : "closed",
      className,
      ...props,
      children
    }
  );
}
function Portal2({ children, container }) {
  const { open } = useAlertDialogContext();
  if (!open) return null;
  return reactDom.createPortal(children, container ?? document.body);
}
function Overlay2({ className, ...props }) {
  const { open } = useAlertDialogContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-state": open ? "open" : "closed",
      className,
      ...props
    }
  );
}
function Content2({ children, className, ...props }) {
  const { open, titleId, descriptionId, triggerRef } = useAlertDialogContext();
  const contentRef = react.useRef(null);
  useFocusTrap(contentRef, open);
  useBodyScrollLock(open);
  const prevOpen = react.useRef(open);
  react.useEffect(() => {
    if (prevOpen.current && !open) {
      triggerRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open, triggerRef]);
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref: contentRef,
      role: "alertdialog",
      "aria-modal": "true",
      "aria-labelledby": titleId,
      "aria-describedby": descriptionId,
      "data-state": open ? "open" : "closed",
      className,
      ...props,
      children
    }
  );
}
function Title2({ children, className, ...props }) {
  const { titleId } = useAlertDialogContext();
  return /* @__PURE__ */ jsxRuntime.jsx("h2", { id: titleId, className, ...props, children });
}
function Description2({ children, className, ...props }) {
  const { descriptionId } = useAlertDialogContext();
  return /* @__PURE__ */ jsxRuntime.jsx("p", { id: descriptionId, className, ...props, children });
}
function Action({ children, className, ...props }) {
  const { onOpenChange } = useAlertDialogContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      onClick: () => onOpenChange(false),
      className,
      ...props,
      children
    }
  );
}
function Cancel({ children, className, ...props }) {
  const { onOpenChange } = useAlertDialogContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      onClick: () => onOpenChange(false),
      className,
      ...props,
      children
    }
  );
}
var AlertDialog = {
  Root: Root3,
  Trigger: Trigger2,
  Portal: Portal2,
  Overlay: Overlay2,
  Content: Content2,
  Title: Title2,
  Description: Description2,
  Action,
  Cancel
};
var SelectContext = react.createContext(null);
function useSelectContext() {
  const context = react.useContext(SelectContext);
  if (!context) {
    throw new Error("Select components must be used within Select.Root.");
  }
  return context;
}
function Root4({ defaultValue = "", value: controlledValue, onValueChange, children }) {
  const [uncontrolledValue, setUncontrolledValue] = react.useState(defaultValue);
  const [open, setOpen] = react.useState(false);
  const [activeIndex, setActiveIndex] = react.useState(-1);
  const triggerRef = react.useRef(null);
  const baseId = react.useId();
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : uncontrolledValue;
  const handleValueChange = react.useCallback(
    (newValue) => {
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onValueChange?.(newValue);
      setOpen(false);
    },
    [isControlled, onValueChange]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectContext.Provider,
    {
      value: {
        open,
        onOpenChange: setOpen,
        value,
        onValueChange: handleValueChange,
        activeIndex,
        setActiveIndex,
        triggerRef,
        baseId
      },
      children
    }
  );
}
function Trigger3({ children, className, ...props }) {
  const { open, onOpenChange, triggerRef, baseId } = useSelectContext();
  const handleKeyDown = (e) => {
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
      e.preventDefault();
      onOpenChange(true);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      ref: triggerRef,
      type: "button",
      role: "combobox",
      "aria-expanded": open,
      "aria-haspopup": "listbox",
      "aria-controls": `${baseId}-listbox`,
      onClick: () => onOpenChange(!open),
      onKeyDown: handleKeyDown,
      "data-state": open ? "open" : "closed",
      className,
      ...props,
      children
    }
  );
}
function Value({ placeholder, children }) {
  const { value } = useSelectContext();
  if (!value && placeholder) {
    return /* @__PURE__ */ jsxRuntime.jsx("span", { "data-placeholder": "", children: placeholder });
  }
  return /* @__PURE__ */ jsxRuntime.jsx("span", { children: children ?? value });
}
function Content3({ children, className, ...props }) {
  const { open, onOpenChange, triggerRef, baseId, activeIndex, setActiveIndex } = useSelectContext();
  const contentRef = react.useRef(null);
  react.useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      const target = e.target;
      if (contentRef.current && !contentRef.current.contains(target) && triggerRef.current && !triggerRef.current.contains(target)) {
        onOpenChange(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onOpenChange(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onOpenChange, triggerRef]);
  const handleKeyDown = (e) => {
    const options2 = contentRef.current?.querySelectorAll('[role="option"]:not([aria-disabled="true"])');
    if (!options2 || options2.length === 0) return;
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        const next = activeIndex < options2.length - 1 ? activeIndex + 1 : 0;
        setActiveIndex(next);
        options2[next]?.scrollIntoView({ block: "nearest" });
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const prev = activeIndex > 0 ? activeIndex - 1 : options2.length - 1;
        setActiveIndex(prev);
        options2[prev]?.scrollIntoView({ block: "nearest" });
        break;
      }
      case "Home": {
        e.preventDefault();
        setActiveIndex(0);
        options2[0]?.scrollIntoView({ block: "nearest" });
        break;
      }
      case "End": {
        e.preventDefault();
        const last = options2.length - 1;
        setActiveIndex(last);
        options2[last]?.scrollIntoView({ block: "nearest" });
        break;
      }
      case "Enter":
      case " ": {
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < options2.length) {
          options2[activeIndex]?.click();
        }
        break;
      }
    }
  };
  react.useEffect(() => {
    if (open) {
      setActiveIndex(0);
      setTimeout(() => contentRef.current?.focus(), 0);
    }
  }, [open, setActiveIndex]);
  if (!open) return null;
  const options = contentRef.current?.querySelectorAll('[role="option"]:not([aria-disabled="true"])');
  const activeOptionId = options && activeIndex >= 0 && activeIndex < options.length ? options[activeIndex]?.id : void 0;
  return reactDom.createPortal(
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref: contentRef,
        role: "listbox",
        id: `${baseId}-listbox`,
        tabIndex: 0,
        "aria-activedescendant": activeOptionId,
        onKeyDown: handleKeyDown,
        className,
        ...props,
        children
      }
    ),
    document.body
  );
}
function Option({ value: optionValue, disabled = false, children, className, ...props }) {
  const { value, onValueChange, baseId } = useSelectContext();
  const isSelected = value === optionValue;
  const handleClick = () => {
    if (!disabled) {
      onValueChange(optionValue);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "option",
      id: `${baseId}-option-${optionValue}`,
      "aria-selected": isSelected,
      "aria-disabled": disabled,
      onClick: handleClick,
      "data-state": isSelected ? "checked" : "unchecked",
      "data-disabled": disabled ? "" : void 0,
      "data-value": optionValue,
      className,
      ...props,
      children
    }
  );
}
var Select = {
  Root: Root4,
  Trigger: Trigger3,
  Value,
  Content: Content3,
  Option
};
var AccordionContext = react.createContext(null);
function useAccordionContext() {
  const context = react.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within Accordion.Root.");
  }
  return context;
}
var ItemContext = react.createContext(null);
function useItemContext() {
  const context = react.useContext(ItemContext);
  if (!context) {
    throw new Error("Accordion.Trigger and Accordion.Content must be used within Accordion.Item.");
  }
  return context;
}
function Root5(props) {
  const {
    type,
    orientation = "vertical",
    disabled = false,
    children,
    className
  } = props;
  const baseId = react.useId();
  const [singleValue, setSingleValue] = react.useState(
    type === "single" ? props.defaultValue ?? "" : ""
  );
  const [multipleValue, setMultipleValue] = react.useState(
    type === "multiple" ? props.defaultValue ?? [] : []
  );
  const collapsible = type === "single" ? props.collapsible ?? false : true;
  const getCurrentValue = () => {
    if (type === "single") {
      const controlled = props.value;
      const val = controlled !== void 0 ? controlled : singleValue;
      return val ? [val] : [];
    } else {
      const controlled = props.value;
      return controlled !== void 0 ? controlled : multipleValue;
    }
  };
  const value = getCurrentValue();
  const onToggle = react.useCallback(
    (itemValue) => {
      if (disabled) return;
      if (type === "single") {
        const singleProps = props;
        const isControlled = singleProps.value !== void 0;
        const currentVal = isControlled ? singleProps.value : singleValue;
        if (currentVal === itemValue) {
          if (collapsible) {
            if (!isControlled) setSingleValue("");
            singleProps.onValueChange?.("");
          }
        } else {
          if (!isControlled) setSingleValue(itemValue);
          singleProps.onValueChange?.(itemValue);
        }
      } else {
        const multipleProps = props;
        const isControlled = multipleProps.value !== void 0;
        const currentVal = isControlled ? multipleProps.value : multipleValue;
        const newValue = currentVal.includes(itemValue) ? currentVal.filter((v) => v !== itemValue) : [...currentVal, itemValue];
        if (!isControlled) setMultipleValue(newValue);
        multipleProps.onValueChange?.(newValue);
      }
    },
    [type, props, singleValue, multipleValue, collapsible, disabled]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(AccordionContext.Provider, { value: { value, onToggle, type, collapsible, orientation, baseId }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className, "data-orientation": orientation, children }) });
}
function Item({ value: itemValue, disabled = false, children, className, ...itemProps }) {
  const { value, baseId } = useAccordionContext();
  const isOpen = value.includes(itemValue);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ItemContext.Provider,
    {
      value: {
        value: itemValue,
        isOpen,
        disabled,
        triggerId: `${baseId}-trigger-${itemValue}`,
        contentId: `${baseId}-content-${itemValue}`
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          "data-state": isOpen ? "open" : "closed",
          "data-disabled": disabled ? "" : void 0,
          className,
          ...itemProps,
          children
        }
      )
    }
  );
}
function Header({ children, className, ...headerProps }) {
  return /* @__PURE__ */ jsxRuntime.jsx("h3", { className, ...headerProps, children });
}
function Trigger4({ children, className, ...triggerProps }) {
  const { onToggle, orientation } = useAccordionContext();
  const { value, isOpen, disabled, triggerId, contentId } = useItemContext();
  const triggerRef = react.useRef(null);
  const handleClick = () => {
    if (!disabled) {
      onToggle(value);
    }
  };
  const handleKeyDown = (e) => {
    const isVertical = orientation === "vertical";
    const prevKey = isVertical ? "ArrowUp" : "ArrowLeft";
    const nextKey = isVertical ? "ArrowDown" : "ArrowRight";
    const triggers = triggerRef.current?.closest("[data-orientation]")?.querySelectorAll("button[aria-expanded]:not([disabled])");
    if (!triggers || triggers.length === 0) return;
    const currentIndex = Array.from(triggers).indexOf(triggerRef.current);
    let nextIndex = null;
    switch (e.key) {
      case nextKey:
        nextIndex = (currentIndex + 1) % triggers.length;
        break;
      case prevKey:
        nextIndex = (currentIndex - 1 + triggers.length) % triggers.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = triggers.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    triggers[nextIndex].focus();
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      ref: triggerRef,
      type: "button",
      id: triggerId,
      "aria-expanded": isOpen,
      "aria-controls": contentId,
      disabled,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      "data-state": isOpen ? "open" : "closed",
      "data-disabled": disabled ? "" : void 0,
      className,
      ...triggerProps,
      children
    }
  );
}
function Content4({ forceMount = false, children, className, style, ...contentProps }) {
  const { isOpen, triggerId, contentId } = useItemContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "region",
      id: contentId,
      "aria-labelledby": triggerId,
      "aria-hidden": !isOpen,
      "data-state": isOpen ? "open" : "closed",
      className,
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows 400ms cubic-bezier(0.87, 0, 0.13, 1)",
        ...style
      },
      ...contentProps,
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { style: { overflow: "hidden", minHeight: 0 }, children })
    }
  );
}
var Accordion = {
  Root: Root5,
  Item,
  Header,
  Trigger: Trigger4,
  Content: Content4
};
function Root6({
  defaultPressed = false,
  pressed: controlledPressed,
  onPressedChange,
  disabled = false,
  children,
  className,
  ...props
}) {
  const [uncontrolledPressed, setUncontrolledPressed] = react.useState(defaultPressed);
  const isControlled = controlledPressed !== void 0;
  const pressed = isControlled ? controlledPressed : uncontrolledPressed;
  const handleToggle = react.useCallback(() => {
    if (disabled) return;
    const next = !pressed;
    if (!isControlled) {
      setUncontrolledPressed(next);
    }
    onPressedChange?.(next);
  }, [disabled, pressed, isControlled, onPressedChange]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": pressed,
      disabled,
      onClick: handleToggle,
      "data-state": pressed ? "on" : "off",
      "data-disabled": disabled ? "" : void 0,
      className,
      ...props,
      children
    }
  );
}
var Toggle = {
  Root: Root6
};
var ToastContext = react.createContext(null);
function useToastContext() {
  const context = react.useContext(ToastContext);
  if (!context) {
    throw new Error("Toast components must be used within Toast.Provider.");
  }
  return context;
}
function useToast() {
  const context = react.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within Toast.Provider.");
  }
  return {
    addToast: context.addToast,
    removeToast: context.removeToast,
    toasts: context.toasts
  };
}
function Provider({ children, maxToasts = 5 }) {
  const [toasts, setToasts] = react.useState([]);
  const counterRef = react.useRef(0);
  const addToast = react.useCallback(
    (toast) => {
      counterRef.current += 1;
      const id = `toast-${counterRef.current}`;
      setToasts((prev) => {
        const next = [...prev, { ...toast, id }];
        return next.length > maxToasts ? next.slice(next.length - maxToasts) : next;
      });
      return id;
    },
    [maxToasts]
  );
  const removeToast = react.useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(ToastContext.Provider, { value: { toasts, addToast, removeToast }, children });
}
function Root7({ toastId, duration = 4e3, children, className, ...props }) {
  const { removeToast } = useToastContext();
  react.useEffect(() => {
    if (duration <= 0) return;
    const timer = setTimeout(() => removeToast(toastId), duration);
    return () => clearTimeout(timer);
  }, [toastId, duration, removeToast]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    {
      role: "status",
      "aria-atomic": "true",
      "data-toast-id": toastId,
      className,
      ...props,
      children
    }
  );
}
function Title3({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("p", { "data-toast-title": "", className, ...props, children });
}
function Description3({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("p", { "data-toast-description": "", className, ...props, children });
}
function Close2({ toastId, children = "\u2715", className, ...props }) {
  const { removeToast } = useToastContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      "aria-label": "Close notification",
      onClick: () => removeToast(toastId),
      className,
      ...props,
      children
    }
  );
}
function Viewport({ container, className, ...props }) {
  const { toasts } = useToastContext();
  return reactDom.createPortal(
    /* @__PURE__ */ jsxRuntime.jsx(
      "ol",
      {
        "aria-live": "polite",
        "aria-label": "Notifications",
        "data-toast-viewport": "",
        className,
        ...props,
        children: toasts.map((toast) => /* @__PURE__ */ jsxRuntime.jsxs(Root7, { toastId: toast.id, duration: toast.duration, "data-variant": toast.variant, children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
            toast.title && /* @__PURE__ */ jsxRuntime.jsx(Title3, { children: toast.title }),
            toast.description && /* @__PURE__ */ jsxRuntime.jsx(Description3, { children: toast.description })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(Close2, { toastId: toast.id })
        ] }, toast.id))
      }
    ),
    container ?? document.body
  );
}
var Toast = {
  Provider,
  Viewport,
  Root: Root7,
  Title: Title3,
  Description: Description3,
  Close: Close2
};
var DrawerContext = react.createContext(null);
function useDrawerContext() {
  const context = react.useContext(DrawerContext);
  if (!context) {
    throw new Error("Drawer components must be used within Drawer.Root.");
  }
  return context;
}
function Root8({ defaultOpen = false, open: controlledOpen, onOpenChange, children }) {
  const [uncontrolledOpen, setUncontrolledOpen] = react.useState(defaultOpen);
  const baseId = react.useId();
  const triggerRef = react.useRef(null);
  const isControlled = controlledOpen !== void 0;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const handleOpenChange = react.useCallback(
    (newOpen) => {
      if (!isControlled) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    DrawerContext.Provider,
    {
      value: {
        open,
        onOpenChange: handleOpenChange,
        titleId: `${baseId}-drawer-title`,
        triggerRef
      },
      children
    }
  );
}
function Trigger5({ children, className, ...props }) {
  const { open, onOpenChange, triggerRef } = useDrawerContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      ref: triggerRef,
      type: "button",
      "aria-expanded": open,
      "aria-haspopup": "dialog",
      onClick: () => onOpenChange(true),
      "data-state": open ? "open" : "closed",
      className,
      ...props,
      children
    }
  );
}
function Overlay3({ className, onClick, ...props }) {
  const { open, onOpenChange } = useDrawerContext();
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onOpenChange(false);
    }
    onClick?.(e);
  };
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "aria-hidden": "true",
      onClick: handleClick,
      "data-state": open ? "open" : "closed",
      className,
      ...props
    }
  );
}
function Content5({ side = "right", onEscapeKeyDown, children, className, ...props }) {
  const { open, onOpenChange, titleId, triggerRef } = useDrawerContext();
  const contentRef = react.useRef(null);
  useFocusTrap(contentRef, open);
  useBodyScrollLock(open);
  react.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onEscapeKeyDown?.(e);
        if (!e.defaultPrevented) {
          onOpenChange(false);
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange, onEscapeKeyDown]);
  const prevOpen = react.useRef(open);
  react.useEffect(() => {
    if (prevOpen.current && !open) {
      triggerRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open, triggerRef]);
  const [shouldRender, setShouldRender] = react.useState(open);
  const [animState, setAnimState] = react.useState(open ? "open" : "closed");
  react.useEffect(() => {
    if (open) {
      setShouldRender(true);
      setAnimState("closed");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimState("open"));
      });
    } else if (animState === "open") {
      setAnimState("closing");
    }
  }, [open]);
  const handleTransitionEnd = () => {
    if (animState === "closing") {
      setAnimState("closed");
      setShouldRender(false);
    }
  };
  if (!shouldRender) return null;
  const transformMap = {
    left: { open: "translateX(0)", closing: "translateX(-100%)", closed: "translateX(-100%)" },
    right: { open: "translateX(0)", closing: "translateX(100%)", closed: "translateX(100%)" },
    top: { open: "translateY(0)", closing: "translateY(-100%)", closed: "translateY(-100%)" },
    bottom: { open: "translateY(0)", closing: "translateY(100%)", closed: "translateY(100%)" }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref: contentRef,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": titleId,
      "data-state": open ? "open" : "closed",
      "data-side": side,
      className,
      onTransitionEnd: handleTransitionEnd,
      style: {
        transform: transformMap[side][animState],
        transition: "transform 300ms cubic-bezier(0.32, 0.72, 0, 1)",
        ...props.style
      },
      ...props,
      children
    }
  );
}
function Title4({ children, className, ...props }) {
  const { titleId } = useDrawerContext();
  return /* @__PURE__ */ jsxRuntime.jsx("h2", { id: titleId, className, ...props, children });
}
function Close3({ children, className, ...props }) {
  const { onOpenChange } = useDrawerContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      "aria-label": "Close drawer",
      onClick: () => onOpenChange(false),
      className,
      ...props,
      children
    }
  );
}
function Portal3({ children, container }) {
  return reactDom.createPortal(children, container ?? document.body);
}
var Drawer = {
  Root: Root8,
  Trigger: Trigger5,
  Portal: Portal3,
  Overlay: Overlay3,
  Content: Content5,
  Title: Title4,
  Close: Close3
};
var PopoverContext = react.createContext(null);
function usePopoverContext() {
  const context = react.useContext(PopoverContext);
  if (!context) {
    throw new Error("Popover components must be used within Popover.Root.");
  }
  return context;
}
function Root9({ defaultOpen = false, open: controlledOpen, onOpenChange, children }) {
  const [uncontrolledOpen, setUncontrolledOpen] = react.useState(defaultOpen);
  const baseId = react.useId();
  const triggerRef = react.useRef(null);
  const isControlled = controlledOpen !== void 0;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const handleOpenChange = react.useCallback(
    (newOpen) => {
      if (!isControlled) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(
    PopoverContext.Provider,
    {
      value: {
        open,
        onOpenChange: handleOpenChange,
        triggerId: `${baseId}-popover-trigger`,
        contentId: `${baseId}-popover-content`,
        triggerRef
      },
      children
    }
  );
}
function Trigger6({ children, className, ...props }) {
  const { open, onOpenChange, triggerId, contentId, triggerRef } = usePopoverContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      ref: triggerRef,
      id: triggerId,
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": open,
      "aria-controls": open ? contentId : void 0,
      onClick: () => onOpenChange(!open),
      "data-state": open ? "open" : "closed",
      className,
      ...props,
      children
    }
  );
}
function Content6({ onEscapeKeyDown, children, className, ...props }) {
  const { open, onOpenChange, contentId, triggerId, triggerRef } = usePopoverContext();
  const contentRef = react.useRef(null);
  react.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onEscapeKeyDown?.(e);
        if (!e.defaultPrevented) {
          onOpenChange(false);
          triggerRef.current?.focus();
        }
      }
    };
    const handleClickOutside = (e) => {
      const target = e.target;
      if (contentRef.current && !contentRef.current.contains(target) && triggerRef.current && !triggerRef.current.contains(target)) {
        onOpenChange(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onOpenChange, onEscapeKeyDown, triggerRef]);
  react.useEffect(() => {
    if (open) {
      const focusable = contentRef.current?.querySelector(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      focusable?.focus();
    }
  }, [open]);
  if (!open) return null;
  return reactDom.createPortal(
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref: contentRef,
        id: contentId,
        role: "dialog",
        "aria-labelledby": triggerId,
        "data-state": open ? "open" : "closed",
        className,
        ...props,
        children
      }
    ),
    document.body
  );
}
function Close4({ children = "\u2715", className, ...props }) {
  const { onOpenChange, triggerRef } = usePopoverContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      "aria-label": "Close popover",
      onClick: () => {
        onOpenChange(false);
        triggerRef.current?.focus();
      },
      className,
      ...props,
      children
    }
  );
}
var Popover = {
  Root: Root9,
  Trigger: Trigger6,
  Content: Content6,
  Close: Close4
};
var RadioGroupContext = react.createContext(null);
function useRadioGroupContext() {
  const context = react.useContext(RadioGroupContext);
  if (!context) {
    throw new Error("RadioGroup components must be used within RadioGroup.Root.");
  }
  return context;
}
function Root10({
  defaultValue = "",
  value: controlledValue,
  onValueChange,
  name,
  disabled = false,
  orientation = "vertical",
  children,
  className,
  ...props
}) {
  const [uncontrolledValue, setUncontrolledValue] = react.useState(defaultValue);
  const generatedName = react.useId();
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : uncontrolledValue;
  const handleValueChange = react.useCallback(
    (newValue) => {
      if (disabled) return;
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [disabled, isControlled, onValueChange]
  );
  const rootRef = react.useRef(null);
  const handleKeyDown = (e) => {
    const isVertical = orientation === "vertical";
    const prevKey = isVertical ? "ArrowUp" : "ArrowLeft";
    const nextKey = isVertical ? "ArrowDown" : "ArrowRight";
    if (![prevKey, nextKey, "Home", "End"].includes(e.key)) return;
    const options = rootRef.current?.querySelectorAll('[role="radio"]:not([disabled])');
    if (!options || options.length === 0) return;
    const currentIndex = Array.from(options).findIndex((opt) => opt === document.activeElement);
    let nextIndex;
    switch (e.key) {
      case nextKey:
        nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
        break;
      case prevKey:
        nextIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = options.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    const nextOption = options[nextIndex];
    nextOption.focus();
    const optionValue = nextOption.getAttribute("data-value");
    if (optionValue) {
      handleValueChange(optionValue);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupContext.Provider,
    {
      value: {
        value,
        onValueChange: handleValueChange,
        name: name ?? generatedName,
        disabled,
        orientation
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          ref: rootRef,
          role: "radiogroup",
          "aria-orientation": orientation,
          onKeyDown: handleKeyDown,
          className,
          ...props,
          children
        }
      )
    }
  );
}
function Option2({ value: optionValue, disabled: optionDisabled = false, children, className, ...props }) {
  const { value, onValueChange, disabled: groupDisabled } = useRadioGroupContext();
  const isSelected = value === optionValue;
  const isDisabled = groupDisabled || optionDisabled;
  const handleClick = () => {
    if (!isDisabled) {
      onValueChange(optionValue);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      role: "radio",
      "aria-checked": isSelected,
      disabled: isDisabled,
      tabIndex: isSelected ? 0 : -1,
      onClick: handleClick,
      "data-state": isSelected ? "checked" : "unchecked",
      "data-disabled": isDisabled ? "" : void 0,
      "data-value": optionValue,
      className,
      ...props,
      children
    }
  );
}
function Indicator({ children, className, ...props }) {
  const context = react.useContext(RadioGroupContext);
  if (!context) {
    throw new Error("RadioGroup.Indicator must be used within RadioGroup.Root.");
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      "aria-hidden": "true",
      className,
      ...props,
      children
    }
  );
}
var RadioGroup = {
  Root: Root10,
  Option: Option2,
  Indicator
};
var TagInputContext = react.createContext(null);
function useTagInputContext() {
  const context = react.useContext(TagInputContext);
  if (!context) {
    throw new Error("TagInput components must be used within TagInput.Root.");
  }
  return context;
}
function Root11({
  defaultValue = [],
  value: controlledValue,
  onValueChange,
  maxTags,
  disabled = false,
  children,
  className
}) {
  const [uncontrolledTags, setUncontrolledTags] = react.useState(defaultValue);
  const inputId = react.useId();
  const isControlled = controlledValue !== void 0;
  const tags = isControlled ? controlledValue : uncontrolledTags;
  const addTag = react.useCallback(
    (tag) => {
      const trimmed = tag.trim();
      if (!trimmed || disabled) return;
      if (maxTags !== void 0 && tags.length >= maxTags) return;
      if (tags.includes(trimmed)) return;
      const newTags = [...tags, trimmed];
      if (!isControlled) setUncontrolledTags(newTags);
      onValueChange?.(newTags);
    },
    [tags, isControlled, onValueChange, maxTags, disabled]
  );
  const removeTag = react.useCallback(
    (index) => {
      if (disabled) return;
      const newTags = tags.filter((_, i) => i !== index);
      if (!isControlled) setUncontrolledTags(newTags);
      onValueChange?.(newTags);
    },
    [tags, isControlled, onValueChange, disabled]
  );
  const removeLastTag = react.useCallback(() => {
    if (disabled || tags.length === 0) return;
    const newTags = tags.slice(0, -1);
    if (!isControlled) setUncontrolledTags(newTags);
    onValueChange?.(newTags);
  }, [tags, isControlled, onValueChange, disabled]);
  return /* @__PURE__ */ jsxRuntime.jsx(TagInputContext.Provider, { value: { tags, addTag, removeTag, removeLastTag, inputId, maxTags, disabled }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className,
      "data-disabled": disabled ? "" : void 0,
      "aria-disabled": disabled || void 0,
      children
    }
  ) });
}
function Input({ placeholder, className, ...props }) {
  const { addTag, removeLastTag, inputId, maxTags, tags, disabled } = useTagInputContext();
  const [inputValue, setInputValue] = react.useState("");
  const isComposingRef = react.useRef(false);
  const isAtMax = maxTags !== void 0 && tags.length >= maxTags;
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isComposingRef.current) {
      e.preventDefault();
      if (inputValue.trim()) {
        addTag(inputValue);
        setInputValue("");
      }
    }
    if (e.key === "Backspace" && inputValue === "") {
      e.preventDefault();
      removeLastTag();
    }
  };
  const handleCompositionStart = (_e) => {
    isComposingRef.current = true;
  };
  const handleCompositionEnd = (e) => {
    isComposingRef.current = false;
    setInputValue(e.currentTarget.value);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "input",
    {
      ...props,
      id: inputId,
      type: "text",
      role: "combobox",
      "aria-autocomplete": "list",
      "aria-expanded": false,
      "aria-label": props["aria-label"] ?? "Add tag",
      value: inputValue,
      onChange: (e) => setInputValue(e.target.value),
      onKeyDown: handleKeyDown,
      onCompositionStart: handleCompositionStart,
      onCompositionEnd: handleCompositionEnd,
      placeholder: isAtMax ? void 0 : placeholder,
      disabled: disabled || isAtMax,
      "data-at-max": isAtMax ? "" : void 0,
      className
    }
  );
}
function Tag({ value, index, children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      role: "listitem",
      "aria-label": `\uD0DC\uADF8: ${value}`,
      "data-tag-index": index,
      className,
      ...props,
      children
    }
  );
}
function Remove({ index, children, className, ...props }) {
  const { removeTag, disabled } = useTagInputContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      ...props,
      type: "button",
      "aria-label": "\uD0DC\uADF8 \uC0AD\uC81C",
      onClick: () => removeTag(index),
      disabled,
      "data-disabled": disabled ? "" : void 0,
      className,
      children: children ?? "\xD7"
    }
  );
}
var TagInput = {
  Root: Root11,
  Input,
  Tag,
  Remove
};
var CheckboxGroupContext = react.createContext(null);
function useCheckboxGroupContext() {
  const context = react.useContext(CheckboxGroupContext);
  if (!context) {
    throw new Error("CheckboxGroup components must be used within CheckboxGroup.Root.");
  }
  return context;
}
function Root12({
  defaultValue = [],
  value: controlledValue,
  onValueChange,
  disabled = false,
  children,
  className,
  ...props
}) {
  const [uncontrolledValue, setUncontrolledValue] = react.useState(defaultValue);
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : uncontrolledValue;
  const onToggle = react.useCallback(
    (optionValue) => {
      if (disabled) return;
      const newValue = value.includes(optionValue) ? value.filter((v) => v !== optionValue) : [...value, optionValue];
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [disabled, value, isControlled, onValueChange]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(CheckboxGroupContext.Provider, { value: { value, onToggle, disabled }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "group",
      "aria-labelledby": props["aria-labelledby"],
      className,
      ...props,
      children
    }
  ) });
}
function Option3({ value: optionValue, disabled: optionDisabled = false, children, className, ...props }) {
  const { value, onToggle, disabled: groupDisabled } = useCheckboxGroupContext();
  const isChecked = value.includes(optionValue);
  const isDisabled = groupDisabled || optionDisabled;
  const handleClick = () => {
    if (!isDisabled) {
      onToggle(optionValue);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      role: "checkbox",
      "aria-checked": isChecked,
      disabled: isDisabled,
      onClick: handleClick,
      "data-state": isChecked ? "checked" : "unchecked",
      "data-disabled": isDisabled ? "" : void 0,
      className,
      ...props,
      children
    }
  );
}
function Indicator2({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("span", { "aria-hidden": "true", className, ...props, children });
}
var CheckboxGroup = {
  Root: Root12,
  Option: Option3,
  Indicator: Indicator2
};
var ProgressContext = react.createContext(null);
function useProgressContext() {
  const context = react.useContext(ProgressContext);
  if (!context) {
    throw new Error("Progress components must be used within Progress.Root.");
  }
  return context;
}
function Root13({ value = null, max = 100, children, className, ...props }) {
  const clampedValue = value !== null ? Math.min(Math.max(0, value), max) : null;
  const percentage = clampedValue !== null ? Math.round(clampedValue / max * 100) : null;
  return /* @__PURE__ */ jsxRuntime.jsx(ProgressContext.Provider, { value: { value: clampedValue, max, percentage }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": clampedValue ?? void 0,
      "aria-valuemin": 0,
      "aria-valuemax": max,
      "aria-label": percentage !== null ? `${percentage}% progress` : "Loading",
      "aria-valuetext": percentage !== null ? `${percentage}%` : void 0,
      "data-state": percentage === 100 ? "complete" : clampedValue === null ? "indeterminate" : "loading",
      className,
      ...props,
      children
    }
  ) });
}
function Indicator3({ children, className, style, ...props }) {
  const { percentage } = useProgressContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-percentage": percentage ?? void 0,
      "data-indeterminate": percentage === null ? "" : void 0,
      className,
      style,
      ...props,
      children
    }
  );
}
var Progress = {
  Root: Root13,
  Indicator: Indicator3
};
var MenuContext = react.createContext(null);
function useMenuContext() {
  const context = react.useContext(MenuContext);
  if (!context) {
    throw new Error("Menu components must be used within Menu.Root.");
  }
  return context;
}
function Root14({ children }) {
  const [open, setOpen] = react.useState(false);
  const [activeIndex, setActiveIndex] = react.useState(-1);
  const baseId = react.useId();
  const triggerRef = react.useRef(null);
  const contentRef = react.useRef(null);
  const handleOpenChange = react.useCallback((newOpen) => {
    setOpen(newOpen);
    if (!newOpen) {
      setActiveIndex(-1);
    }
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    MenuContext.Provider,
    {
      value: {
        open,
        onOpenChange: handleOpenChange,
        activeIndex,
        setActiveIndex,
        contentId: `${baseId}-menu`,
        triggerRef,
        contentRef
      },
      children
    }
  );
}
function Trigger7({ children, className, ...props }) {
  const { open, onOpenChange, contentId, triggerRef } = useMenuContext();
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpenChange(true);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      onOpenChange(true);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      ref: triggerRef,
      type: "button",
      role: "button",
      "aria-haspopup": "menu",
      "aria-expanded": open,
      "aria-controls": open ? contentId : void 0,
      onClick: () => onOpenChange(!open),
      onKeyDown: handleKeyDown,
      "data-state": open ? "open" : "closed",
      className,
      ...props,
      children
    }
  );
}
function Content7({ children, className, ...props }) {
  const { open, onOpenChange, contentId, activeIndex, setActiveIndex, triggerRef, contentRef } = useMenuContext();
  react.useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      const target = e.target;
      if (contentRef.current && !contentRef.current.contains(target) && triggerRef.current && !triggerRef.current.contains(target)) {
        onOpenChange(false);
        triggerRef.current?.focus();
      }
    };
    const handleKeyDown2 = (e) => {
      if (e.key === "Escape") {
        onOpenChange(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown2);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown2);
    };
  }, [open, onOpenChange, triggerRef, contentRef]);
  react.useEffect(() => {
    if (open) {
      setActiveIndex(0);
      setTimeout(() => {
        const items = contentRef.current?.querySelectorAll(
          '[role="menuitem"]:not([aria-disabled="true"])'
        );
        items?.[0]?.focus();
      }, 0);
    }
  }, [open, setActiveIndex, contentRef]);
  const handleKeyDown = (e) => {
    const items = contentRef.current?.querySelectorAll(
      '[role="menuitem"]:not([aria-disabled="true"])'
    );
    if (!items || items.length === 0) return;
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        const next = activeIndex < items.length - 1 ? activeIndex + 1 : 0;
        setActiveIndex(next);
        items[next]?.focus();
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const prev = activeIndex > 0 ? activeIndex - 1 : items.length - 1;
        setActiveIndex(prev);
        items[prev]?.focus();
        break;
      }
      case "Home": {
        e.preventDefault();
        setActiveIndex(0);
        items[0]?.focus();
        break;
      }
      case "End": {
        e.preventDefault();
        const last = items.length - 1;
        setActiveIndex(last);
        items[last]?.focus();
        break;
      }
      case "Tab": {
        onOpenChange(false);
        break;
      }
    }
  };
  if (!open) return null;
  return reactDom.createPortal(
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref: contentRef,
        id: contentId,
        role: "menu",
        "aria-orientation": "vertical",
        "data-state": open ? "open" : "closed",
        onKeyDown: handleKeyDown,
        className,
        ...props,
        children
      }
    ),
    document.body
  );
}
function Item2({ disabled = false, onSelect, children, className, onClick, ...props }) {
  const { onOpenChange } = useMenuContext();
  const handleClick = () => {
    if (disabled) return;
    onSelect?.();
    onOpenChange(false);
    onClick?.({});
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "menuitem",
      tabIndex: disabled ? -1 : 0,
      "aria-disabled": disabled || void 0,
      "data-disabled": disabled ? "" : void 0,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      className,
      ...props,
      children
    }
  );
}
function Separator({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "separator",
      "aria-orientation": "horizontal",
      className,
      ...props
    }
  );
}
var Menu = {
  Root: Root14,
  Trigger: Trigger7,
  Content: Content7,
  Item: Item2,
  Separator
};
function useFileUpload(options = {}) {
  const { multiple = true, accept, maxSize, maxFiles } = options;
  const [files, setFiles] = react.useState([]);
  const [errors, setErrors] = react.useState([]);
  const validate = react.useCallback(
    (file) => {
      if (accept && accept.length > 0) {
        const isAccepted = accept.some((type) => {
          if (type.endsWith("/*")) {
            return file.type.startsWith(type.slice(0, -1));
          }
          return file.type === type || file.name.endsWith(type.replace("*", ""));
        });
        if (!isAccepted) return `File type not accepted: ${file.type}`;
      }
      if (maxSize !== void 0 && file.size > maxSize) {
        return `File too large: ${file.name} (max ${maxSize} bytes)`;
      }
      return null;
    },
    [accept, maxSize]
  );
  const addFiles = react.useCallback(
    (incoming) => {
      const newErrors = [];
      const newFiles = [];
      for (const file of incoming) {
        if (maxFiles !== void 0 && files.length + newFiles.length >= maxFiles) {
          newErrors.push(`Maximum ${maxFiles} file(s) allowed`);
          break;
        }
        const error = validate(file);
        if (error) {
          newErrors.push(error);
          continue;
        }
        const previewUrl = file.type.startsWith("image/") ? URL.createObjectURL(file) : null;
        newFiles.push({ file, previewUrl, id: `${Date.now()}-${Math.random()}` });
      }
      setErrors(newErrors);
      setFiles((prev) => multiple ? [...prev, ...newFiles] : newFiles.slice(0, 1));
    },
    [files.length, maxFiles, multiple, validate]
  );
  const removeFile = react.useCallback((id) => {
    setFiles((prev) => {
      const target = prev.find((f) => f.id === id);
      if (target?.previewUrl) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((f) => f.id !== id);
    });
  }, []);
  const clearFiles = react.useCallback(() => {
    setFiles((prev) => {
      prev.forEach((f) => {
        if (f.previewUrl) URL.revokeObjectURL(f.previewUrl);
      });
      return [];
    });
    setErrors([]);
  }, []);
  return { files, errors, addFiles, removeFile, clearFiles };
}
var FileUploadContext = react.createContext(null);
function useFileUploadContext() {
  const context = react.useContext(FileUploadContext);
  if (!context) {
    throw new Error("FileUpload components must be used within FileUpload.Root.");
  }
  return context;
}
function Root15({
  files,
  addFiles,
  removeFile,
  multiple = true,
  accept,
  disabled = false,
  children,
  className
}) {
  const inputId = react.useId();
  const [isDragging, setIsDragging] = react.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsx(FileUploadContext.Provider, { value: { files, addFiles, removeFile, inputId, multiple, accept, disabled, isDragging, setIsDragging }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className,
      "data-disabled": disabled ? "" : void 0,
      children
    }
  ) });
}
function Dropzone({ children, className, ...props }) {
  const { addFiles, inputId, disabled, isDragging, setIsDragging } = useFileUploadContext();
  const handleDragOver = (e) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (disabled) return;
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length > 0) addFiles(droppedFiles);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "button",
      tabIndex: disabled ? -1 : 0,
      "aria-label": "\uD30C\uC77C\uC744 \uB4DC\uB798\uADF8\uD558\uAC70\uB098 \uD074\uB9AD\uD558\uC5EC \uC5C5\uB85C\uB4DC",
      "aria-disabled": disabled || void 0,
      "aria-live": "polite",
      "data-state": isDragging ? "dragging" : "idle",
      "data-disabled": disabled ? "" : void 0,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
      onClick: () => {
        if (!disabled) document.getElementById(inputId)?.click();
      },
      onKeyDown: (e) => {
        if (!disabled && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          document.getElementById(inputId)?.click();
        }
      },
      className,
      ...props,
      children
    }
  );
}
function FileUploadInput({ className, ...props }) {
  const { addFiles, inputId, multiple, accept, disabled } = useFileUploadContext();
  const inputRef = react.useRef(null);
  const handleChange = react.useCallback(() => {
    const input = inputRef.current;
    if (!input?.files) return;
    addFiles(Array.from(input.files));
    input.value = "";
  }, [addFiles]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "input",
    {
      ...props,
      ref: inputRef,
      id: inputId,
      type: "file",
      multiple,
      accept,
      disabled,
      onChange: handleChange,
      "aria-hidden": "true",
      tabIndex: -1,
      className,
      style: { display: "none" }
    }
  );
}
function Preview({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("ul", { role: "list", "aria-label": "\uC5C5\uB85C\uB4DC\uB41C \uD30C\uC77C \uBAA9\uB85D", className, ...props, children });
}
function Item3({ file, children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    {
      role: "listitem",
      "aria-label": file.file.name,
      "data-file-id": file.id,
      className,
      ...props,
      children
    }
  );
}
var FileUpload = {
  Root: Root15,
  Dropzone,
  Input: FileUploadInput,
  Preview,
  Item: Item3
};
var AvatarContext = react.createContext(null);
function useAvatarContext() {
  const context = react.useContext(AvatarContext);
  if (!context) {
    throw new Error("Avatar components must be used within Avatar.Root.");
  }
  return context;
}
function Root16({ children, className, ...props }) {
  const [imageStatus, setImageStatus] = react.useState("idle");
  return /* @__PURE__ */ jsxRuntime.jsx(AvatarContext.Provider, { value: { imageStatus, setImageStatus }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      role: "img",
      "data-state": imageStatus,
      className,
      ...props,
      children
    }
  ) });
}
function Image({ alt, src, className, ...props }) {
  const { setImageStatus } = useAvatarContext();
  const handleLoad = () => {
    setImageStatus("loaded");
  };
  const handleError = (_e) => {
    setImageStatus("error");
  };
  return (
    // eslint-disable-next-line @next/next/no-img-element -- Avatar uses native img for headless/fallback pattern
    /* @__PURE__ */ jsxRuntime.jsx(
      "img",
      {
        ...props,
        src,
        alt,
        onLoad: handleLoad,
        onError: handleError,
        className
      }
    )
  );
}
function Fallback({ children, className, delayMs: _delayMs = 0, ...props }) {
  const { imageStatus } = useAvatarContext();
  if (imageStatus === "loaded") return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      "aria-hidden": "true",
      "data-state": imageStatus,
      className,
      ...props,
      children
    }
  );
}
var Avatar = {
  Root: Root16,
  Image,
  Fallback
};
function Root17({ htmlFor, children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "label",
    {
      htmlFor,
      className,
      ...props,
      children
    }
  );
}
var Label = {
  Root: Root17
};
var ToolbarContext = react.createContext(null);
function useToolbarContext() {
  const context = react.useContext(ToolbarContext);
  if (!context) {
    throw new Error("Toolbar components must be used within Toolbar.Root.");
  }
  return context;
}
var ToggleGroupContext = react.createContext(null);
function useToggleGroupContext() {
  const context = react.useContext(ToggleGroupContext);
  if (!context) {
    throw new Error("Toolbar.ToggleItem must be used within Toolbar.ToggleGroup.");
  }
  return context;
}
function Root18({
  orientation = "horizontal",
  "aria-label": ariaLabel,
  children,
  className,
  ...props
}) {
  const toolbarRef = react.useRef(null);
  const handleKeyDown = (e) => {
    const isHorizontal = orientation === "horizontal";
    const prevKey = isHorizontal ? "ArrowLeft" : "ArrowUp";
    const nextKey = isHorizontal ? "ArrowRight" : "ArrowDown";
    if (![prevKey, nextKey, "Home", "End"].includes(e.key)) return;
    const items = toolbarRef.current?.querySelectorAll(
      '[role="toolbar"] > button:not([disabled]), [role="toolbar"] > a, [role="toolbar"] > [role="group"] button:not([disabled])'
    );
    if (!items || items.length === 0) return;
    const allItems = toolbarRef.current?.querySelectorAll(
      'button:not([disabled]):not([tabindex="-1"]), a:not([disabled])'
    );
    if (!allItems || allItems.length === 0) return;
    const focusableItems = Array.from(allItems);
    const currentIndex = focusableItems.findIndex((item) => item === document.activeElement);
    if (currentIndex === -1) return;
    let nextIndex;
    switch (e.key) {
      case nextKey:
        nextIndex = (currentIndex + 1) % focusableItems.length;
        break;
      case prevKey:
        nextIndex = (currentIndex - 1 + focusableItems.length) % focusableItems.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = focusableItems.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    focusableItems[nextIndex].focus();
  };
  return /* @__PURE__ */ jsxRuntime.jsx(ToolbarContext.Provider, { value: { orientation }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref: toolbarRef,
      role: "toolbar",
      "aria-label": ariaLabel,
      "aria-orientation": orientation,
      onKeyDown: handleKeyDown,
      className,
      "data-orientation": orientation,
      ...props,
      children
    }
  ) });
}
function Button({ disabled = false, children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      disabled,
      "data-disabled": disabled ? "" : void 0,
      className,
      ...props,
      children
    }
  );
}
function Separator2({ orientation, className, ...props }) {
  const { orientation: toolbarOrientation } = useToolbarContext();
  const separatorOrientation = orientation ?? (toolbarOrientation === "horizontal" ? "vertical" : "horizontal");
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "separator",
      "aria-orientation": separatorOrientation,
      "data-orientation": separatorOrientation,
      className,
      ...props
    }
  );
}
function ToggleGroup({
  value: controlledValue,
  defaultValue = "",
  onValueChange,
  "aria-label": ariaLabel,
  children,
  className,
  ...props
}) {
  const [uncontrolledValue, setUncontrolledValue] = react.useState(defaultValue);
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : uncontrolledValue;
  const handleValueChange = react.useCallback(
    (newValue) => {
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [isControlled, onValueChange]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupContext.Provider, { value: { value, onValueChange: handleValueChange }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "group",
      "aria-label": ariaLabel,
      className,
      ...props,
      children
    }
  ) });
}
function ToggleItem({ value: itemValue, disabled = false, children, className, ...props }) {
  const { value, onValueChange } = useToggleGroupContext();
  const isPressed = value === itemValue;
  const handleClick = () => {
    if (!disabled) {
      onValueChange(isPressed ? "" : itemValue);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      "aria-pressed": isPressed,
      disabled,
      onClick: handleClick,
      "data-state": isPressed ? "on" : "off",
      "data-disabled": disabled ? "" : void 0,
      className,
      ...props,
      children
    }
  );
}
var Toolbar = {
  Root: Root18,
  Button,
  Separator: Separator2,
  ToggleGroup,
  ToggleItem
};
var NavigationMenuContext = react.createContext(null);
function useNavigationMenuContext() {
  const context = react.useContext(NavigationMenuContext);
  if (!context) {
    throw new Error("NavigationMenu components must be used within NavigationMenu.Root.");
  }
  return context;
}
function Root19({
  orientation = "horizontal",
  "aria-label": ariaLabel = "Navigation",
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuContext.Provider, { value: { orientation }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      role: "navigation",
      "aria-label": ariaLabel,
      "data-orientation": orientation,
      className,
      ...props,
      children
    }
  ) });
}
function List2({ children, className, ...props }) {
  const { orientation } = useNavigationMenuContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ul",
    {
      role: "list",
      "data-orientation": orientation,
      className,
      ...props,
      children
    }
  );
}
function Item4({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("li", { className, ...props, children });
}
function Link({ active = false, children, className, href = "#", ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    {
      href,
      "aria-current": active ? "page" : void 0,
      "data-active": active ? "" : void 0,
      "data-state": active ? "active" : "inactive",
      className,
      ...props,
      children
    }
  );
}
var NavigationMenu = {
  Root: Root19,
  List: List2,
  Item: Item4,
  Link
};

exports.Accordion = Accordion;
exports.AlertDialog = AlertDialog;
exports.Avatar = Avatar;
exports.CheckboxGroup = CheckboxGroup;
exports.Dialog = Dialog;
exports.Drawer = Drawer;
exports.FileUpload = FileUpload;
exports.Label = Label;
exports.Menu = Menu;
exports.NavigationMenu = NavigationMenu;
exports.Popover = Popover;
exports.Progress = Progress;
exports.RadioGroup = RadioGroup;
exports.Select = Select;
exports.Tabs = Tabs;
exports.TagInput = TagInput;
exports.Toast = Toast;
exports.Toggle = Toggle;
exports.Toolbar = Toolbar;
exports.useFileUpload = useFileUpload;
exports.useToast = useToast;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map