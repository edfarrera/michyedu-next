"use server";

import { sql } from "@vercel/postgres";

export const sendConfirmations = async (
  phone: string,
  confirmations: (boolean | null)[],
  message: string | undefined
) => {
  const filledConfirmations = [
    ...confirmations,
    ...new Array(4 - confirmations.length).fill(null),
  ]; // Fill array with nulls to match table

  const result = await sql`update guests 
                set guest_confirmation = ${filledConfirmations[0]},
                plus1_confirmation = ${filledConfirmations[1]},
                plus2_confirmation = ${filledConfirmations[2]},
                plus3_confirmation = ${filledConfirmations[3]},
                message = ${message || null},
                updated_at = now()
                where phone = ${phone} or phone2 = ${phone}`;

  return result;
};
