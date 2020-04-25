const sortKaviUp = (first, second) => {
  if (Number(first.KAVI) > Number(second.KAVI)) {
    return 1
  } else if (Number(first.KAVI) < Number(second.KAVI)) {
    return -1
  } else {
    return 0
  }
}

const sortKaviDown = (first, second) => {
  if (Number(first.KAVI) > Number(second.KAVI)) {
    return -1
  } else if (Number(first.KAVI) < Number(second.KAVI)) {
    return 1
  } else {
    return 0
  }
}

const sortPriceUp = (first, second) => {
  if (Number(first.price) > Number(second.price)) {
    return 1
  } else if (Number(first.price) < Number(second.price)) {
    return -1
  } else {
    return 0
  }
}

const sortPriceDown = (first, second) => {
  if (Number(first.price) > Number(second.price)) {
    return -1
  } else if (Number(first.price) < Number(second.price)) {
    return 1
  } else {
    return 0
  }
}

export const sortProducts = ([...products], filter) => {
  switch (filter) {
  case 'Nimi':
    return [...products]
  case 'kaviUp':
    return [...products].sort(sortKaviUp)
  case 'kaviDown':
    return [...products].sort(sortKaviDown)
  case 'priceUp':
    return [...products].sort(sortPriceUp)
  case 'priceDown':
    return [...products].sort(sortPriceDown)
  default:
    return [...products]
  }
}