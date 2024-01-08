/**
 * Returns a new ArrayBuffer with an Int8 value at a specific position.
 * @param {Number} length - Length of the ArrayBuffer.
 * @param {Number} position - Position to add the Int8 value.
 * @param {Number} value - Int8 value to add.
 * @returns {DataView} DataView of the modified ArrayBuffer.
 * @throws {Error} If adding the value is not possible.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
