export function shuffleArray(array) {
  if (array === null) {
    return;
  }
  return array.sort(() => 0.5 - Math.random());
}
