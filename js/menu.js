const menu_button = document.getElementById("menu-button");
const mini_side_bar = document.getElementById("mini_side_bar");
const wide_side_bar = document.getElementById("wide-side-bar");

const switch_side_bar = () => {
    mini_side_bar.classList.toggle("invisible");
    wide_side_bar.classList.toggle("invisible");
};

menu_button.addEventListener("click", () => {
    switch_side_bar();
});
