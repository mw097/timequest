/**
 * @file This file contains utility functions for converting between pointy-topped hexagonal grid coordinates and pixel coordinates.
 * Based on: https://www.redblobgames.com/grids/hexagons/#coordinates-axial
 */

import type { HexTile, PixelCoordinates } from '../types/hex';

/**
 * Radius of the inner circle of a pointy-topped hexagon or the distance from the center to a vertex.
 * See: https://www.redblobgames.com/grids/hexagons/#basics.
 */

/**
 * Get the width of a pointy-topped hexagon.
 * @param hexScale The size of the hexagon.
 * @returns The width of the hexagon.
 */
export function getHexWidth(hexScale: number) {
  return Math.sqrt(3) * hexScale;
}

/**
 * Get the height of a pointy-topped hexagon.
 * @param hexScale The size of the hexagon.
 * @returns The height of the hexagon.
 */
export function getHexHeight(hexScale: number) {
  return 2 * hexScale;
}

/**
 * Convert axial hex coordinates to pixel coordinates.
 * https://www.redblobgames.com/grids/hexagons/#hex-to-pixel
 */
export function axialHexToPixel(
  hex: HexTile,
  scale: number = 1
): PixelCoordinates {
  // Hex to cartesian coordinates
  const x = Math.sqrt(3) * hex.q + (Math.sqrt(3) / 2) * hex.r;
  const y = (3 / 2) * hex.r;
  // Scale by hex size
  return { x: x * scale, y: y * scale };
}

/**
 * Generate a hexagonal grid of pointy-topped hex tiles.
 * @param radius The radius of the hex grid, which determines how many hex tiles will be generated.
 * @returns An array of hex tiles representing the grid.
 */
export function generateHexGrid(radius: number): HexTile[] {
  const tiles: HexTile[] = [];

  // Generate q coordinates in a radius between -radius and radius
  for (let q = -radius; q <= radius; q++) {
    // Generate r coordinates in a radius between -radius and radius, getting the valid min/max range to avoid squere shape
    for (
      let r = Math.max(-radius, -q - radius);
      r <= Math.min(radius, -q + radius);
      r++
    ) {
      tiles.push({ q, r });
    }
  }
  return tiles;
}

/**
 * Convert pixel coordinates to axial hex coordinates.
 * https://www.redblobgames.com/grids/hexagons/#pixel-to-hex
 */
// export function pixelToAxialHex(pixel: PixelCoordinates, scale: number = 1): HexTile {
//   // Invert the scaling
//   const x = pixel.x / scale;
//   const y = pixel.y / scale;
//   // Cartesian to hex coordinates
//   const q = (Math.sqrt(3) / 3) * x - (1 / 3) * y;
//   const r = (2 / 3) * y;
// }
