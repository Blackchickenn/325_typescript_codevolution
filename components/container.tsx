type ContainerProps = {
  styles: React.CSSProperties;
};

const Container: React.FC<ContainerProps> = ({ styles }) => {
  return <div style={styles}>Some Random Text</div>;
};

export default Container;
