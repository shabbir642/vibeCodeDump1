// Utility to get a random safe position for an element within the viewport
export function getRandomSafePosition(
  elementWidth: number,
  elementHeight: number,
) {
  const padding = 16 // Prevent button from touching edges
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  const maxLeft = viewportWidth - elementWidth - padding
  const maxTop = viewportHeight - elementHeight - padding

  const left = Math.random() * maxLeft + padding
  const top = Math.random() * maxTop + padding

  return { left, top }
}
