import React, { useState } from "react"
export default function Login() { 
    const [a,b] = useState(1);
    return <div>
        <h1>登录</h1>
        <h1>当前值为{a}</h1>
    </div>
}