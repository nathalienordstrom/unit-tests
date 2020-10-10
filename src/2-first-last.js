export const firstLast = (items) => {
  if (item.length >= 2) {
    return `First: ${items[0]}, Last ${items[items.length - 1]}`;
  }
  else if (items.length === 1) {
    return `Only item: ${items}`
  }
else { 
  return ('No items!')
}

}