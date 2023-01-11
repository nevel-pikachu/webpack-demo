export const mobileOrTabletRender = () => {
  try {
    if (window.innerWidth <= 768) {
      document.getElementById("_desktop").classList.add("hidden")
      document.getElementById("_mobile").classList.remove("hidden")
    } else {
      document.getElementById("_desktop").classList.remove("hidden")
      document.getElementById("_mobile").classList.add("hidden")
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        document.getElementById("_desktop").classList.add("hidden")
        document.getElementById("_mobile").classList.remove("hidden")
      }
      else {
        document.getElementById("_desktop").classList.remove("hidden")
        document.getElementById("_mobile").classList.add("hidden")
      }
    });
  } catch (err) {

  }
}