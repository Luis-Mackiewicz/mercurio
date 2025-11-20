# Mercurio System

O **Mercurio System** é um website de ERP criado para facilitar o gerenciamento de negócios empresariais.

## Estrutura do Projeto

/mercurio
│
├── /apps/ # Aplicações
│ ├── backend/ # NestJS monólito
│ ├── frontend/ # Next.js
│ └── micro-go/ # Microsserviço Go
│
├── /docs/ # Documentação
│ ├── adr/ # Arquivos ADR
│ │ ├── ADR-001-framework-frontend.md
│ │ ├── ADR-002-framework-backend.md
│ │ ├── ADR-003-mensageria.md
│ │ ├── ADR-004-banco-dados.md
│ │ └── ADR-005-deploy.md
│ │
│ ├── bounded-contexts/ # Contextos delimitados
│ │ └── bounded.context.md
│ │
│ ├── c4/ # Diagramas C4 (Mermaid)
│ │ ├── containerDiagram.mmd
│ │ └── contextDiagram.mmd
│ │
│ ├── context-map/ # Context Map
│ │ └── context-map.mmd
│ │
│ ├── devops/ # Estratégia de deploy e runbook
│ │ ├── deployStrategy.md
│ │ └── runbook.md
│ │
│ ├── domain-models/ # Domain Models
│ │ └── domainModel.md
│ │
│ ├── quality/ # Quality Scenarios
│ │ ├── observability.md
│ │ ├── quality.md
│ │ ├── qualityScenarios.md
│ │ └── resiliency.md
│ │
│ └── security/ # Segurança
│ ├── authStrategy.md
│ ├── pipelineSecurity.md
│ └── threatModel.md
│
├── /infra/ # Infraestrutura
│ ├── pipeline.yaml
│ └── swagger.yaml
│
└── /scripts/ # Scripts utilitários

markdown
Copiar código

## Descrição das Pastas

- **/apps**: Contém todas as aplicações do sistema, incluindo o backend, frontend e microsserviço em Go.
- **/docs**: Documentação do projeto, incluindo ADRs, diagramas C4, context map, runbooks, modelos de domínio, cenários de qualidade e segurança.
- **/infra**: Configurações de infraestrutura, pipeline CI/CD e especificação do Swagger.

---

> Estrutura organizada para facilitar manutenção, escalabilidade e referência rápida.
