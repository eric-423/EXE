'use client';

import InputPassword from '@/components/common/input-password';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';

import type { FieldPath, useFormContext } from 'react-hook-form';

import type { AuthFormValues } from '../schema';

import type { FormFieldType } from './form-contents';

interface FormItemsProps {
  form: ReturnType<typeof useFormContext<AuthFormValues>>;
  formFields: FormFieldType[];
}

export default function FormItems({ form, formFields }: FormItemsProps) {
  return (
    <div className='space-y-4'>
      {formFields.map((field) =>
        field.name !== 'otp' ? (
          field.name === 'phoneNumber' ? (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as FieldPath<AuthFormValues>}
              render={({ field: formField }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className='h-12'
                      {...formField}
                      type={field.type}
                      placeholder={field.placeholder}
                      autoComplete={field.type === 'password' ? 'current-password' : 'off'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as FieldPath<AuthFormValues>}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    <InputPassword field={{ ...formField }} placeholder={field.placeholder} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )
        ) : (
          <FormField
            key={field.name}
            control={form.control}
            name='otp'
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    value={formField.value}
                    onChange={formField.onChange}
                    onBlur={formField.onBlur}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ),
      )}
    </div>
  );
}
