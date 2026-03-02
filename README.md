# desenho-script
Este é um projeto que desenvolvi para explorar a API do Canvas do HTML5. A ideia foi criar um quadro branco digital onde você pode desenhar livremente, escolher cores e limpar tudo quando quiser começar do zero.

Acesse aqui: https://vermillion-fenglisu-0c75de.netlify.app/

O que o projeto faz?
É basicamente um "Mini Paint" para o navegador:

Desenho Livre: Você clica, arrasta e o rastro acompanha o mouse.
Seletor de Cores: Usei um input type="color"para você escolher qualquer cor da paleta.
Limpar Tela: Um botão dedicado para reiniciar o quadro instantâneo.

🛠️ O que eu uso de técnico:

HTML5 (Canvas): Uma peça central. Aprendi a lidar com o contexto 2de as coordenadas da tela.

JavaScript Avançado:

Event Listeners: Monitorei o mousedown, mousemovee mouseuppara saber exatamente quando o usuário quer começar e parar de desenhar.
Lógica de Coordenadas: Fiz o projeto subtraindo o offsetLefte offsetToppara que o desenho saia exatamente na ponta do mouse, sem posição.
Manipulação de Contexto: Use funções como beginPath, lineToe strokepara renderizar os traços de forma suave.

CSS3: Foquei na experiência do usuário (UX), mudando o cursor para uma cruz ( crosshair) dentro do quadro e usando um fundo escuro para destacar a área de desenho branco.
