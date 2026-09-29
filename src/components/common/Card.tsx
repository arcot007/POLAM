// Card component
import React from 'react';

interface CardProps {
  variant?: 'default' | 'navy' | 'teal' | 'success' | 'warning' | 'emergency' | 'women-safety' | 'flat';
  compact?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  compact = false,
  clickable = false,
  onClick,
  className = '',
  style,
  children,
}) => {
  const classes = [
    'card',
    variant !== 'default' && `card-${variant}`,
    compact && 'card-compact',
    clickable && 'card-clickable',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style} onClick={clickable ? onClick : undefined} role={clickable ? 'button' : undefined} tabIndex={clickable ? 0 : undefined}>
      {children}
    </div>
  );
};
