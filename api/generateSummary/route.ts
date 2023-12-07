import OpenAI from 'openai';
import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {todos} = await request.json();
    console.log(todos)

    const params: OpenAI.Chat.ChatCompletionCreateParams = {
        model: 'gpt-3.5-turbo',
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            { 
                role: 'system', 
                content: 'When responding, welcome the user always as Mark and welcome to the trello app! Limit the response to 200 characters.' 
            },
            { 
                role: 'user', 
                content: `Hi there, provide a summary of the following todos, Count how many todos are in each category such as 
                To do, in progress and done then tell the user to have a productive day! here's the date: ${JSON.stringify(todos)}` 
            }
        ],
    };

    const response = await openai.chat.completions.create(params);
 
    console.log('data', response);
    return NextResponse.json(response.choices[0].message);
}