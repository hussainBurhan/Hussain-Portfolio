import { google } from '@ai-sdk/google';
import { streamText, convertToCoreMessages } from 'ai';
import { promises as fs } from 'fs';
import path from 'path';

export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    // Load resume data
    const jsonDirectory = path.join(process.cwd(), 'public');
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    const resumeData = JSON.parse(fileContents);

    const result = streamText({
        model: google('gemini-2.5-flash'),
        system: `You are a helpful assistant for Hussain Burhanuddin's portfolio. 
    You have access to his resume data in JSON format. 
    Answer questions about Hussain's experience, skills, and projects based ONLY on this data.
    Be concise, professional, and engaging.
    If the answer is not in the data, say you don't know but suggest contacting him directly.
    
    Resume Data:
    ${JSON.stringify(resumeData)}
    `,
        messages: convertToCoreMessages(messages),
    });

    return result.toUIMessageStreamResponse();
}
