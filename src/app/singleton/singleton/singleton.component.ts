export class SingletonComponent {
    static uniqueInstance: SingletonComponent;
    private MESSAGE = '';

    protected constructor() {
    }

    static instance(): SingletonComponent {
        if (!SingletonComponent.uniqueInstance) {
            SingletonComponent.uniqueInstance = new SingletonComponent();
        }
        return SingletonComponent.uniqueInstance;
    }

    public get message(): string {
        return this.MESSAGE = 'Singleton was created ';
    }

}
