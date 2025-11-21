import { PortfolioData } from '@/types';
import fs from 'fs';
import path from 'path';

export async function getPortfolioData(): Promise<PortfolioData> {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
}
