
const slideDuration = 0.8;
export const slideInRightExitLeft = {
    initial: {opacity: 0, x: 200},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -200},
    transform: {duration: slideDuration},
} 

export const slideInLeftExitLeft = {
    initial: {opacity: 0, x: -200},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -200},
    transform: {duration: slideDuration},
}

export const slideInLeftExitRight = {
    initial: {opacity: 0, x: -200},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -200},
    transform: {duration: slideDuration},
}

export const slideInRightExitRight = {
    initial: {opacity: 0, x: 200},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: 200},
    transform: {duration: slideDuration},
}

export const fade = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0}
}

