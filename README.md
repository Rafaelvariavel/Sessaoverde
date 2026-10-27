# Sessão Verde — site de cinema clássico

Site estático responsivo, sem login e sem backend. Foi criado com HTML, CSS e JavaScript puros.

## Como abrir

1. Extraia o ZIP.
2. Abra `index.html` no navegador ou publique a pasta em um serviço de hospedagem estática.
3. Os pôsteres locais ficam em `img/`.

## Catálogo e vídeos

Os cinco vídeos nomeados no pedido estão conectados diretamente aos endereços Hyperserve fornecidos. O pôster de **O Encouraçado Potemkin** também foi incluído, mas o vídeo ficou marcado como pendente porque o endereço adicional enviado é um link assinado temporário e não informa seu título. Links temporários assinados podem expirar; substitua por um endereço de reprodução estável antes de publicar esse filme.

Para alterar o catálogo, edite a lista `MOVIES` no arquivo `app.js`. Cada filme tem `title`, `year`, `genres`, `poster` e `source`. Para habilitar um item pendente, preencha `source` com a URL MP4 estável e, se houver, `posterVideo`.

## Recursos

- Layout responsivo inspirado em serviços de streaming, sem copiar uma marca específica.
- Busca por título, ano e gênero.
- Filtros por categoria.
- Player em janela modal com controles do navegador.
- “Minha lista” salva no armazenamento local do navegador, sem conta.
- Capas personalizadas fornecidas no pedido.

## Direitos de distribuição

Antes de publicar o site, confirme que você tem autorização para transmitir os filmes, pôsteres, trilhas e versões dubladas/legendadas que utilizar. O fato de uma obra ser antiga não significa que toda versão restaurada, dublagem, trilha ou arquivo de vídeo seja livre de direitos.
