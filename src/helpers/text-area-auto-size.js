export const TextareaAutosize = {
  name: "textarea-autosize",
  update: function (el) {
    el =
      el.tagName.toLowerCase() === "textarea"
        ? el
        : el.querySelector("textarea");

    const minHeight = parseFloat(
      getComputedStyle(el).getPropertyValue("min-height")
    );

    el.style.height = "auto";
    let border = el.style.borderTopWidth * 2;
    el.style.setProperty(
      "height",
      (el.scrollHeight < minHeight ? minHeight : el.scrollHeight + border) +
        "px",
      "important"
    );
  },
};
