import { AddStu } from '@/app/service/service'
import Link from 'next/link'
import React from 'react'

export default function AddStudent() {

    return (
        <div>
            <form action={AddStu}>
                name:<input name='name' type='text' /><br />
                enrollment:<input name='enrollment' type='number' /><br />
                email:<input name='email' type='email' /><br />
                <button type='submit'>submit</button>
            </form>
            <Link href={'/student'}>back</Link>
        </div>
    )
}
