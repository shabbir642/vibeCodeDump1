import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  onMouseEnter?: () => void
  onTouchStart?: () => void
  style?: React.CSSProperties
  disabled?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      variant = 'primary',
      onClick,
      onMouseEnter,
      onTouchStart,
      style,
      disabled,
    },
    ref,
  ) => {
    const baseClasses =
      'rounded-full px-10 py-4 font-medium text-lg border transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-1 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = {
      primary:
        'bg-gray-900 text-white border-gray-900 hover:bg-gray-800 hover:border-gray-800 focus:ring-gray-500',
      secondary:
        'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-300',
    }

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onTouchStart={onTouchStart}
        style={style}
        disabled={disabled}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
