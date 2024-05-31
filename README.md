# Loja Apple Leaf

Projeto desenvolvido durante o curso de Desenvolvimento Web do Programa Desenvolve 2024 do Grupo Boticário em parceria com a Alura.

A senha e o login estão hardcoded apenas para fins de teste de validação do JavaScript na tela de login.

As funcionalidades implementadas com JavaScript estão na tela de login:

- Ao clicar em **Login** no canto superior direito, é gerada uma tela de "carregamento" que posteriormente será utilizada como tela de loading para o app e site.
- Ao clicar na logo da empresa, é exibido o formulário de login que:
  - Valida se o e-mail inserido está no formato correto.
  - Verifica a veracidade dos dados de login e senha.
- Caso o login seja bem-sucedido:
  - O usuário é redirecionado para a tela inicial.
  - No lugar de "Login", aparece a foto de perfil do usuário.
  - É disponibilizado o botão **Meus Pedidos** para acompanhar a situação (a tela de pedidos será implementada posteriormente).

Funcionalidades para implementação futura:

- Tela de cadastro de usuário;
- Sistema de banco de dados e sessão para salvar as informações de login e senha, e validação de sessão ativa;
- Tela de "Meus Pedidos" para acompanhamento vinculada ao Banco de Dados do usuário;
- Validar tela de carregamento somente para a versão mobile;
