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
import { useTranslation } from 'react-i18next';
import { routes } from 'constants/routes';

const inputsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type InputTypes = z.infer<typeof inputsSchema>;

const LoginForm: FC = () => {
  const { user, logUserIn } = useAuthContext();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<InputTypes>({
    resolver: zodResolver(inputsSchema),
  });

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    try {
      logUserIn(data.email, data.password);
    } catch (e) {
      setError('password', {
        message: `Incorrect password or account doesn't exist`,
      });
    }
  };

  return (
    <P.LoginForm onSubmit={handleSubmit(onSubmit)}>
      <P.FormTitle>{t('loginPage.title')}</P.FormTitle>

      <P.InputContainer>
        <P.InputLabel>
          {t('loginPage.emailLabel')}

          <P.FormInput
            autoComplete='email'
            type="email"
            placeholder="email"
            {...register('email')}
          />
        </P.InputLabel>

        {!!errors.email && (
          <P.InputErrorMessage role="alert">
            {errors.email.message}
          </P.InputErrorMessage>
        )}
      </P.InputContainer>

      <P.InputContainer>
        <P.InputLabel>
          {t('loginPage.passwordLabel')}

          <P.FormInput
            autoComplete='current-password'
            type="password"
            placeholder="password"
            {...register('password')}
          />
        </P.InputLabel>

        {!!errors.password && (
          <P.InputErrorMessage role="alert">
            {errors.password.message}
          </P.InputErrorMessage>
        )}
      </P.InputContainer>

      <P.SubmitButton> {t('loginPage.submitButton')}</P.SubmitButton>

      {!!user && <Navigate replace to={routes.main.href} />}
    </P.LoginForm>
  );
};

export default LoginForm;
