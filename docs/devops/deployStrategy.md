# Estratégia de Deploy

- **Tipo de deploy**: Blue/Green
- **Objetivo**: Minimizar downtime e permitir rollback rápido
- **Passos**:
  1. Deploy da nova versão em ambiente Green
  2. Testes automatizados e manuais de validação
  3. Redirecionamento do tráfego do ambiente Blue para Green
  4. Desativação do ambiente Blue
  5. Rollback: em caso de falha, redirecionar tráfego novamente para Blue
