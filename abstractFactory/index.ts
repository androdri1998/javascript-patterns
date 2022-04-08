interface IncomingSmartphone {
    makePhoneCall(): boolean;
}

interface MidEndSmartphone {
    makePhoneCall(): boolean;
}

interface HighEndSmartphone {
    makePhoneCall(): boolean;
    playHeavyGames(): boolean;
}

interface SmartphoneAbstractFactory {
    createIncomingSmartphone(): IncomingSmartphone;
    createMidEndSmartphone(): MidEndSmartphone;
    createHighEndSmartphone(): HighEndSmartphone;
}

class IncomingSmartphoneProduct implements IncomingSmartphone {
    public makePhoneCall(): boolean {
        return true;
    }
}

class MidEndSmartphoneProduct implements MidEndSmartphone {
    public makePhoneCall(): boolean {
        return true;
    }
}

class HighEndSmartphoneProduct implements HighEndSmartphone {
    public makePhoneCall(): boolean {
        return true;
    }
    public playHeavyGames(): boolean {
        return true;
    }
}

class SmartphoneFactory implements SmartphoneAbstractFactory {
    public createHighEndSmartphone(): HighEndSmartphone {
        return new HighEndSmartphoneProduct();
    }

    public createIncomingSmartphone(): IncomingSmartphone {
        return new IncomingSmartphoneProduct();
    }

    public createMidEndSmartphone(): MidEndSmartphone {
        return new MidEndSmartphoneProduct();
    }
}

const selectSmartphone = (smartphoneFactory: SmartphoneAbstractFactory) => {
    const highEndSmartphone = smartphoneFactory.createHighEndSmartphone();
    const midEndSmartphone = smartphoneFactory.createMidEndSmartphone();
    const incomingSmartphone = smartphoneFactory.createIncomingSmartphone();

    console.log(highEndSmartphone.playHeavyGames());
    console.log(highEndSmartphone.makePhoneCall());
    console.log(midEndSmartphone.makePhoneCall());
    console.log(incomingSmartphone.makePhoneCall());
}

selectSmartphone(new SmartphoneFactory());