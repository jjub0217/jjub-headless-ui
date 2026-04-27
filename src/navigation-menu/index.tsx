import {
  createContext,
  useContext,
  type ReactNode,
  type ComponentPropsWithoutRef,
  type AnchorHTMLAttributes,
} from 'react'

// ─── Context ──────────────────────────────────────────────
interface NavigationMenuContextValue {
  orientation: 'horizontal' | 'vertical'
}

const NavigationMenuContext = createContext<NavigationMenuContextValue | null>(null)

function useNavigationMenuContext() {
  const context = useContext(NavigationMenuContext)
  if (!context) {
    throw new Error('NavigationMenu components must be used within NavigationMenu.Root.')
  }
  return context
}

// ─── NavigationMenu.Root ──────────────────────────────────
interface RootProps extends ComponentPropsWithoutRef<'nav'> {
  orientation?: 'horizontal' | 'vertical'
  'aria-label'?: string
  children: ReactNode
}

function Root({
  orientation = 'horizontal',
  'aria-label': ariaLabel = 'Navigation',
  children,
  className,
  ...props
}: RootProps) {
  return (
    <NavigationMenuContext.Provider value={{ orientation }}>
      <nav
        role="navigation"
        aria-label={ariaLabel}
        data-orientation={orientation}
        className={className}
        {...props}
      >
        {children}
      </nav>
    </NavigationMenuContext.Provider>
  )
}

// ─── NavigationMenu.List ──────────────────────────────────
interface ListProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactNode
}

function List({ children, className, ...props }: ListProps) {
  const { orientation } = useNavigationMenuContext()

  return (
    <ul
      role="list"
      data-orientation={orientation}
      className={className}
      {...props}
    >
      {children}
    </ul>
  )
}

// ─── NavigationMenu.Item ──────────────────────────────────
interface ItemProps extends ComponentPropsWithoutRef<'li'> {
  children: ReactNode
}

function Item({ children, className, ...props }: ItemProps) {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  )
}

// ─── NavigationMenu.Link ──────────────────────────────────
interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
  children: ReactNode
}

function Link({ active = false, children, className, href = '#', ...props }: LinkProps) {
  return (
    <a
      href={href}
      aria-current={active ? 'page' : undefined}
      data-active={active ? '' : undefined}
      data-state={active ? 'active' : 'inactive'}
      className={className}
      {...props}
    >
      {children}
    </a>
  )
}

// ─── Export ───────────────────────────────────────────────
export const NavigationMenu = {
  Root,
  List,
  Item,
  Link,
}
