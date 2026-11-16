import { Fragment } from "react";

const KEYWORDS = [
  "Tangará da Serra", "Educação Infantil", "Ensino Fundamental", "Ensino Médio", "Sistema COC", "Coleção Infinito",
  "BNCC", "ENEM", "Educação Bilíngue", "Robótica", "Rematrículas 2027", "olimpíadas do conhecimento", "Projeto de Vida",
];
const re = new RegExp(`(${KEYWORDS.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");

/** Destaca termos-chave (semântico <strong>) sem alterar o texto aprovado. */
export default function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(re).map((part, i) =>
        KEYWORDS.includes(part) ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  );
}
