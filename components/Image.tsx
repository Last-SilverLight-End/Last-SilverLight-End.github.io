const Image: React.FC<JSX.IntrinsicElements['img']> = (props) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element,jsx-a11y/alt-text
    <img {...props} src={props.src} />
  );
};

export default Image;