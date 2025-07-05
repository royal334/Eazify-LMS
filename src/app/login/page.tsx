'use client'

import { useLogin } from "@/hooks/login";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {
    const { mutate } = useLogin();
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '', password: '' });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const backendData = {
            email: formData.email,
            hash: formData.password,
        }
        
        mutate(backendData, {
            onSuccess: () => {
                router.push('/');
            }
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <button type="submit">Login</button>
        </form>
    )
}