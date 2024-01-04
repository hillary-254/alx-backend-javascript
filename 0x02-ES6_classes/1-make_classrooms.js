import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const room = sizes.map((size) => new ClassRoom(size));
  return room;
}
