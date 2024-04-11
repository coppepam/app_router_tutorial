export const revalidate = 10

export async function GET() {
  const res = await fetch('http://localhost:4030/test', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()

  return Response.json(data)
}