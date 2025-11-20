# Domain Model - Context: Serviços

## Descrição do Contexto

O contexto de **Serviços** cobre o gerenciamento de serviços oferecidos aos clientes, incluindo cadastro, execução, pagamentos, status e anexos relacionados. Este contexto garante que todas as informações de serviço sejam consistentes e rastreáveis.

---

## Entities (Entidades)

### Cliente

- **id:** UUID
- **nomeCompleto:** string
- **cpfCnpj:** string
- **razaoSocial:** string (opcional)
- **telefone:** string
- **email:** string
- **endereco:** Endereco (Value Object)
- **tipoCliente:** TipoCliente (Value Object)

### Serviço

- **id:** UUID
- **nome:** string
- **categoria:** string
- **quantidade:** number (opcional)
- **descricao:** string
- **escopo:** string
- **clienteId:** UUID
- **localExecucao:** Endereco (Value Object)
- **prazo:** Prazo (Value Object)
- **valor:** Valor (Value Object)
- **status:** StatusServico (Value Object)
- **anexos:** Anexo[] (lista de arquivos/fotos)

### Pagamento

- **id:** UUID
- **servicoId:** UUID
- **formaPagamento:** FormaPagamento (Value Object)
- **statusPagamento:** StatusPagamento (Value Object)
- **dataVencimento:** Date (opcional)
- **dataPagamento:** Date (opcional)
- **comprovante:** string (URL ou arquivo, opcional)

---

## Value Objects (Objetos de Valor)

### Endereco

- rua: string
- numero: string
- bairro: string
- cidade: string
- estado: string
- cep: string
- referencia: string (opcional)

### TipoCliente

- valor: 'Residencial' | 'Comercial' | 'Industrial'

### Prazo

- dataInicioPrevista: Date
- duracaoPrevista: number (dias ou horas)
- dataConclusaoReal: Date (opcional)

### Valor

- valorEstimado: number
- valorFinal: number (opcional)
- custos: number (opcional)
- lucroAutomatico: number (opcional)
- formaCobranca: 'Por hora' | 'Por serviço' | 'Por metro quadrado' | 'Por diária'
- materiaisInclusos: boolean
- quemForneceMateriais: 'Cliente' | 'Empresa' (opcional)

### StatusServico

- valor: 'Pendente' | 'Orçamento enviado' | 'Não aprovado' | 'Aprovado' | 'Em execução' | 'Pausado' | 'Concluído' | 'Cancelado'

### FormaPagamento

- valor: 'Pix' | 'Dinheiro' | 'Cartão crédito' | 'Cartão débito' | 'Transferência' | 'Boleto' | 'Outro'

### StatusPagamento

- valor: 'Não pago' | 'Pago parcialmente' | 'Pago' | 'A receber' | 'Atrasado'

### Anexo

- url: string
- tipo: 'Foto' | 'Documento'
- descricao: string (opcional)

---

## Aggregates (Agregados)

### ServiçoAggregate

- **Raiz do agregado:** Serviço
- **Entidades relacionadas:**
  - Pagamento (uma ou várias)
  - Anexos
  - Cliente (referência, não faz parte do agregado)
- **Regras de consistência:**
  - Um serviço só pode mudar de status se o pagamento e prazo estiverem válidos.
  - Valor final e lucro automático só podem ser calculados após fechamento do serviço.
  - Pagamento deve estar atrelado a um serviço existente.

---

## Observações

- Cada serviço é vinculado a um cliente existente.
- Todos os anexos devem pertencer a um serviço específico.
- Regras de negócio importantes são aplicadas na raiz do agregado (Serviço).
  s
