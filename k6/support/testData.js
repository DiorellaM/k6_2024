export function generateUniqueUsername() {
  const timestamp = Date.now();
  const randomSuffix = Math.floor(Math.random() * 1000);
  const username = `user_${timestamp}_${randomSuffix}`;
  return username;
}
