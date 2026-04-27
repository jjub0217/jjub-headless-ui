import {
  type ReactNode,
  type ComponentPropsWithoutRef,
} from 'react'

// ─── Label.Root ───────────────────────────────────────────
interface RootProps extends ComponentPropsWithoutRef<'label'> {
  /** The id of the form element this label is associated with. */
  htmlFor: string
  children: ReactNode
}

function Root({ htmlFor, children, className, ...props }: RootProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={className}
      {...props}
    >
      {children}
    </label>
  )
}

// ─── Export ───────────────────────────────────────────────
export const Label = {
  Root,
}
