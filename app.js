const slider= document.getElementById("size");
const slider_value = document.getElementById("slider_value");



slider.addEventListener("input", () => {
    let value = slider.value;
    slider_value.innerHTML = `${value}x${value}`;});
