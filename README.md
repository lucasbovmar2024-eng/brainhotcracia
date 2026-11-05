# Brainhotcracia

Site interativo de um reino fictício, com personagens, imagens, lendas, mandamentos e três minigames.

## Publicação no GitHub Pages

Em Settings > Pages, escolha Deploy from a branch, selecione main e /(root), e salve.

O projeto é estático: não precisa de instalação de dependências ou etapa de build. O arquivo index.html e a pasta assets devem ficar no mesmo nível. O arquivo .nojekyll preserva a publicação direta dos arquivos.

## Minigames

- O Sétimo Eclipse: batalha por turnos com três heróis.
- Guarda do Print: jogo da memória com os personagens.
- Prova do Oráculo: perguntas sobre a lore do reino.

Os recordes ficam no navegador do visitante. Não há login, banco de dados ou coleta de pontuações no servidor.

## Vida no reino

- Passaporte: nome, título fictício e ordem revelada pelo Oráculo existente, com ficha de habitante e lembrança em texto para download.
- Tribunal do Cringe: seis casos fictícios com três sentenças possíveis e um histórico pessoal dos últimos vereditos.
- Decretos do rei: sete desafios criativos; a cada visita, o desafio muda. As respostas ficam num histórico pessoal.

O passaporte e as escolhas são salvos somente no localStorage do navegador do visitante. Sem acesso ao armazenamento, a experiência continua na sessão atual. Os campos de texto são exibidos como texto, sem executar HTML.

## Reino vivo

O mapa 2D em canvas permite explorar a cidadela, a floresta, o reino inimigo e o campo de batalha. Movimento por WASD/setas, clique/toque no chão ou botões de direção no celular. Os encontros também podem ser acessados pela lista de personagens.

A batalha contínua tem baixas sem sangue, reposição de soldados, heróis de ambos os lados e eventos aleatórios. Há pausa, trégua, visão do mapa inteiro, velocidade 1×/2× e pulso de apoio. A simulação é local, não é multiplayer e pausa quando o mapa sai da tela ou a aba fica em segundo plano.

Teste do motor sem dependências: `node tests/world-engine.test.cjs`. O teste simula cinco minutos de batalha e verifica limites de tropas, baixas, reforços, eventos, tempos de recarga, pausa e reinício.
