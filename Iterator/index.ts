interface IIterator<T> {
    peek(): T;
    getNext(): T;
    peekIndex(): number;
    has(): boolean;
    reset(): void;
}

interface Smartphones {
    getIterator(): IIterator<string>;
}

class SmartphonesCollection implements Smartphones {
    private items: string[] = [];

    public getIterator(): IIterator<string> {
        return new SmartphonesIterator(this);
    }

    public getAll(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public add(smartphone: string): void {
        this.items.push(smartphone);
    }

    public getReverseIterator(): IIterator<string> {
        return new SmartphonesIterator(this, true);
    }
}

class SmartphonesIterator implements IIterator<string> {
    private smartphones: SmartphonesCollection;
    private position: number = 0;
    private reverse: boolean = false;

    constructor(smartphones: SmartphonesCollection, reverse: boolean = false) {
        this.smartphones = smartphones;
        this.reverse = reverse;

        if (reverse) {
            this.position = smartphones.getCount() - 1;
        }
    }

    public reset(): void {
        this.position = this.reverse ? this.smartphones.getCount() - 1 : 0;
    }

    public peek(): string {
        return this.smartphones.getAll()[this.position];
    }

    public peekIndex(): number {
        return this.position;
    }

    public getNext(): string {
        const smartphone = this.smartphones.getAll()[this.position];
        this.position = this.position += this.reverse ? -1 : 1;
        return smartphone;
    }

    public has(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }

        return this.position < this.smartphones.getCount();
    }
}

const smartphonesCollection = new SmartphonesCollection();
smartphonesCollection.add('smartphone 1');
smartphonesCollection.add('smartphone 2');
smartphonesCollection.add('smartphone 3');

console.log('incremental');
const smartphoneInterator = smartphonesCollection.getIterator();
while (smartphoneInterator.has()) {
    console.log(smartphoneInterator.getNext());
}

console.log('reverse');
const smartphoneReverseInterator = smartphonesCollection.getReverseIterator();
while (smartphoneReverseInterator.has()) {
    console.log(smartphoneReverseInterator.getNext());
}