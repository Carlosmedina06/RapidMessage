import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

import prisma from '@/app/libs/prismadb'

export async function POST(request: Request) {
  const { email, name, password } = await request.json()

  if (!email || !name || !password) return new NextResponse('Missing information', { status: 400 })

  const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  })

  return NextResponse.json(user)
}
