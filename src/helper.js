export default function(components, ...args) {
    switch (args.length) {
        case 2:
            return !!(components[args[0]] && components[args[0]][args[1]]);
        case 3:
            return !!(
                components[args[0]] &&
                components[args[0]][args[1]] &&
                components[args[0]][args[1]][args[2]]
            );
        case 4:
            return !!(
                components[args[0]] &&
                components[args[0]][args[1]] &&
                components[args[0]][args[1]][args[2]] &&
                components[args[0]][args[1]][args[2]][args[3]]
            );
    }
}
