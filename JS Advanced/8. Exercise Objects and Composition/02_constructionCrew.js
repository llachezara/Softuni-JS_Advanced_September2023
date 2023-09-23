function printWorkersState(objectWithWorkersInfo) {

    if (objectWithWorkersInfo.dizziness === true) {
        objectWithWorkersInfo.levelOfHydrated += 0.1 * objectWithWorkersInfo.weight * objectWithWorkersInfo.experience;
        objectWithWorkersInfo.dizziness = false;
    }
    return objectWithWorkersInfo
}
console.log(printWorkersState({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));