import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function GET(_request: NextRequest) {
  revalidatePath('/', 'page');
}
