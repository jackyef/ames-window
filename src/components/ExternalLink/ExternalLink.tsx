interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const ExternalLink: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <>
      <a target="_blank" rel="noopener nofollow noreferer" {...rest}>
        {children}
      </a>
    </>
  );
};
