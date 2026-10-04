import { llmsText, textResponse } from '../lib/discovery.mjs';
export function GET() { return textResponse(llmsText()); }
