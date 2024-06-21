"use server";

import { sql } from "@vercel/postgres";

export const searchGuest = async (phone: string) => {
  const { rows } =
    await sql`select guests,confirmations from guests where phone = ${phone} or phone2 = ${phone}`;

  if (!rows[0]) return null;

  const { guests, confirmations } = rows[0];

  return guests.map((guest: string, index: number) => ({
    guest,
    confirmation: confirmations[index] || false,
  }));
};
