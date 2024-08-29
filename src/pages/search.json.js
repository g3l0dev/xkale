export async function get({ }) {
  return new Response(null, {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}