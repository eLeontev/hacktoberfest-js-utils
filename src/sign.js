export default (...args) => {
    let [ arg ] = args;
    let value = Number(arg);

    if (!args.length || isNaN(value)) {
        return NaN;
    }

    return value > 0 ? 1
        : value === 0 ? 0 : -1;
};