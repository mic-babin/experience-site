export const circles = Array.from({ length: 11 }).map((_, index) => ({
  key: index,
  top: `${Math.random() * 60}%`,
  left: `${Math.random() * 100}%`,
  depth: Math.random(),
  speed: Math.random() * 30,
}));
