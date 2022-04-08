interface Smartphone {
    makePhoneCall(): boolean;
}

interface HighEndSmartphone {
    makePhoneCall(): boolean;
    canMakePhoneCall(smarthone: Smartphone): string;
}

interface SmartphoneAbstractFactory {
    createIncomingSmartphone(): Smartphone;
    createMidEndSmartphone(): Smartphone;
    createHighEndSmartphone(): HighEndSmartphone;
}

class IncomingSmartphoneProduct implements Smartphone {
    public makePhoneCall(): boolean {
        return true;
    }
}

class MidEndSmartphoneProduct implements Smartphone {
    public makePhoneCall(): boolean {
        return true;
    }
}

class HighEndSmartphoneProduct implements HighEndSmartphone {
    public makePhoneCall(): boolean {
        return true;
    }
    public canMakePhoneCall(smarthone: Smartphone): string {
        return `this smartphone can make phone calls? ${true}`;
    }
}

class SmartphoneFactory implements SmartphoneAbstractFactory {
    public createHighEndSmartphone(): HighEndSmartphone {
        return new HighEndSmartphoneProduct();
    }

    public createIncomingSmartphone(): Smartphone {
        return new IncomingSmartphoneProduct();
    }

    public createMidEndSmartphone(): Smartphone {
        return new MidEndSmartphoneProduct();
    }
}

const selectSmartphone = (smartphoneFactory: SmartphoneAbstractFactory) => {
    const highEndSmartphone = smartphoneFactory.createHighEndSmartphone();
    const midEndSmartphone = smartphoneFactory.createMidEndSmartphone();
    const incomingSmartphone = smartphoneFactory.createIncomingSmartphone();

    console.log(highEndSmartphone.canMakePhoneCall(incomingSmartphone));
    console.log(highEndSmartphone.makePhoneCall());
    console.log(midEndSmartphone.makePhoneCall());
    console.log(incomingSmartphone.makePhoneCall());
}

selectSmartphone(new SmartphoneFactory());