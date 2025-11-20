## 1. Autenticação / Login

- **SLI**: Tempo médio de resposta da API de login
- **SLO**: 95% das requisições devem ter tempo de resposta < 200ms
- **Observabilidade**: Logs de erro, métricas de autenticação

## 2. Cadastro de Funcionários

- **SLI**: Tempo médio para criar um novo registro
- **SLO**: 99% das requisições concluídas em < 300ms
- **Resiliência**: Retry automático em falha de conexão com o banco
- **Observabilidade**: Métricas de criação, logs de falhas

## 3. Financeiro

- **SLI**: Tempo para gerar relatórios de despesas
- **SLO**: 90% das operações concluídas em < 1s
- **Resiliência**: Sistema tolerante a falha de serviços externos (fornecedores)
- **Observabilidade**: Dashboards de uso, alertas de erro
