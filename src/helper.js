export default function(components, ...args) {
    return !!(components[args[0]] && components[args[0]][args[1]]);
}
