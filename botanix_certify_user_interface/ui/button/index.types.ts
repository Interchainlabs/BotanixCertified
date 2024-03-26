export enum ButtonKind {
  primary = 'primary',
  secondary = 'secondary',
}

export enum ButtonSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof ButtonKind
  size?: keyof typeof ButtonSize
  label?: React.ReactNode | string
  hideLabel?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  rounded?: boolean
  loading?: boolean
  customClassName?: string
}
