'use client'

import { useRegister } from "@/hooks/register";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function SignupPage() {
    const { mutate } = useRegister();
    const router = useRouter();
    const [formData, setFormData] = useState({ fullName: '', email: '', password: '', role: '' });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const backendData = {
            name: formData.fullName,
            email: formData.email,
            hash: formData.password,
            role: formData.role.toUpperCase()
        }
        
        mutate(backendData, {
            onSuccess: () => {
                router.push('/login');
            }
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <input type="text" placeholder="Role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} />
            <button type="submit">Signup</button>
        </form>
    )
}