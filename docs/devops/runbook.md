# Runbook de Incidentes

## Objetivo

Guiar a equipe em caso de falha do sistema ERP.

## Passos

1. Identificar a falha:
   - Consultar dashboards de monitoramento
   - Verificar logs de erros críticos
2. Isolar o problema:
   - Se falha for em microserviço Go, reiniciar container
   - Se falha for no monólito NestJS, verificar logs e reiniciar serviço
3. Acionar rollback (se aplicável)
4. Comunicar usuários internos
5. Registrar o incidente e criar post-mortem
