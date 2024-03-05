export function listenButtonSubmit(element, callback) {
    element.addEventListener("click", () => {
        callback();
    });
}
