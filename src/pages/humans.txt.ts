import { humansText, textResponse } from '../lib/discovery.mjs';
export function GET() { return textResponse(humansText()); }
