# ADR-001: Escolha do Framework Frontend

**Data:** 19-11-2025
**Status:** Aceito

## Contexto e Problema

Precisamos escolher um framework frontend para o ERP que seja moderno, de fácil manutenção e com grande comunidade para suporte. O sistema terá dashboards, formulários de cadastro e relatórios financeiros.

## Alternativas Consideradas

1. **React / Next.js**: Ecossistema maduro, SSR (Server Side Rendering) integrado, excelente para SEO e performance, equipe familiarizada.
2. **Vue.js / Nuxt.js**: Curva de aprendizado suave, ótima documentação, menos popular no Brasil para mercado corporativo.
3. **Angular**: Framework completo, mas pesado para necessidades de um ERP simples, curva de aprendizado íngreme.

## Decisão Tomada

Escolher **Next.js** (React) pelo suporte a SSR, maturidade do ecossistema e facilidade de integração com backend NestJS.

## Consequências

- **Positivo:** Desenvolvimento rápido, componentes reutilizáveis, comunidade ativa.
- **Negativo:** Curva de aprendizado para desenvolvedores que nunca usaram React.
