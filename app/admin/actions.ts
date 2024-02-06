'use server';
import { supabaseClient } from '@/lib/db/client';
import { revalidatePath } from 'next/cache';
import { Tund } from '../(home)/tunniplaan/types';
import { dayName } from '@/lib/utils';
import { cookies } from 'next/headers';

export async function addWorkout(prevState: { message: string | null }, formData: FormData) {
  const formValues = {
    day: Number(formData.get('day')),
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
    return {
      message: `Uus tund: ${dayName[returnData[0].day - 1]} - ${returnData[0].time} - ${
        returnData[0].name
      }`,
    };
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

export async function login(prevState: { message: string | null }, formData: FormData) {
  const formValues = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  if (!formValues.email) return { message: `Viga: Sisesta email.` };
  if (formValues.email !== process.env.ADMIN_EMAIL) return { message: `Viga: Vale email.` };
  if (!formValues.password) return { message: `Viga: Sisesta salasõna.` };

  try {
    let { data, error } = await supabaseClient.auth.signInWithPassword({
      email: formValues.email,
      password: formValues.password as string,
    });

    if (error) return { message: `${error}` };
    if (!data.user?.id) return { message: 'Kasutajat ei leitud' };
    cookies().set('currentSession', data.user?.id, { maxAge: 60 * 60 * 24 });
    revalidatePath('/admin');
    return { message: 'Õige salasõna' };
  } catch (error) {
    return { message: `${error}` };
  }
}
