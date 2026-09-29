// Button component
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'navy' | 'secondary' | 'outline' | 'ghost' | 'emergency' | 'success' | 'women-safety';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const classes = [
    'btn',
    `btn-${variant}`,
    size === 'lg' && 'btn-lg',
    size === 'sm' && 'btn-sm',
    fullWidth && 'btn-full',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading ? <span className="spinner spinner-sm" /> : icon}
      {children}
    </button>
  );
};
