'use client'

import { HiPaperAirplane, HiPhoto } from 'react-icons/hi2'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { CldUploadButton } from 'next-cloudinary'

import useConversation from '@/app/hooks/useConversation'

import MessageInput from './MessageInput'

const Form = () => {
  const { conversationId } = useConversation()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue('message', '', { shouldValidate: true })
    axios.post('/api/messages', {
      ...data,
      conversationId: conversationId,
    })
  }

  const handleUpload = (result: any) => {
    axios.post('/api/messages', {
      image: result.info.secure_url,
      conversationId: conversationId,
    })
  }

  return (
    <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4">
      <CldUploadButton options={{ maxFiles: 1 }} uploadPreset="nbl0a6ez" onUpload={handleUpload}>
        <HiPhoto className="text-teal-500" size={30} />
      </CldUploadButton>
      <form className="flex items-center gap-2 lg:gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
        <MessageInput
          required
          errors={errors}
          id="message"
          placeholder="Write a message"
          register={register}
        />
        <button
          className="rounded-full p-2 bg-teal-500 cursor-pointer hover:bg-teal-600 transition"
          type="submit"
        >
          <HiPaperAirplane className="text-white" size={18} />
        </button>
      </form>
    </div>
  )
}

export default Form
