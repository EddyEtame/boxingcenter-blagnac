import { llmsFullText, textResponse } from '../lib/discovery.mjs';
export function GET() { return textResponse(llmsFullText()); }
