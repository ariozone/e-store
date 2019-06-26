export const categories = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "food" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "sports" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "home" }
]

export function getCategories() {
  return categories.filter(c => c)
}
