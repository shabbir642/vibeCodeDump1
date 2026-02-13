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
      'rounded-2xl px-8 py-4 font-bold text-lg shadow-2xl transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = {
      primary:
        'bg-gradient-to-r from-rose-accent to-deep-rose text-white hover:from-deep-rose hover:to-rose-accent hover:shadow-2xl hover:shadow-rose-accent/30 hover:-translate-y-2 focus:ring-rose-accent/50',
      secondary:
        'bg-white text-deep-rose border-2 border-blush hover:bg-blush hover:border-soft-pink hover:shadow-2xl hover:shadow-blush/40 hover:-translate-y-2 focus:ring-blush/50',
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
