export default function validators(data) {
    const result = isEmpty(data)
    return result


}

const isEmpty = (data) => {
    const errors = []
    Object.entries(data).map(property => {
        if (property[1] === "" || property[1] === undefined) {
            errors.push({
                field: property[0],
                message: `${property[0].toUpperCase()} can't be empty`
            })
        }
    })

    return errors
}