# ADR-005: Estratégia de Deploy

**Data:** 19-11-2025
**Status:** Aceito

## Contexto e Problema

O ERP precisa ser implantado de forma consistente em diferentes ambientes (desenvolvimento, homologação e produção) e suportar escalabilidade.

## Alternativas Consideradas

1. **Docker + Docker Compose:** Padroniza ambiente, fácil de configurar local e em servidores.
2. **Deploy direto em VPS:** Mais simples, mas sujeito a inconsistências entre ambientes.
3. **Kubernetes:** Robusto e escalável, mas overhead grande para um ERP pequeno.

## Decisão Tomada

Adotar **Docker + Docker Compose** para padronização de ambientes, com containers separados para backend, frontend, banco de dados e mensageria.

## Consequências

- **Positivo:** Reprodutibilidade, fácil deploy, isolamento de serviços.
- **Negativo:** Não resolve automaticamente escalabilidade horizontal avançada (Kubernetes seria melhor).
