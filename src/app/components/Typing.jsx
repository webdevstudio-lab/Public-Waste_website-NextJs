import { TypeAnimation } from "react-type-animation";

export const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "for Mice",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "for Hamsters",
        1000,
        "for Guinea Pigs",
        1000,
        "for Chinchillas",
        1000,
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
