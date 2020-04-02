function coolFunctionBro() {
    return null;
}

function coolestFunction() {
    return coolestFunction();
}

// Starting point
// master  A - B - C
// cooler-function  \- D - E

// master  A - B - C
// coolest-function \- F - G 

// What we want
// master  A - B - C
// cooler-function  \- D - E
// coolest-function         \- F - G