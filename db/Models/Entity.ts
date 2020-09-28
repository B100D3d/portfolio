import Database from "@db/Models/Database"
import { Timestamp } from "@google-cloud/firestore"

export interface EntityState {
    timestamp?: Timestamp
}

interface EntityProps<T> {
    state: T
    id?: string
    collectionName: string
}

export default class Entity<T extends EntityState> {
    protected readonly state: T
    private readonly id: string
    protected readonly collectionName: string = ""

    constructor({ state, id, collectionName }: EntityProps<T>) {
        this.state = state
        this.collectionName = collectionName
        this.state.timestamp = state.timestamp || Timestamp.now()
        this.id =
            id ?? Database.getInstance().getCollection(collectionName).doc().id
    }

    toJson(): T {
        return { id: this.id, ...this.state }
    }

    async save(): Promise<this> {
        await Database.getInstance()
            .getCollection(this.collectionName)
            .doc(this.id)
            .set(this.state)
        return this
    }
}
