import "server-only";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("location") as string;

  if (!query.trim()) {
    return Response.json([], { status: 200 });
  }

  try {
    const locations = await (
      await fetch(
        `${process.env.API_SEARCH_URL}?q=${query}&limit=10&appid=${process.env.API_KEY}`
      )
    ).json();

    return Response.json(locations, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Something went wrong");
    }
  }
}
