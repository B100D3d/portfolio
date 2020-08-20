declare namespace CSS {
    function registerProperty(settings: {
        name: string
        initialValue: any
        syntax: string
        inherits: boolean
    }): void
}
