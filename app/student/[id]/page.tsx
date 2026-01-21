import { GetByIdStu } from '@/app/service/service'
import Student from '@/types/student'
import Link from 'next/link'
import React from 'react'

export default async function GetById({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params
    const data: Student = await GetByIdStu(id)
    return (
        <div>
            <ul>
                <li>id:{data.id}</li>
                <li>name:{data.name}</li>
                <li>enrol:{data.enrollment}</li>
                <li>email:{data.email}</li>
            </ul>
            <Link href={'/student'}>back</Link>
        </div>
    )
}
