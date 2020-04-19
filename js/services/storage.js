// Save in storage

function saveInStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

// Load from storage

function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

