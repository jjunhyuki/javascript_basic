import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

//input에서는 html의 기본속성을 많이 다루고있는데 이 프롭들을 전부다 지정하긴 어렵다.
//  이럴떄는 리엑트에서 제공해주는 타입을 쓰면 좋다.
//리엑트에서는 HTMLAttributes 라고 끝나는 타입들이있는데 특정태그의 속성들을 타입으로 만들어둔것.
interface Props extends InputHTMLAttributes<HTMLInputElement> {}
//제네릭에는 htmlDOMNode에 해당하는 타입을 넣은다음에 상속해서 사용가능

export default function Input({ className = '', ...rest }: Props) {
  const classNames = `${styles.input} ${className}`;
  return <input className={classNames} {...rest} />;
}
