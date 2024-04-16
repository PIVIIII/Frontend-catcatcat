export default async function getTransaction(reservationID: string, token: string) {
    const response = await fetch(`https://coworking-backend-beta.vercel.app/api/transactions/${reservationID}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    if (!response.ok) return null

    return await response.json()
}