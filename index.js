// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name)
    return drivers
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    let appended = [...drivers, name]
    return appended
}

function prependDriver(name) {
    let prepended = [name,...drivers]
    return prepended
}

function removeLastDriver() {
    return drivers.slice(0,drivers.length-1)
}

function removeFirstDriver() {
    return drivers.slice(1)
}