import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import { ButtonProps } from './index.types';
import { CircularLoader } from '../circular-loader';
import { cva } from 'class-variance-authority';

const button = cva('button', {
  variants: {
    intent: {
      primary: 'bg-primary-main text-black-main hover:bg-primary-dark hover:text-white',
      secondary: 'bg-primary-10 text-black-dark hover:bg-primary-60',
    },
    size: {
      large: 'p-4',
      medium: 'py-[0.625rem] px-4',
      small: 'py-[0.375rem] px-3',
    },
    loading: { primary: [], secondary: [] },
  },
  compoundVariants: [
    { intent: 'primary', loading: 'primary', class: 'bg-primary-60 text-white' },
    {
      intent: 'secondary',
      loading: 'secondary',
      class: 'bg-primary-60 text-white disabled:black-80',
    },
  ],
});

// Button component
const Button: React.FC<ButtonProps> = (props) => {
  const {
    customClassName,
    variant = 'primary',
    size = 'medium',
    disabled,
    loading,
    leftIcon,
    label,
    rightIcon,
    ...rest
  } = props;

  // Button Classes
  const className = clsx(
    'focus:ring-0 flex items-center w-full justify-center gap-2 transition-all duration-300 rounded-lg font-medium  disabled:pointer-events-none',
    styles[variant],
    styles[size],
    disabled && !loading ? 'disabled:bg-neutral-100 disabled:text-black-60' : '',
    customClassName
  );

  return (
    <button
      disabled={disabled}
      className={button({
        intent: variant,
        size,
        loading: loading ? variant : undefined,
        className,
      })}
      type="button"
      {...rest}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

      {label}

      {loading ? (
        <CircularLoader
          customClassName={clsx(
            'stroke-transparent',
            disabled && 'opacity-50 !text-primary-main/50'
          )}
        />
      ) : (
        <React.Fragment>
          {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </React.Fragment>
      )}
    </button>
  );
};

export { Button };
export * from './index.types';
