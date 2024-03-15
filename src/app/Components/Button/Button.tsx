import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large' | 'xl';
  /**
   * Button contents
   */
  label: string;
   /**
   * Button has radius
   */
  borderRadius?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  borderRadius = false,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const radius = borderRadius ? 'storybook-button--has-radius' : 'storybook-button--no-radius';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, radius].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
