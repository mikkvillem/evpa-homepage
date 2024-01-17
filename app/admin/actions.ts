'use server';
import { supabaseClient } from '@/lib/db/client';
import { revalidatePath } from 'next/cache';
import { Tund } from '../(home)/tunniplaan/types';

export async function addWorkout(prevState: { message: string | null }, formData: FormData) {
  const formValues = {
    day: formData.get('day'),
    time: formData.get('time'),
    name: formData.get('name'),
    instructor: formData.get('instructor'),
  };
  try {
    const response = await supabaseClient.from('workouts').upsert(formValues).select();
    const returnData = response.data as Tund[] | null;
    if (returnData === null) return { message: `Something went wrong` };
    revalidatePath('/');
    revalidatePath('/tunniplaan');
    revalidatePath('/admin');
    return { message: `added workout: ${returnData[0].name}` };
  } catch (error) {
    return { message: `${error}` };
  }
}

export async function deleteWorkout(prevState: { message: string | null }, formData: FormData) {
  const formValues = {
    day: Number(formData.get('day')),
    time: formData.get('time'),
  };

  try {
    const { data } = await supabaseClient
      .from('workouts')
      .delete()
      .eq('day', formValues.day)
      .eq('time', formValues.time);

    revalidatePath('/');
    revalidatePath('/tunniplaan');
    revalidatePath('/admin');

    return { message: `deleted workout, ${data}` };
  } catch (error) {
    return { message: `${error}` };
  }
}
