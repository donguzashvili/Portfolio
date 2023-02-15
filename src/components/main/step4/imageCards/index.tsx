import classes from "./imageCards.module.sass";

interface imageCardType {
  src: string;
  name: string;
}

const ImageCards = ({ src, name }: imageCardType) => {
  return (
    <div className={classes.imageCard}>
      <img src={src} alt={name} />
    </div>
  );
};

export default ImageCards;
