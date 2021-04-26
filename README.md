# Teste Desenvolvedor Frontend Angular

* O candidato deve criar um projeto para cadastro de produtos usando Angular a partir da versão 9 ou superior.
* O prazo para entrega do projeto é de 48 horas a partir da data de recebimento do e-mail com o link do repositório.
* O candidato deve clonar o repositório e criar uma branch com seu nome completo e toda a implementação deve estar nessa branch.

# Atividades
* Acessar o link do protótipo que deve ser usada como referência para desenvolvimento.
  * Link dp protótipo: https://xd.adobe.com/view/82f246d4-f2ef-4795-7acf-9c9fc7b25eb4-f4c3/
  * Senha: Doubleit2021% (Com o 'D' em maiúsculo)
  
  # INSTRUÇÕES PARA USO DO PROTÓTIPO
    * No canto superior direito existe um ícone "</>" que ao ser clicado mostra para o desenvolvedor uma guia de referência de cada estilo para ter como base na construção do site.
      *  Para fazer download das imagens basta estar no modo desenvolvedor (clicar no ícone "</>") e selecionar a imagem que vai mostrar um botão de download na guia lateral na direita.
      *  Temos um cdn que deve ser incluido no projeto que contém as fontes usadas no protótipo. Segue abaixo:
      *  "https://use.typekit.net/hzy7zyt.css" (colocar dentro de uma tag link)
  
    # PROJETO ANGULAR
    * Todos os dados apresentados no projeto devem ser mocados, porém na edição, exclusão e novo o sistema deve ser capaz de refletir os resultados na tela.
    * Todos os componentes devem ser carregados com LazyLoading
    * Todos os componentes devem ter seus respectivos serviços simulando uma chamada a uma api
    * O projeto deve usar Sass para estilos
    * Todos os componentes devem ter um RouteGuard para validar se o usuário está autenticado e redirecionar para tela de login caso o token não for mais válido.
    * A rota padrão deve ser Home e caso não tenha token redirecionar para a tela de Login.
    
    # LOGIN
    * Mocar os dados de usuário como nome e senha 
    * Caso o usuário informe a senha mocada de forma incorreta é necessário informar uma mensagem de erro. (Pode ser um toast)
    * Caso a senha informada estiver correta, adicionar o token na sessionStorage ou localStorage para ser capaz de recuperar o nome completo do usuário que esta no Payload do Token.
      * Token que deve ser usado: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9lIFNhbSJ9.RpYD7qsSX8UvhHeBarSe67yJo-OXU2UNtIvmme0u2vo
    
    # HEADER/MENU
    * O nome do usuário deve ser composta pelo nome que está no Payload do Token.
    * A foto do usuário pode ser qualquer foto mocada.
    
    # ÍNICIO
    * Criar guarda de rota para validar se existe token antes de entrar na tela e caso não tenha token redirecionar para a tela de Login.
    * A mensagem de boas vindas deve ser composta pelo nome que está no Payload do Token.
    
    # PRODUTOS
    * Criar guarda de rota para validar se existe token antes de entrar na tela e caso não tenha token redirecionar para a tela de Login.
    * Criar Listagem
      * Todos os itens devem ser recuperados através de um serviço.
    * Criar modal para editar produto
      * Chamar um serviço para salvar o item.
      * Ao atualizar o produto deve ser atualizado na listagem.
    * Criar modal para remover produto
      * Chamar um serviço para excluir um dado.
      * Ao excluir o item não deve ser mostrado na listagem
    * Criar modal para criar produto
      * Chamar um serviço para salvar o item.
      * Ao criar um novo item, o produto deve ser mostrado na listagem.
