import { MouseEvent, MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
  className?: string;
  id?: string;
  children?: ReactNode;
  // 리엑트에서 제공하는 mouseEventHandler를 사용할수있지만 코드의 일관성을 위해 아래 코드로 정했다.
  onClick: (e: MouseEvent) => void;
  // onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  className = '',
  id,
  children,
  onClick,
}: Props) {
  // const Button = ({ className = '', id, children, onClick }: Props) => {
  const classNames = `${styles.button} ${className}`;
  return (
    <button className={classNames} id={id} onClick={onClick}>
      {children}
    </button>
  );
}
