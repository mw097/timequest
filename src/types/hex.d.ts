export interface HexTile {
  q: number; // Hexagonal coordinate q
  r: number; // Hexagonal coordinate r
  s?: number; // Hexagonal coordinate s (optional, can be derived from q and r)
  x?: number; // Pixel x-coordinate
  y?: number; // Pixel y-coordinate
  texture?: string; // Texture URL or identifier for the tile
}

export interface PixelCoordinates {
  x: number; // Pixel x-coordinate
  y: number; // Pixel y-coordinate
}
