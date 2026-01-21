import Student from '@/types/student'
import React from 'react'
import Link from 'next/link'
import { deleteStu, GetAllStu } from '../service/service'
import { Della_Respira } from 'next/font/google'
import Deletebtn from '../ui/deletebtn'

export default async function GetAll() {
    const data = await GetAllStu()
    return (
        <div>
            <Link href={'/student/add'}>add</Link>
            <table>
                <thead>
                    <tr>
                        <th>enrollment</th>
                        <th>name</th>
                        <th>email</th>
                        <th>details</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((stu: Student) => (
                        <tr key={stu.id}>
                            <td>{stu.enrollment}</td>
                            <td>{stu.name}</td>
                            <td>{stu.email}</td>
                            <td><Link href={`/student/${stu.id}`}>details</Link></td>
                            <td>
                                <Deletebtn id={stu.id} deleteFn={deleteStu} />
                            </td>
                            <td><Link href={`/student/edit/${stu.id}`}>edit</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
