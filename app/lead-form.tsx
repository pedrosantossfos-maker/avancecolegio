"use client";
import { useState } from "react";
import { stages, units } from "./data";

/** Pré-atendimento: monta a mensagem e abre o WhatsApp da unidade certa. Nenhum dado é armazenado. */
export default function LeadForm() {
  const [name, setName] = useState("");
  const [stageId, setStageId] = useState(stages[0].id);
  const stage = stages.find((s) => s.id === stageId) ?? stages[0];
  const unit = units.find((u) => u.slug === stage.unit.slug) ?? units[0];
  const who = name.trim() ? `Meu nome é ${name.trim()}. ` : "";
  const label = stage.tag.replace(" · ", ", ");
  const text = `Olá! ${who}Gostaria de informações sobre ${label} (${unit.name}) e agendar uma visita.`;
  const href = `https://wa.me/${unit.number}?text=${encodeURIComponent(text)}`;
  return (
    <form className="lead-form" onSubmit={(e) => e.preventDefault()} aria-labelledby="lead-title">
      <h3 id="lead-title">Agende em 20 segundos</h3>
      <p className="lead-help">Diga a etapa de interesse e abrimos o WhatsApp da unidade certa, com a mensagem pronta.</p>
      <label htmlFor="lead-name">Seu nome <span>(opcional)</span></label>
      <input id="lead-name" name="nome" type="text" autoComplete="name" placeholder="Nome do responsável" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="lead-stage">Etapa de interesse</label>
      <select id="lead-stage" name="etapa" value={stageId} onChange={(e) => setStageId(e.target.value)}>
        {stages.map((s) => (
          <option key={s.id} value={s.id}>{s.tag.replace(" · ", ", ")}</option>
        ))}
      </select>
      <p className="lead-unit">Atendimento: <strong>{unit.name}</strong> · {unit.phone}</p>
      <a className="btn btn-lime lead-submit" href={href} target="_blank" rel="noopener noreferrer">Continuar no WhatsApp</a>
    </form>
  );
}
