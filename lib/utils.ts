import { type ClassValue, clsx } from "clsx"
import { remark } from "remark";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use().process(markdown);
  return result.toString();
}

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
