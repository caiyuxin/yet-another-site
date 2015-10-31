function active_nav() {
  _.forEach($(".bes.nav.item > a"), function (item) {
    if (item.href == window.location) {
      item.parentNode.classList.add("active");
    }
  });
}

function set_category(category) {
  console.log(category);
}

$(document).ready(function () {
  active_nav();
});