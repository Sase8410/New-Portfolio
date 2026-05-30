export const UNIT = 48;
export const WIDTH = 1600;
export const HEIGHT = 1000;

export const ORIGIN_X = WIDTH / 2;
export const ORIGIN_Y = HEIGHT / 2;

export function px(x: number) {
  return Number((ORIGIN_X + x * UNIT).toFixed(3));
}

export function py(y: number) {
  return Number((ORIGIN_Y - y * UNIT).toFixed(3));
}

export function buildFunctionPath(
  fn: (x: number) => number,
  start = -12,
  end = 12,
  step = 0.05
) {
  const points: string[] = [];

  for (let x = start; x <= end; x += step) {
    const y = fn(x);

    if (!Number.isFinite(y)) continue;

    points.push(`${points.length === 0 ? "M" : "L"} ${px(x)} ${py(y)}`);
  }

  return points.join(" ");
}

export function buildParametricPath(
  fn: (t: number) => { x: number; y: number },
  start = 0,
  end = Math.PI * 2,
  step = 0.02
) {
  const points: string[] = [];

  for (let t = start; t <= end; t += step) {
    const point = fn(t);

    if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) continue;

    points.push(
      `${points.length === 0 ? "M" : "L"} ${px(point.x)} ${py(point.y)}`
    );
  }

  return points.join(" ");
}