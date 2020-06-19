export const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.1,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

export const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export const image = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: .5
    }
};