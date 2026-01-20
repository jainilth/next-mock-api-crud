'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function GetAllStu() {
    const data = await fetch('https://6835982dcd78db2058c2552b.mockapi.io/student')
    return data.json()
}

export async function GetByIdStu(id: number) {
    const data = await fetch(`https://6835982dcd78db2058c2552b.mockapi.io/student/${id}`)
    return data.json()
}

export async function deleteStu(id: number) {
    await fetch(`https://6835982dcd78db2058c2552b.mockapi.io/student/${id}`, { method: 'DELETE' })
    revalidatePath('/student')
    redirect('/student')
}

export async function AddStu(formData: FormData) {
    const name = formData.get('name') as string
    const enrollment = formData.get('enrollment') as string
    const email = formData.get('email') as string
    const createdAt = new Date()

    const data = {
        name, enrollment, email, createdAt
    }
    await fetch('https://6835982dcd78db2058c2552b.mockapi.io/student', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    revalidatePath('/student')
    redirect('/student')
}

export async function EditStu(formData: FormData) {
    const id = formData.get("id") as any as number
    const name = formData.get('name') as string
    const enrollment = formData.get('enrollment') as string
    const email = formData.get('email') as string

    const data = {
        name, enrollment, email
    }
    await fetch(`https://6835982dcd78db2058c2552b.mockapi.io/student/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    revalidatePath('/student')
    redirect('/student')
}