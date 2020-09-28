import Database from "@db/Models/Database"

export default class Entity<T> {
    protected readonly state: T
    protected readonly collectionName: string = ""

    constructor(state: T) {
        this.state = state
    }

    toJson(): T {
        return this.state
    }

    save(): Promise<FirebaseFirestore.DocumentData> {
        return Database.getInstance()
            .getCollection(this.collectionName)
            .add(this.state)
    }
}
