export function getReceiveTime() {
  const now = new Date();
  const receiveTime = now;
  if (now.getHours() > 9 || (now.getHours() === 9 && now.getMinutes() >= 30)) {
    receiveTime.setDate(receiveTime.getDate() + 1);
  }
  receiveTime.setHours(12);
  receiveTime.setMinutes(0);
  return receiveTime;
}
