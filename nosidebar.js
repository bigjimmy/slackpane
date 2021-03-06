if(window.top!==window.self) {
  aCss = '                                \
  .p-workspace--context-pane-collapsed {  \
      grid-template-areas: "p-workspace__banner p-workspace__banner" "p-workspace__top_nav p-workspace__top_nav" "p-workspace__primary_view p-workspace__primary_view"; \
  }                                       \
                                          \
  .p-workspace__input .p-message_input_field:not(.c-texty_input--expanded) { \
      padding-left: 5px;                  \
  }                                       \
  .c-message--light .c-message__content--feature_sonic_inputs { \
      margin-left: 20px;                  \
  }                                       \
  .c-message__gutter,                     \
  .c-message_kit__gutter__left,           \
  .p-classic_nav__right_header,           \
  .p-classic_nav__team_header,            \
  .p-classic_nav__model__buttons,         \
  .p-workspace__sidebar {                 \
      display: none !important;           \
  }                                       \
  ';

  let head = document.getElementsByTagName('head')[0];
  if (head) {
        let style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.textContent = aCss;
        head.appendChild(style);
  }
}
