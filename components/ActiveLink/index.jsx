import useRouter from '@hooks/useRouter';
import NextLink from 'next/link';
import { Children, cloneElement } from 'react';

export default function ActiveLink({ children, activeClassName, ...props }) {
  const { path } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const className =
    path === props.href || path === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <NextLink {...props}>
      {cloneElement(child, {
        className: className || null,
      })}
    </NextLink>
  );
}
