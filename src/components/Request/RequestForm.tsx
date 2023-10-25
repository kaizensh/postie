'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const validationSchema = z.object({
  method: z.string().min(1, { message: 'Method is required' }),
  url: z.string().min(1, { message: 'URL is required' }),
  headers: z.record(z.string()),
  parameters: z.record(z.string()),
  body: z.record(z.string()),
});

// type ValidationSchema = z.infer<typeof validationSchema>;

const RequestForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<ValidationSchema>({
  //   resolver: zodResolver(validationSchema),
  // });

  const form = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      method: '',
      url: '',
      headers: {},
      parameters: {},
      body: {},
    },
  });

  // const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof validationSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input
    //     id='method'
    //     type='text'
    //     placeholder='method'
    //     {...register('method')}
    //   />

    //   {errors.method && (
    //     <p className='text-xs italic text-red-500 mt-2'>
    //       {' '}
    //       {errors.method?.message}
    //     </p>
    //   )}

    //   <input
    //     id='url'
    //     type='text'
    //     placeholder='url'
    //     {...register('url')}
    //   />
    //   <input
    //     id='headers'
    //     type='text'
    //     placeholder='headers'
    //     {...register('headers')}
    //   />
    //   <input
    //     id='parameters'
    //     type='text'
    //     placeholder='parameters'
    //     {...register('parameters')}
    //   />
    //   <input
    //     id='body'
    //     type='text'
    //     placeholder='body'
    //     {...register('body')}
    //   />
    //   <input type='submit' />
    // </form>

    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8'>
        <FormField
          control={form.control}
          name='method'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Method</FormLabel>
              <FormControl>
                <Input
                  placeholder='shadcn'
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your publ</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};

export default RequestForm;
