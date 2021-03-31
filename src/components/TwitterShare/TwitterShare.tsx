interface Props {
  text: string;
}

export const TwitterShare: React.FC<Props> = ({ text, children }) => (
  <a
    target="_blank"
    rel="noopener nofollow noreferer"
    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`}
  >
    {children}
  </a>
);
