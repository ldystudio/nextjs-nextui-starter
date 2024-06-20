import { splash_config } from "@/app/api/splash_config"

export async function GET() {
    const data = await JSON.parse(splash_config)

    return Response.json({ data })
}
