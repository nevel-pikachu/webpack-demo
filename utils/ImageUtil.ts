export const ImageUtil = {
  getImageFromUrl(url: String) {
    try {
      return require("_nuxt/" + url);
    } catch {
      return ""
    }
  }
}