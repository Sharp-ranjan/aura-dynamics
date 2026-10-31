import { describe, expect, it } from "vitest";
import { canvasQuality } from "./animation-policy";

describe("Canvas performance policy", () => {
  it("halves particles below 768px", () => {
    expect(canvasQuality(767, 3).particleCount).toBe(30);
    expect(canvasQuality(768, 3).particleCount).toBe(60);
  });
  it("caps mobile pixel ratio at 1.5 and desktop at 2", () => {
    expect(canvasQuality(412, 3).pixelRatio).toBe(1.5);
    expect(canvasQuality(1280, 3).pixelRatio).toBe(2);
    expect(canvasQuality(412, 1).pixelRatio).toBe(1);
  });
});