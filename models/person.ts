import { Schema, model, models } from 'mongoose';

interface IPerson {
  firstname: String;
  lastname: String;
}

const personSchema = new Schema<IPerson>({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
});

const Person = models.Person || model<IPerson>('Person', personSchema)

export default Person;