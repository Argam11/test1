import * as componentsImports from "./componentsImports";
import componentsList from "./componentsList";
import helper from "./helper";

export default function(firstValue = 1, secondValue = 1) {
    const hasComponent = helper(componentsList, ...arguments);

    if (hasComponent) {
        return componentsImports[componentsList[firstValue][secondValue]];
    }
}
