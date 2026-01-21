import { EditStu, GetByIdStu } from '@/app/service/service'
import Student from '@/types/student'
import Link from 'next/link'
import React from 'react'

export default async function EditStudent({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params
    const data: Student = await GetByIdStu(id)

    return (
        <div>
            <form action={EditStu}>
                <input defaultValue={id} name="id" type='hidden' />
                name:<input defaultValue={data.name} name='name' type='text' /><br />
                enrollment:<input defaultValue={data.enrollment} name='enrollment' type='number' /><br />
                email:<input defaultValue={data.email} name='email' type='email' /><br />
                <button type='submit'>submit</button>
            </form>
            <Link href={'/student'}>back</Link>
        </div>
    )
}
