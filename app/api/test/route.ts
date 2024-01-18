import { connectMongo } from '@/utils/database/mongoDb';
import Person from '@/models/person'

export async function POST(req: Request, res: Response) {
    const { firstname, lastname } = await req.json(); 
    try {
        await connectMongo();
        const person = new Person({firstname, lastname})
        await person.save()
        return new Response('you created a person', {status: 201})
    } catch (error) {
        console.log(error)
        return new Response('try again', {status: 500})
    }
  }