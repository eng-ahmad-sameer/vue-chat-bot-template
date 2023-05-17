const TextareaAutosizeDirective = {
  name: "autosize",
  update: function (el) {
    let minHeight, maxHeight;
    // If used in a component library such as buefy, a wrapper will be used on the component so check if a child is the textarea
    el =
      el.tagName.toLowerCase() === "textarea"
        ? el
        : el.querySelector("textarea");

    minHeight = parseFloat(getComputedStyle(el).getPropertyValue("min-height"));
    maxHeight =
      parseFloat(getComputedStyle(el).getPropertyValue("max-height")) || 999;

    el.style.height = "auto";
    let border = el.style.borderTopWidth * 2;
    el.style.setProperty(
      "height",
      el.scrollHeight < minHeight
        ? minHeight
        : el.scrollHeight > maxHeight
        ? maxHeight
        : el.scrollHeight + border + "px",
      "important"
    );
  },
};

// eslint-disable-next-line no-unused-vars
const VueTextareaAutosizeDirective = {
  install(Vue) {
    Vue.directive(TextareaAutosizeDirective.name, TextareaAutosizeDirective);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueTextareaAutosizeDirective);
}

export default VueTextareaAutosizeDirective;

export { TextareaAutosizeDirective };
