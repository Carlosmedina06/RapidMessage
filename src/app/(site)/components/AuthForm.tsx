'use client'

import { useCallback, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { BsGithub, BsGoogle } from 'react-icons/bs'

import Input from '@/app/components/inputs/Input'
import Button from '@/app/components/Button'

import AuthSocialButton from './AuthSocialButton'

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN')
  const [isLoading, setIsLoading] = useState(false)

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER')
    }
    setVariant('LOGIN')
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)

    if (variant === 'REGISTER') {
    }

    if (variant === 'LOGIN') {
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true)
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === 'REGISTER' && (
            <Input errors={errors} id="name" label="Name" register={register} type="name" />
          )}
          <Input
            errors={errors}
            id="email"
            label="Email Address"
            register={register}
            type="email"
          />
          <Input
            errors={errors}
            id="password"
            label="Password"
            register={register}
            type="password"
          />
          <div>
            <Button fullWidth disabled={isLoading} type="submit">
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <AuthSocialButton icon={BsGithub} onClick={() => socialAction('github')} />
            <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('google')} />
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          {variant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?'}
          <div className="underline cursor-pointer " onClick={toggleVariant}>
            {variant === 'LOGIN' ? 'Create an account' : 'Sign in'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm