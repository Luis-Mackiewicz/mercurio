## 1. Autenticação / Login

- **Retry**: Tentativa automática em caso de falha de conexão com o banco de dados (máx. 3 tentativas com backoff exponencial)
- **Timeout**: 2 segundos para resposta do serviço externo de autenticação
- **Circuit Breaker**: Abre após 5 falhas consecutivas, com reset automático após 30s

## 2. Cadastro de Funcionários

- **Retry**: Tentativa em caso de falha de escrita no banco
- **Timeout**: 1,5 segundos por operação
- **Circuit Breaker**: Não aplicável (opera apenas internamente)

## 3. Financeiro

- **Retry**: Retry em serviços de fornecedores externos
- **Timeout**: 3 segundos para requisições a APIs externas
- **Circuit Breaker**: Prevê isolamento de falhas de APIs externas, evita impacto no sistema principal
