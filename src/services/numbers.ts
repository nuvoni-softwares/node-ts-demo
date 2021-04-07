export const addNumbers = async (value_1: number, value_2: number) => {
    try {
        let v1 = parseFloat(value_1.toFixed(2)),
            v2 = parseFloat(value_2.toFixed(2))
        return v1 + v2
    } catch (e) {
        throw e
    }
}

export const subtractNumbers = async (value_1: number, value_2: number) => {
    try {
        let v1 = parseFloat(value_1.toFixed(2)),
            v2 = parseFloat(value_2.toFixed(2))
        return v1 - v2
    } catch (e) {
        throw e
    }
}