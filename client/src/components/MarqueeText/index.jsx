import "./marqueeText.css";

const MarqueeText = () => {
  const word = "INWORKER";

  return (
    <div className="marquee">
      <div className="marquee_content">
        {[...Array(40)].map((_, item) => {
          return (
            <span key={item} className="marquee_word">
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MarqueeText;
