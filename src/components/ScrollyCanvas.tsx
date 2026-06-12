"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const images: HTMLImageElement[] = [];

    const currentFrame = (index: number) =>
      `/sequence/${index.toString().padStart(3, "0")}.webp`;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(0);
    };

    const drawFrame = (index: number) => {
      const image = images[index];

      if (!image || !image.complete) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const scale = Math.max(
        canvas.width / image.width,
        canvas.height / image.height
      );

      const x = (canvas.width - image.width * scale) / 2;
      const y = (canvas.height - image.height * scale) / 2;

      context.drawImage(
        image,
        x,
        y,
        image.width * scale,
        image.height * scale
      );
    };

    images[0].onload = () => {
      resizeCanvas();
    };

  const handleScroll = () => {
  const hero = document.getElementById("hero-scroll");

  if (!hero) return;

  const rect = hero.getBoundingClientRect();

  const scrollableHeight =
    hero.offsetHeight - window.innerHeight;

  const progress =
    Math.min(
      Math.max(
        -rect.top / scrollableHeight,
        0
      ),
      1
    );

  const frameIndex = Math.min(
    FRAME_COUNT - 1,
    Math.floor(progress * FRAME_COUNT)
  );

  drawFrame(frameIndex);
};

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
  id="hero-scroll"
  className="h-[400vh] relative"
>
      <div className="sticky top-0 h-screen">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}