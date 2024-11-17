import { splash_config } from "@/app/api/splash_config"

export async function GET() {
    const data = splash_config

    return Response.json({ data })
}
