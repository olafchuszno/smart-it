import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as P from './FormBox.parts';

const inputsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type InputTypes = z.infer<typeof inputsSchema>;

const FormBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>({
    resolver: zodResolver(inputsSchema),
  });

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    if (!data.email.length || !data.password.length) {
      console.log('both values are required!');

      return;
    }

    console.log('Validation passed', data);
  };


  return (
    <P.LoginForm onSubmit={handleSubmit(onSubmit)}>
      <P.FormTitle>Log in</P.FormTitle>

      <P.InputContainer>
        <P.InputLabel>
          Email

          <P.FormInput type="email" placeholder="email" {...register('email')} />
        </P.InputLabel>

        {!!errors.email && <P.InputError>{errors.email.message}</P.InputError>}
      </P.InputContainer>

      <P.InputContainer>
        <P.InputLabel>
          Password

          <P.FormInput
            type="password"
            placeholder="password"
            {...register('password')}
          />
        </P.InputLabel>

        {!!errors.password && (
          <P.InputError>{errors.password.message}</P.InputError>
        )}
      </P.InputContainer>

      <P.SubmitButton>Submit</P.SubmitButton>
    </P.LoginForm>
  );
};

export default FormBox;
