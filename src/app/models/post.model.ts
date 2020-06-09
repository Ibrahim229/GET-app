import { Deserializable } from "./deserializable.model";


export class Post implements Deserializable {
    id: number;
    userId: number;
    title: string;
    body: string;

    deserialize(input: any) :this{
        Object.assign(this, input);
        return this;
    }
}