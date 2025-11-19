# ADR-002: Escolha do Framework Backend

**Data:** 19-11-2025
**Status:** Aceito

## Contexto e Problema

Precisamos de um backend robusto, escalável, que permita modularização e seja compatível com TypeScript. O sistema ERP terá módulos de cadastro, financeiro, estoque e mensageria.

## Alternativas Consideradas

1. **NestJS:** Estrutura modular, TypeScript nativo, integração fácil com banco relacional e mensageria.
2. **Express.js:** Leve, mas carece de padrão de modularização e boas práticas embutidas.
3. **Spring Boot (Java):** Muito robusto, mas aumenta complexidade e overhead para um ERP simples.

## Decisão Tomada

Escolher **NestJS** pela modularidade, compatibilidade com TypeScript e melhor manutenção de código a longo prazo.

## Consequências

- **Positivo:** Código mais organizado, escalável e consistente.
- **Negativo:** Pequena curva de aprendizado para iniciantes no NestJS.
