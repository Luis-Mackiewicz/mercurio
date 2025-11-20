## 1. Análise de Dependências

- Executar ferramentas de análise de vulnerabilidades (ex.: npm audit, gosec)
- Bloquear builds se forem encontradas vulnerabilidades críticas

## 2. Análise Estática de Código (SAST)

- Rodar linters e scanners de segurança
- Verificar padrões inseguros (ex.: SQL injection, XSS, uso de credenciais em código)

## 3. Gestão de Segredos

- Nunca armazenar senhas ou chaves diretamente no repositório
- Uso de variáveis de ambiente ou serviços de vault

## 4. Testes Automatizados de Segurança

- Testes de endpoints críticos (login, transações financeiras)
- Testes de autorização e roles

## 5. Revisão e Auditoria

- Pull requests revisados por pelo menos 1 desenvolvedor
- Logs de build e deploy armazenados para auditoria
