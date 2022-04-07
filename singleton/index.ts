class Increment {
    private static instance: Increment;
    private count: number;

    private constructor() {
        this.count = 0;
    }

    public static getInstance(): Increment {
        if (!Increment.instance) {
            Increment.instance = new Increment();
            return Increment.instance;
        }

        return Increment.instance;
    }

    public increment(): number {
        this.count = this.count += 1;
        return this.count;
    }

    public getCount(): number {
        return this.count;
    }
}

function counters() {
    const counter1 = Increment.getInstance();
    const counter2 = Increment.getInstance();

    counter2.increment();
    console.log(`counter 1: ${counter1.getCount()}`);
    console.log(`counter 2: ${counter2.getCount()}`);

    if (counter1 === counter2) {
        return "they are the same";
    }

    return "they are not the same";
}

console.log(counters());