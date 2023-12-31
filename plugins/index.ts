import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      randomRgba,
    },
  };
});

export const randomRgba = (min: number, max: number, opacity = 1) => {
  const randomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const randomByte = () => randomNumber(min, max);
  const randomCssRgba = `rgba(${[
    randomByte(),
    randomByte(),
    randomByte(),
    opacity,
  ].join(",")})`;
  return randomCssRgba;
};

// export const isDarkMode = () =>
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches;
// window.matchMedia("(prefers-color-scheme: dark)").matches;
