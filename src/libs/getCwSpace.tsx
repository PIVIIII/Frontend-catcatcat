export default async function getCwSpace(id: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/coworkingspaces/${id}`);

    if (!response.ok) {
        throw new Error('Failed to fetch coworking space');
    }

    return await response.json();
}