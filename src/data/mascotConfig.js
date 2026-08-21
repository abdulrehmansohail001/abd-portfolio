// Sprite sheet layout config.
// This sheet is a 4x4 GRID (not a horizontal strip): 16 cells,
// 384x256px each, transparent background.
// Frame index = row*COLS + col (0-15, row-major, matches how the
// sheet reads left-to-right, top-to-bottom).

export const GRID_COLS = 16;
export const GRID_ROWS = 1;
export const CELL_WIDTH = 226;
export const CELL_HEIGHT = 176;

// Each state lists the exact frame indices to play, in order.
// (Not every state uses a contiguous range on this sheet, so we
// list indices explicitly instead of a start+count.)
export const FRAMES = {
  idle: { indices: [0, 1, 2, 3], fps: 4 },      // sitting, blink variations
  fly: { indices: [4, 5, 6, 7], fps: 10 },      // wing flap cycle
  land: { indices: [8, 9], fps: 6 },            // wing folding -> settling
  point: { indices: [13, 15], fps: 3 },         // holding pen, gesturing
};

// Path to the sprite sheet PNG.
export const SHEET_SRC = new URL(
  "../assets/mascot-sheet.png",
  import.meta.url
).href;

// Corner where the bird perches when idle (viewport-relative, px from edge).
export const PERCH_POSITION = { left: 32, bottom: 32 };

// On-screen render size (cells are 384x256 source -> shown much smaller)
export const RENDER_WIDTH = 96;
export const RENDER_HEIGHT = (CELL_HEIGHT / CELL_WIDTH) * RENDER_WIDTH;
