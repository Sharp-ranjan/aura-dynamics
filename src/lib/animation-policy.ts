export function canvasQuality(viewportWidth: number, pixelRatio: number) {
  const mobile = viewportWidth < 768;
  return {
    particleCount: mobile ? 30 : 60,
    pixelRatio: Math.min(Math.max(pixelRatio || 1, 1), mobile ? 1.5 : 2),
  };
}