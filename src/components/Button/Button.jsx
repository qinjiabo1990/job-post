import { StyledButton } from './Button.styles';

function Button({
  className, children, href, ...props
}) {
  return (
    <StyledButton
      {...props}
      className={className}
      as={href?.length ? 'a' : 'button'}
      href={href}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
