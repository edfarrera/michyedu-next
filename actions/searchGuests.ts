"use server";

import { sql } from "@vercel/postgres";

type SearchResult = { guests: string[]; confirmations: boolean[] };

export const searchGuest = async (
  phone: string
): Promise<SearchResult | null> => {
  const { rows } =
    await sql`select array[guest,plus1,plus2,plus3] as "guests", array[guest_confirmation,plus1_confirmation,plus2_confirmation,plus3_confirmation] as "confirmations" from guests where phone = ${phone} or phone2 = ${phone}`;

  if (!rows[0]) return null;

  return rows[0] as SearchResult;
};
