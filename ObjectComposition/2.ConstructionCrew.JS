function solve(worker) {

    if (worker.dizziness) {
        {
            worker.levelOfHydrated += (worker.experience * worker.weight) / 10,
            worker.dizziness = false;
        }
    }

    return worker;
}

let worker =
{
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
};

console.log(solve(worker))