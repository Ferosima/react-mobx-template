import { Component, ReactNode, useCallback, useMemo } from 'react';
import { IconsId } from 'src/assets/icons/fonts/icons';
import './styles.scss';

interface Props {
  id?: string;
  name: IconsId;
  color?: string;
  size?: number;
  disabled?: boolean;
  onPress?: () => void;
  className?: string;
  disabledClassName?: string;
  style?: object;
  children?: ReactNode;
}

function Icon({ id, name, color, size, disabled, onPress, className, style, disabledClassName, children }: Props) {
  /** Get class name with className and disabledClassName from props
   *
   * @type {*} */
  const _className = useMemo(() => {
    let className: string = `icons-icon icon-${name}`;

    if (className) className += ` ${className}`;
    if (disabled && disabledClassName) className += ` ${disabledClassName}`;

    return className;
  }, [className, disabled, name]);

  /** onPress handler
   *
   * @type {*} */
  const _onPress = useCallback(() => {
    if (disabled) return;
    if (onPress) onPress();
  }, [disabled, onPress]);

  return (
    <i
      id={id}
      onClick={_onPress}
      style={{
        fontSize: size,
        width: size,
        height: size,
        ...(color ? { color: color } : {}),
        ...style,
      }}
      className={_className}
    >
      {children}
    </i>
  );
}

export default Icon;
