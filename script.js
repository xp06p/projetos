function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  const img = document.querySelector("#profile img")
  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/img/sticker.gif")
    alt.setAttribute("alt", "xero mole")
  } else {
    img.setAttribute("src", "./assets/img/fumasinha-pronto.png")
    alt.setAttribute("xero mole")
  }
}
