export default function scrollTop() {
  if (window.scroll) {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }
  return;
}
