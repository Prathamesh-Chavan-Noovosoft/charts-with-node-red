export function listenInputChange(inputElement, disableElement) {
    inputElement.addEventListener("change", () => {
        if (inputElement.value !== "") {
            disableElement.disabled = true;
        } else {
            disableElement.disabled = false;
        }
    });
}

export function listenToInputChange(inputElement) {
    inputElement.addEventListener("change", () => {
        return inputElement.value;
    });
}
