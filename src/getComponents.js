import * as componentsImports from "./componentsImports";
import componentsList from "./componentsList";
import helper from "./helper";

export default function(
    firstValue = 1,
    secondValue = 1,
    thirdValue = 1,
    fourthValue = 1
) {
    let x = true;
    let newArgs = Object.values(arguments).filter(args => {
        !args && (x = false);
        return x && args;
    });
    const hasComponent = helper(componentsList, ...newArgs);

    if (hasComponent) {
        switch (newArgs.length) {
            case 2:
                return componentsImports[
                    componentsList[firstValue][secondValue]
                ];
            case 3:
                return componentsImports[
                    componentsList[firstValue][secondValue][thirdValue]
                ];
            case 4:
                return componentsImports[
                    componentsList[firstValue][secondValue][thirdValue][
                        fourthValue
                    ]
                ];
        }
    }
}
