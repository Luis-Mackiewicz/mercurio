# ADR-004: Banco de Dados

**Data:** 19-11-2025
**Status:** Aceito

## Contexto e Problema

O ERP precisa armazenar dados relacionais de forma confiável (funcionários, fornecedores, contratos, transações financeiras) e permitir consultas complexas.

## Alternativas Consideradas

1. **PostgreSQL:** Relacional, confiável, suporte a transações, grande comunidade.
2. **MySQL:** Relacional, popular, mas menos avançado em tipos de dados e transações complexas.
3. **MongoDB:** Document-oriented, flexível, mas não ideal para relações complexas e consistência financeira.

## Decisão Tomada

Escolher **PostgreSQL** pela confiabilidade, suporte a transações complexas e compatibilidade com NestJS/TypeORM.

## Consequências

- **Positivo:** Consistência de dados, suporte a consultas complexas, transações seguras.
- **Negativo:** Requer manutenção de schemas e migrações, curva de aprendizado para NoSQL não utilizada.
