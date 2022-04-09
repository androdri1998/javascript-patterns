interface Smartphone {
    getName(): string;
    getType(): string;
}

// creators
abstract class AbstractSmartphone {
    public abstract factoryMethod(): Smartphone;

    public buildSmartphone(): string {
        const smartphone = this.factoryMethod();
        return `${smartphone.getName()} ${smartphone.getType()} was builded`
    }
}

// concretes
class SmartphoneMidEnd implements Smartphone {
    private name: string;
    private type: string;

    constructor() {
        this.name = 'Smartphone 1';
        this.type = 'mid end';
    }

    getName(): string {
        return this.name;
    }

    getType(): string {
        return this.type;
    }
}

class SmartphoneHighEnd implements Smartphone {
    private name: string;
    private type: string;

    constructor() {
        this.name = 'Smartphone 2';
        this.type = 'high end';
    }

    getName(): string {
        return this.name;
    }

    getType(): string {
        return this.type;
    }
}

class CreatorSmartphoneMidEnd extends AbstractSmartphone {
    public factoryMethod(): Smartphone {
        return new SmartphoneMidEnd();
    }
}

class CreatorSmartphoneHighEnd extends AbstractSmartphone {
    public factoryMethod(): Smartphone {
        return new SmartphoneHighEnd();
    }
}

const buildSmartphones = (factorySmartphone: AbstractSmartphone) => {
    console.log(factorySmartphone.buildSmartphone());
}

console.log('BUILDING SMARTPHONE 1');
buildSmartphones(new CreatorSmartphoneMidEnd());

console.log('BUILDING SMARTPHONE 2');
buildSmartphones(new CreatorSmartphoneHighEnd());
