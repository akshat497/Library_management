function ToggleSidebar() {
    let sideBar = document.getElementsByClassName("sideBar")[0];

    if (sideBar.style.width === "0%") {
        sideBar.style.width = "17%";
    } else {
        sideBar.style.width = "0%";
    }

    sideBar.style.transition = "0.3s";
}