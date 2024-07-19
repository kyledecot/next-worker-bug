'use client';

import { useEffect, useRef } from "react";

export const WorkerComponent = () => {
  const worker = useRef<Worker | undefined>();

  useEffect(() => {
    worker.current = new Worker(
      new URL('./worker.ts', import.meta.url)
    );
  }, [])

  return null;
}

export default WorkerComponent;
