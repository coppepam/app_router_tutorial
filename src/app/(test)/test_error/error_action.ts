"use server"

export async function ErrorAction() {
  throw new Error("Action Error!!");
}
