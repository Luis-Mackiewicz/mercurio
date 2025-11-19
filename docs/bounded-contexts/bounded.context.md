# Bounded Contexts do Mercurio ERP

## Financeiro

- Contas a pagar
- Contas a receber
- Relatórios financeiros
- Total gasto/recebido, lucro/prejuízo

## RH / Funcionários

- Cadastro de funcionários e contratados
- Consulta e exclusão
- Folha de pagamento (integração com Financeiro)

## Serviços

- Registro de serviço
- Acompanhamento de status
- Faturamento vinculado

## Fornecedores

- Cadastro de fornecedores
- Integração financeira

## Mensageria / Eventos

- Fila de eventos (Redis/RabbitMQ)
- Microserviço Go para processamentos assíncronos e consolidação de dados
