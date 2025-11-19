# ADR-003: Microsserviço de Mensageria

**Data:** 19-11-2025
**Status:** Aceito

## Contexto e Problema

O ERP precisará processar eventos de forma assíncrona, como envio de notificações e integração com fornecedores, sem sobrecarregar o backend monolítico.

## Alternativas Consideradas

1. **Go + gRPC / RabbitMQ**: Baixa latência, leve, fácil deploy em containers.
2. **Node.js com Kafka/RabbitMQ**: Mais fácil de integrar com NestJS, mas performance menor em processamento intenso.
3. **Python + Celery/RabbitMQ**: Simples para tarefas assíncronas, mas menos performático e exige mais dependências.

## Decisão Tomada

Criar microsserviço em **Go** para mensageria, garantindo performance e desacoplamento do backend principal.

## Consequências

- **Positivo:** Alto desempenho, arquitetura desacoplada, fácil escalabilidade horizontal.
- **Negativo:** Mais uma linguagem para a equipe gerenciar, necessidade de pipeline separado.
