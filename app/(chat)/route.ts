import { redirect } from "next/navigation"

export const GET = async () => {
    return redirect("/chat")
}