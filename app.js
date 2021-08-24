document.addEventListener("DOMContentLoaded", function () {
  const acc = document.getElementsByClassName("accordion");
  const panel = document.getElementsByClassName("panel");

  for (let i = 0; i < acc.length; i++) {
    hideAll();
    acc[i].onclick = function () {
      const setClassses = !this.classList.contains("active");

      if (setClassses) {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      } else {
        setClass(acc, "active", "remove");
        setClass(panel, "show", "remove");
      }
    };
  }

  function hideAll() {
    for (let i = 0; i < acc.length; i++) {
      acc[i].classList.toggle("active", false);
      acc[i].nextElementSibling.classList.toggle("show", false);
    }
  }
  function setClass(elements, className, fnName) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList[fnName](className);
    }
  }
});
