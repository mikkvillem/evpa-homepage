import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  revalidatePath('/', 'page');
  return new Response('root updated');
}
