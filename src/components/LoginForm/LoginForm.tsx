// core
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Navigate } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';
// state
import { useAuthContext } from 'contexts/AuthContext';
// style
import * as P from './LoginForm.parts';

const inputsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type InputTypes = z.infer<typeof inputsSchema>;

const LoginForm: FC = () => {
  const { user, logUserIn } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<InputTypes>({
    resolver: zodResolver(inputsSchema),
  });

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    try {
      logUserIn(data.email, data.password)
    } catch (e) {
      setError('password', {
        message: `Incorrect password or account doesn't exist`,
      });
    }
  };

  return (
    <P.LoginForm onSubmit={handleSubmit(onSubmit)}>
      <P.FormTitle>Log in</P.FormTitle>

      <P.InputContainer>
        <P.InputLabel>
          Email
          <P.FormInput
            type="email"
            placeholder="email"
            {...register('email')}
          />
        </P.InputLabel>

        {!!errors.email && <P.InputErrorMessage role='alert'>{errors.email.message}</P.InputErrorMessage>}
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
          <P.InputErrorMessage role='alert'>{errors.password.message}</P.InputErrorMessage>
        )}
      </P.InputContainer>

      <P.SubmitButton>Submit</P.SubmitButton>

      {!!user && <Navigate replace to='/' />}
    </P.LoginForm>
  );
};

export default LoginForm;
