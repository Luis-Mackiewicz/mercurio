## 1. Autenticação

- **Método**: JWT (JSON Web Token)
- **Fluxo**:
  1. Usuário envia login e senha
  2. Sistema valida credenciais
  3. Gera token JWT com validade de 1 hora
  4. Token enviado ao cliente e usado em requisições subsequentes
- **Observações**: Senhas armazenadas com hash seguro (bcrypt), sem possibilidade de reversão

## 2. Autorização

- **Modelo**: RBAC (Role-Based Access Control)
- **Papéis**:
  - **Admin**: acesso completo a todos os módulos
  - **Gestor**: acesso limitado a cadastros e relatórios
  - **Usuário comum**: acesso apenas a funcionalidades próprias
- **Validação**:
  - Cada endpoint verifica o token e o papel do usuário
  - Operações críticas possuem logs de auditoria

## 3. Considerações de Segurança

- Tokens expiram e podem ser renovados via refresh token
- Logout remove token do cliente
- Logs de acesso e falha de autenticação são armazenados para monitoramento
